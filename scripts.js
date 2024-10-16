document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.querySelector('.cart-items');
  
  // Add recommended items dynamically to the cart section based on pet selection
  const recommendedItems = [
    { name: 'Dog Food', price: 20 },
    { name: 'Pet Bed', price: 50 },
  ];

  recommendedItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    cartItems.appendChild(itemElement);
  });
});
