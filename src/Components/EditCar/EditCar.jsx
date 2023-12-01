import React, {useEffect} from "react";
import {editCar, getCarById,deleteCar} from "../../services/CarService";
import {useState} from "react";

export function EditCar() {


    let id = 31;

    const [marca, setMarca] = useState("");
    const [model, setModel] = useState("");
    const [an, setAn] = useState(0);
    const [culoare, setCuloare] = useState("");


    useEffect(()=>{

     handleGetCar();
    },[])

    let handleGetCar = async () => {

        let car = await getCarById(id);

        console.log(car);
        setMarca(car.marca);
        setModel(car.model);
        setAn(car.an);
        setCuloare(car.culoare)

    }



    const handleUpdate = ()=>{

     const newCar={
      marca:marca,
      model:model,
      an:an,
      culoare:culoare
     }

     editCar(newCar)
    }

    const handleRemove = ()=>{

     deleteCar(id)


    }

    return (

        <>

            <h1>Update Car</h1>
            <form>
                <p>
                    <label htmlFor="marca">Marca</label>
                    <input name="marca" type="text" id="marca" value={marca} readOnly={true}/>
                </p>
                <p>
                    <label htmlFor="model">Model</label>
                    <input name="model" type="text" id="model" value={model} readOnly={true}/>
                </p>
                <p>
                    <label htmlFor="an">An</label>
                    <input name="an" type="text" id="an" value={an} onChange={(event)=>{
                     setAn(event.target.value)
                    }}/>
                </p>
                <p>
                    <label htmlFor="culoare">Culoare</label>
                    <input name="culoare" type="text" id="culoare" value={culoare} onChange={(event)=>{
                     setCuloare(event.target.value)
                    }}/>
                </p>
                <p>
                    <a class="button" href="#" type="button" onClick={handleUpdate}>Update Car</a>
                </p>
                <p>
                    <a className="button" href="#">Cancel</a>
                </p>
                <p>
                    <a className="button" href="#" onClick={handleRemove}>Delete Car</a>
                </p>
            </form>
        </>


    )


}