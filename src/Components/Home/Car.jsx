import React from "react";
import {deleteCar} from "../../services/CarService"

export function Car({masina}){

    async function removeCar() {


       await deleteCar(masina.model)

    }

 const handleRemove = () =>{

        removeCar()


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