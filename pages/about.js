import React from "react";

import Image from 'next/image'
import about from "../styles/About.module.css";
import {intro, skills, Career} from "../library/careerData"
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
Paragraph
function About() {
  return (
    <div className={about.about}>
  
  <div className={about.contentWrapper}>
      <div className={about.content}>
        <div className={about.contentInfo}>
          <span className={about.name}>{intro.name}</span>
          <div className={about.profiletitle}>{intro.title.map(title=>(<span  key={Math.random()}>{title}</span>))}</div>
        </div>
      {/* x */}
         <Image
      loader={({ src, width, quality }) => {
        return `${src}`}}
      src={intro.image}
      alt="Picture of the author"
      width={190}
      height={170}
      className={about.img}
    />
    </div>
    </div>

<Title title="Me"/>
<div className={about.aboutMeContainer}>
<div className={about.aboutMe}>
  <Paragraph text={intro.aboutMe1}/>
  <Paragraph text={intro.aboutMe2}/>
</div>
</div>

  <Title title="What i can do."/>
  <div className={about.rolesContainer}>

  <div className={about.rolesCard}>
  <span className={about.rolestitle}>{skills.skill}</span>
  <div className={about.roles}>
    <span>
    {skills.roles.map(roles=>(<div className={about.rolesDetails} key={Math.random()}>
    <span className={about.rolesHeading}>{roles.Title}</span>
    <span className={about.rolesDescription}>{roles.description}</span>
    </div>))}

    </span>
    </div>
    </div>

    <div className={about.rolesCard}>
  <span className={about.rolestitle}>{skills.tech}</span>
  <div className={about.roles}>
    {skills.tools.map(roles=>(<div className={about.rolesDetails} key={Math.random()}>
    <span className={about.rolesHeading}>{roles.heading}</span>
    <span className={about.rolesTagsContainer}>  {roles.description.map(tags=>(<span key={Math.random()} className={about.rolesDescriptionTags}>{tags}</span>))}   </span>
    </div>))}
    </div>
    </div>
    </div>


    <Title title="What i have been doing."/>
    {/* <div className={about.CareerSection}> */}
  <div className={about.Career}>
    {Career.map(career=>(<div className={about.CareerDetails} key={Math.random()}>
    <span className={about.jobtitle}>{career.jobtitle}</span>
    <span className={about.years}>{career.years}</span>
    <span className={about.tags}>{career.tags.map(tags=>(<span key={Math.random()}>{tags}</span>))}</span>
    <span className={about.heading}>{career.heading}</span>
    <span className={about.description}>
      <ul>
      {career.description.map(description=>(<li key={Math.random()}>{description}</li>))}
      </ul>
      </span>
    </div>))}
    </div>
    {/* </div> */}
  {/* <Paragraph text={skills.skill}/> */}

    </div>
  );
}

export default About;
