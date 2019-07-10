// import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//
// class Mapping extends Component {
//     render() {
//         return {
//             <Map google={this.props.google} zoom={14}>
//
//             <Marker onClick={this.onMarkerClick}
//             name={'Current location'} />
//
//             <InfoWindow onClose={this.onInfoWindowClose}>
//                 <div>
//                     <h1>{this.state.selectedPlace.name}</h1>
//                 </div>
//             </InfoWindow>
//             </Map>
//     );
//         }
//     }
// }
//
//
// export default GoogleApiWrapper({
//     apiKey: (AIzaSyBRdNeR0gEeHLjOYzFrWIlO97rB5NKLLMA)
// })(Mapping)
//
//
//
// /*
// import { render } from "react-dom";
// import { Link } from 'react-router-dom';
// import Geocode from "react-geocode";
// import GoogleMapReact from 'google-map-react';
//
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
//
//
// // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
// Geocode.setApiKey("AIzaSyBRdNeR0gEeHLjOYzFrWIlO97rB5NKLLMA");
//
// // Enable or disable logs. Its optional.
// Geocode.enableDebug();
//
// // Get address from latidude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//     response => {
//         const address = response.results[0].formatted_address;
//         console.log(address);
//     },
//     error => {
//         console.error(error);
//     }
// );
//
// // Get latidude & longitude from address.
// Geocode.fromAddress("Eiffel Tower").then(
//     response => {
//         const { lat, lng } = response.results[0].geometry.location;
//         console.log(lat, lng);
//     },
//     error => {
//         console.error(error);
//     }
// );
//
// class SimpleMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     };
//
//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//     <GoogleMapReact
//         bootstrapURLKeys={{ key: /!* YOUR KEY HERE *!/ }}
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//     >
//     <AnyReactComponent
//         lat={59.955413}
//         lng={30.337844}
//         text="My Marker"
//             />
//             </GoogleMapReact>
//             </div>
//     );
//     }
// }
//
// export default SimpleMap;*/
