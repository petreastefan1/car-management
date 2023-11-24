import React, {useState,useEffect} from "react";
import {getCars} from "./../../services/CarService";

import {Car} from "./Car";
function Home() {


    let [cars,setCars]=useState([]);
    useEffect(()=>{



         handleFetchCars();
    },[])


    let handleFetchCars= async ()=>{


        let data=await getCars();




        setCars(data);


    }

    return (

        <>
            <main>
                <h1>Cars</h1>
                <p><a className="button" href="new_book.html">Create New Book</a></p>
                <table>
                    <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Model</th>
                        <th>An</th>
                        <th>Culoare</th>
                    </tr>
                    </thead>

                   <tbody className="table-body-container">

                   {

                       cars.length > 0 && (

                           cars.map(car => {

                               return <tr><Car masina={car}/></tr>







                           })
                       )

                   }
                   </tbody>
                </table>
            </main>
        </>
            )
}

export default Home