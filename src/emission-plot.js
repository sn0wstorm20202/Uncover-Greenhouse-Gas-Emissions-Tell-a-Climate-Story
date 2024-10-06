let map = L.map("emission-map").setView([0, 0], 1);

// let baseMaps = {
// "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap contributors',
//     noWrap: true
// }),
//     "Esri": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//         maxZoom: 19,
//         attribution: '© Esri, DigitalGlobe, GeoEye, Earthstar Geographics and IHS',
//         noWrap: true
//     }),
//     "Google Maps": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
//         maxZoom: 19,
//         attribution: '© Google',
//         subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
//         noWrap: true
//     })
// };

// map.addLayer(baseMaps["OpenStreetMap"]);

// L.control.layers(baseMaps)
//          .addTo(map);

map.addLayer(
    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 18,
        attribution: '© Google',
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    })
);

let georasterLayer;
let currentDate;

function renderGeoraster(url, savedDate) {
    fetch(url)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => {
            parseGeoraster(arrayBuffer).then((georaster) => {
                /*
                    GeoRasterLayer is an extension of GridLayer,
                    which means can use GridLayer options like opacity.

                    Just make sure to include the georaster option!

                    Optionally set the pixelValuesToColorFn function option to customize
                    how values for a pixel are translated to a color.

                    https://leafletjs.com/reference.html#gridlayer
                */
                if (currentDate == savedDate) {
                    if (georasterLayer) {
                        map.removeLayer(georasterLayer);
                        georasterLayer = undefined;
                    }
                    georasterLayer = new GeoRasterLayer({
                        georaster: georaster,
                        opacity: 0.7,
                        // pixelValuesToColorFn: values => values[0] === 42 ? '#ffffff' : '#000000',
                        resolution: 128,
                    });
                    georasterLayer.addTo(map);
                    // map.setZoom(8);

                    // map.fitBounds(georasterLayer.getBounds());
                }
            });
        });
}

Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

function onDateChange() {
    const dateValue = document.getElementById("date-range").value - 1;
    const newDate = new Date(2015, 0, 1).addDays(dateValue);

    currentDate =
        newDate.getFullYear().toString().padStart(4, "0") +
        (newDate.getMonth() + 1).toString().padStart(2, "0") +
        newDate.getDate().toString().padStart(2, "0");
    // console.log(dateValue, dateStr);
    renderGeoraster(
        `https://dljsq618eotzp.cloudfront.net/oco2geos-co2-daygrid-v10r/oco2_GEOS_XCO2_L3CO2_day_B10206Ar_${currentDate}.tif`,
        currentDate
    );
}

// Default
// renderGeoraster('https://dljsq618eotzp.cloudfront.net/oco2geos-co2-daygrid-v10r/oco2_GEOS_XCO2_L3CO2_day_B10206Ar_20150101.tif');
onDateChange();
