const routes = {
  "/": "views/home.html",
  "/about": "views/about.html",
  "/contact": "views/contact.html"
};

const app = document.getElementById("app");

async function loadRoute() {
  const path = location.hash.slice(1) || "/";
  const route = routes[path] || routes["/"];
  const html = await fetch(route).then(res => res.text());
  app.innerHTML = html;
}

window.addEventListener("hashchange", loadRoute);
window.addEventListener("DOMContentLoaded", loadRoute);
