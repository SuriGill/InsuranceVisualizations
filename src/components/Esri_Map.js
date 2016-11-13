import React, { Component } from 'react';
import EsriLeaflet from 'esri-leaflet';
import Leaflet from 'leaflet'
import Chance from 'chance';
import 'leaflet.markercluster'

const chance = new Chance();


class Esri_Map extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      mapID: chance.hash({length: 15})
    }
  }

  componentDidMount = () => {
    let map = Leaflet.map(this.state.mapID).setView([45.526, -122.667], 15);
    EsriLeaflet.basemapLayer('DarkGray', {
      detectRetina: true
    }).addTo(map);

    var icons = {
      north: Leaflet.icon({
        iconUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-north.png',
        iconRetinaUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-north@2x.png',
        iconSize: [27, 31],
        iconAnchor: [13.5, 17.5],
        popupAnchor: [0, -11],
      }),
      south: Leaflet.icon({
        iconUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-south.png',
        iconRetinaUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-south@2x.png',
        iconSize: [27, 31],
        iconAnchor: [13.5, 13.5],
        popupAnchor: [0, -11],
      }),
      east: Leaflet.icon({
        iconUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-east.png',
        iconRetinaUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-east@2x.png',
        iconSize: [31, 27],
        iconAnchor: [13.5, 17.5],
        popupAnchor: [0, -11],
      }),
      west: Leaflet.icon({
        iconUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-west.png',
        iconRetinaUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-west@2x.png',
        iconSize: [31, 27],
        iconAnchor: [17.5, 13.5],
        popupAnchor: [0, -11],
      }),
    };

  let stops = EsriLeaflet.featureLayer({
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Trimet_Transit_Stops/FeatureServer/0',
    pointToLayer: function (geojson, latlng) {
      return Leaflet.circleMarker(latlng);
    },
    style:{
      color: '#5B7CBA',
      weight: 2,
      opacity: 0.85,
      fillOpacity: 0.5
    }
  }).addTo(map);;

  }

  handleChange = (event) => {

  }

  render() {

    return (
    	<div id={this.state.mapID} style={{width:"1000px",height:"800px"}}> 
        <div id='map'> </div>
      </div>
    );
  }

}

export default Esri_Map