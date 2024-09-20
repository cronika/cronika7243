document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav ul li a");

  // スティッキーナビゲーション
  const stickyNav = () => {
    if (window.scrollY > header.offsetHeight) {
      nav.classList.add("sticky");
      document.body.style.paddingTop = nav.offsetHeight + "px";
    } else {
      nav.classList.remove("sticky");
      document.body.style.paddingTop = 0;
    }
  };
  window.addEventListener("scroll", stickyNav);
});
