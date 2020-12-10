import React from 'react';
import PropTypes from 'prop-types';

const UnderComponent =(props)=>{
    const {        
         fullName, Bio, Profession, handleName, children
    } =props
          
    
    return (
        <div>
            {handleName(fullName)}
            <h1>{fullName}</h1>
            <p>{Bio}</p>
            <p>{Profession}</p>
            
            
            {children}
             

        </div>

    )
}

UnderComponent.propTypes = {  
   fullName: PropTypes.string,
   Bio: PropTypes.string,
   Profession: PropTypes.string,
    handleName: PropTypes.func,
    children: PropTypes.object,
    
     
} 

export default UnderComponent