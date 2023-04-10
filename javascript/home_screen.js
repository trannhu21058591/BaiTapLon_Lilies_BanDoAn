let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
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

let products1 = [
    {
        id: 7,
        name1: 'Stir Fry Pasta',
        image1: 'burger1.png',
        tt1: 'The in-house pasta and chicken by chef Moose',
        price1: 56000
    },
    {
        id: 8,
        name1: 'Stir Fry Pasta',
        image1: 'MeatBalls.png',
        tt1: 'The in-house pasta and chicken by chef Moose',
        price1: 56000
    },
    {
        id: 9,
        name1: 'Stir Fry Pasta',
        image1: 'burger1.png',
        tt1: 'The in-house pasta and chicken by chef Moose',
        price1: 56000
    }
];

let products2 = [
    {
        id: 7,
        name2: 'Stir Fry Pasta',
        image2: 'burger1.png',
        tt2: 'The in-house pasta and chicken by chef Moose',
        price2: 56000
    },
    {
        id: 8,
        name2: 'Stir Fry Pasta',
        image2: 'MeatBalls.png',
        tt2: 'The in-house pasta and chicken by chef Moose',
        price2: 56000
    },
    {
        id: 9,
        name2: 'Stir Fry Pasta',
        image2: 'MeatBalls.png',
        tt2: 'The in-house pasta and chicken by chef Moose',
        price2: 56000
    }
];
 
let listCards = [];
let listCards1 = [];
let listCards2 = [];

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

function initApp1(){
    products1.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item1');
        newDiv.innerHTML = `
            <img class="food_img" src="/image/${value.image1}">
            <div class="food_name">${value.name1}</div>
            <div class="food_infor">${value.tt1}</div>
            <div class="footer_div_food">
                <div class="food_price">${value.price1.toLocaleString()}</div>
                <button id="btn_cart7" onclick="addToCard1(${key})">Add to cart</button>

            `;
        list1.appendChild(newDiv);
    })
}

function initApp2(){
    products2.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item2');
        newDiv.innerHTML = `
            <img class="food_img" src="/image/${value.image2}">
            <div class="food_name">${value.name2}</div>
            <div class="food_infor">${value.tt2}</div>
            <div class="footer_div_food">
                <div class="food_price">${value.price2.toLocaleString()}</div>
                <button id="btn_cart7" onclick="addToCard2(${key})">Add to cart</button>

            `;
        list2.appendChild(newDiv);
    })
}

initApp();
initApp1();
initApp2();

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function addToCard1(key){
    if(listCards1[key] == null){
        // copy product form list to list card
        listCards1[key] = JSON.parse(JSON.stringify(products1[key]));
        listCards1[key].quantity = 1;
    }
    reloadCard();
}

function addToCard2(key){
    if(listCards2[key] == null){
        // copy product form list to list card
        listCards2[key] = JSON.parse(JSON.stringify(products2[key]));
        listCards2[key].quantity = 1;
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

    let count1 = count;
    let totalPrice1 = totalPrice;
    listCards1.forEach((value, key)=>{
        totalPrice1 = totalPrice1 + value.price1;
        count1 = count1 + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/image/${value.image1}"/></div>
                <div>${value.name1}</div>
                <div>${value.price1.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity1(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity1(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice1.toLocaleString();
    quantity.innerText = count1;

    let count2 = count1;
    let totalPrice2 = totalPrice1;
    listCards2.forEach((value, key)=>{
        totalPrice2 = totalPrice2 + value.price2;
        count2 = count2 + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/image/${value.image2}"/></div>
                <div>${value.name2}</div>
                <div>${value.price2.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity2(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity2(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice2.toLocaleString();
    quantity.innerText = count2;

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

function changeQuantity1(key, quantity){
    if(quantity == 0){
        delete listCards1[key];
    }else{
        listCards1[key].quantity = quantity;
        listCards1[key].price1 = quantity * products1[key].price1;
    }
    reloadCard();
}

function changeQuantity2(key, quantity){
    if(quantity == 0){
        delete listCards2[key];
    }else{
        listCards2[key].quantity = quantity;
        listCards2[key].price2 = quantity * products2[key].price2;
    }
    reloadCard();
}
window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    if (window.scrollY >= 707) {
        menu.classList.add('menu_mini');
    } else {
        menu.classList.remove('menu_mini');
    }
    });
//phan banner
// var arr_hinh = [
//     "/image/banner0.jpg",
//     "/image/banner1.jpg",
//     "/image/banner2.jpg",
//     "/image/banner4.jpg",
//     "/image/banner5.jpg",
//     "/image/banner6.jpg"
// ]

// var i = 0;

// function next(){
//     i++;
//     if(i >= arr_hinh.length)
//         i = 0;
//     var hinh = document.getElementById("hinh");
//     hinh.src = arr_hinh[i];
// }

// function prev(){
//     i--;
//     if(i < 0)
//         i = arr_hinh.length - 1;
//     document.getElementById("hinh").src = arr_hinh[i];
// }

// setInterval("next()", 15000);
//
// var movdot = document.querySelectorAll('.moving div')
// var currentIndex = 0;
// function updateDot(index){

//     document.querySelectorAll('.moving div').forEach(item =>{
//         item.classList.remove('active1');
//     })

//     currentIndex = index;
//     var hinh = document.getElementById("hinh");
//     hinh.src = movdot[index].getAttribute('src');
//     movdot[index].parentElement.classList.add('active1');

// }

// movdot.forEach((imgElement, index) => {
//     imgElement.addEventListener('click', e => {
//         updateDot(index);
//     })
// })

// updateDot(0);

//Phần banner
const wrapper = document.querySelector(".banner"),
carousel = document.querySelector(".banner_img"),
images = document.querySelectorAll(".hh"),
buttons = document.querySelectorAll(".button");

let imageIndex = 0,
intervalId;

const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 10000);
    
  };
  autoSlide();
  
  const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    carousel.style.transform = `translate(-${imageIndex * 16.666}%)`;//cần xem xét
};
  
  const updateClick = (e) => {
    clearInterval(intervalId);
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
  };
  
  buttons.forEach((button) => button.addEventListener("click", updateClick));
  
  wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
  wrapper.addEventListener("mouseleave", autoSlide);