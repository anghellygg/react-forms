import React from 'react';
import './Owner.styles.css';


const OwnerComponent = (props) => {
    return(
        <React.Fragment key={props.owner.id}>
            <tr>
                <td className="owners">
                    {props.owner.name}
                </td>
                <td className="owners" colSpan="2">
                    {props.owner.cellphone}
                </td>
            </tr>
        </React.Fragment>
    );      
}

export default OwnerComponent;