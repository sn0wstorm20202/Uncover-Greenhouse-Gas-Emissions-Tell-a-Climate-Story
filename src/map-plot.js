let map = L.map('map-1')
           .setView([0, 0], 2);

let baseMaps = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        noWrap: true
    }),
    "Esri": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri, DigitalGlobe, GeoEye, Earthstar Geographics and IHS',
        noWrap: true
    }),
    "Google Maps": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        // maxZoom: 19,
        attribution: '© Google',
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        noWrap: true
    })
};

map.addLayer(baseMaps["OpenStreetMap"]);

L.control.layers(baseMaps)
         .addTo(map);

let marker = L.marker([51.5, 0])
              .addTo(map);
marker.bindPopup("<b>Hello world!</b><br />I am a popup.");   

let circle = L.circle([30, 60], 500, {
                  color: 'red',
                  fillColor: 'red',
                  fillOpacity: 0.5, // Adjust opacity (0 for transparent, 1 for solid)
                  weight: 2 // Adjust line thickness
              })
              .addTo(map);

// Add a popup to the circle
circle.bindPopup("This is a red circle.");
