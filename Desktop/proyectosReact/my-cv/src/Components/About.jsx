import React from 'react'
import "./About.css"

const About = ({hero}) => {
  return (
    <div className='about'>
        <h2>SOBRE MÍ:</h2>
        <div className='container-about'>
            {hero.aboutMe.map((item)=> {
                return (
                    <div key={JSON.stringify(item)}>
                        <p>{item.info}</p>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default About
