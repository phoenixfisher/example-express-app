# Example Express App Showcasing a Simple API

A minimal Node.js + Express app that fetches key/value JSON (a random quote) from `https://api.quotable.io/random` using Node's built-in `fetch` and renders it with EJS.

## Features
- Express server with EJS views
- Node native `fetch` (no Axios)
- Shows `content` and `author` from the API response
- Simple styling, ready for GitHub

## Requirements
- Node 18+ (for built-in `fetch`)
- npm

## Setup
```bash
npm install
```

## Run
```bash
npm start
```
Then open http://localhost:3000

For live reload during development:
```bash
npm run dev
```

## Project Structure
```
.
├── index.js
├── package.json
├── .gitignore
├── public
│   └── style.css
└── views
    ├── index.ejs
    └── error.ejs
```