let productos = [
    {
        id: 1,
        img1: './img/Abbey_Road.jpg',
        nombre: 'Abbey Road',
        desc1: 'Artista: The Beatles',
        desc2: 'Genero: Rock, Pop',
        desc3: 'Fecha: 26 de septiembre de 1969',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 200,
    },
    {
        id: 2,
        img1: './img/revolver.jpg',
        nombre: 'Revolver',
        desc1: 'Artista: The Beatles',
        desc2: 'Genero: Rock, Pop',
        desc3: 'Fecha: 5 de agosto de 1966',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 100,
    },
    {
        id: 3,
        img1: './img/_Lonely_Hearts_Club_Band.jpg',
        nombre: 'The Lonely Hearts Club Band',
        desc1: 'Artista: The Beatles',
        desc2: 'Genero: Pop, Rock, Psicodelico',
        desc3: 'Fecha: 1 de junio de 1967',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 120,
    },
    {
        id: 4,
        img1: './img/TheDarkSideftheMoon.jpg',
        nombre: 'The Dark Side of the Moon',
        desc1: 'Artista: Pink Floyd',
        desc2: 'Genero: Rock, Progresivo',
        desc3: 'Fecha: 1 de marzo de 1973',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 150,
    },
    {
        id: 5,
        img1: './img/WishYouWereHere.jpg',
        nombre: 'Wish You Were Here',
        desc1: 'Artista: Pink Floyd',
        desc2: 'Genero: Rock, Progresivo',
        desc3: 'Fecha: 12 de septiembre de 1975',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 350,
    },
    {
        id: 6,
        img1: './img/TheWall.jpg',
        nombre: 'The Wall',
        desc1: 'Artista: Pink Floyd',
        desc2: 'Genero: Rock, Progresivo',
        desc3: 'Fecha: 30 de noviembre de 1979',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 200,
    },
    {
        id: 7,
        img1: './img/Queen\'sGreatestHits.jpg',
        nombre: 'Queen\'s Greatest Hits',
        desc1: 'Artista: Queen',
        desc2: 'Genero: Rock, Progresivo',
        desc3: 'Fecha: 2 de noviembre de 1981',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 550,
    },
    {
        id: 8,
        img1: './img/ANightattheOpera.jpg',
        nombre: 'A Night at the Opera',
        desc1: 'Artista: Queen',
        desc2: 'Genero: Rock, Progresivo',
        desc3: 'Fecha: 21 de noviembre de 1975',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 200,
    },
    {
        id: 9,
        img1: './img/NewsoftheWorld.jpg',
        nombre: 'News of the World',
        desc1: 'Artista: Queen',
        desc2: 'Genero: Rock, Progresivo',
        desc3: 'Fecha: 28 de octubre de 1977',
        desc4: 'Formato: LP (33 1/3 RPM)',
        precio: 150,
    },
]
let carrito = []

let cards = document.getElementById('cards')

document.addEventListener('DOMContentLoaded', function () {
    pintarProductos();
});

function pintarProductos() {
    productos.forEach(producto => {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardImg = document.createElement('div');
        cardImg.classList.add('card-img');
        let img = document.createElement('img');
        img.src = producto.img1;
        cardImg.appendChild(img);
        card.appendChild(cardImg);

        let cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');
        let title = document.createElement('p');
        title.classList.add('text-title');
        title.textContent = producto.nombre;
        cardInfo.appendChild(title);

        let textBody = document.createElement('div');
        textBody.classList.add('text-body');
        let ul = document.createElement('ul');
        let desc1 = document.createElement('li');
        desc1.textContent = producto.desc1;
        ul.appendChild(desc1);
        let desc2 = document.createElement('li');
        desc2.textContent = producto.desc2;
        ul.appendChild(desc2);
        let desc3 = document.createElement('li');
        desc3.textContent = producto.desc3;
        ul.appendChild(desc3);
        let desc4 = document.createElement('li');
        desc4.textContent = producto.desc4;
        ul.appendChild(desc4);
        textBody.appendChild(ul);
        cardInfo.appendChild(textBody);
        card.appendChild(cardInfo);

        let cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');
        let price = document.createElement('span');
        price.classList.add('text-title');
        price.textContent = `$${producto.precio}`;
        cardFooter.appendChild(price);

        let cardButton = document.createElement('button');
        cardButton.classList.add('card-button');
        cardButton.id = 'liveToastBtn';
        cardButton.setAttribute('data-bs-delay', '1000');
        cardButton.addEventListener('click', () => {
            agregarAlCarrito(producto.id);
            let toastBootstrap = new bootstrap.Toast(document.getElementById('liveToast'));
            toastBootstrap.show()
        });
        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-shopping-cart');
        cardButton.appendChild(icon);
        cardFooter.appendChild(cardButton);
        card.appendChild(cardFooter);
        cards.appendChild(card);
    })
}



// Agregar al carrito el producto seleccionado y sumar el total del carrito 

let totalCarrito = 0

function agregarAlCarrito(id) {

    let productoSelect = productos.find(producto => producto.id === id);
    let productoCarrito = carrito.find(producto => producto.id === id);

    if (productoCarrito) {
        productoCarrito.cantidad++;
    } else {
        carrito.push({
            id: productoSelect.id,
            nombre: productoSelect.nombre,
            precio: productoSelect.precio,
            img1: productoSelect.img1,
            cantidad: 1,
        });
    }
    totalCarrito += productoSelect.precio;
    pintarEnCarrito();

}

function pintarEnCarrito() {
    let carritoHTML = document.getElementById('contItemsCarrito');
    carritoHTML.innerHTML = '';
    carrito.forEach(producto => {

        let subTotal = producto.precio * producto.cantidad;

        tr = document.createElement('tr');

        td = document.createElement('td');
        let img = document.createElement('img');
        img.src = producto.img1;
        img.classList.add('imgCarrito');
        td.appendChild(img);
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = producto.nombre;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = producto.precio;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = producto.cantidad;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = subTotal;
        tr.appendChild(td);

        td = document.createElement('td');
        let button = document.createElement('button');
        button.textContent = '❌';
        button.classList.add('button3');
        button.addEventListener('click', () => {
            delItemCarrito(producto.id);
        });
        td.appendChild(button);
        tr.appendChild(td);

        carritoHTML.appendChild(tr);
    });

    let total = document.getElementById('totalCarrito');
    total.textContent = `El total del carrito es; ${totalCarrito}`

}

function vaciarCarrito() {
    carrito = [];
    totalCarrito = 0;
    pintarEnCarrito();
}

function delItemCarrito(id) {
    let productoCarrito = carrito.find(producto => producto.id === id);
    totalCarrito -= productoCarrito.precio * productoCarrito.cantidad;
    carrito = carrito.filter(producto => producto.id !== id);
    pintarEnCarrito();
}