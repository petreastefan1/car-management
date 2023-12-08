import React from "react";
import {useNavigate} from "react-router-dom";


export function Car({masina}) {

    let navigate= useNavigate()



    return (
        <>
            <td>
                <span  onClick={()=>{

                    navigate("/edit/"+masina.id)
                }}>{masina.marca}</span>
            </td>
            <td>{masina.model}</td>
            <td>{masina.an}</td>
            <td>{masina.culoare}</td>


        </>
    )
}