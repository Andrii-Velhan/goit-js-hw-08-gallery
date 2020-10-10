import imageRef from "./gallery-items.js";

console.log(imageRef);

const galleryContainer = document.querySelector('.js-gallery');
const cardsMarkup = createImageCardsMarkup(imageRef);


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImageCardsMarkup(imageRef) {
  return imageRef
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}

function onGalleryContainerClick(evt) {
  const isImageSwatchEl = evt.target.classList.contains('js-gallery');

  if (!isImageSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentImageCard = swatchEl.closest('gallery__item');

  //removeActiveCardClass();
  //addActiveCardClass(parentImageCard);
  //setBodyBgColor(swatchEl.dataset.source);
}

// function setBodyBgColor(source) {
//   document.body.style.backgroundColor = source;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.gallery__item.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }