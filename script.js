// Cambiar imágenes al pasar el mouse
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

img1.addEventListener('mouseover', () => img1.src = 'imagenes/i3.jpg');
img1.addEventListener('mouseout', () => img1.src = 'imagenes/i1.jpg');

img2.addEventListener('mouseover', () => img2.src = 'imagenes/i4.jpg');
img2.addEventListener('mouseout', () => img2.src = 'imagenes/i2.jpg');
