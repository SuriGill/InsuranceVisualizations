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
      mapID: chance.hash({length: 15}),
      mapID2: chance.hash({length: 15}),
      mapID3: chance.hash({length: 15}),
    }
  }

  componentDidMount = () => {
    let map = Leaflet.map(this.state.mapID).setView([45.526, -122.667], 15);
    let map2 = Leaflet.map(this.state.mapID2).setView([45.526, -122.667], 15);
    let map3 = Leaflet.map(this.state.mapID3).setView([45.526, -122.667], 15);
    EsriLeaflet.basemapLayer('DarkGray', {
      detectRetina: true
    }).addTo(map);
    EsriLeaflet.basemapLayer('DarkGray', {
      detectRetina: true
    }).addTo(map2);
    EsriLeaflet.basemapLayer('DarkGray', {
      detectRetina: true
    }).addTo(map3);


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
  }).addTo(map);

  let stops2 = EsriLeaflet.featureLayer({
    url: 'http://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_ZIP_Codes_2015/FeatureServer/0',
    pointToLayer: function (geojson, latlng) {
      return Leaflet.circleMarker(latlng);
    },
    style:{
      color: '#ffa500',
      weight: 2,
      opacity: 0.85,
      fillOpacity: 0.5
    }
  }).addTo(map2);

  let stops5 = EsriLeaflet.featureLayer({
    url: 'http://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_ZIP_Codes_2015/FeatureServer/0',
    pointToLayer: function (geojson, latlng) {
      return Leaflet.circleMarker(latlng);
    },
    style:{
      color: '#00CED1',
      weight: 2,
      opacity: 0.85,
      fillOpacity: 0.5
    }
  }).addTo(map3);

  let stops3 = EsriLeaflet.featureLayer({
    url: '  https://demographics6.arcgis.com/arcgis/rest/services?redirect=https://demographics6.arcgis.com/arcgis/rest/services/USA_Demographics_and_Boundaries_2016/MapServer',
    pointToLayer: function (geojson, latlng) {
      return Leaflet.circleMarker(latlng);
    },
    style:{
      color: '#FF69B4',
      weight: 2,
      opacity: 0.85,
      fillOpacity: 0.5
    }
  }).addTo(map2);


  let stops4 = EsriLeaflet.featureLayer({
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0',
    pointToLayer: function (geojson, latlng) {
      return Leaflet.circleMarker(latlng);
    },
    style:{
      color: '#551a8b',
      weight: 2,
      opacity: 0.85,
      fillOpacity: 0.5
    }
  }).addTo(map2);
  


  // https://demographics6.arcgis.com/arcgis/rest/services?redirect=https://demographics6.arcgis.com/arcgis/rest/services/USA_Demographics_and_Boundaries_2016/MapServer

  // http://demographics5.arcgis.com/arcgis/rest/services/USA_Traffic_Counts/MapServer/0

  }
  handleChange = (event) => {

  }

  render() {

    return (
    	<div style={{width:"1000px",height:"2500px"}}> 
        <div id={this.state.mapID} style={{width:"1000px",height:"800px"}}> </div>
        <br />
        <div id={this.state.mapID2} style={{width:"1000px",height:"800px"}}> </div>
        <br />
        <div id={this.state.mapID3} style={{width:"1000px",height:"800px"}}> </div>
      </div>
    );
  }

}

export default Esri_Map