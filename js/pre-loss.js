// Get the <span> element that closes the modal
const closeModalBtn = document.getElementById("close-modal");
const cancelSuccess = document.querySelector(".cancel-success");
const sendRequestBtn = document.getElementById("send-request-btn");
const requestLink = document.getElementById("requests-links");
const createNew = document.getElementById("create-new");
const modal = document.getElementById("confirmation-modal");
const successModal = document.getElementById("success-modal");
const generateButtons = document.querySelector(".generate-button");

// When the user clicks the button, open the modal
generateButtons.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "flex";
});

// When the user clicks on <span> (x), close the modal
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};
createNew.onclick = function () {
  successModal.style.display = "none";
  modal.style.display = "none";
  window.location.href = "./createnewinspection.html";
};
requestLink.onclick = function () {
  successModal.style.display = "none";
  modal.style.display = "none";
  window.location.href = "./inspectionlist.html";
};
cancelSuccess.onclick = function () {
  successModal.style.display = "none";
  modal.style.display = "none";
};

// When the user clicks the send request button, show the second modal
sendRequestBtn.onclick = function () {
  modal.style.display = "none";
  successModal.style.display = "flex";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == successModal) {
    modal.style.display = "none";
    successModal.style.display = "none";
  }
};
// Hambuger functionality

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

// document.getElementById("myBtn1").onclick = function () {
//   window.location.href = "createnewinspection.html";
// };
