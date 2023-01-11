const eventsList = document.getElementById('events-list');

const showLikesDom = (likes) => {
  eventsList.querySelectorAll('.card').forEach((el) => {
    const cardId = el.dataset.card;

    const [likeObj] = likes.filter(({ item_id: itemId }) => itemId === cardId);
    const likeCount = likeObj?.likes || 0;

    const likeCountEl = el.querySelector('.like-count');
    likeCountEl.textContent = likeCount + 1;
  });
};

export default showLikesDom;
