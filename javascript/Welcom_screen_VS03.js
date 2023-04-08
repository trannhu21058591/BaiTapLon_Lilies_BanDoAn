const menu_image = document.querySelector(".menu_img");
const drop_menu_small = document.querySelector(".menu_small");

menu_image.onclick = function() {
    drop_menu_small.classList.toggle('open_menu_small');
}


window.addEventListener("scroll",function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky",window.scrollY > 0);
})