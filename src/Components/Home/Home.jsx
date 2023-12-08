import React, {useState, useEffect} from "react";

import{useNavigate} from  "react-router-dom"
import {getCars} from "./../../services/CarService";
import {Car} from "./Car";
import {Alert} from "antd";

function Home() {


    let [cars, setCars] = useState([]);

    let navigate=useNavigate();
    useEffect(() => {

        handleFetchCars();
    }, [])


    let handleFetchCars = async () => {


        let data = await getCars();


        setCars(data);


    }




    return (

        <>
            <main>

                <h1>Cars</h1>
                <a><button className="button new-book-btn" onClick={()=>{


                    navigate("add");

                }} >Create New Book</button></a>
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

                                return <tr><Car masina={car} key={car.id}/></tr>


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