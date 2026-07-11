// =========================================
// ANAYA SCENTS LUXURY WEBSITE
// PART 3 - SHOPPING CART SYSTEM
// =========================================


let cart = [];


// Add product to cart

function addToCart(name, price, image) {

    let product = {
        name: name,
        price: price,
        image: image,
        quantity: 1
    };


    let existing = cart.find(item => item.name === name);


    if(existing){

        existing.quantity++;

    } else {

        cart.push(product);

    }


    updateCart();

    openCart();

}



// Update Cart

function updateCart(){

    let cartItems = document.getElementById("cart-items");

    let cartCount = document.getElementById("cart-count");

    let total = document.getElementById("cart-total");


    cartItems.innerHTML = "";


    let totalAmount = 0;

    let count = 0;



    cart.forEach((item,index)=>{


        totalAmount += item.price * item.quantity;

        count += item.quantity;



        cartItems.innerHTML += `

        <div class="cart-item">

        <div>

        <h4>${item.name}</h4>

        <p>
        Rs. ${item.price}
        x ${item.quantity}
        </p>

        </div>


        <button onclick="removeItem(${index})">
        ❌
        </button>


        </div>

        `;


    });



    cartCount.innerHTML = count;

    total.innerHTML = 
    "Total: Rs. " + totalAmount;



}



// Remove item

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}



// Open Cart

function openCart(){

    document
    .getElementById("cart-sidebar")
    .classList
    .add("active");

}



// Close Cart

function closeCart(){

    document
    .getElementById("cart-sidebar")
    .classList
    .remove("active");

}



// Checkout

function checkout(){


    if(cart.length === 0){

        alert(
        "Your cart is empty!"
        );

        return;

    }


    let message =
    "Hello Anaya Scents,%0A%0A";


    cart.forEach(item=>{

        message +=
        item.name +
        " x " +
        item.quantity +
        " = Rs. " +
        item.price * item.quantity +
        "%0A";

    });



    message +=
    "%0AThank you!";


    window.open(
    "https://wa.me/?text=" 
    + message
    );

}
