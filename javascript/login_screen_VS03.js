var arr = document.getElementsByTagName("input");
const regex_Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regex_PassWord = /^[a-zA-Z0-9._%+-@]+$/;

const btn = document.getElementById("login_btn");
btn.addEventListener("click", function() {
    
    var email_ip = arr[0].value;
    var pass_1 = arr[1].value;
    if (email_ip == "" || pass_1 == "") {
        alert("Cannot be left empty !!");
        arr[0].value = "";
        return;
    }
    if (!regex_Email.test(email_ip)) {
        alert("Invalid email !!");
        return;
    }
    if(!regex_PassWord.test(pass_1)){
        alert("Invalid password !!");
        return;
    }
    // Chuyển đến trang mới
    window.location.href = "/html/home_screen.html";
});

var a = document.getElementById("choice_space");
var b = document.getElementById("Login_Form");
var c = document.getElementById("SignUp_Form");

function register_click(){
    a.style.left= '50%';
    b.style.left= '700px';
    c.style.left= '50%';
};

function login_click(){
    a.style.left = "0";
    b.style.left= '';
    c.style.left= '';
}

const btn1 = document.getElementById("sigup_btn");
btn1.addEventListener("click", function() {
    var email_ip1 = arr[2].value;
    var pass_2 = arr[3].value;
    var cf_pass = arr[4].value;

    if (email_ip1 == "" || pass_2 == "" || cf_pass == "") {
        alert("Cannot be left empty !!");
        arr[0].value = "";
        return;
    }
    if (!regex_Email.test(email_ip1)) {
        alert("Invalid email !!");
        return;
    }
    if(!regex_PassWord.test(pass_2)){
        alert("Invalid password !!");
        return;
    }
    if (cf_pass !== pass_2) {
        alert("Password does not match");
        return;
    }
    // Chuyển đến trang mới
    window.location.href = "/html/home_screen.html";
});