import React, {useState, useEffect} from "react";
import {getCars} from "./../../services/CarService";

import {Car} from "./Car";

function Home({addCar}) {


    let [cars, setCars] = useState([]);

    useEffect(() => {

        handleFetchCars();
    }, [])


    let handleFetchCars = async () => {


        let data = await getCars();


        setCars(data);


    }


    const handleNewCar = () => {

        addCar(true)

    }

    return (

        <>
            <main>
                <h1>Cars</h1>
                <p><a onClick={handleNewCar} className="button" href="#">Create New Book</a></p>
                <table>
                    <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Model</th>
                        <th>An</th>
                        <th>Culoare</th>
                        <th>Actiuni</th>
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