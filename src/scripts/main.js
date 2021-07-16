import "../scss/styles.scss";

// Importing Variables
const mobileNav = document.getElementById("mobileNav");
const hamburgerOpen = document.getElementById("hamburgerOpen");
const hamburgerClose = document.getElementById("hamburgerClose");

hamburgerOpen.addEventListener("click", () => {
  mobileNav.classList.remove("hide");
  hamburgerClose.classList.remove("hide");
  hamburgerOpen.classList.add("hide");
});

hamburgerClose.addEventListener("click", () => {
  mobileNav.classList.add("hide");
  hamburgerClose.classList.add("hide");
  hamburgerOpen.classList.remove("hide");
});
