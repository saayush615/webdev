# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Notes
- code -r project(project wali file ko wahi pe khol dega without going back)
- useEffect ek react hook hota hai jo side effect dene me kam aata hai
- useEffect is a Hook, not just a regular function. In React, Hooks are special functions that allow you to use state and other React features inside functional components

# Start pop ups explained
- At start component get render and this trigger <Navbar/> and (alert = Hey I will run on every render)
- since it is first render so (alert = Hey welcome to my page. This is the first render)
- After that color get initialized so the render is (alert = Hey I am running bcoz color was changed)
- then finally <Navbar/> rendering will get over with last (alert = Hey this is the first render of app.jsx)
- after count will be initialized so (alert = count was changed) and setColor(color + 1). means color changes
- component get render and this trigger <Navbar/> and (alert = Hey I will run on every render)
- After bocz of color so the render is (alert = Hey I am running bcoz color was changed)