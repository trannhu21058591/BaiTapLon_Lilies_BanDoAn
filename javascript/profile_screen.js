const menu_image = document.querySelector(".menu_img_");
const drop_menu_small = document.querySelector(".menu_small_");

menu_image.onclick = function() {
    drop_menu_small.classList.toggle('open_menu_small_');
}

let profile_IMG = document.getElementById("profile_img");
let input_File = document.getElementById("input_file");

input_File.onchange = function(){
    profile_IMG.src = URL.createObjectURL(input_File.files[0])
}
