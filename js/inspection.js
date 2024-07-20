document.addEventListener("DOMContentLoaded", function () {
  const createButton = document.getElementById("create-button");
  const tabButtons = document.querySelectorAll(".tab-button");
  const allRequestButton = document.getElementById("#all-request");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      createButton.style.display = "none";
    });
  });

  allRequestButton.addEventListener("click", function () {
    createButton.style.display = "block";
  });
});
// functionalities for button

document.addEventListener("DOMContentLoaded", function () {
  const createButton = document.getElementById("create-button");
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      createButton.style.display = "none";
    });
  });
});

// switching tabs

function showTab(tabName, element) {
  let rows = document.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    if (row.classList.contains(tabName) || tabName === "all") {
      row.classList.remove("hidden");
    } else {
      row.classList.add("hidden");
    }
  });

  // Change active tab button color
  let buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  element.classList.add("active");

  // Hide the create button for 'ongoing' and 'completed' tabs
  function showTab(tabName) {
    var tabs = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }

    var tabContent = document.getElementsByClassName("all ongoing completed");
    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).classList.add("active");

    if (tabName === "ongoing" || tabName === "completed") {
      document.getElementById("create-button").style.display = "none";
    } else {
      document.getElementById("create-button").style.display = "block";
    }
  }
  document.getElementById("create-button").onclick = function () {
    window.location.href = "createnewinspection.html";
  };
}

document.getElementById("create-button").onclick = function () {
  window.location.href = "createnewinspection.html";
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
