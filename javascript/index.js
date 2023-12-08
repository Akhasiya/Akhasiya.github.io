function scrollToSection() {
  var seccion = document.getElementById("secondary");
  seccion.scrollIntoView({ behavior: "smooth" });
}

//Hover imganes
const div1 = document.getElementById("div-1");
const div2 = document.getElementById("div-2");
const div3 = document.getElementById("div-3");

const p1 = document.getElementById("Compromiso");
const p2 = document.getElementById("Misión");
const p3 = document.getElementById("Visión");

const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");

div1.addEventListener("mouseover", () => {
  if (p1.classList.contains("hidden")) {
    p1.classList.remove("hidden");
    img1.classList.add("hidden");
  }
});
div1.addEventListener("mouseout", () => {
  if (!p1.classList.contains("hidden")) {
    p1.classList.add("hidden");
    img1.classList.remove("hidden");
  }
});

div2.addEventListener("mouseover", () => {
  if (p2.classList.contains("hidden")) {
    p2.classList.remove("hidden");
    img2.classList.add("hidden");
  }
});
div2.addEventListener("mouseout", () => {
  if (!p2.classList.contains("hidden")) {
    p2.classList.add("hidden");
    img2.classList.remove("hidden");
  }
});

div3.addEventListener("mouseover", () => {
  if (p3.classList.contains("hidden")) {
    p3.classList.remove("hidden");
    img3.classList.add("hidden");
  }
});
div3.addEventListener("mouseout", () => {
  if (!p3.classList.contains("hidden")) {
    p3.classList.add("hidden");
    img3.classList.remove("hidden");
  }
});
