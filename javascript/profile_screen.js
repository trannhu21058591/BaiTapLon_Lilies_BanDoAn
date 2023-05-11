const menu_image = document.querySelector(".menu_img_");
const drop_menu_small = document.querySelector(".menu_small_");

menu_image.onclick = function() {
    drop_menu_small.classList.toggle('open_menu_small_');
}


// Chọn hình
let profile_IMG = document.getElementById("profile_img");
let input_File = document.getElementById("input_file");

input_File.onchange = function(){
    profile_IMG.src = URL.createObjectURL(input_File.files[0])
}


//  
const regexName = /^[A-Za-z0-9À-Ỵà-ỵ_*.@ ]+$/;
const regexAddress = /^[A-Za-z0-9À-Ỵà-ỵ_*., ]+$/;
const btnSave = document.getElementById("btn_save");
btnSave.addEventListener("click", function(){
    var arr = document.getElementsByTagName("input");
    var name = arr[1].value;
    var nickname = arr[2].value;
    var address = arr[6].value;

    if(!regexName.test(name)){
        alert("!!!");
        return;
    }
    if(!regexName.test(nickname)){
        alert("!!!");
        return;
    }
    if(!regexAddress.test(address)){
        alert("!!!");
        return;
    }
});