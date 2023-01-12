const countEvents = () => {
  const cardElements = document.querySelectorAll('#events-list > .card');
  return cardElements.length;
};

export default countEvents;
