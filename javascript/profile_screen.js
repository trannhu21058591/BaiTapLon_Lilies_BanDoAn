const menu_image = document.querySelector(".menu_img_");
const drop_menu_small = document.querySelector(".menu_small_");

menu_image.onclick = function() {
    drop_menu_small.classList.toggle('open_menu_small_');
}