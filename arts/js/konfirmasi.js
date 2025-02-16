function displayOrderDetails() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const contactInfo = JSON.parse(localStorage.getItem('contactInfo')) || {};
    const orderDetailsElement = document.getElementById('orderDetails');
    let total = 0;

    orderDetailsElement.innerHTML = '<h2>Detail Pesanan:</h2>';

    cart.forEach(item => {
        total += item.price;
        orderDetailsElement.innerHTML += `<div class="order-item"><span>${item.name} - Rp ${item.price}</span></div>`;
    });

    orderDetailsElement.innerHTML += `<h3>Total: Rp ${total}</h3>`;
    orderDetailsElement.innerHTML += `<h3>Informasi Kontak:</h3>
        <p>Nama: ${contactInfo.name}</p>
        <p>Alamat: ${contactInfo.address}</p>
        <p>Telepon: ${contactInfo.phone}</p>`;
}

a
displayOrderDetails();

const returnButton = document.getElementById('return-button');


returnButton.addEventListener('click', function() {
    localStorage.clear();
    
    window.location.href = "/index.html";
});


function removeCartItems() {
    localStorage.removeItem('cart'); 
    window.location.href = '/index.html';
}
