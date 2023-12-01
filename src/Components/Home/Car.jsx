import React from "react";

export function Car({masina,editCar,editCarInfo}) {


    const handleEditInfo = () =>{
        editCar(true)
        editCarInfo(masina)
    }

    return (
        <>
            <td>
                <a href="#" onClick={handleEditInfo}>{masina.marca}</a>
            </td>
            <td>{masina.model}</td>
            <td>{masina.an}</td>
            <td>{masina.culoare}</td>


        </>
    )
}