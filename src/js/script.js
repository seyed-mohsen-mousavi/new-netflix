const imgList = [
  {
    src: "../src/img/Bladerunner.jpg",
  },
  {
    src: "../src/img/lusifer.jpg",
  },
  {
    src: "../src/img/mony-honey.jpg"
  }
];
const slider = document.querySelectorAll(".swiper-slide");
const sliderimg = document.querySelectorAll("#img-slider");

slider[0].style.backgroundImage = "url(" + imgList[0].src + ")";
slider[1].style.backgroundImage = "url(" + imgList[1].src + ")";
slider[2].style.backgroundImage = "url(" + imgList[2].src + ")";

// config Swiper
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
