function prepareProject(projectDiv) {
  const projectImage = projectDiv.querySelector('p:first-child > picture');
  console.log(projectImage);
  const imageLink = projectDiv.querySelector('p.button-container > a').href;

  // wrap link in image
  const imageLinkWrapper = document.createElement('a');
  imageLinkWrapper.href = imageLink;
  imageLinkWrapper.append(projectImage);

  // move image
  projectDiv.querySelector('p:first-child').append(imageLinkWrapper);

  // remove old link
  projectDiv.querySelector('p.button-container').remove();
}

export default function decorate(block) {
  const projectsGrid = document.createElement('div');
  projectsGrid.classList.add('projects-grid');
  projectsGrid.append(...Array.from(block.children).slice(1));
  Array.from(projectsGrid.children).forEach((el) => {
    el.classList.add('featured-project');
    prepareProject(el);
  });

  block.append(projectsGrid);

  // add view all project
  const viewAllProjects = document.createElement('div');
  viewAllProjects.classList.add('view-all-projects');
  viewAllProjects.innerHTML = '>> <a href="/portfolio">View All Projects</a>';
  block.append(viewAllProjects);
}
