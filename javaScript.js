function toggle() {
  let menu = document.getElementById("menu");
  if (!menu.classList.contains("toggle")) {
    menu.classList.add("toggle");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.remove("toggle");
    document.body.style.overflow = "auto";
  }
}

function menuHeader() {
  let leftIcon = document.querySelector("#imIcon").cloneNode(true);
  document.getElementById("menuHeader").append(leftIcon);
}
menuHeader();

//slider right
let card = document.querySelectorAll(".slider .card");
let range = card.length;
let i = 700;
//params will be "next" or "prev"
function slide(params) {
  if (params == "next") {
    i++;
  } else if (params == "prev") {
    i--;
  }

  let nextIndex = Math.abs(i) % range;
  let nextIndex2 = (Math.abs(i) + 1) % range;

  return [nextIndex, nextIndex2];
}

function circleSlider(props) {
  let active = document.querySelector(".slider .active");
  let active2 = document.querySelector(".slider .active2");

  active.classList.remove("active");
  active2.classList.remove("active2");

  card[props[0]].classList.add("active");
  card[props[1]].classList.add("active2");
}
