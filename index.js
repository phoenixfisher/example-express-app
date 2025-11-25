import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 3000;

// Helpers to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View and static setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (_req, res) => {
  try {
    const response = await fetch("http://api.quotable.io/random");
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const { content, author } = data;

    // Render the quote and author; defaults keep the page friendly if keys are missing
    res.render("index", {
      content: content || "No quote available right now.",
      author: author || "Unknown",
    });
  } catch (error) {
    // Log server-side for debugging while keeping the UI clean
    console.error("Error fetching quote:", error);
    res.status(500).render("error", {
      message: "Sorry, we could not load a quote right now.",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
