export default function decorate(block) {
  // reset block
  block.innerHTML = '';

  const videoDiv = document.createElement('div');
  videoDiv.innerHTML = '<iframe width="962" height="571" src="https://www.youtube.com/embed/SHZkg04ehqw" title="Commercial Kitchen Equipment by Kintera" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  block.append(videoDiv);
}
