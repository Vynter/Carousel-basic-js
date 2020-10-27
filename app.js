let right = document.querySelector(".droite");
let left = document.querySelector(".gauche");
let slide = document.querySelector(".slide");
let i = 0;

right.addEventListener("click", function () {
  console.log(right);

  if (i < 2400) {
    i += 800;
    slide.style.transform = `translate(-${i}px)`;
    console.log("ok");
  }
});

left.addEventListener("click", () => {
  console.log(left);
  if (i > 0) {
    i -= 800;
    slide.style.transform = `translate(-${i}px)`;
    console.log("ok");
  }
});
