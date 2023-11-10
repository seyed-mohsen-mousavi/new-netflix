const imgList = [
  {
    src: "../src/img/Bladerunner.jpg",
  },
  {
    src: "../src/img/lusifer.jpg",
  },
];
const slider = document.querySelectorAll(".swiper-slide");
slider[0].style.backgroundImage = 'url(' + imgList[0].src + ')'
slider[1].style.backgroundImage = 'url(' + imgList[1].src + ')'
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
