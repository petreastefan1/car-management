import React from "react";
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import {NewCar} from "./Components/NewBook/NewCar";
import {EditCar} from "./Components/EditCar/EditCar";
function App() {


    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add" element={<NewCar/>}/>
                <Route path="/edit/:id"  element={<EditCar/>}/>
            </Routes>



        </BrowserRouter>



    )
}

export default App;
