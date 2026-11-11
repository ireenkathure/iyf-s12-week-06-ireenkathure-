# Week 6 - Async JavaScript & Weather Dashboard

**Live Demo:** https://ireenkathure.github.io/iyf-s12-week-06-ireenkathure-/

## Weather Dashboard
Search any city to see live weather: temperature, feels like, humidity, wind, pressure.
- Built with `fetch()`, `async/await`, `try/catch`
- Handles errors: city not found, no internet, API key not active
- Saves last 5 searches in `localStorage`

## Setup (local)
1. Copy `config.example.js` to `config.js`
2. Put your OpenWeatherMap API key in `config.js`
3. Open `index.html` — `config.js` is in `.gitignore` and never committed

## Files
- `index.html`, `styles.css`, `app.js` — Weather Dashboard
- `async-practice.js` — Lesson 11 practice
- `daily-challenges/` — Daily challenges
- `.github/workflows/deploy.yml` — Deploys to GitHub Pages, injects API key from Secret
- ## Live Demo
https://ireenkathure.github.io/iyf-s12-week-06-ireenkathure-/
