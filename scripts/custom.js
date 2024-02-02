// eslint-disable-next-line import/prefer-default-export
export function decorateTitleSection(main) {
  const list = main.querySelector('#trimark-empowers-you-every-step-of-the-way').nextElementSibling;
  list.classList.add('title-list');
  if (list) {
    list.querySelectorAll('li > span > img').forEach((el) => {
      el.src = '/icons/diamond.png';
    });
  }
}
