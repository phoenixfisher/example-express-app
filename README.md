# Example Express App Showcasing a Simple API

A minimal Node.js + Express app that fetches key/value JSON (a random quote) from `https://api.quotable.io/random` using Node's built-in `fetch` and renders it with EJS.

## Features
- Express server with EJS views
- Node native `fetch`
- Shows `content` and `author` from the API response
- Simple styling
- GitHub architecture

## Requirements
- Node 18+
- npm

## Setup
Clone the repo and navigate into it using:

```bash
git clone git@github.com:phoenixfisher/example-express-app.git
cd example-express-app
```

Install node_modules using:

```bash
npm install
```

## Run
Start the server locally using: 
```bash
npm start
```
Then open http://localhost:3000