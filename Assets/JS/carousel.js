class Carousel {
    constructor(images, interval = 2000) {
        this.images = images;
        this.index = 0;
        this.intervalTime = interval;
        this.timer = null;

        // Elementos do carrossel
        this.imageElement = document.getElementById("img");
        this.titleElement = document.getElementById("carousel-title");

        // Botões
        this.prevBtn = document.getElementById("botaoTras");
        this.nextBtn = document.getElementById("botaoFrente");

        // Eventos
        this.prevBtn.addEventListener("click", () => this.back());
        this.nextBtn.addEventListener("click", () => this.next());

        // Inicia o carrossel
        this.updateCarousel();
        this.startAutoSlide();
    }

    updateCarousel() {
        const currentItem = this.images[this.index];

        // Atualiza imagem e título
        this.imageElement.src = currentItem.img;
        this.imageElement.alt = currentItem.title;
        this.titleElement.textContent = currentItem.title;
    }

    next() {
        this.index = (this.index + 1) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
    }

    back() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
    }

    startAutoSlide() {
        this.timer = setInterval(() => this.next(), this.intervalTime);
    }

    resetTimer() {
        clearInterval(this.timer);
        this.startAutoSlide();
    }
}

// Dados do carrossel
const carouselData = [
    {
        img: "./Assets/imgs/imagem_1.jpg",
        title: "Esta é a nova Ranger Ford 2022. Verifique novidades"
    },
    {
        img: "./Assets/imgs/imagem_2.jpg",
        title: "Conheça a nossa historia"
    },
    {
        img: "./Assets/imgs/imagem_3.jpg",
        title: "Nova Ford Bronco Sport 2022"
    }
];

// Inicializa o carrossel quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    new Carousel(carouselData);
});