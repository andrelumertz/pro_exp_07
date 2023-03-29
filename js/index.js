import { Router } from "./router.js";



const router = new Router() 
  router.add("/", "/pages/home.html")
  router.add("/about", "/pages/about.html");
  router.add("/contact", "/pages/contact.html");
  router.add(404, "/pages/404.html");

  router.handle()

  window.onpopstate = () => router.handle()
  window.route = () => router.route() 



// const routes = {

//   "/": "/pages/home.html",
//   "/about": "/pages/about.html",
//   "/contact": "/pages/contact.html",
//   404: "/pages/404.html",
// };

// function route(event) {
//   event = event || window.event;
//   event.preventDefault();

//   window.history.pushState({}, "", event.target.href);

//   handle();
// }

// function handle() {
//   const { pathname } = window.location;
//   const route = routes[pathname] || routes[404];

//     fetch(route)
//     .then(data => data.text())
//     .then(html => {
//       document.querySelector('#app').innerHTML = html
//     })
// }

// handle();

// window.onpopstate = () => handle()
// window.route = () => route()
