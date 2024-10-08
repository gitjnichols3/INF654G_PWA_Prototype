
document.addEventListener("DOMContentLoaded", function () {
    // Sidenav Initialization
    const menus = document.querySelector(".sidenav");
    M.Sidenav.init(menus, { edge: "right" });

    // Carousel Initialization
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});

    // Form Select Initialization
    var list = document.querySelectorAll('select');
    M.FormSelect.init(list, {});

     // Zoomed image Initialization
    var boxedImage = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(boxedImage, {});

  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/serviceworker.js")
      .then((req) => console.log("Service Worker Registered!", req))
      .catch((err) => console.log("Service Worker registration failed", err));
  }




