document.getElementById("myBtn").onclick = function () {
  window.location.href = "dashboard.html";
};

// document.querySelector(".close").addEventListener("click", () => {
//   document.querySelector(".left").style.display = "none";
//   document.querySelector(".right").style.display = "flex";
// });

// document
//   .querySelector(".login-container")
//   .addEventListener("click", (event) => {
//     if (event.target === document.querySelector(".login-container")) {
//       document.querySelector(".left").style.display = "flex";
//       document.querySelector(".right").style.display = "none";
//     }
//   });

document.getElementById("close-btn").onclick = function () {
  document.getElementById("left").style.display = "show";
  document.getElementById("right").style.display = "none";
};
