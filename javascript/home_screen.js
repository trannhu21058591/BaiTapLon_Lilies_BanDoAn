// var btnClose = document.querySelector('.btn_close')
// var coating = document.querySelector('.coating')
// var food = document.querySelector('.btn_cart')
// var btn_cart = document.getElementsByClassName('btn_cart')

// function toggleModal(e){
//     console.log(e.target)
//     coating.classList.toggle('hide');
// }
// btn_cart.addEventListener('click', toggleModal);
// btnClose.addEventListener('click', toggleModal);
// coating.addEventListener('click', function(e){
//     if(e.target == e.currentTarget){
//         toggleModal();
//     }
// })

var btnClose = document.getElementById('btn_close');
var btn_cart1 = document.getElementById('btn_cart1');
var btn_cart2 = document.getElementById('btn_cart2');
var btn_cart3 = document.getElementById('btn_cart3');
var btn_cart4 = document.getElementById('btn_cart4');
var btn_cart5 = document.getElementById('btn_cart5');
var btn_cart6 = document.getElementById('btn_cart6');
var btn_cart7 = document.getElementById('btn_cart7');
var btn_cart8 = document.getElementById('btn_cart8');
var btn_cart9 = document.getElementById('btn_cart9');
var btn_cart10 = document.getElementById('btn_cart10');
var btn_cart11 = document.getElementById('btn_cart11');
var btn_cart12 = document.getElementById('btn_cart12');

var coating = document.getElementById('coating')
var food = document.getElementsByClassName('food')

btnClose.onclick = function(){
    coating.style.display = 'none';
};

coating.addEventListener('click', function(e){
        if(e.target == e.currentTarget){
            coating.style.display = 'none';
        }
})

btn_cart1.onclick = function(){
    coating.style.display = 'block';
};

btn_cart2.onclick = function(){
    coating.style.display = 'block';
};
btn_cart3.onclick = function(){
    coating.style.display = 'block';
};
btn_cart4.onclick = function(){
    coating.style.display = 'block';
};
btn_cart5.onclick = function(){
    coating.style.display = 'block';
};
btn_cart6.onclick = function(){
    coating.style.display = 'block';
};
btn_cart7.onclick = function(){
    coating.style.display = 'block';
};
btn_cart8.onclick = function(){
    coating.style.display = 'block';
};
btn_cart9.onclick = function(){
    coating.style.display = 'block';
};
btn_cart10.onclick = function(){
    coating.style.display = 'block';
};
btn_cart11.onclick = function(){
    coating.style.display = 'block';
};
btn_cart12.onclick = function(){
    coating.style.display = 'block';
};

