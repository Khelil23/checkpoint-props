import React from 'react';
import UnderComponent from './UnderComponent'
import image from '../image.jpg'


const ProfileComponent = () => {
    const handleName =(name) =>{
        alert(`Hi, I'am ${name}`)

    }
    return(
        <UnderComponent               
             fullName ="Ben Sassi Khelil"
             Bio="Master in Mathematics"
             Profession="Futur developer"
             image ="Image"
             handleName ={handleName}
             >   
             <div>
                 <img src={image}></img>
             </div>
             </UnderComponent> 
            

    )    
}
export default ProfileComponent
 