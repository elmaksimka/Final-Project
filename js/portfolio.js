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
      let htmlSegment = `<div id="test">
      <div class="user">
                           <img src="${project.image}" >
                           <h2>Project name: ${project.project_name}</h2>
                           <div id="test-hidden" class="test-hidden">
                            <span>${project.created_at}</span>
                            <span>${project.technologies}</span>
                            <span>${project.price}</span>
                          </div>
                         </div>
                         </div>`;
      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderProjects(lastProjectsElements);

// document.addEventListener('mouseover', function (e) {
//   if (e.target && e.target.id === 'test') {
//      document.querySelector('.test-hidden').style.display = 'block';
//   }
// })

const frequentUsed = document.querySelector('#frequentUsed');
const name = document.querySelector('#name');
const onReact = document.querySelector('#onReact');
const price = document.querySelector('#price');

frequentUsed.addEventListener('click', () => {
  const filteredByFrequentUsed = generalProjects.filter((item) => item.project_name.includes('Sonair'));
  renderProjects(filteredByFrequentUsed);
});
name.addEventListener('click', () => {
  const filteredByName = [...generalProjects];
  filteredByName.sort((a,b) => {    
    var textA = a.name;
    var textB = b.name;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  console.log(filteredByName);
  renderProjects(filteredByName);
});
onReact.addEventListener('click', () => {
  const filteredByReact = generalProjects.filter((item) => item.technologies.find((item) => item === 'React'));
  renderProjects(filteredByReact);
});
price.addEventListener('click', () => {
  const filteredByPrice = [...generalProjects];
  filteredByPrice.sort((a,b) => a.price - b.price);
  console.log(filteredByPrice);
  renderProjects(filteredByPrice);
});

const button = document.querySelector('.portfolio__button');
button.addEventListener('click', () => {
  renderProjects(generalProjects);
})