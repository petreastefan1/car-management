import React from "react";


export function Car({masina}){







    return(
        <>
            <td>
                <a href="#">{masina.marca}</a>
            </td>
            <td>{masina.model}</td>
            <td>{masina.an}</td>
            <td>{masina.culoare}</td>
        </>
    )
}