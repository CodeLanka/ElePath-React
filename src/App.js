import React, { Component } from "react";
import { MapView } from "./components/MapView";

class App extends Component {
  render() {
    return (
      <MapView
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "flex-end", alignItems: "center" }} />}
        mapElement={<div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, }} />}
      />
    );
  }
}

export default App;
