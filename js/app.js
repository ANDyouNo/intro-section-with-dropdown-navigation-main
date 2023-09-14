function toggleMenu() {
  let menuBtn = document.getElementById('menu');
  let menuWindow = document.querySelector('.menu')
  menuBtn.classList.toggle('active');
  menuWindow.classList.toggle('none')
}


const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    menuItems.forEach(function (item) {
      item.childNodes[1].classList.remove("opened");
      item.childNodes[3].classList.add("closed");
      item.childNodes[1].childNodes[1].classList.remove("arrow-opened");
    });
    item.childNodes[1].classList.add("opened");
    item.childNodes[3].classList.remove("closed");
    item.childNodes[1].childNodes[1].classList.add("arrow-opened");
  });
});