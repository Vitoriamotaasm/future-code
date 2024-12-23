const carousel = document.querySelector('.portfolio-carousel') as HTMLElement;
const prevButton = document.getElementById('prev') as HTMLButtonElement;
const nextButton = document.getElementById('next') as HTMLButtonElement;

let scrollPosition = 0;

prevButton.addEventListener('click', () => {
    scrollPosition -= carousel.offsetWidth / 3; // Move um item para a esquerda
    carousel.style.transform = `translateX(-${Math.max(scrollPosition, 0)}px)`;
});

nextButton.addEventListener('click', () => {
    scrollPosition += carousel.offsetWidth / 3; // Move um item para a direita
    const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
    carousel.style.transform = `translateX(-${Math.min(scrollPosition, maxScroll)}px)`;
});
