//escribimos rafce para que aparezca la estructura básica por defecto

import React from 'react';
import styles from './Hero.css'; // importamos el css de su componente específico
import About from './About';



const Hero = ({hero}) => {



  return (
    <div className={styles.Hero}>
          <div className = {styles.imgHero}>
          <img src = {hero.image} alt = ""/>
        </div>  
        
        <div className={styles.TextHero}>
          <h2> 
            {hero.name} {hero.adress}
          </h2>
          <p> 🗺️ {hero.city}</p> 
          <p> 📧 <a href={"mailto:" + hero.email}>mrrosa@gmail.com</a></p>
          <p> 📱 {hero.phone}</p>
          <p> 💾 <a href={hero.gitHub}>GitHub</a></p>
        </div> 

        <About hero={hero}></About>
    </div>


    
  )
}

export default Hero
