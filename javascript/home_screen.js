let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let list3 = document.querySelector('.list3');
let list4 = document.querySelector('.list4');
let list5 = document.querySelector('.list5');
let list6 = document.querySelector('.list6');
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
        name: 'Classic Beef Burger',
        image: 'burger1.png',
        tt: 'A simple beef patty served with lettuce, tomato, onion, and a condiment such as ketchup or mustard.',
        price: 70000
    },
    {
        id: 2,
        name: 'Bacon Cheeseburger',
        image: 'burger1.1.jpg',
        tt: 'A beef patty topped with cheese and crispy bacon, often served with lettuce and tomato.',
        price: 88000
    },
    {
        id: 3,
        name: 'Mushroom Swiss Burger',
        image: 'burger1.2.jpg',
        tt: 'A beef patty topped with sautéed mushrooms and Swiss cheese, sometimes served with lettuce and tomato.',
        price: 110000
    },
    {
        id: 4,
        name: 'BBQ Burger',
        image: 'burger1.3.jpg',
        tt: 'A beef patty topped with barbecue sauce, often with additional toppings such as onion rings or bacon.',
        price: 108000
    },
    {
        id: 5,
        name: 'Blue Cheeseburger',
        image: 'burger1.4.jpg',
        tt: 'A beef patty topped with blue cheese, often served with lettuce and tomato.',
        price: 129000
    },
    {
        id: 6,
        name: 'Jalapeño Burger',
        image: 'burger1.5.jpg',
        tt: ' A beef patty topped with jalapeño peppers and sometimes other spicy ingredients such as pepper jack cheese or hot sauce. It is often served with lettuce and tomato.',
        price: 100000
    }
];

let products1 = [
    {
        id: 7,
        name1: 'Crispy Chicken Burger',
        image1: 'burger2.1.jpg',
        tt1: ' A sandwich made with a crispy chicken patty, typically breaded and deep-fried. It is often served with lettuce, tomato, and mayonnaise on a bun.',
        price1: 56000
    },
    {
        id: 8,
        name1: 'Grilled Chicken Burger',
        image1: 'burger2.2.jpg',
        tt1: ' A sandwich made with a grilled chicken breast, often marinated or seasoned with spices.',
        price1: 69000
    },
    {
        id: 9,
        name1: 'Spicy Chicken Burger',
        image1: 'burger2.3.jpg',
        tt1: ' A sandwich made with a chicken patty that has been seasoned with spices or hot sauce for a spicy flavor.',
        price1: 80000
    }
];

let products2 = [
    {
        id: 7,
        name2: 'Mushroom Veggie Burger',
        image2: 'burger3.1.jpg',
        tt2: 'A vegetarian burger patty made with mushrooms as the main ingredient.',
        price2: 50000
    },
    {
        id: 8,
        name2: 'Black Bean Veggie Burger',
        image2: 'burger3.2.jpg',
        tt2: 'A vegetarian burger patty made with black beans as the main ingredient.',
        price2: 59000
    },
    {
        id: 9,
        name2: 'Tofu Veggie Burger',
        image2: 'burger3.3.jpg',
        tt2: 'A vegetarian burger patty made with tofu as the main ingredient. ',
        price2: 65000
    }
];

let products3 = [
    {
        id3: 1,
        name3: 'French Fries',
        image3: 'fries1.1.jpg',
        tt3: 'Slices of potatoes that are deep-fried until crispy on the outside and soft on the inside.',
        price3: 32000
    },
    {
        id3: 2,
        name3: 'Curly Fries',
        image3: 'fries1.2.jpg',
        tt3: 'Similar to French fries, but with a twisted or curly shape. They are often seasoned with spices such as paprika.',
        price3: 50000
    },
    {
        id3: 3,
        name3: 'Waffle Fries',
        image3: 'fries1.3.jpg',
        tt3: ' Waffle-shaped fries that are crispy on the outside and soft on the inside.',
        price3: 58000
    },
    {
        id3: 4,
        name3: 'Sweet Potato Fries',
        image3: 'fries1.4.jpg',
        tt3: 'Slices of sweet potatoes that are deep-fried until crispy.',
        price3: 71000
    },
    {
        id3: 5,
        name3: 'Chili Cheese Fries',
        image3: 'fries1.5.jpg',
        tt3: 'French fries topped with chili and melted cheese. This hearty snack is often served at sports events or as a bar food.',
        price3: 99000
    },
    {
        id3: 6,
        name3: 'Garlic Fries',
        image3: 'fries1.6.jpg',
        tt3: 'French fries that are seasoned with garlic and herbs such as parsley and thyme.',
        price3: 65000
    }
];

let products4 = [
    {
        id: 10,
        name4: 'Spaghetti',
        image4: 'spa1.1.jpg',
        tt4: 'A long, thin, cylindrical pasta of Italian origin, typically served with tomato sauce and meatballs.',
        price4: 99000
    },
    {
        id: 11,
        name4: 'Fettuccine',
        image4: 'spa1.2.jpg',
        tt4: 'A flat, thick pasta that is commonly served with rich, creamy sauces such as Alfredo sauce.',
        price4: 105000
    },
    {
        id: 12,
        name4: 'Linguine',
        image4: 'spa1.3.jpg',
        tt4: ' A narrow, flat pasta that is similar to spaghetti but wider. It is typically served with seafood or tomato-based sauces.',
        price4: 100000
    }
];

let products5 = [
    {
        id: 13,
        name5: 'Italian Meatballs',
        image5: 'mb1.1.jpg',
        tt5: 'These meatballs are typically made from a mixture of ground beef, pork, and veal, along with breadcrumbs, Parmesan cheese, and various herbs and spices.',
        price5: 150000
    },
    {
        id: 14,
        name5: 'Swedish Meatballs',
        image5: 'mb1.2.jpg',
        tt5: 'These meatballs are usually made with a mixture of ground pork and beef, along with breadcrumbs, milk, and spices.',
        price5: 119000
    },
    {
        id: 15,
        name5: 'Turkey Meatballs',
        image5: 'mb1.3.jpg',
        tt5: 'These meatballs are made with ground turkey, breadcrumbs, eggs, and various seasonings. ',
        price5: 145000
    }
];

let products6 = [
    {
        id: 16,
        name6: 'Coca-Cola',
        image6: 'drink1.1.jpg',
        tt6: 'The most popular carbonated soft drink, made with sugar, water, acid regulator, caffeine and flavorings.',
        price6: 20000
    },
    {
        id: 17,
        name6: 'Sprite',
        image6: 'drink1.2.jpg',
        tt6: 'Another carbonated soft drink made with sugar, water, acid regulator and flavorings. It has a lemon-lime flavor and is caffeine-free. ',
        price6: 20000
    },
    {
        id: 18,
        name6: 'Fanta',
        image6: 'drink1.3.jpg',
        tt6: ' A fruit-flavored carbonated soft drink, available in different flavors such as orange, grape and strawberry.',
        price6: 20000
    },
    {
        id: 19,
        name6: 'Iced Tea',
        image6: 'drink1.4.jpg',
        tt6: ' A refreshing drink made with tea and served cold, sometimes with added fruit flavors such as peach or lemon.',
        price6: 25000
    },
    {
        id: 20,
        name6: 'Lemonade',
        image6: 'drink1.5.jpg',
        tt6: 'A sweet and tangy drink made with lemon juice, sugar and water.',
        price6: 30000
    },
    {
        id: 21,
        name6: 'Mineral Water',
        image6: 'drink1.6.jpg',
        tt6: 'A still, non-carbonated water that is often served with meals.',
        price6: 15000
    }
];
 
let listCards = [];
let listCards1 = [];
let listCards2 = [];
let listCards3 = [];
let listCards4 = [];
let listCards5 = [];
let listCards6 = [];

function initApp(){
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="div_img_food"><img class="food_img" src="/image/${value.image}"></div>       
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
            <div class="div_img_food"><img class="food_img" src="/image/${value.image1}"></div>
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
            <div class="div_img_food"><img class="food_img" src="/image/${value.image2}"></div>
            <div class="food_name">${value.name2}</div>
            <div class="food_infor">${value.tt2}</div>
            <div class="footer_div_food">
                <div class="food_price">${value.price2.toLocaleString()}</div>
                <button id="btn_cart7" onclick="addToCard2(${key})">Add to cart</button>

            `;
        list2.appendChild(newDiv);
    })
}

function initApp3(){
    products3.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item3');
        newDiv.innerHTML = `
            <div class="div_img_food"><img class="food_img" src="/image/${value.image3}"></div>
            <div class="food_name">${value.name3}</div>
            <div class="food_infor">${value.tt3}</div>
            <div class="footer_div_food">
                <div class="food_price">${value.price3.toLocaleString()}</div>
                <button id="btn_cart7" onclick="addToCard3(${key})">Add to cart</button>
            `;
        list3.appendChild(newDiv);
    })
}

function initApp4(){
    products4.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item4');
        newDiv.innerHTML = `
            <div class="div_img_food"><img class="food_img" src="/image/${value.image4}"></div>
            <div class="food_name">${value.name4}</div>
            <div class="food_infor">${value.tt4}</div>
            <div class="footer_div_food">
                <div class="food_price">${value.price4.toLocaleString()}</div>
                <button id="btn_cart7" onclick="addToCard4(${key})">Add to cart</button>
            `;
        list4.appendChild(newDiv);
    })
}

function initApp5(){
    products5.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item5');
        newDiv.innerHTML = `
            <div class="div_img_food"><img class="food_img" src="/image/${value.image5}"></div>
            <div class="food_name">${value.name5}</div>
            <div class="food_infor">${value.tt5}</div>
            <div class="footer_div_food">
                <div class="food_price">${value.price5.toLocaleString()}</div>
                <button id="btn_cart7" onclick="addToCard5(${key})">Add to cart</button>
            `;
        list5.appendChild(newDiv);
    })
}

function initApp6(){
    products6.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item6');
        newDiv.innerHTML = `
            <div class="div_img_food"><img class="food_img" src="/image/${value.image6}"></div>
            <div class="food_name">${value.name6}</div>
            <div class="food_infor">${value.tt6}</div>
            <div class="footer_div_food">
                <div class="food_price">${value.price6.toLocaleString()}</div>
                <button id="btn_cart7" onclick="addToCard6(${key})">Add to cart</button>
            `;
        list6.appendChild(newDiv);
    })
}

initApp();
initApp1();
initApp2();
initApp3();
initApp4();
initApp5();
initApp6();

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

function addToCard3(key){
    if(listCards3[key] == null){
        // copy product form list to list card
        listCards3[key] = JSON.parse(JSON.stringify(products3[key]));
        listCards3[key].quantity = 1;
    }
    reloadCard();
}

function addToCard4(key){
    if(listCards4[key] == null){
        // copy product form list to list card
        listCards4[key] = JSON.parse(JSON.stringify(products4[key]));
        listCards4[key].quantity = 1;
    }
    reloadCard();
}

function addToCard5(key){
    if(listCards5[key] == null){
        // copy product form list to list card
        listCards5[key] = JSON.parse(JSON.stringify(products5[key]));
        listCards5[key].quantity = 1;
    }
    reloadCard();
}

function addToCard6(key){
    if(listCards6[key] == null){
        // copy product form list to list card
        listCards6[key] = JSON.parse(JSON.stringify(products6[key]));
        listCards6[key].quantity = 1;
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
                <div class="div_name"><p>${value.name}</p></div>
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
                <div><img class="img_cart" src="/image/${value.image1}"/></div>
                <div class="div_name"><p>${value.name1}</p></div>
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
                <div><img class="img_cart" src="/image/${value.image2}"/></div>
                <div class="div_name"><p>${value.name2}</p></div>
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

    let count3 = count2;
    let totalPrice3 = totalPrice2;
    listCards3.forEach((value, key)=>{
        totalPrice3 = totalPrice3 + value.price3;
        count3 = count3 + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img class="img_cart" src="/image/${value.image3}"/></div>
                <div class="div_name"><p>${value.name3}</p></div>
                <div>${value.price3.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity3(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity3(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice3.toLocaleString();
    quantity.innerText = count3;

    let count4 = count3;
    let totalPrice4 = totalPrice3;
    listCards4.forEach((value, key)=>{
        totalPrice4 = totalPrice4 + value.price4;
        count4 = count4 + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img class="img_cart" src="/image/${value.image4}"/></div>
                <div class="div_name"><p>${value.name4}</p></div>
                <div>${value.price4.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity4(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity4(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice4.toLocaleString();
    quantity.innerText = count4;

    let count5 = count4;
    let totalPrice5 = totalPrice4;
    listCards5.forEach((value, key)=>{
        totalPrice5 = totalPrice5 + value.price5;
        count5 = count5 + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img class="img_cart" src="/image/${value.image5}"/></div>
                <div class="div_name"><p>${value.name5}</p></div>
                <div>${value.price5.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity5(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity5(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice5.toLocaleString();
    quantity.innerText = count5;

    let count6 = count5;
    let totalPrice6 = totalPrice5;
    listCards6.forEach((value, key)=>{
        totalPrice6 = totalPrice6 + value.price6;
        count6 = count6 + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img class="img_cart" src="/image/${value.image6}"/></div>
                <div class="div_name"><p>${value.name6}</p></div>
                <div>${value.price6.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity6(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity6(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice6.toLocaleString();
    quantity.innerText = count6;

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

function changeQuantity3(key, quantity){
    if(quantity == 0){
        delete listCards3[key];
    }else{
        listCards3[key].quantity = quantity;
        listCards3[key].price3 = quantity * products3[key].price3;
    }
    reloadCard();
}

function changeQuantity4(key, quantity){
    if(quantity == 0){
        delete listCards4[key];
    }else{
        listCards4[key].quantity = quantity;
        listCards4[key].price4 = quantity * products4[key].price4;
    }
    reloadCard();
}

function changeQuantity5(key, quantity){
    if(quantity == 0){
        delete listCards5[key];
    }else{
        listCards5[key].quantity = quantity;
        listCards5[key].price5 = quantity * products5[key].price5;
    }
    reloadCard();
}

function changeQuantity6(key, quantity){
    if(quantity == 0){
        delete listCards6[key];
    }else{
        listCards6[key].quantity = quantity;
        listCards6[key].price6 = quantity * products6[key].price6;
    }
    reloadCard();
}

//phan fixed menu_mini
window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    if (window.scrollY >= 607) {
        menu.classList.add('menu_mini');
    } else {
        menu.classList.remove('menu_mini');
    }
    });

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

//   menu
const menu_image = document.querySelector(".menu_img");
const drop_menu_small = document.querySelector(".menu_small");

menu_image.onclick = function() {
    drop_menu_small.classList.toggle('open_menu_small');
}


window.addEventListener("scroll",function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky",window.scrollY > 0);
})