async function getProjects() {
  let url = 'http://localhost:3000/projects';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

let generalProjects = await getProjects();
const lastProjectsElements = generalProjects.slice(-6);

async function renderProjects(projects) {
  let html = '';

  projects.map(project => {
      let htmlSegment = `
      <div class="portfolio__container__project">
                           <img src="${project.image}" >
                           <h2>Project name: ${project.project_name}</h2>
                           <div class="portfolio__container__project__text-hidden">
                            <span>Created at: ${project.created_at}</span>
                            <div>Technologies: ${project.technologies}</div>
                            <span>Price: ${project.price}</span>
                          </div>
                         </div>
`;
      html += htmlSegment;
  });

  let container = document.querySelector('.portfolio__container');
  container.innerHTML = html;
}

renderProjects(lastProjectsElements);

const frequentUsed = document.querySelector('#frequentUsed');
const onReact = document.querySelector('#onReact');
const highPrice = document.querySelector('#highPrice');

frequentUsed.addEventListener('click', () => {
  const filteredByFrequentUsed = generalProjects.filter((item) => item.project_name.includes('Sonair'));
  frequentUsed.style.backgroundColor = '#7ababa';
  onReact.style.backgroundColor = 'transparent';
  highPrice.style.backgroundColor = 'transparent';
  renderProjects(filteredByFrequentUsed);

  if (btn.style.display = 'none') {
    btn.style.display = 'block';
  }
});

onReact.addEventListener('click', () => {
  const filteredByReact = generalProjects.filter((item) => item.technologies.find((item) => item === 'React'));
  onReact.style.backgroundColor = '#7ababa';
  frequentUsed.style.backgroundColor = 'transparent';
  highPrice.style.backgroundColor = 'transparent';
  renderProjects(filteredByReact);

  if (btn.style.display = 'none') {
    btn.style.display = 'block';
  }
});

highPrice.addEventListener('click', () => {
  const filteredByPrice = generalProjects.filter((item) => item.price > 700);
  highPrice.style.backgroundColor = '#7ababa';
  frequentUsed.style.backgroundColor = 'transparent';
  onReact.style.backgroundColor = 'transparent';
  renderProjects(filteredByPrice);

  if (btn.style.display = 'none') {
    btn.style.display = 'block';
  }
});

frequentUsed.addEventListener('dblclick', () => {
  frequentUsed.style.backgroundColor = 'transparent';
  renderProjects(generalProjects.slice(-6));
});

onReact.addEventListener('dblclick', () => {
  onReact.style.backgroundColor = 'transparent';
  renderProjects(generalProjects.slice(-6));
});

highPrice.addEventListener('dblclick', () => {
  highPrice.style.backgroundColor = 'transparent';
  renderProjects(generalProjects.slice(-6));
});

const btn = document.querySelector('.portfolio__button');
btn.addEventListener('click', () => {
  frequentUsed.style.backgroundColor = '#7ababa';
  onReact.style.backgroundColor = '#7ababa';
  highPrice.style.backgroundColor = '#7ababa';
  renderProjects(generalProjects);
  btn.style.display = 'none';
})