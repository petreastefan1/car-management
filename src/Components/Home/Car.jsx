import React from "react";
import {deleteCar} from "../../services/CarService"

export function Car({masina,addCar}){

    async function removeCar(model) {


       await deleteCar(model)

    }

 const handleRemove = () =>{
        console.log(`/masini/removebymodel/${masina.model}`);
        removeCar(masina.model);
     window.location.reload(false)

 }



    return(
        <>
            <td>
                <a href="#">{masina.marca}</a>
            </td>
            <td>{masina.model}</td>
            <td>{masina.an}</td>
            <td>{masina.culoare}</td>
            <td><button onClick={handleRemove} type="button" className="action-button">Remove</button>
                <button type="button" className="action-button">Edit</button></td>

        </>
    )
}