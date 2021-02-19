const projectGroup = document.querySelector('.project-group');

const data = [
    {
        "typeOfProject":"Portfolio ",
        "shortDescription":"Portfolio  site (HTML, CSS, JavaScript)",
        "image": "https://i.pinimg.com/originals/44/83/37/448337fd82e8c13de37548a9e7ca1261.jpg",
        "projectLink": "https://michaelkasingye.netlify.app/"      
    },
  {
        "typeOfProject":"E-commerce",
        "shortDescription":"Jumia Clone - Mini (React JS)",
        "image": "https://i.pinimg.com/564x/dc/51/00/dc5100a29f67ce40f4972172e3a8c236.jpg",
        "projectLink": "https://jumia-clone-4fdfe.web.app/"      
    },
    {
        "typeOfProject":"Weather",
        "shortDescription":"Weather Forecast App (React JS)",
        "image": "https://i.pinimg.com/originals/41/25/00/412500dd8a3c60b3d754ac12c9242709.png",
        "projectLink": "https://weatherforcastapp.netlify.app/"      
    },
    {
        "typeOfProject":"Banking",
        "shortDescription":"Loan Repayment App (React-Redux JS)",
        "image": "https://i.pinimg.com/originals/9c/d0/ff/9cd0ff6a77f0ae22de9272d498fe225c.jpg",
        "projectLink": "https://loana.netlify.app/"      
    }
  
];

window.addEventListener('load', (event)=>{
    showProjects(data)
});


function showProjects(data){
    const htmlString = data.map((project)=>{
        return `
        <article class="project-tile">
        <a href="${project.projectLink}" target="_blank" rel="noopener noreferrer">
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
