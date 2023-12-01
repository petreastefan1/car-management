import React, {useState, useRef, useEffect} from "react";
import {addCar} from "../../services/CarService";

export function NewCar() {

    const marcaInpt = useRef()
    const modelInpt = useRef()
    const anInpt = useRef()
    const culoareInpt = useRef()
    const [createdCar, setCreatedCar] = useState({})


    // const handleNewCar = () => {
    //
    //     createNewCar(false)
    //
    // }

    const handlePostCar = () => {

        if (marcaInpt.current.value.length > 0 && modelInpt.current.value.length > 0 &&
            anInpt.current.value.length > 0 && culoareInpt.current.value.length > 0) {
            setCreatedCar({
                id: 1,
                marca: marcaInpt.current.value,
                model: modelInpt.current.value,
                an: anInpt.current.value,
                culoare: culoareInpt.current.value,
            });
        }
        if (Object.keys(createdCar).length > 0) {
            addCar(createdCar)
        }

    }
    return (
        <>

            <h1>New Car</h1>
            <form>
                <p>
                    <label htmlFor="marca">Marca</label>
                    <input ref={marcaInpt} name="marca" type="text" id="marca"/>
                </p>
                <p>
                    <label htmlFor="model">Model</label>
                    <input ref={modelInpt} name="model" type="text" id="model"/>
                </p>
                <p>
                    <label htmlFor="an">An</label>
                    <input ref={anInpt} name="an" type="text" id="an"/>
                </p>
                <p>
                    <label htmlFor="culoare">Culoare</label>
                    <input ref={culoareInpt} name="culoare" type="text" id="culoare"/>
                </p>
                <p>
                    <a class="button" onClick={handlePostCar} href="#" type="button">Create New Car</a>
                </p>
                <p>
                    <a className="button" href="#">Cancel</a>
                </p>
            </form>
        </>

    )


}