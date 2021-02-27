import React,{useState, useEffect}  from 'react';
import '../Centers/Centers.css';
import { useHistory } from 'react-router-dom';
import {db } from '../../firebase';

export default function NearByCenters()
{
    var c,lv;
    const history = useHistory();
    const [body,setBody] = useState([]);
    const [center, setCenter] = useState({lat:18.966521099999998,lng:72.82870679999999})

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2-lat1);  // deg2rad below
      var dLon = deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    }
    
    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }

    useEffect(() => {
        const setLoc = (lat,long) => {
            console.log(lat, long)
          setCenter({lat:lat,lng:long})
          console.log(center.lat)
        //   console.log(this.state.center)
        //   this.forceUpdate();
        }
        if (navigator.geolocation) {
          navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
              if (result.state === "granted") {
                console.log(result.state);
                //If granted then you can directly call your function here
                navigator.geolocation.getCurrentPosition(function(position) {
                    console.log("Latitude is :", position.coords.latitude);
                    console.log("Longitude is :", position.coords.longitude);
                    setLoc(position.coords.latitude,position.coords.longitude);
                    
                  });
                 } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        console.log("Latitude is :", position.coords.latitude);
                        console.log("Longitude is :", position.coords.longitude);
                        setLoc(position.coords.latitude,position.coords.longitude);
                        
                      }
                    //   , errors, options
                      );
              } else if (result.state === "denied") {
                //If denied then you have to show instructions to enable location
              }
              result.onchange = function () {
                console.log(result.state);
              };
            });
        } else {
          alert("Sorry Not available!");
        }


        db.collection("centers").get()
        .then(data => {
            let x= data.docs.map(doc => {
                let temp = doc.data()
                temp.id=doc.id
                temp.diff=getDistanceFromLatLonInKm(center.lat,center.lng,temp.latitude,temp.longitude) 
                return temp
            })
            function compare( a, b ) {
              if ( a.diff < b.diff ){
                return -1;
              }
              if ( a.diff > b.diff ){
                return 1;
              }
              return 0;
            }
            x.sort( compare );
            console.log(x)
            setBody(x)
            // console.log(body)
        });
    }, [])    
  
    // function getData(e)
    // {
    //     e.preventDefault()
    //     db.collection("centers").orderBy("pincode").startAfter(lastVal).limit(10).get()
    //     .then(data => {

    //         let x= data.docs.map(doc => {
    //             let temp = doc.data()
    //             temp.id=doc.id
    //             return temp
    //         })
    //         setLastVal(data.docs[data.docs.length-1])
    //         console.log(x)
    //         let d = body.concat(x)
    //         setBody(d)
    //         console.log(body)
    //     });
    // }
    function bookAp(e, history  ) {
        // console.log(e)
        e.preventDefault()
        console.log(e,e.target.id)
        history.push({ 
            pathname: "/appoinments",
            state: e.target.id // your data array of objects
        });
    }
    return(
        <div className="Center">
            {console.log(center)}
            <div className="container mt-2">
				<h3><center>Vaccination Centers Near You</center></h3>
				<div className="table">
					<table className="mx-auto" id="center">
						<thead>
							<tr>
								<th>
									Center Name
								</th>
								<th>
									Center Address
								</th>
								<th>
									Center Locality
								</th>
								<th>
									Pincode
								</th>
								<th>
									Appointment Bookings
								</th>
							</tr>
						</thead>
						<tbody>
							{console.log(body)}
							{
								body.map(result =>(
									<tr key={result['id']}>
										<td>
											{result['Health Facility Name']}
										</td>
										<td>
											{result['Address']}
										</td>
										<td>
											{result['locality']?result['locality']:"-"}
										</td>
										<td>
											{result['pincode']}
										</td>
										<td>
											<button className="b1" onClick={e => bookAp(e, history)} id={result['id']} >Book Appointment</button>
										</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
				{/* <button onClick={getData} id="b2" class="float-right">Show more....</button> */}
			</div>
            	
        </div>
    )
}