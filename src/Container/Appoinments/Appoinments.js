import React, {useState ,useContext, useEffect} from 'react';
import './Appoinments.css';
import { useLocation } from 'react-router-dom'
import { UserContext } from "../../providers/UserProvider";
import {db} from "../../firebase"
import { useHistory } from 'react-router-dom';

export default function Appoinments()
{   
    let slots = [
        "10:00:00 AM",
        "10:10:00 AM",
        "10:20:00 AM",
        "10:30:00 AM",
        "10:40:00 AM",
        "10:50:00 AM",
        "11:00:00 AM",
        "11:10:00 AM",
        "11:20:00 AM",
        "11:30:00 AM",
        "11:40:00 AM",
        "11:50:00 AM",
        "12:00:00 PM",
        "12:10:00 PM",
        "12:20:00 PM",
        "12:30:00 PM",
        "12:40:00 PM",
        "12:50:00 PM",
        "01:00:00 PM",
        "01:10:00 PM",
        "01:20:00 PM",
        "01:30:00 PM",
        "01:40:00 PM",
        "01:50:00 PM",
        "02:00:00 PM",
        "02:10:00 PM",
        "02:20:00 PM",
        "02:30:00 PM",
        "02:40:00 PM",
        "02:50:00 PM",
        "03:00:00 PM",
        "03:10:00 PM",
        "03:20:00 PM",
        "03:30:00 PM",
        "03:40:00 PM",
        "03:50:00 PM",
        "04:00:00 PM",
        "04:10:00 PM",
        "04:20:00 PM",
        "04:30:00 PM",
        "04:40:00 PM",
        "04:50:00 PM",
    ];
    const location = useLocation();
    const user = useContext(UserContext);
    const cid = location.state
    console.log(cid)
    const history = useHistory()
    const [availSlots, setAvailSlots] = useState([]);
    const [center, setCenter] = useState({});
    const [selDate, setSelDate] = useState("");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;;
    const todaysDate = today
    useEffect(() => {

        db.collection('centers').doc(cid).get()
            .then(snapshotData => {
                  setCenter(snapshotData.data());
                //  console.log(snapshotData.data())
                //  alert('here')
            })
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = mm + '/' + dd + '/' + yyyy;
        setSelDate(today)
        db.collection('slots').where("date","==",new Date(today)).where("center_id","==",cid).get()
            .then(data => {
                data = data.docs.map(doc => doc.data());
                console.log(data)
                data.forEach(slot => {
                    let begTime = new Date(slot.begin_time.seconds*1000).toLocaleTimeString("en-US");
                    if(slots.includes(begTime)){
                        console.log("slot already booked");
                        let index = slots.indexOf(begTime);
                        slots.splice(index,1);
                    }
                })
                setAvailSlots(slots);
            })
    }, []);

    function getAppointments(e){
        console.log(e.target.value)
        setSelDate(e.target.value)
        db.collection('slots').where("date","==",new Date(e.target.value)).where("center_id","==",cid).get()
            .then(data => {
                data = data.docs.map(doc => doc.data());
                console.log(data)
                data.forEach(slot => {
                    let begTime = new Date(slot.begin_time.seconds*1000).toLocaleTimeString("en-US");
                    if(slots.includes(begTime)){
                        console.log("slot already booked");
                        let index = slots.indexOf(begTime);
                        slots.splice(index,1);
                    }
                })
                setAvailSlots(slots);
            })
    }


    function makeAppointment(e, history){
        let slot = e.target.id
        console.log(selDate)
        let date = new Date(selDate)
        console.log(date)
        let startDate = new Date(selDate)
        startDate.setHours(slot.substr(0, slot.indexOf(':')))
        startDate.setMinutes(slot.substr(slot.indexOf(":")+1, slot.indexOf(":")))
        db.collection('slots').add({
            center_id:cid,
            begin_time: startDate,
            date: date
        }).then( snap => {
            db.collection('appointments').add({
                user_id: user.uid,
                center_id: cid,
                date: date,
                begin_time: startDate
            }).then(snap => {
                alert("Appointment booked Successfully")
            history.push({
                pathname: "/",
            });
            })

        })
    }
    // console.log(cid)
    // console.log(user)
    return(
        <div className="wrapper">
            <div className="nav">
                <div className="leftNav">
                    <span className="centerName">Center: {center[['Health Facility Name']]} </span>    
                    <span className="centerAddr">Address: { center['Address'] }, </span>    
                    <span className="centerAddr"> { center['locality'] ? center['locality'] : "" }  </span>    
                    <span className="centerAddr">{ center['pincode'] } </span>    

                </div>
                <div className="rightNav">
                    <div>
                        <label htmlFor="appointDate">Appointment Date: </label>
                        <input type="date" name="appointDate" id="appointDate" defaultValue={todaysDate} onChange={ getAppointments}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="tableWrapper">
                    <h3 className="text-center mt-1 mb-0">Available Time Slots</h3>
                    <table className="mx-auto border table" id="appoint">
                        <thead>
                            <th>
                                Timing 
                            </th>
                            <th>
                                BookNow
                            </th>
                        </thead>
                        <tbody>
                            {
                                availSlots.map(slot => (
                                    <tr> 
                                    <td> { slot } </td>
                                    <td> <button id= {slot} className="b1" onClick={e => makeAppointment(e, history)}>Book</button> </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}