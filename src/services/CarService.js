import React from "react";

function api(path, method, body = null) {

    const url = "http://localhost/api/v1" + path;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest'
        }
    }

    if (body != null) {

        options.body = JSON.stringify(body);

    }

    return fetch(url, options)
}

export async function getCars() {

    try {
        let data = await api('/masini/all', 'GET')

        //console.log(data.status)
        let resp = await data.json();
        return resp

    } catch (error) {
        console.log(error)

        return [];
    }
}

export async function addCar(car) {

    try {

        let data = await api('/masini/add', 'POST', car)

        if (data.status === 201) {
            let resp = await data.json();
            console.log("Your car has been posted")
            return true
        } else {
            let resp = await data.json();
            return false
            console.log("Your car did not get posted")
        }
    } catch (error) {
        console.log(error)
    }


}

export async function deleteCar(id) {

    try {
        let data = await api(`/masini/removebyid/${id}`, "DELETE")

        if (data.status === 200) {
            console.log("Your car has been remove")
            return true
        } else {
            console.log("Your car did not get remove")
            return false
        }
    } catch (error) {
        console.log(error)
    }

}


export async function editCar(car) {

    try {
        let data = await api(`/masini/update/`, "PUT", car)

        if (data.status === 200) {
            let resp = await data.json();
           return true;
        } else {
            console.log("Your car was not updated")

            return false
        }
    } catch (error) {
        console.log(error)

        return  false;
    }
}

export async function getCarById(id){

    try{
        let data = await api(`/masini/findById/${id}`)

        if(data.status === 200){
            console.log("Your car has been found");
            return await data.json();
        }else{
            console.log("Your car was not found")
        }
    }catch(error){
        console.log(error)
    }


}
