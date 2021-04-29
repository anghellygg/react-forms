import React from 'react';
import { useState } from "react";
import OwnerComponent from '../Owner/OwnerComponent';
import './pets.styles.css';
import Diseases from '../Diseases/diseases';
let vet = {
    pets: [
        {
            id: "p1", 
            name: "Coco", 
            age: 2,
            petType: "Cat",
            owner: {
                    id: "1",
                    name: "Juan Jose Montes",
                    cellphone: 3146882298,
            },
            diseases:[
                {
                    id: "D1",
                    name: "La Rabia",
                },
                {
                    id: "D2",
                    name: "La tiña",
                }
            ]
        },
        {
            id: "p2", 
            name: "Toby", 
            age: 4,
            petType: "Dog",
            owner: {
                    id: "2",
                    name: "Camila Marin",
                    cellphone: 3183671253,
            },
            diseases:[
                {
                    id: "D3",
                    name: "La toxoplasmosis",
                },
                {
                    id: "D4",
                    name: "La toxocariasis",
                }
            ]
        },
        {
            id: "p3", 
            name: "Matias", 
            age: 1,
            petType: "bird",
            owner: {
                    id: "3",
                    name: "Laura Perez",
                    cellphone: 3367835647,
            },
            diseases:[
                {
                    id: "D5",
                    name: "La psitacosis",
                },
                {
                    id: "6",
                    name: "La criptococosis",
                }
            ]
        },
        {
            id: "p4", 
            name: "Mandy", 
            age: 2,
            petType: "Dog",
            owner: {
                    id: "2",
                    name: "Angie Giraldo",
                    cellphone: 3167382564,
            },
            diseases:[
                {
                    id: "D7",
                    name: "Moquillo",
                },
                {
                    id: "D8",
                    name: "Parvovirus",
                }
            ]
        },
        
    ]
}

const Pets = (props) => {
    const [pet, setPet] = useState('p1');
    const [diseaseName, setDiseaseName] = useState('');

    const addDiasease = () => {
        console.log('pet: ' + pet);
        console.log('disease name: ' + diseaseName);
    }
    return (
        <div>
            <label>Pet:</label>
                <select value={pet} onChange={(event)=> {setPet(event.target.value)}} >
                    <option value="p1">Coco</option>
                    <option value="p2">Toby</option>
                    <option value="p3">Matias</option>
                    <option value="p4">Mandy</option>
                </select>
            <label>Enfermedad:</label>
                <input type='text' value={diseaseName} onChange={(event)=> {setDiseaseName(event.target.value)}} />
                <button type='button' onClick={addDiasease}>Add disease</button>
             <table>
                 <tbody>
                     {

                        vet.pets.map((pet,index)=>{
                            return (
                                <React.Fragment key={pet.id}>
                                    <tr>
                                        <td>
                                            name
                                        </td>
                                        <td>
                                            age
                                        </td>
                                        <td>
                                            petType
                                        </td>
                                    </tr>
                                <tr>
                                    <td>
                                        {pet.name}
                                    </td>
                                    <td>
                                        {pet.age}
                                    </td>
                                    <td>
                                        {pet.petType}
                                    </td>
                                </tr>
                                <OwnerComponent  owner = {pet.owner}/>
                                <Diseases diseases = {pet.diseases}/>
                                </React.Fragment>
                            );
                            

                        })

                     }
                 </tbody>
             </table>
        </div>
    );
}

export default Pets;