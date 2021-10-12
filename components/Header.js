import React from 'react'
// import Typewriter from 'typewriter-effect';
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.hero}>
    <div className={headerStyles.welcomeSectionIntroduction}>
    <div className={headerStyles.intro}>
<div className={headerStyles.name}>
<h1>Hello, I am<br/> 
MIchael Kasingye</h1>
</div>
<div className={headerStyles.typewriter}>
{/* <Typewriter
options={{
strings: ['Software Developer', 'Team Leader', 'Mentor'],
autoStart: true,
loop: true,
}}
/>    */}

</div>
    </div>
</div></div>
  );
};

export default Header;
