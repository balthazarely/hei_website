// import React, { Component } from 'react'
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';




// const mapStyles = {

//   width: `${window.innerWidth}px`,
//   height: '400px'
// };


// class MapContainer extends Component {
//   constructor() {
//     super()

//     this.state = {
//       locations: [{ latitude: 39.778601, longitude: -105.119160, name: "Fuck" }, { latitude: 39.8, longitude: -105.219160, name: "Fuck" }]
//     }
//   }

//   displayMarkers = () => {
//     return this.state.locations.map((location, index) => {
//       return <Marker key={index} id={index} position={{
//         lat: location.latitude,
//         lng: location.longitude,
//         name: location.name
//       }}
//         onClick={() => console.log("You clicked me!")} />
//     })
//   }

//   render() {
//     return (

//       <div style={{
//         height: "400px",
//         width: `${window.innerWidth}px`

//       }}>
//         <Map google={this.props.google}
//           style={{ width: '100%', height: '100%', position: 'relative' }}
//           className={'map'}
//           zoom={14}>
//           <Marker
//             name="Marker 1"
//             onClick={this.onMarkerClick}
//             position={{ lat: 37.778519, lng: -122.40564 }}
//           />

//           <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}
//           >
//             <div>s
//               <h4>Hello</h4>
//             </div>
//           </InfoWindow>

//         </Map>

//       </div >

//     )
//   }
// }


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
// })(MapContainer);
