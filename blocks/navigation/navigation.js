function renderSearchBar(searchBarBlock) {
  searchBarBlock.classList.add('search-bar');
  const searchBar = document.createElement('div');
  const inputSearch = document.createElement('input');
  inputSearch.type = 'text';
  inputSearch.placeholder = searchBarBlock.innerText.trim();
  const inputImage = document.createElement('input');
  inputImage.type = 'image';
  inputImage.src = '/icons/search.svg';

  searchBar.append(inputSearch);
  searchBar.append(inputImage);
  // remove everything at first
  searchBarBlock.innerHTML = '';
  // add search bar
  searchBarBlock.append(searchBar);
}

function renderNavigationButtons(buttonsBlock) {
  buttonsBlock.classList.add('navigation-buttons');
  const orangeButton = buttonsBlock.children[0].children[0];
  const redButton = buttonsBlock.children[0].children[1];

  orangeButton.classList.add('orange');
  redButton.classList.add('red');
}

export default function decorate(block) {
  const navigationContent = document.createElement('div');
  const navigationLogo = block.children[0];
  navigationLogo.classList.add('navigation-logo');
  navigationContent.classList.add('navigation-content');
  navigationContent.append(...Array.from(block.children).slice(1));

  const navigationLinks = navigationContent.children[0];
  navigationLinks.classList.add('navigation-links');
  const searchBar = navigationContent.children[1];
  renderSearchBar(searchBar);
  const navigationButtons = navigationContent.children[2];
  renderNavigationButtons(navigationButtons);
  const navigationCategories = navigationContent.children[3];
  navigationCategories.classList.add('navigation-categories');
  block.append(navigationContent);
}
