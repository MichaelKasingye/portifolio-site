const projectGroup = document.querySelector('.project-group');

const data = [
    {
        "typeOfProject":"portfolio ",
        "shortDescription":"Portfolio  site built in HTML, CSS, JavaScript",
        "image": "https://i.pinimg.com/originals/44/83/37/448337fd82e8c13de37548a9e7ca1261.jpg",
        "projectLink": "https://michaelkasingye.netlify.app/"      
    },
    {
        "typeOfProject":"Weather",
        "shortDescription":"Weather Forecast App Built in React",
        "image": "https://i.pinimg.com/originals/41/25/00/412500dd8a3c60b3d754ac12c9242709.png",
        "projectLink": "https://weatherforcastapp.netlify.app/"      
    },
  
];

window.addEventListener('load', (event)=>{
    showProjects(data)
});


function showProjects(data){
    const htmlString = data.map((project)=>{
        return `
        <article class="project-tile">
        <a href="${project.projectLink}">
          <div class="project-tile-image">
            <img class="image" src="${project.image}" alt="landscape pic" />
          </div>
          <div class="project-info">
            <h5>${project.typeOfProject}</h5>
            <p>${project.shortDescription}</p>
          </div>
        </a>
      </article>
        `;
    }).join('');

    projectGroup.innerHTML = htmlString;
}
