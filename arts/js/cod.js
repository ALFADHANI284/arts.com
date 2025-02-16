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

displayOrderDetails();

n
function confirmOrder() {
    const orderConfirmation = `
        <div style="text-align: center;">
            <h2>Konfirmasi Pesanan</h2>
            <p>Apakah Anda yakin ingin mengonfirmasi pesanan melalui COD?</p>
            <button onclick="handleConfirm()">Ya</button>
            <button onclick="handleCancel()">Batal</button>
        </div>
    `;
    
    // alert
    const alertDiv = document.createElement('div');
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '50%';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translate(-50%, -50%)';
    alertDiv.style.padding = '20px';
    alertDiv.style.backgroundColor = '#ffffff';
    alertDiv.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
    alertDiv.innerHTML = orderConfirmation;
    
    document.body.appendChild(alertDiv);
}

function handleConfirm() {
    localStorage.setItem('konfirmasi.html', true);

    document.body.lastChild.remove();
    window.location.href = 'konfirmasi.html'; 
}

function handleCancel() {

    document.body.lastChild.remove();
}