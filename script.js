// =========================
// Shopping Cart - Part 1
// =========================

const cartIcon = document.querySelector(".fa-cart-shopping");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = [];

// Open Cart
cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});

// Close Cart
closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});

// Product Buttons
const buttons = document.querySelectorAll(".card button");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const name = card.querySelector("h3").innerText;

        const priceText = card.querySelector("p").innerText;

        const price = parseInt(priceText.replace(/[^\d]/g, ""));

        cart.push({
            name,
            price
        });

        updateCart();

    });

});

// Update Cart
function updateCart(){

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index)=>{

        total += item.price;

        cartItems.innerHTML += `

        <div class="cart-item">

            <div>

                <h4>${item.name}</h4>

                <p>PKR ${item.price}</p>

            </div>

            <button onclick="removeItem(${index})">

                Remove

            </button>

        </div>

        `;

    });

    cartTotal.innerText = "PKR " + total;

}

// Remove Item
function removeItem(index){

    cart.splice(index,1);

    updateCart();

}
