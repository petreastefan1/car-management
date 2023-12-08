import React, {useState, useRef, useEffect} from "react";
import {addCar} from "../../services/CarService";
import {useNavigate} from "react-router-dom";
import {Alert} from "antd";



export function NewCar() {

    const marcaInpt = useRef();
    const modelInpt = useRef();
    const anInpt = useRef();
    const culoareInpt = useRef();
    const [createdCar, setCreatedCar] = useState({});
    let navigate=useNavigate();
    const [success,setSuccess] = useState()

    const handlePostCar = async () => {


            setCreatedCar({
                marca: `${marcaInpt.current.value}`,
                model: `${modelInpt.current.value}`,
                an: anInpt.current.value,
                culoare: `${culoareInpt.current.value}`,
            });
            let response = await addCar(createdCar)

        if(response==true){
            setSuccess(true)
            setTimeout(()=>
            {navigate("/")},2000)
        }
        else{
            setSuccess(false)
        }

    }
    return (
        <>
            {
                success ==true &&(
                    <Alert message="Your car has been edited!" type="success" />
                )

            }

            {
                success == false &&(
                    <Alert message="Your car was not edited!" type="error" />
                )
            }
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
                    <a className="button" href="#"  onClick={()=>{



                        navigate("/");

                    }}>Cancel</a>
                </p>
            </form>
        </>

    )


}