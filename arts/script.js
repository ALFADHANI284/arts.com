let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
            })
        }
    })
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper (".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        display: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

var swiper = new Swiper (".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        display: 7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;




function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} Ditambahkan ke keranjang!`);
}


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

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function addToCart(name, price) {
            
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            cart.push({ name, price });
          
            localStorage.setItem('cart', JSON.stringify(cart));
            
           //notif
            Swal.fire({
                title: `${name} Ditambahkan!`,
                text: `Harga: Rp ${price}`,
                icon: 'success',
                showCloseButton: true,
                confirmButtonText: 'Lihat Keranjang',
                backdrop: `
                   
                `
            }).then((result) => {
                if (result.isConfirmed) {
                    // Arahkan ke halaman keranjang
                    window.location.href = '/html/cart.html'; 
                }
            });
        }

function showImage1() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show");
    document.getElementById("modal-img").src = "/menu/burger.png";
}

function showImage2() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/pizza.png";
}

function showImage3() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/nugget.png";
}

function showImage4() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/kentang goreng.png";
}

function showImage5() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/taco.png";
}

function showImage6() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/sandwich.png";
}

function showImage7() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/takoyaki.png";
}

function showImage8() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show");
    document.getElementById("modal-img").src = "/menu/hot dog(2).png";
}

function showImage9() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/spaghetti.png";
}

function showImage10() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/donat.png";
}

function showImage11() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/salad ayam.png";
}

function showImage12() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/prekedel.png";
}

function showImage13() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/sosis.png";
}

function showImage14() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/ayam goreng.png";
}

function showImage15() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("show"); 
    document.getElementById("modal-img").src = "/menu/burrito.png";
}


function closeImage() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show"); 
    setTimeout(() => {
        modal.style.display = "none"; 
    }, 500); 
}








