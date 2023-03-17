import React from 'react';
import "./Experience.css";

const Experience = ({experience}) => {
  return (
    <div>
    
        <div className='experience_card'>
            {experience.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                        <p className='name'>✅ {item.name} </p>
                        <p> {item.where} </p>
                        <p> {item.date} </p>
                        <p className='description'> {item.description} </p>
                        <hr />
                    </div>
                );
            })}
        </div>
      
    </div>
  )
}

export default Experience
