// Initialisation des variables
let cartCount = 0;
let totalPrice = 0;
const cartCountElement = document.getElementById('cart-count');
const cartSection = document.getElementById('cart-section');
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartIcon = document.querySelector('nav ul li a[href="#cart"]');

// Gestion du bouton "Ajouter au panier"
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.getAttribute('data-name');
    const productPrice = parseFloat(e.target.getAttribute('data-price'));

    cartCount++;
    totalPrice += productPrice;

    // Mettre à jour le compteur de panier
    cartCountElement.textContent = cartCount;

    // Ajouter le produit au panier avec bouton de suppression
    const productElement = document.createElement('div');
    const removeButton = document.createElement('button');
    removeButton.textContent = "Supprimer";
    removeButton.classList.add('remove-item');
    removeButton.addEventListener('click', () => {
      productElement.remove();
      cartCount--;
      totalPrice -= productPrice;
      cartCountElement.textContent = cartCount;
      totalPriceElement.textContent = (totalPrice / 100).toFixed(2);
    });

    productElement.textContent = `${productName} - ${productPrice / 100} FR `;
    productElement.appendChild(removeButton);
    cartItemsElement.appendChild(productElement);

    // Mettre à jour le total
    totalPriceElement.textContent = (totalPrice / 100).toFixed(2);
  });
});

// Afficher le panier sur clic de l'icône
cartIcon.addEventListener('click', (e) => {
  e.preventDefault(); // Empêche le comportement par défaut du lien
  if (cartSection.style.display === 'block') {
    cartSection.style.display = 'none'; // Cache le panier si déjà visible
  } else {
    cartSection.style.display = 'block'; // Affiche le panier
  }
});
