// Real-world projects. Add `live` and `github` URLs when you have them: buttons appear automatically.
export const featured = [
  {
    id: "smartrecruit",
    flow: {
      cols: [["React + Tailwind web app", "Flutter mobile app"], ["ASP.NET Core API", "SQL Server"], ["FastAPI AI service", "spaCy + Sentence-BERT"]],
      links: ["HTTP + JWT", "calls"],
    },
    title: "SmartRecruit",
    kind: "Graduation project",
    summary:
      "An AI-powered recruitment platform. Candidates and employers use the web app or the mobile app, and an AI service scores CVs against job requirements.",
    points: [
      "Four services: React web app, Flutter mobile app, ASP.NET Core API on SQL Server, and a Python FastAPI AI service.",
      "CV and job matching uses spaCy and Sentence-BERT.",
      "Access is protected with JWT and role-based access control.",
      "Built a Tailwind v4 theme system with dark and light mode and fixed the mobile layout across the whole web app.",
    ],
    tech: ["React", "Tailwind CSS", "Flutter", "ASP.NET Core", "SQL Server", "FastAPI", "JWT", "RBAC"],
    live: "https://abdelrhmanabdelnabisaad.github.io/project-graduation/",
    github: "https://github.com/AbdelrhmanAbdelNabiSaad/project-graduation.git",
  },
  {
    id: "movies-platform",
    flow: {
      cols: [["React app + React Router", "Home, TV, Details, Favorites"], ["TMDB API: now playing, search, popular TV", "Details, recommendations, reviews in parallel"]],
      links: ["fetch"],
      note: "Favorites are stored in the browser with localStorage.",
    },
    role: "Team lead. I solved the technical blockers for the team and built the React components, the React Router routing and the data fetching from the TMDB API.",
    title: "Movies Platform",
    kind: "ITI graduation project, team of 5",
    summary:
      "A movie and TV platform built on The Movie Database (TMDB) API. Users browse what is playing now, search any title, open a full details page and keep a personal favorites list.",
    points: [
      "Browse now-playing movies and popular TV shows with paginated results, and search movies by title.",
      "The details page loads movie info, recommendations and reviews in parallel with Promise.all, with loading and error states and a cleanup flag so a stale response never overwrites a newer one.",
      "Favorites for movies and TV shows are saved in localStorage, so they survive a refresh.",
      "React Router with a dynamic /movie/:id route and a 404 page, plus a light and dark theme.",
    ],
    tech: ["React 19", "React Router", "TMDB REST API", "Bootstrap", "localStorage", "Vite"],
    live: "https://abdelrhmanabdelnabisaad.github.io/Movie-Application/",
    github: "https://github.com/AbdelrhmanAbdelNabiSaad/Movie-Application",
  },
  {
    id: "ecommerce",
    flow: {
      cols: [["Pages", "Home, Shop, Blog, About, Contact, Checkout"], ["Reusable components", "Search, Products, Pagination, Sort, Price range"], ["Product data file", "Checkout form saved in localStorage"]],
      links: ["render", "read and write"],
    },
    role: "Team lead. I led the team, solved the problems we hit along the way, and built the React components and the routing.",
    title: "Grocery E-commerce Store",
    kind: "Web Master internship, team project",
    summary: "A multi-page online grocery storefront with product browsing, live search and a checkout flow.",
    points: [
      "Six pages connected with React Router: Home, Shop, Blog, About, Contact and Checkout.",
      "Live product search that filters the catalog as you type.",
      "Shop page built from small reusable components for product cards, pagination, sorting and price range.",
      "Checkout form keeps what you typed in localStorage, and carousels use react-slick.",
    ],
    tech: ["React 19", "React Router", "Bootstrap", "react-slick", "localStorage", "Vite"],
    live: "https://abdelrhmanabdelnabisaad.github.io/E-commerce-/",
    github: "https://github.com/AbdelrhmanAbdelNabiSaad/E-commerce-",
  },
];
