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
        } else {
            let resp = await data.json();

            console.log("Your car did not get posted")
        }
    } catch (error) {
        console.log(error)
    }


}

export async function deleteCar(model) {

    try {
        let data = await this.api(`/api/v1/masini/removebymodel/${model}`, "DELETE")
        let response = await data.json();

        if (data.status === 200) {
            console.log("Your car has been remove")
        } else {
            console.log("Your car did not get remove")
        }
    } catch (error) {
        console.log(error)
    }

}

