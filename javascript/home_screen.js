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

// var btnClose = document.getElementById('btn_close');
// var btn_cart1 = document.getElementById('btn_cart1');
// var btn_cart2 = document.getElementById('btn_cart2');
// var btn_cart3 = document.getElementById('btn_cart3');
// var btn_cart4 = document.getElementById('btn_cart4');
// var btn_cart5 = document.getElementById('btn_cart5');
// var btn_cart6 = document.getElementById('btn_cart6');
// var btn_cart7 = document.getElementById('btn_cart7');
// var btn_cart8 = document.getElementById('btn_cart8');
// var btn_cart9 = document.getElementById('btn_cart9');
// var btn_cart10 = document.getElementById('btn_cart10');
// var btn_cart11 = document.getElementById('btn_cart11');
// var btn_cart12 = document.getElementById('btn_cart12');

// var coating = document.getElementById('coating')
// var food = document.getElementsByClassName('food')

// btnClose.onclick = function(){
//     coating.style.display = 'none';
// };

// coating.addEventListener('click', function(e){
//         if(e.target == e.currentTarget){
//             coating.style.display = 'none';
//         }
// })

// btn_cart1.onclick = function(){
//     coating.style.display = 'block';
// };

// btn_cart2.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart3.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart4.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart5.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart6.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart7.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart8.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart9.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart10.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart11.onclick = function(){
//     coating.style.display = 'block';
// };
// btn_cart12.onclick = function(){
//     coating.style.display = 'block';
// };

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantitys');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Stir Fry Pasta',
        image: 'burger1.png',
        tt: 'The in-house pasta and chicken by chef Moose',
        price: 56000
    },
    {
        id: 2,
        name: 'Stir Fry Pasta',
        image: 'burger1.png',
        tt: 'The in-house pasta and chicken by chef Moose',
        price: 56000
    },
    {
        id: 3,
        name: 'Stir Fry Pasta',
        image: 'burger1.png',
        tt: 'The in-house pasta and chicken by chef Moose',
        price: 56000
    },
    {
        id: 4,
        name: 'Stir Fry Pasta',
        image: 'burger1.png',
        tt: 'The in-house pasta and chicken by chef Moose',
        price: 56000
    },
    {
        id: 5,
        name: 'Stir Fry Pasta',
        image: 'burger1.png',
        tt: 'The in-house pasta and chicken by chef Moose',
        price: 56000
    },
    {
        id: 6,
        name: 'Stir Fry Pasta',
        image: 'burger1.png',
        tt: 'The in-house pasta and chicken by chef Moose',
        price: 56000
    }
];

// <img src="/image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button> 
let listCards = [];
function initApp(){
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            
            
            <img class="food_img" src="/image/${value.image}">
            <div class="food_name">${value.name}</div>
            <div class="food_infor">${value.tt}</div>
            <div class="footer_div_food">
                <div class="food_price">${value.price.toLocaleString()}</div>
                <button id="btn_cart7" onclick="addToCard(${key})">Add to cart</button>

            `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}