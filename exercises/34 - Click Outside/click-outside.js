const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// opeen modal
function openModal(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // Grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // populate the modal with the new info
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc}" alt="${name}"/>
    <p>${desc}</p>
  `;
  // show the modal
  modalOuter.classList.add('open');
}

// close modal
function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (e) => {
  if (!e.target.closest('.modal-inner')) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

cardButtons.forEach((button) => button.addEventListener('click', openModal));
