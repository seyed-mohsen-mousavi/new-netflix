const imgList = [
  {
    src: "../src/img/Bladerunner.jpg",
  },
  {
    src: "../src/img/lusifer.jpg",
  },
  {
    src: "../src/img/mony-honey.jpg",
  },
];
const avatarFriend = [
  {
    id: 1,
    src: "../src/img/avatar/girl1.jpg",
    isonline: true,
  },
  {
    id: 2,
    src: "../src/img/avatar/girl2.jpg",
    isonline: true,
  },
  {
    id: 3,
    src: "../src/img/avatar/man.avif",
    isonline: true,
  },
  {
    id: 4,
    src: "../src/img/avatar/man2avif.avif",
    isonline: true,
  },
  {
    id: 5,
    src: "../src/img/avatar/man4.avif",
    isonline: false,
  },
  {
    id: 6,
    src: "../src/img/avatar/girl4.png",
    isonline: false,
  },
  {
    id: 7,
    src: "../src/img/avatar/girl5.jpg",
    isonline: false,
  },
];
const avatarBtn = document.querySelectorAll(".friend");
const slider = document.querySelectorAll(".swiper-slide");
const sliderimg = document.querySelectorAll("#img-slider");
const loading = document.getElementById("Loading");
const mainContent = document.getElementById("main");
const swiper = new Swiper(".img", {
  pagination: {
    el: ".img .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<img class="' + className + '" src="' + imgList[index].src + '"' + ">"
      );
    },
  },
});
const pageContent = document.querySelector(".container");
avatarFriend.forEach((e) => {
  avatarBtn[e.id - 1].style.backgroundImage = "url(" + e.src + ")";
  if (e.isonline) {
    avatarBtn[e.id - 1].firstElementChild.classList.remove("hidden");
  }
});

slider[0].style.backgroundImage = "url(" + imgList[0].src + ")";
slider[1].style.backgroundImage = "url(" + imgList[1].src + ")";
slider[2].style.backgroundImage = "url(" + imgList[2].src + ")";

// config Swiper

// -------------

window.onload = ()=>{
  loading.classList.add("hidden");
  mainContent.classList.remove("hidden");
  console.log("loaded");
}
console.log(mainContent);
console.log(loading);