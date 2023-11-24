import React from "react";




 function  api(path,method,body=null){

        const url = "http://localhost/api/v1" + path;
        const options = {
            method,
            headers:{
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
            let data = await api('/masini/all','GET')

            //console.log(data.status)
            let resp = await data.json();
            return resp;

        } catch (error) {
            console.log(error)

            return [];
        }
    }

    export async function addCar(car){

     try {

         let data = await api ('/masini/all','POST',car)

            if(data.status === 201){
                let resp = await data.json();

                console.log("Your car has been posted")
            }
            else{
                let resp = await data.json();

                console.log("Your car did not get posted")
            }
     } catch (error) {
                console.log(error)
         }




    }

