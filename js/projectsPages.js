const projectGroup = document.querySelector('.projects');

const data = [
  {
    img: "https://i.pinimg.com/564x/dc/51/00/dc5100a29f67ce40f4972172e3a8c236.jpg",
    title: 'E-commerce',
   description: 'Jumia Clone - a clone from the main Jumia e-commerce store',
   link:"https://jumia-clone-7426b.web.app",
 },
 {
  img: "https://i.pinimg.com/originals/53/13/34/531334345574129dcc9e53d39d3ce0fc.jpg",
  title: 'Restaurant',
 description: 'A demo Restaurant site that displays food.',
 link:"https://foodiiy.netlify.app/",
},
{
  img: "https://i.pinimg.com/originals/7f/84/e6/7f84e6245c28a0e056b88c5c1b389cde.jpg",
  title: 'Mini-shop',
 description: 'A demo Mini-shop site that displays electronics',
 link:"https://miniecommerce.netlify.app/",
},
 {
  img: "https://i.pinimg.com/originals/41/25/00/412500dd8a3c60b3d754ac12c9242709.png",
  title: 'Weather',
 description: 'Weather Forecast App that displays weather for the day on request',
 link:"https://weatherforcastapp.netlify.app/",
},
{
  img: "https://i.pinimg.com/originals/9c/d0/ff/9cd0ff6a77f0ae22de9272d498fe225c.jpg",
  title: 'Banking',
 description: 'Loan Repayment App that calculates the loan amount you qualify for.',
 link:"https://loana.netlify.app/",
},


];

window.addEventListener('load', (event)=>{
    showProjects(data)
});


function showProjects(data){
    const htmlString = data.map((project)=>{
        return `

        <a  class="" href="${project.link}" target="_blank" rel="noopener noreferrer">
        <div class="card introCards " style="width: 18rem;">
        <div class="image">
        <img src="${project.img}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
        <h5 class="card-title orange">${project.title}</h5>
        <p class="card-text text textParagraph">${project.description}</p>
        </div>
        </div>
        </a>

        `;
    }).join('');

    projectGroup.innerHTML = htmlString;
}
