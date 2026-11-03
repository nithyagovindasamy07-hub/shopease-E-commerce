
let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();
    alert(name + " added to cart successfully!");
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");

        div.innerHTML = `
            ${item.name} - ₹${item.price.toLocaleString("en-IN")}
            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    cartCount.textContent = cart.length;
    totalElement.textContent = total.toLocaleString("en-IN");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add products.");
    } else {
        alert("Thank you for shopping with SmartCart!");
        cart = [];
        updateCart();
    }
}
