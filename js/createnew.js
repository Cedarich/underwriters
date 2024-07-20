const preInspection = document.querySelector(".pre-loss");
const postInspection = document.querySelector(".post-loss");
const btnButtom = document.querySelector(".create-request");

preInspection.addEventListener("click", () => {
  preInspection.style.border = "1px solid #FF7A00";
  postInspection.style.border = "0";

  // change the color of the button then cursor to pointer
  btnButtom.style.background = "#FF7A00";
  btnButtom.style.cursor = "pointer";
  btnButtom.disabled = false;
});

postInspection.addEventListener("click", () => {
  postInspection.style.border = "1.5px solid #FF7A00";
  preInspection.style.border = "0";

  // change the color of the button then cursor to pointer
  btnButtom.style.background = "#FF7A00";
  btnButtom.style.cursor = "pointer";
  btnButtom.disabled = false;
});

// Changing location to respective pages if preInspection or postInspection is clicked (contains colored border) is orange
btnButtom.addEventListener("click", () => {
  if (
    postInspection.style.border !== "" &&
    postInspection.style.border !== "0px"
  ) {
    window.location.href = "./post-loss.html";
  } else if (
    preInspection.style.border !== "" &&
    preInspection.style.border !== "0px"
  ) {
    window.location.href = "./pre-loss.html";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  //   var hamburger = document.getElementById("hamburger");
  var sidebar = document.getElementById("sidebar");
  var logoContainer = document.getElementById("logoContainer");
  var hamburger = document.getElementById("ham");
  var close = document.getElementById("canc");
  var main = document.getElementById("main-content");

  hamburger.addEventListener("click", function () {
    sidebar.style.display = "flex";
    hamburger.classList.toggle("open");
    if (hamburger.classList.contains("open")) {
      close.style.display = "block";
      close.style.marginLeft = "180px";
      hamburger.style.display = "none";
      logoContainer.style.display = "block";
      main.style.marginLeft = "278px";
    }
  });
  canc.addEventListener("click", function () {
    sidebar.style.display = "none";
    hamburger.classList.toggle("open");
    if (!hamburger.classList.contains("open")) {
      close.style.display = "none";
      close.style.marginLeft = "0";
      hamburger.style.display = "block";
      logoContainer.style.display = "none";
      main.style.marginLeft = "0";
    }
  });
});
