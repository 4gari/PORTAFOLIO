// Hover cambio de imagen
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

img1.addEventListener('mouseover', () => img1.src = 'imagenes-victor/imagen3.jpg');
img1.addEventListener('mouseout', () => img1.src = 'imagenes-victor/imagen1.jpg');

img2.addEventListener('mouseover', () => img2.src = 'imagenes-marcos/imagen4.jpg');
img2.addEventListener('mouseout', () => img2.src = 'imagenes-marcos/imagen2.jpg');

// Click para ir a los portafolios
img1.addEventListener('click', () => {
    window.location.href = 'victor.html';
});
img2.addEventListener('click', () => {
    window.location.href = 'marcos.html';
});
