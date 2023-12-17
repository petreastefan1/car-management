import React, {useEffect} from "react";
import {editCar, getCarById, deleteCar} from "../../services/CarService";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Alert} from 'antd';

export function EditCar() {


    let navigate = useNavigate()

    let id = useParams().id;

    const [marca, setMarca] = useState("");
    const [model, setModel] = useState("");
    const [an, setAn] = useState(0);
    const [culoare, setCuloare] = useState("");
    const [editSuccess, setEditSuccess] = useState()
    const [deleteSucess, setDeleteSuccess] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [succesMessage, setSuccesMessage] = useState("");

    const [errors,setErrors]=useState([]);

    useEffect(() => {

        handleGetCar();
    }, [])




    let handleGetCar = async () => {


        let car = await getCarById(id);

        setMarca(car.marca);
        setModel(car.model);
        setAn(car.an);
        setCuloare(car.culoare)

    }

    function validators(){


        let aux=[];


        if(an< 1900 || an.length<4){
            aux.push("The year is not valid");
        }

        if(an>2023 || an.length>4){
            aux.push("The year is not valid");
        }

        if(culoare.length>10 || culoare.length <3){
            aux.push("The colour is not valid")
        }


        if(/\d/.test(culoare)==true){
            aux.push("The colour cannot contain numbers")
        }





        setErrors(aux);
   return aux.length;

    }



    const handleUpdate = async () => {

      ;
        if(validators()==0){

            const newCar = {
                marca: marca,
                model: model,
                an: an,
                culoare: culoare

            }

            let response = await editCar(newCar);



            if (response.type == "succes") {

                setSuccesMessage(`${response.msg}`)
                setErrorMessage("")
                setEditSuccess(true)
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            } else {

                setErrorMessage(`${response.msg}`)
                setEditSuccess(false)
            }


        }
    }

    const handleRemove = async () => {

        let response = await deleteCar(id)

        if (response == true) {
            setDeleteSuccess(true)
            setSuccesMessage("Your car has been removed succesfully!")
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } else {
            setDeleteSuccess(false)
        }

    }



    return (

        <>

            {
                errorMessage != "" && <Alert message={`${errorMessage}`} type="error"/>

            }

            {
                succesMessage != "" && <Alert message={`${succesMessage}`} type="success"/>

            }

            {
                errors.length>0&&errors.map(errorMessage=><Alert message={`${errorMessage}`} type="error"/>)
            }

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
                    <input name="an" type="text" id="an" value={an} onChange={(event) => {
                        setAn(event.target.value)
                    }}/>
                </p>
                <p>
                    <label htmlFor="culoare">Culoare</label>
                    <input name="culoare" type="text" id="culoare" value={culoare} onChange={(event) => {
                        setCuloare(event.target.value)
                    }}/>
                </p>

                <p>

                    <a class="button" href="#" type="button" onClick={handleUpdate

                    }>Update Car</a>

                </p>
                <p>
                    <a className="button" href="#" onClick={() => {
                        navigate("/")
                    }}>Cancel</a>
                </p>
                <p>
                    <a className="button" href="#" onClick={handleRemove}>Delete Car</a>
                </p>
            </form>
        </>


    )


}