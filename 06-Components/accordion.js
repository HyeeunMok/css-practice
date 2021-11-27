const item = document.querySelectorAll('.item');
const icon = document.querySelectorAll('.icon');
icon.forEach((el, i) => {
  el.addEventListener('click', function () {
    item[i].classList.toggle('open');
  });
});
