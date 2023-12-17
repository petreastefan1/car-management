import React, {useState, useRef, useEffect} from "react";
import {addCar} from "../../services/CarService";
import {useNavigate} from "react-router-dom";
import {Alert} from "antd";



export function NewCar() {

    const [marcaInpt,setMarcaInpt] = useState("");
    const [modelInpt,setModelInpt] = useState("");
    const [anInpt,setAnInpt] = useState(0);
    const [culoareInpt,setCuloareInpt] = useState("");
    const [createdCar, setCreatedCar] = useState({});
    let navigate=useNavigate();
    const [success,setSuccess] = useState();

    let [errors,setErrors]=useState([]);

    const handlePostCar = async () => {

        checkFields();
           if(errors.length==0){
               setCreatedCar({
                   marca: marcaInpt,
                   model: modelInpt,
                   an: anInpt,
                   culoare: culoareInpt,
               });
               let response = await addCar(createdCar)
               if(response==true){
                   setSuccess(true)
                   setTimeout(()=>
                   {navigate("/")},1000)
               }
               else{
                   setSuccess(false)
               }
           }
    }

    function handleAlerts(success){


        if(success==true){
           return <Alert message="Your car has been added!" type="success" />
        }
        if(success==false){
           return <Alert message="Your car was not added!" type="error" />
        }
        else{
            return null
        }
    }






    function  checkFields(){


        let aux=[];

        if(marcaInpt==""){

            aux.push("Marca trebuie completata");
        };
        if(modelInpt==""){
            aux.push("Modelul trebuie completat")
        };
        if(anInpt==0){
            aux.push("Anul trebuie completat");
        }
        if(culoareInpt==""){
            aux.push("Culoarea trebuie completata")
        }

        if(anInpt< 1900 || anInpt.length<4){
            aux.push("Anul nu este valid!");
        }

        if(anInpt>2023 || anInpt.length>4){
            aux.push("Anul nu este valid!");
        }

        if(culoareInpt.length>10 || culoareInpt.length <3){
            aux.push("Culoarea nu are lungimea necesara!")
        }

        if(marcaInpt.length>10 || marcaInpt.length <3){
            aux.push("Marca nu are lungimea necesara!")
        }

        if(modelInpt.length>10 || modelInpt.length <3){
            aux.push("Modelul nu are lungimea necesara!")
        }

        if(/\d/.test(culoareInpt)==true){
            aux.push("Culoarea nu poate contine numere!")
        }

        if(/\d/.test(marcaInpt)==true){
            aux.push("Marca nu poate contine numere!")
        }

        if(/\d/.test(modelInpt)==true){
            aux.push("Modelul nu poate contine numere!")
        }

        if(/^\d+$/.test(anInpt)==false){
            aux.push("Anul nu poate contine litere!")
        }

        if(Number.isInteger(parseInt(anInpt))!== true){
            aux.push("Anul nu poate contine litere!")
        }

        setErrors(aux);
    }




    return (
        <>
            {
                handleAlerts(success)
            }
            {
                errors.map(err=>{

                    return <Alert message={err} type="error" />
                    if(success==true){
                        return <Alert message="Car has been added" type="success" />
                    }
                })
            }
            <h1>New Car</h1>
            <form>
                <p>
                    <label htmlFor="marca">Marca</label>
                    <input onChange={event=>{
                        setMarcaInpt(event.target.value)

                    }} name="marca" type="text" id="marca"/>
                </p>
                <p>
                    <label htmlFor="model">Model</label>
                    <input onChange={event=>{
                        setModelInpt(event.target.value)

                    }} name="model" type="text" id="model"/>
                </p>
                <p>
                    <label htmlFor="an">An</label>
                    <input onChange={event=>{
                        setAnInpt(event.target.value)

                    }} name="an" type="text" id="an"/>
                </p>
                <p>
                    <label htmlFor="culoare">Culoare</label>
                    <input onChange={event=>{
                        setCuloareInpt(event.target.value)
                    }} name="culoare" type="text" id="culoare"/>
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