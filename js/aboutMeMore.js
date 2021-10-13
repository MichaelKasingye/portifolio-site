const projectGroup = document.querySelector('.moreOfMe');

const data = [
  {
    title: 'Blogs',
    img:"https://i.pinimg.com/originals/8d/97/9e/8d979e05d5f5a29bc48f91fffda6327e.jpg",
 link:"https://michaelkasingye.medium.com/",
},
{
   title: 'YouTube',
img:"https://i.pinimg.com/originals/2d/26/6b/2d266b4166cd6c2084be34917296698c.jpg",
link:"https://www.youtube.com/channel/UCMsbWRujsYQAremu5Zdu-BA",
},
{
title: 'GitHub',
img:"https://i.pinimg.com/originals/c5/85/8b/c5858b2815257252b453abbdcfcf71ae.jpg",
link:"https://github.com/michaelkasingye",
},

];

window.addEventListener('load', (event)=>{
    showProjects(data)
});


function showProjects(data){
    const htmlString = data.slice(0,3).map((info)=>{
        return `
        <a  class="" href="${info.link}" target="_blank" rel="noopener noreferrer">
      <div class="card introCardsMoreAbout " style="width: 18rem;">
      <div class="imageMe">
        <img src="${info.img}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title orange">${info.title}</h5>
        </div>
      </div>
    </a>

        `;
    }).join('');

    projectGroup.innerHTML = htmlString;
}
