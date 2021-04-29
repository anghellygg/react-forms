import React from 'react';
import './diseases.styles.css';


const Diseases = (props) => {
    return(
        <React.Fragment key="0">
            {props.diseases.map((disease,index)=>{
                return(
                    <React.Fragment key={disease.id}>
                    <tr>
                        <td className = "disease" colSpan="3">
                            {disease.name}
                        </td>
                    </tr>
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );

        
        
    
}

export default Diseases;