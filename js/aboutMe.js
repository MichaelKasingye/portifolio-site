const projectGroup = document.querySelector('.aboutparagraph');
const Career = document.querySelector('.Career');


export const about = "I am a  Ugandan Front-end software developer. I love to build and work with teams to establish virtual platforms and systems that provide user satisfaction.";

export const intro ={
    image:"https://avatars.githubusercontent.com/u/42036497?v=4",
    title: ["Software Developer", "Coding Instructor"],
    name:"Michael Kasingye ",
    aboutMe1:"I have a love for software. I find joy in creating tools that make life easier for people to use. I take pride in what I am involved or create and I strive to be better than what I currently am.",
    aboutMe2:"I most commonly work with client applications (web based) although I  have some familiarity with backend technologies as well(Node javaScript, Express javaScript) and a language such as Java. The language I most frequently use is JavaScript for now. I am also very comfortable with version control systems such as GIT as well as project tracking tools such as Jira and Trello.",
}


export const skills ={
    
        skill:"Skills",
        roles:[
            {
                Title:"Leadership",
            description:" 1 year experience leading teams of 5-15 people in software development"
        },
            {
                Title:"Software",
                description:"1.5 years experience software developing web applications"
        },
        ],
        tech:"Technologies",
        tools:[
            {
                heading:"Languages",
            description:["JavaScript", "HTML", "CSS", "Express JS", "React JS", "Material UI", "Bootstrap "]
        },
        {
            heading:"Tools",
        description:["GIT", "Trello", "Jira"]
    }
        ],
}

export const data =[
    {
                jobtitle:"Software Developer - Volunteer",
                company:"Outbox",
                years:"Feb 2021 to present",
                heading:"Roles",
                tags:["Software Developer", "Team Leader", "Coding Instructor", "Mentor"],
            description:["I  Develop front-end a web application using React-Redux, context API and other libraries such as bootstrap  & Material-UI. ",
        "I lead, provide direction, motivation and mentorship to the Outbox EDU software development team interns in developing function and agile built software as a team Leader",
        "I inspire motivate and give direction to upcoming software developers into the software career as a mentor",
        "I teach programming and software development to aspiring software developers in JavaScript and React Js framework as a coding instructor"
        ]
        },
        {
            jobtitle:"Software Developer - Student",
            company:"Outbox",
            years:"October 2020 to February 2021",
            tags:["Student"],
            heading:"Roles",
        description:["To develop front-end  web application using React ",
    "To learn Backend using Node js Express and MongoDB.",
    "To learn to use Git and Github to manage development versions"
    ]
    },
    {
        jobtitle:"Software Developer - Self-Teaching",
        company:"Outbox",
        years:"April 2020 to October 2020",
        tags:["Self-Teaching"],
        heading:"Roles",
    description:["To learn front-end web applications using HTML CSS. ",
"To learn Languages like Java, JavaScript.",
"To learn  Git and Github to manage development versions."
]
},
]

window.addEventListener('load', (event)=>{
    showProjects()
    showCareer(data)
    CareerDescription(data)
});


function showProjects(){
    const htmlString = `${about}`;
    projectGroup.innerHTML = htmlString;
}

function showCareer(data){
  const htmlString = data.map((career)=>{
      return `

      <div class="CareerDetails" >
      <span class="jobtitle">${career.jobtitle}</span>
      <span class="years">${career.years}</span>


      <span class="heading">${career.heading}</span>
      <span class="description">
        <ul class="groupList">   </ul>
        </span>
      </div>

      `;
  }).join('');

  Career.innerHTML = htmlString;
}


const groupList = document.querySelector('.groupList');

function CareerDescription(data){
  const htmlString = data.tags.map((description)=>{
      return `
      <li >${description}</li>
      `;
  }).join('');

  groupList.innerHTML = htmlString;
}

{/* <span class="tags"><span >${career.tags.map(tags=>(<span >{tags}</span>))}</span></span> */}
