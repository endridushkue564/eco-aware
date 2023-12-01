/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a sophisticated and complex JavaScript implementation
 * that simulates a realistic e-commerce store with various features and functionalities.
 */

// Global variables
const PRODUCTS = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 }
];
let cart = [];

// Function to display available products
function displayProducts() {
  console.log("Available Products:");
  PRODUCTS.forEach((product) => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = PRODUCTS.find((product) => product.id === productId);
  if (product) {
    cart.push(product);
    console.log(`${product.name} added to cart.`);
  } else {
    console.log("Invalid product ID.");
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  const index = cart.findIndex((product) => product.id === productId);
  if (index !== -1) {
    const product = cart.splice(index, 1)[0];
    console.log(`${product.name} removed from cart.`);
  } else {
    console.log("Product not found in cart.");
  }
}

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}

// Function to checkout items in the cart
function checkout() {
  const totalPrice = calculateTotalPrice();
  console.log("Checkout initiated...");
  console.log(`Total price: $${totalPrice}`);

  // Simulate payment processing delay
  setTimeout(() => {
    console.log("Payment processed. Thank you for your purchase!");
    cart = [];
  }, 2000);
}

// Demo usage of the above functions
displayProducts();
addToCart(1);
addToCart(3);
removeFromCart(2);
addToCart(2);
displayProducts();
checkout();