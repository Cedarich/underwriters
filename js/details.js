var hamburger = document.getElementById("ham");
var cancel = document.getElementById("canc");
var sidebar = document.getElementById("sidebar");
var sidebarParent = document.getElementById("sidebar-parent");

document.addEventListener("DOMContentLoaded", function () {
  //   var hamburger = document.getElementById("hamburger");
  var logoContainer = document.getElementById("logoContainer");
  var main = document.getElementById("main");

  hamburger.addEventListener("click", function () {
    sidebar.style.display = "flex";
    hamburger.classList.toggle("open");
    if (hamburger.classList.contains("open")) {
      cancel.style.display = "block";
      cancel.style.marginLeft = "180px";
      hamburger.style.display = "none";
      logoContainer.style.display = "block";
      main.style.marginLeft = "278px";
    }
  });

  canc.addEventListener("click", function () {
    sidebar.style.display = "none";
    hamburger.classList.toggle("open");
    if (!hamburger.classList.contains("open")) {
      cancel.style.display = "none";
      cancel.style.marginLeft = "0";
      hamburger.style.display = "block";
      logoContainer.style.display = "none";
      main.style.marginLeft = "0";
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 835) {
    hamburger.style.display = "none";
    cancel.style.display = "block";
    sidebarParent.style.display = "block";
  } else {
    hamburger.style.display = "block";
    cancel.style.display = "none";
    sidebarParent.style.display = "none";
  }
});

document.getElementById("req").onclick = function () {
  window.location.href = "inspectionlist.html";
};

document.getElementById("ass").onclick = function () {
  window.location.href = "createnewinspection.html";
};
