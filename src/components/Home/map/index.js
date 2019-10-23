import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Fade from "react-reveal/Fade";


export class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Fade bottom delay={200}>
        <div style={{
          height: "400px",
          width: `${window.innerWidth}px`
        }}>

          <Map
            className="map"
            google={this.props.google}
            onClick={this.onMapClicked}
            style={{ height: "400px", position: "relative", width: "100%" }}
            initialCenter={{ lat: 39.71, lng: -105.017262 }}
            zoom={12.1}

          >
            <Marker
              name="Fruitdale School Lofts"
              onClick={this.onMarkerClick}
              position={{ lat: 39.778726, lng: -105.119055 }}
            />
            <Marker
              name="Hanger 2 Lowry"
              onClick={this.onMarkerClick}
              position={{ lat: 39.721160, lng: -104.897845 }}
            />
            <Marker
              name="Pancratia Hall Lofts"
              onClick={this.onMarkerClick}
              position={{ lat: 39.662223, lng: -105.028117 }}
            />
            <Marker
              name="Eiber Village at Garrison Station"
              onClick={this.onMarkerClick}
              position={{ lat: 39.737027, lng: -105.099002 }}
            />
            <Marker
              name="Steam Plant Lofts"
              onClick={this.onMarkerClick}
              position={{ lat: 39.723835, lng: -104.897968 }}
            />
            <Marker
              name="Steam Plant Row Homes"
              onClick={this.onMarkerClick}
              position={{ lat: 39.724070, lng: -104.897473 }}
            />
            <Marker
              name="InnovAge Headquarters"
              onClick={this.onMarkerClick}
              position={{ lat: 39.723902, lng: -104.882905 }}
            />

            <InfoWindow
              marker={this.state.activeMarker}
              onClose={this.onInfoWindowClose}
              visible={this.state.showingInfoWindow}

            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </Fade>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg",
  version: "3.38"
})(MapContainer);

