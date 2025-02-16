//untuk menambahkan item ke keranjang dan menyimpannya di localStorage
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} Ditambahkan ke keranjang!`);
}

//untuk menampilkan keranjang di halaman cart.html
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartElement = document.getElementById('cart');
    let total = 0;

    cartElement.innerHTML = '';

    cart.forEach((item, index) => {
        total += item.price;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        const itemName = document.createElement('span');
        itemName.textContent = `${item.name} - Rp ${item.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        
        cartItem.appendChild(itemName);
        cartItem.appendChild(removeButton);
        
        cartElement.appendChild(cartItem);
    });

    document.getElementById('total').textContent = `Total: Rp ${total}`;
    localStorage.setItem('total', total);
}

//untuk menghapus item dari keranjang
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

displayCart(); // Memuat keranjang saat halaman dibuka

function saveContactInfo() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if (cart.length === 0) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Anda belum memesan apapun!";
        return; 
    }

    if (name && address && phone) {
        localStorage.setItem('contactInfo', JSON.stringify({
            name,
            address,
            phone
        }));
        window.location.href = 'payment.html'; 
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Harap isi semua informasi kontak!";
    }
}
displayCart();


