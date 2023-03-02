export const headerScroll = () =>
  document.addEventListener('scroll', () => {
    document.querySelector('.main-header').style.background = 'green';
})
