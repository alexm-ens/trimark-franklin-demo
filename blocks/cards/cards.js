export default function decorate(block) {
  const cards = block.querySelectorAll(':scope > div > div');
  cards.forEach((el) => {
    el.classList.add('card');
  });
}
