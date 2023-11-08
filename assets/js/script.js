document.addEventListener(
  "DOMContentLoaded",
  function () {
    if ("AOS" in window) {
      AOS.init();
    }
  },
  false
);

const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  window.scrollY > 200
    ? scrollTop.classList.add("active")
    : scrollTop.classList.remove("active");
});
scrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function scrollToSection(event, id) {
  event.preventDefault();
  window.scrollTo({
    top:
      document.getElementById(id).getBoundingClientRect().top +
      window.scrollY -
      80,
    behavior: "smooth",
  });
}

// language option
function dropLanguage() {
  document.getElementById("container-dropdown").classList.toggle("block");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("block")) {
        openDropdown.classList.remove("block");
      }
    }
  }
};
