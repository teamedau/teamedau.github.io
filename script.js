console.log("hello world! its me vivi")

function toggleMenu() {
  const mobileNav = document.querySelector(".mobile-nav");

  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }

    console.log("toggling menu");
}