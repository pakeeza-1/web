// Array to hold the cart items
const cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    // Find the product element by ID
    const productElement = document.querySelector(`.product[data-id='${productId}']`);
    
    // Extract product details
    const productName = productElement.getAttribute("data-name");
    const productPrice = parseFloat(productElement.getAttribute("data-price"));
    
    // Create a product object
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
    };
    
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity
    } else {
        cart.push(product); // Add new product
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display in the HTML
function updateCartDisplay() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = ""; // Clear the cart display

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartElement.appendChild(listItem);
    });
}

}

