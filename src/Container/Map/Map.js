import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import micon from '../../Images/marker-red.png'
import sicon from '../../Images/marker-icon-red.png'
import Leaflet from 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {db,auth, provider } from '../../firebase';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({center,zoom, }) {
  const [centers,setCenters] = useState([]);
  const history = useHistory();
  var c;
  var IconStyleOne = L.icon({
    iconUrl: micon,
    iconSize: [25,41],
    
  
    });
  useEffect(() => {
    c = db.collection("centers").get()
    .then(data => {
        let x= data.docs.map(doc => {
            let temp = doc.data()
            temp.id=doc.id
            
            // temp.lat=doc.latitude
            // temp.lng=doc.longitude
            temp.pos={lat:temp.latitude,lng:temp.longitude}
            return temp
        })
        console.log(x)
        setCenters(x)
        // console.log(body)
    });
  }, [])
  function bookAp(e, history  ) {
    // console.log(e)
    e.preventDefault()
    console.log(e,e.target.id)
    history.push({ 
        pathname: "/appoinments",
        state: e.target.id // your data array of objects
    });
}
  function ChangeMapView({ center }) {
    const map = useMap();
    // const {leafletElement: map} = center;
    map.setView(center, 11);
  
    return null;
  }
    return (
        <div className="map">
          {console.log(center)}
          {/* {setTimeout(center,5000)} */}
            <MapContainer  center={center} zoom={zoom} scrollWheelZoom={true}
        style={{ width: '100%', height: '600px' }}
        >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker className="huechange" id="myloc" position={center} icon={IconStyleOne}>
    <Popup>
       Your Location
      </Popup>
    </Marker>
    
    {
        centers.map(center =>(
          <Marker key={center['id']} position={center['pos']}  >
      <Popup >
         Name:{center['Health Facility Name']}
        
         <button id={center['id']} onClick={e=>bookAp(e,history)}>
           Book Appointment
         </button>
        </Popup>
      </Marker>
        ))
    }
     
    {/* </Marker>  */}
  </MapContainer>
        </div>
    )
}


