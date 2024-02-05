export default function decorate(block) {
  // reset block
  block.innerHTML = '';

  const p1 = document.createElement('p');
  p1.innerHTML = 'TriMark USA, LLC &nbsp;&nbsp;&nbsp; 9 Hampshire Street &nbsp;&nbsp;&nbsp; Mansfield, MA 02048 &nbsp;&nbsp;&nbsp; P:888.662.6935';
  block.append(p1);
  const p2 = document.createElement('p');
  p2.innerHTML = 'Copyright © 2024 TriMark. All Rights Reserved.';
  block.append(p2);
}
