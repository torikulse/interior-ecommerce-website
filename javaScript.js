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
