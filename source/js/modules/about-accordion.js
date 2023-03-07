const btn = document.querySelector('.about__btn');

export const aboutAccordion = () =>
  btn.addEventListener('click', () => {
      btn.textContent = (btn.textContent === 'Подробнее') ? btn.textContent = 'Свернуть' : btn.textContent = 'Подробнее';
  });
