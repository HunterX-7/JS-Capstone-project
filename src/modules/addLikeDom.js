import { addLike } from '../api/likesApi.js';

const addLikeDom = (e) => {
  const parent = e.target.closest('.card');
  const cardId = parent.dataset.card;
  addLike(cardId).then((success) => {
    if (success) {
      // Change likes count on DOM
      const likeCountEl = parent.querySelector('.like-count');
      const likeCount = Number(likeCountEl.textContent) || 0;
      likeCountEl.textContent = likeCount + 1;

      // Change like icon to filled
      e.target.classList.add('fa-solid');
      e.target.classList.remove('fa-regular');
    }
  });
};

export default addLikeDom;
