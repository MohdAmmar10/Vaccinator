import React, {Component} from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Map from '../Map/Map';
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  
  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
 export default class Locations extends Component {
    constructor(props){
        super(props);
        this.state = {
        selectedPlace: '',
        center: {lat:18.966521099999998,lng:72.82870679999999},
        zoom: 11
    }
    }
    success(pos) {
        var crd = pos.coords;
        // this.state.lat =  crd.latitude
        // this.state.long =  crd.longitude
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        let long = crd.longitude
        let lat = crd.latitude
        this.setState({center:{lat:lat,lng:long}})
      }
    
     componentDidMount() {
        const setLoc = (lat,long) => {
            console.log(lat, long)
          this.setState({center:{lat:lat,lng:long}})
          console.log(this.state.center)
          this.forceUpdate();
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
                navigator.geolocation.getCurrentPosition(this.success, errors, options);
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
        
      }
    
  render() {
    return (
        <div>
            {console.log(this.state.center)}
            <Map 
            
          center={this.state.center}
          zoom={this.state.zoom}    
        />
      </div>
    );
    
  }
}
 
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyCdJ-wpVSYTTKNR-5dLU_8oKHQUsGdH7wU')
// })(Locations)