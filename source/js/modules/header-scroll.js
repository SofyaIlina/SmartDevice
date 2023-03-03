export const headerScroll = () =>
  document.addEventListener('scroll', () => {
    let top = window.pageYOffset;
    let element = document.querySelector('.main-header');
    element.style.transition = '0.8s ease';
    if (top >= 150) {
      element.style.background = 'linear-gradient(180deg, #012478 84.9%, rgba(4, 24, 39, 0) 100%)';
    } else if (top <= 200) {
      element.style.background = 'linear-gradient(180deg, #041827 84.9%, rgba(4, 24, 39, 0) 100%)';
    }
  });
