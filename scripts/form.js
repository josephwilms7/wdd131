const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productSelect = document.getElementById('productName');
const ratingContainer = document.getElementById('rating');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

for (let i = 1; i <= 5; i++) {
    const label = document.createElement('label');
    label.innerHTML = `
        <input type="radio" name="rating" value="${i}" required> ${'★'.repeat(i)} ${'☆'.repeat(5 - i)}
    `;
    ratingContainer.appendChild(label);
}

const year = document.getElementById("currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
  let reviewCount = localStorage.getItem('reviewCount') || 0;
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);
  
  const reviewCountDisplay = document.getElementById('reviewCount');
  reviewCountDisplay.textContent = `You have completed ${reviewCount} reviews.`;
});