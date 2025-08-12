// Cart functionality (prepared for future backend integration)
let cart = [];

// Add item to cart
function addToCart(productId) {
  const product = getProductInfo(productId);

  // Add to cart array (prepared for backend)
  cart.push({
    id: productId,
    name: product.name,
    timestamp: new Date().toISOString(),
  });

  // Update cart display
  updateCartDisplay();

  // Show confirmation
  showNotification(`${product.name} added to cart!`);

  console.log("Cart updated:", cart); // For development
}

// Get product information
function getProductInfo(productId) {
  const products = {
    mashontsa: { name: "Mashontsa", category: "food" },
    achaar: { name: "Achaar", category: "food" },
    "cow-meat": { name: "Cow Meat", category: "food" },
    pork: { name: "Pork", category: "food" },
    "cockroach-killer": { name: "Cockroach Killer", category: "home" },
    "tissue-oil": { name: "Tissue Oil", category: "home" },
    "hand-cream": { name: "Tissue Oil Hand Cream", category: "home" },
    "foam-bath": { name: "Foam Bath Tissue Oil", category: "home" },
    "body-cream": { name: "Body Cream", category: "home" },
    perfume: { name: "Perfume", category: "home" },
    "sachet-mpesu": { name: "Sachet Mpesu", category: "home" },
  };

  return (
    products[productId] || { name: "Unknown Product", category: "unknown" }
  );
}

// Update cart display (prepared for future UI)
function updateCartDisplay() {
  const cartCount = cart.length;
  console.log(`Cart has ${cartCount} items`);
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2c5530;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Contact modal functionality
function showContactInfo() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "block";
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "none";
}

window.onclick = (event) => {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// Mobile menu toggle functionality
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  const toggle = document.querySelector(".mobile-menu-toggle");

  navLinks.classList.toggle("active");
  toggle.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navLinksContainer = document.getElementById("navLinks");
      const toggle = document.querySelector(".mobile-menu-toggle");

      navLinksContainer.classList.remove("active");
      toggle.classList.remove("active");
    });
  });
});

// Future backend integration functions (prepared)
async function submitOrder(orderData) {
  console.log("Order to be submitted:", orderData);
}

async function getProducts() {
  console.log("Products will be fetched from backend");
}

// Initialize cart from localStorage (for persistence)
function initializeCart() {
  const savedCart = localStorage.getItem("lathavha_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("lathavha_cart", JSON.stringify(cart));
}

// Update cart saving whenever cart changes
function updateCart(productId) {
  const product = getProductInfo(productId);

  cart.push({
    id: productId,
    name: product.name,
    timestamp: new Date().toISOString(),
  });

  saveCart(); // Save to localStorage
  updateCartDisplay();
  showNotification(`${product.name} added to cart!`);
}

// Initialize on page loadd
document.addEventListener("DOMContentLoaded", () => {
  initializeCart();
});
