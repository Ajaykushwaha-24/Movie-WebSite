# Movie Web

A React + Vite web app to search and browse movies/shows using the [OMDb API](https://www.omdbapi.com/).

## Features

- Search movies/shows by title
- Filter results by release year
- Responsive hero banner that shows the poster of the top search result
- Movie grid with loading skeletons and an empty-state message
- Bootstrap-based UI (via `react-bootstrap`)
- Client-side routing with `react-router-dom`

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 7](https://vitejs.dev/) — dev server & build tool
- [React Router](https://reactrouter.com/) — routing
- [Axios](https://axios-http.com/) — API requests
- [React Bootstrap](https://react-bootstrap.github.io/) — UI components
- [OMDb API](https://www.omdbapi.com/) — movie data

## Project Structure

```
src/
├── App.jsx            # Root app component
├── App.css            # Global/app-level styles
├── index.css          # Base styles
├── main.jsx           # Entry point
├── AppRoute/
│   └── Route.jsx       # App routes
├── component/
│   ├── nav.jsx          # Navbar with search
│   ├── nav.css
│   └── Card.jsx         # Movie card / grid rendering
├── pages/
│   └── Home.jsx         # Home page (search, filter, results)
└── assets/              # Images/icons
```

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Live Demo

[https://movie-web-site-puce.vercel.app/](https://movie-web-site-puce.vercel.app/)
