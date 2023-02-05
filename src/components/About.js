import React from  "react";

function About({image}, {about1}){

    const img = image? image : 'https://via.placeholder.com/215'

    return(
       <aside>
         <img src={img}  alt ="blog logo"  />
         <p>
            {about1}
         </p>
        </aside>
    )
}
export default About