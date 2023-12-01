import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import {NewCar} from "./Components/NewBook/NewCar";
function App() {


    return (

        <BrowserRouter>
            <Routes>


                <Route path="/" element={<Home/>}/>
                <Route path="/add" element={<NewCar/>}/>


            </Routes>



        </BrowserRouter>



    )
}

export default App;
