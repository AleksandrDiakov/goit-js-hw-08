import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`
    })
    .join('');
}

let lightboxGallery = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
});
    lightboxGallery.on('show.simplelightbox');

console.log(galleryItems);