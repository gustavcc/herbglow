var backgrounds = document.querySelectorAll('.background');
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

// set the innitial image index
let imageIndex = 0;

function updateSlider(){
    // remove the 'active', 'previous'... classes from all images
    images.forEach(image => {
        image.classList.remove('active','previous','next','inactive');
    })

    //add 'active' class to the current image
    images[imageIndex].classList.add('active');

    //add the 'previous' class to the image before the current
    if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
    } else {
        images[images.length - 1].classList.add('previous');
    }

    //add the 'next' class to the image before the current
    if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
    } else {
        images[0].classList.add('next');
    }

    //add the 'inactive' class to the image before the current
    images.forEach((image, index) => {
        if (index !== imageIndex && index !== (imageIndex - 1 +  images.length) % images.length && index !== (imageIndex + 1) % images.length && index !== (imageIndex + 1) && index !== (imageIndex - 1)) {
            image.classList.add('inactive');
        }
    })

    //set the opacity of all backgorund divs to 0
    backgrounds.forEach(background => {
        background.style.opacity = 0;
    })

    //if the current image is active, set the opacity of  the corresponding background div to 1
    if (images[imageIndex].classList.contains('active')) {
        backgrounds[imageIndex].style.opacity = 1;
    }

    //ipdate the image index
    imageIndex = (imageIndex + 1) % images.length;
}

updateSlider();

setInterval(updateSlider, 4000);

var listProducts = [
    {
        id: 1,
        imagem: 'assets/img/tonico.jpg',
        descricao: 'Tônico HerbGlow',
        preco: '39,99',
    },
    {
        id: 2,
        imagem: 'assets/img/serum.jpg',
        descricao: 'Sérum HerbGlow',
        preco: '59,99',
    },
    {
        id: 3,
        imagem: 'assets/img/sabonete_2.jpeg',
        descricao: 'Sabonete Natural Kit HerbGlow',
        preco: '35,00',
    },
    {
        id: 4,
        imagem: 'assets/img/sabonete.jpg',
        descricao: 'Sabonete Natural HerbGlow',
        preco: '6,99',
    },
    {
        id: 5,
        imagem: 'assets/img/mascara_2.jpeg',
        descricao: 'Máscara HerbGlow',
        preco: '79,99',
    },
    {
        id: 6,
        imagem: 'assets/img/hidratante.jpg',
        descricao: 'Hidratante HerbGlow',
        preco: '29,99',
    },
    {
        id: 7,
        imagem: 'assets/img/esfoliante.jpg',
        descricao: 'Esfoliante Natural HerbGlow',
        preco: '79,99',
    },
]

for (product of listProducts) {
    const box = `
    <div class="box">
        <div class="imagem-product">
            <img src="${product.imagem}" alt="product">
        </div>
        <p>${product.descricao}</p>
        <div class="preco-carrinho">
            <h3>$${product.preco}</h3>
            <i onclick="clickCarrinho()" class="fa-solid fa-cart-plus"></i>
        </div>
        <div class="comprar">
            Comprar
        </div>
    </div>`;

    document.getElementById('boxes').innerHTML += box;
}

const carrinho = document.querySelector('.carrinho-teste');

function clickCarrinho() {
    alert('Produto Adicionado ao Carrinho!!')
}