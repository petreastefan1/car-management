import React from "react";
import {deleteCar, editCar} from "../../services/CarService";

export function CarInfo({editCarPage,editCarInfo}) {


    const handleEditCar = () => {

        editCarPage(false)
    }




    const handleRemove = () => {

        deleteCar(editCarInfo.id);
        window.location.reload(false)
        if (deleteCar()){
            window.location.reload(false)
        }
    }
    const handleEdit = ()=>{

        editCar(editCarInfo)


    }

    return (

        <>

            <h1>Update Car</h1>
            <form>
                <p>
                    <label htmlFor="marca">Marca</label>
                    <input name="marca" type="text" id="marca" defaultValue={`${editCarInfo.marca}`}/>
                </p>
                <p>
                    <label htmlFor="model">Model</label>
                    <input name="model" type="text" id="model" defaultValue={`${editCarInfo.model}`}/>
                </p>
                <p>
                    <label htmlFor="an">An</label>
                    <input name="an" type="text" id="an" defaultValue={`${editCarInfo.an}`}/>
                </p>
                <p>
                    <label htmlFor="culoare">Culoare</label>
                    <input name="culoare" type="text" id="culoare" defaultValue={`${editCarInfo.culoare}`}/>
                </p>
                <p>
                    <a onClick={handleEdit} class="button" href="#" type="button">Update Car</a>
                </p>
                <p>
                    <a onClick={handleEditCar} className="button" href="#">Cancel</a>
                </p>
                <p>
                    <a onClick={handleRemove} className="button" href="#">Delete Car</a>
                </p>
            </form>
        </>

    )


}