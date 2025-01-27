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

//slider data

let sliderData = [
  { id: 1, name: "Bed Room", link: "https://www.torikulse.vercel.app" },
  { id: 2, name: "Dining Room", link: "https://www.torikulse.vercel.app" },
  { id: 3, name: "Living Room", link: "https://www.torikulse.vercel.app" },
  { id: 4, name: "Room Four", link: "https://www.torikulse.vercel.app" },
  { id: 5, name: "Room Five", link: "https://www.torikulse.vercel.app" },
  { id: 6, name: "Room Six", link: "https://www.torikulse.vercel.app" },
  { id: 7, name: "Room Seven", link: "https://www.torikulse.vercel.app" },
];
// //slider right
// function rightArrow() {
//   let active = document.querySelector(".slider .active");
//   let active2 = document.querySelector(".slider .active2");
//   if (active2.nextElementSibling) {
//     active.classList.remove("active");
//     active.nextElementSibling.classList.add("active");
//     active2.classList.remove("active2");
//     active2.nextElementSibling.classList.add("active2");
//     console.log(active2.nextElementSibling);
//   } else {
//     active.classList.remove("active");
//     active.nextElementSibling.classList.add("active");
//     active2.classList.remove("active2");
//     console.log(active.nextElementSibling);
//   }
// }
// //slider left
// function leftArrow() {
//   let active = document.querySelector(".slider .active");
//   let active2 = document.querySelector(".slider .active2");

//   if (active.previousElementSibling) {
//     active.classList.remove("active");
//     active.previousElementSibling.classList.add("active");
//     active2.classList.remove("active2");
//     active2.previousElementSibling.classList.add("active2");
//   } else {
//     active2.classList.remove("active2");
//   }
// }
// //end slider

let card = document.querySelectorAll(".slider .card");
let range = card.length;
let i = 700;

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

  console.log(props);
}
