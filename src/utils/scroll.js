export const scrollElementHeight = (amount) => {

    // плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень
    const refsGalleryContainer = document.querySelector('#galleryContainer');
    const { height: cardHeight } = refsGalleryContainer.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * amount,
        behavior: "smooth",
    });
};

export const scrollToTop = () => { 
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
}
