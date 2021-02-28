import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input } from '@material-ui/core';
import { db, auth, provider } from '../../firebase';
import { UserContext } from "../../providers/UserProvider";
import Pagination from "react-js-pagination";

export default function Centers() {
    var c, lv;
    const history = useHistory();
    const [lastVal, setLastVal] = useState()
    const [body, setBody] = useState([]);

    useEffect(() => {
        c = db.collection("centers").orderBy("pincode")
        c.limit(10).get()
            .then(data => {
                let x = data.docs.map(doc => {
                    let temp = doc.data()
                    temp.id = doc.id
                    return temp
                })
                setLastVal(data.docs[data.docs.length - 1])
                console.log(x)
                setBody(x)
                    // console.log(body)
            });
    }, [])

    function getData(e) {
        e.preventDefault()
        db.collection("centers").orderBy("pincode").startAfter(lastVal).limit(10).get()
            .then(data => {

                let x = data.docs.map(doc => {
                    let temp = doc.data()
                    temp.id = doc.id
                    return temp
                })
                setLastVal(data.docs[data.docs.length - 1])
                console.log(x)
                let d = body.concat(x)
                setBody(d)
                console.log(body)
            });
    }

    function bookAp(e, history) {
        // console.log(e)
        e.preventDefault()
        console.log(e, e.target.id)
        history.push({
            pathname: "/appoinments",
            state: e.target.id // your data array of objects
        });
    }
    return ( <div className = "Center" >
        <div className = "table" >
        <table className = "mx-auto" >
        <thead >
        <tr >
        <th>
        Center Name </th> 
        <th >
        Center Address </th> 
        <th >
        Center Locality 
        </th>
         <th >
        Pincode 
        </th> 
        <th >
        Appoinmnt Bookings 
        </th> </tr> </thead> <tbody > { console.log(body) } {
            body.map(result => ( <tr key = { result['id'] } >
                <td > { result['Health Facility Name'] } </td> <td > { result['Address'] } </td> 
                <td > { result['locality'] ? result['locality'] : "-" } </td> 
                <td > { result['pincode'] } </td> 
                <td >
                <button onClick = { e => bookAp(e, history) }
                id = { result['id'] } > Book Appoinmnt </button> </td> 
                </tr>
            ))
        } </tbody> 
        </table> 
        </div> 
        <button onClick = { getData } > </button> </div>
    )
}