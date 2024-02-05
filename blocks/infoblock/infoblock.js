export default function decorate(block) {
  const list = block.querySelector('ul');
  if (list) {
    list.querySelectorAll('li > span > img').forEach((el) => {
      el.src = '/icons/diamond.png';
    });
  }
}
