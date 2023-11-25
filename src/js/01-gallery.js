import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', galleryList(galleryItems));

function galleryList(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}">
    </a>
    </li>
    `
    )
    .join('');
}

let gallery = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.5,
});
