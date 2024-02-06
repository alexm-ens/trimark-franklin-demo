export function decorateTitleSection(main) {
  if (main.querySelector('#trimark-empowers-you-every-step-of-the-way')) {
    const list = main.querySelector('#trimark-empowers-you-every-step-of-the-way').nextElementSibling;
    list.classList.add('title-list');
    if (list) {
      list.querySelectorAll('li > span > img').forEach((el) => {
        el.src = '/icons/diamond.png';
      });
    }
  }
}

export function decorateBackgroundSection(main) {
  const backgroundSection = main.querySelector('.section.infoblock-container');
  if (backgroundSection) {
    const backgroundUrl = backgroundSection.dataset.background;

    backgroundSection.style.backgroundImage = `url(${backgroundUrl})`;
    backgroundSection.style.backgroundSize = 'cover';
  }
}
