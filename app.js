const contentText = document.getElementsByClassName("content-text");
const current = document.getElementsByClassName("content-text active");
const imgSlide = document.getElementsByClassName("carousel-item");
const currentImg = document.getElementsByClassName("carousel-item active");

for (let i = 0; i < contentText.length; i++) {
  contentText[i].addEventListener("mouseover", function () {
    current[0].className = current[0].className.replace(" active", "");
    handleChangeImg(i);
    this.className += " active";
  });
}

function handleChangeImg(index) {
  $("#carousel").carousel(index);
}
$("#carousel").on("slid.bs.carousel", function (direction) {
  current[0].className = current[0].className.replace(" active", "");
  contentText[direction.to].className += " active";
});
