// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

// Store our API endpoint as queryUrl.
url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"

d3.json(url).then(function (response) {
  // Once we get a response, send the data.features object to the createFeatures function.
  console.log(response); 
  createMarkers(response);
});
//==========================================================================================

function createMarkers(response) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  
  let stations = response.data.stations;
  
  let bikeStations = [];

  for (var i = 0; i <stations.length; i++) {

    // For each station, create a marker, and bind a popup with the station's name.
    let bikeMarker = L.marker([stations[i].lat, stations[i].lon])
      .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

    // Add the marker to the bikeMarkers array.
    bikeStations.push(bikeMarker);
    console.log(bikeStations)
  }
 
  bikesLayer = L.layerGroup(bikeStations)

  // Send our earthquakes layer to the createMap function/
  createMap(bikesLayer);
}
//==========================================================================================
// Create the createMap function.
function createMap(bikeStations) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": streetmap,
    "Topographic Map": topomap
  };

  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    "Bike Station": bikeStations
  };

  // Create our map, giving it the streetmap and bikeStations layers to display on load.
  var myMap = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [streetmap, topomap, bikeStations]
  });

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}


  // Create the tile layer that will be the background of our map.


  // Create a baseMaps object to hold the lightmap layer.


  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.


  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
