import React from "react";
import {useState} from "react";
import Home from "./Components/Home/Home";
import {NewCar} from "./Components/NewBook/NewCar";
function App() {

    const [addCar,setAddCar] = useState(false)



    return(
        <>

        {
            addCar == false && (
            <Home addCar={setAddCar}/>

        )}

            {
                addCar == true && (
                    <NewCar createNewCar={setAddCar}/>

                )}

        </>
    )
}

export default App;
