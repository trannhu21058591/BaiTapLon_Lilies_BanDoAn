var x = document.getElementById("login_from");
var y = document.getElementById("register_form");
var z = document.getElementById("btn");

function register_click(){
    x.style.left = "-700px";
    y.style.right = "15%";
    z.style.left = "50%";
};
function login_click(){
    x.style.left = "15%";
    y.style.right = "700px";
    z.style.left = "0";
};

var arr = document.getElementsByTagName('input');
const regex_Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regex_PassWord = /^[a-zA-Z0-9._%+-@]+$/;
const regex_Name = /^[^\d+]*[\d+]{0}[^\d+]*$/;

/* 
var log_in = document.querySelector(".submit_btn");
log_in.addEventListener("submit",function(event){
    


    window.location.href = "/html/home_screen.html"
});
*/

function login(){
    var email = arr[0].value;
    var password = arr[1].value;

    if (email == ""|| password == "") {
        alert("Không được để rỗng!!!!!!!!");
        return;
    }
    if (!regex_Email.exec(email)) {
        alert("Email không hợp lệ!!!!!!!!!");
        return;
    }
    if (!regex_PassWord.exec(password)) {
        alert("Mật khẩu không hợp lệ!!!!!!!!!");
        return;
    }

    console.log(email,password);
    

};

function sign_up(){
    var name = arr[2].value;
    var password_1 = arr[4].value;
    var email_1 = arr[3].value;

    if (email_1 == "" ||password_1 == "" || name == "") {
        alert("Không được để rỗng!!!!!!!!");
        return;
    }
    if (!regex_Name.test(name)) {
        alert("Tên không hợp lệ!!!!!!!!!");
        return;
    }
    if (!regex_Email.exec(email_1)) {
        alert("Email không hợp lệ!!!!!!!!!");
        return;
    }
    if (!regex_PassWord.exec(password_1)) {
        alert("Mật khẩu không hợp lệ!!!!!!!!!");
        return;
    }

    console.log(name, email_1,password_1);
}