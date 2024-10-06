const countryCodeMap = {
    Afghanistan: "AFG",
    Angola: "AGO",
    Albania: "ALB",
    "United Arab Emirates": "ARE",
    Argentina: "ARG",
    Armenia: "ARM",
    Antarctica: "ATA",
    Australia: "AUS",
    Austria: "AUT",
    Azerbaijan: "AZE",
    Burundi: "BDI",
    Belgium: "BEL",
    Benin: "BEN",
    "Burkina Faso": "BFA",
    Bangladesh: "BGD",
    Bulgaria: "BGR",
    "The Bahamas": "BHS",
    "Bosnia and Herzegovina": "BIH",
    Belarus: "BLR",
    Belize: "BLZ",
    Bolivia: "BOL",
    Brazil: "BRA",
    Brunei: "BRN",
    Bhutan: "BTN",
    Botswana: "BWA",
    "Central African Republic": "CAF",
    Canada: "CAN",
    Switzerland: "CHE",
    Chile: "CHL",
    China: "CHN",
    Cameroon: "CMR",
    "Democratic Republic of the Congo": "COD",
    "Republic of the Congo": "COG",
    Colombia: "COL",
    "Costa Rica": "CRI",
    Cuba: "CUB",
    "Northern Cyprus": "CYP",
    Cyprus: "CYP",
    "Czech Republic": "CZE",
    Germany: "DEU",
    Djibouti: "DJI",
    Denmark: "DNK",
    "Dominican Republic": "DOM",
    Algeria: "DZA",
    Ecuador: "ECU",
    Egypt: "EGY",
    Eritrea: "ERI",
    Spain: "ESP",
    Estonia: "EST",
    Ethiopia: "ETH",
    Finland: "FIN",
    Fiji: "FJI",
    "Falkland Islands": "FLK",
    France: "FRA",
    Gabon: "GAB",
    Georgia: "GEO",
    Ghana: "GHA",
    Guinea: "GIN",
    Gambia: "GMB",
    "Guinea Bissau": "GNB",
    "Equatorial Guinea": "GNQ",
    Greece: "GRC",
    Greenland: "GRL",
    Guatemala: "GTM",
    Guyana: "GUY",
    Honduras: "HND",
    Croatia: "HRV",
    Haiti: "HTI",
    Hungary: "HUN",
    Indonesia: "IDN",
    India: "IND",
    Ireland: "IRL",
    Iran: "IRN",
    Iraq: "IRQ",
    Iceland: "ISL",
    Israel: "ISR",
    Italy: "ITA",
    Jamaica: "JAM",
    Jordan: "JOR",
    Japan: "JPN",
    Kazakhstan: "KAZ",
    Kenya: "KEN",
    Kyrgyzstan: "KGZ",
    Cambodia: "KHM",
    "South Korea": "KOR",
    Kuwait: "KWT",
    Laos: "LAO",
    Lebanon: "LBN",
    Liberia: "LBR",
    Libya: "LBY",
    "Sri Lanka": "LKA",
    Lesotho: "LSO",
    Lithuania: "LTU",
    Luxembourg: "LUX",
    Latvia: "LVA",
    Morocco: "MAR",
    Moldova: "MDA",
    Madagascar: "MDG",
    Mexico: "MEX",
    Macedonia: "MKD",
    Mali: "MLI",
    Myanmar: "MMR",
    Montenegro: "SCG",
    Mongolia: "MNG",
    Mozambique: "MOZ",
    Mauritania: "MRT",
    Malawi: "MWI",
    Malaysia: "MYS",
    Namibia: "NAM",
    "New Caledonia": "NCL",
    Niger: "NER",
    Nigeria: "NGA",
    Nicaragua: "NIC",
    Netherlands: "NLD",
    Norway: "NOR",
    Nepal: "NPL",
    "New Zealand": "NZL",
    Oman: "OMN",
    Pakistan: "PAK",
    Panama: "PAN",
    Peru: "PER",
    Philippines: "PHL",
    "Papua New Guinea": "PNG",
    Poland: "POL",
    "Puerto Rico": "PRI",
    "North Korea": "PRK",
    Portugal: "PRT",
    Paraguay: "PRY",
    Qatar: "QAT",
    Romania: "ROU",
    Russia: "RUS",
    Rwanda: "RWA",
    "Western Sahara": "ESH",
    "Saudi Arabia": "SAU",
    Sudan: "SDN",
    "South Sudan": "SSD",
    Senegal: "SEN",
    "Solomon Islands": "SLB",
    "Sierra Leone": "SLE",
    "El Salvador": "SLV",
    Somalia: "SOM",
    "Republic of Serbia": "SCG",
    Suriname: "SUR",
    Slovakia: "SVK",
    Slovenia: "SVN",
    Sweden: "SWE",
    Syria: "SYR",
    Chad: "TCD",
    Togo: "TGO",
    Thailand: "THA",
    Tajikistan: "TJK",
    Turkmenistan: "TKM",
    "East Timor": "TLS",
    "Trinidad and Tobago": "TTO",
    Tunisia: "TUN",
    Turkey: "TUR",
    Taiwan: "TWN",
    "United Republic of Tanzania": "TZA",
    Uganda: "UGA",
    Ukraine: "UKR",
    "United Kingdom": "GBR",
    Uruguay: "URY",
    USA: "USA",
    Uzbekistan: "UZB",
    Venezuela: "VEN",
    Vietnam: "VNM",
    Vanuatu: "VUT",
    Yemen: "YEM",
    "South Africa": "ZAF",
    Zambia: "ZMB",
    Zimbabwe: "ZWE",
};
let currentCountry;
let emissionData = {
    GLOBAL: {
        emissionDataByYear: new Array(54).fill(0),
        emissionDataBySubstance: new Array(54).fill().map(_ => ({
            "CO2": 0,
            "CH4": 0,
            "Fluorocarbons": 0,
            "N2O": 0
        })),
        emissionDataBySector: new Array(54).fill().map(_ => ({
            "Agriculture": 0,
            "Buildings": 0,
            "Fuel Exploitation": 0,
            "Industrial Combustion": 0,
            "Power Industry": 0,
            "Processes": 0,
            "Transport": 0,
            "Waste": 0,
        })),
    }
};
let year = 2023;

for (let code of Object.values(countryCodeMap)) {
    emissionData[code] = {};
    emissionData[code].emissionDataByYear = new Array(54).fill(0);
    emissionData[code].emissionDataBySubstance = new Array(54).fill().map(_ => ({
        "CO2": 0,
        "CH4": 0,
        "Fluorocarbons": 0,
        "N2O": 0
    }));
    emissionData[code].emissionDataBySector = new Array(54).fill().map(_ => ({
        "Agriculture": 0,
        "Buildings": 0,
        "Fuel Exploitation": 0,
        "Industrial Combustion": 0,
        "Power Industry": 0,
        "Processes": 0,
        "Transport": 0,
        "Waste": 0,
    }));
}

// The svg
const svg = d3.select("#chloropleth-map"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
const path = d3.geoPath();
const projection = d3.geoMercator();
// .attr("viewBox", "0 0 1000 900")
// .center([0, 0])
// .scale(0);
// .scale(width / 2.5 / Math.PI)
// .center([0, 0])
// .translate([width / 2, height / 2]);

// Data and color scale
const data = new Map();
const colorScale = d3
    .scaleThreshold()
    .domain([1, 90, 90, 1000, 2000, 5000, 6000, 80000])
    .range(d3.schemeReds[8]);

function render() {
    // Load external data and boot
    return Promise.all([
        d3.json(
            "https://raw.githubusercontent.com/sn0wstorm20202/Uncover-Greenhouse-Gas-Emissions-Tell-a-Climate-Story/main/data/world.geojson"
        ),
        d3.csv(
            "https://raw.githubusercontent.com/sn0wstorm20202/Uncover-Greenhouse-Gas-Emissions-Tell-a-Climate-Story/main/data/ghgemissiontotals.csv",
            function (d) {
                // emissionData["GLOBAL"].emissionDataByYear[year - 1970] += +d[year.toString()];
                data.set(d.Code, +d[year.toString()]);
            }
        ),
    ]).then(function (loadData) {
        svg.selectAll("*").remove();
        let topo = loadData[0];

        let mouseOver = function (_) {
            d3.selectAll(".Country")
                .transition()
                .duration(150)
                .style("opacity", 0.6)
                .style("stroke-width", "1px");
            // .style("stroke", "transparent");
            d3.select(this)
                .transition()
                .duration(100)
                .style("opacity", 1)
                .style("stroke-width", "2px");
            // .style("stroke", "black");
        };

        let mouseLeave = function (_) {
            d3.selectAll(".Country")
                .transition()
                .duration(150)
                .style("opacity", 0.9)
                .style("stroke-width", "1px");
            // .style("stroke", "transparent");
            // d3.select(this)
            //     .transition()
            //     .duration(200)
            //     .style("stroke", "transparent");
        };

        let mouseClick = function (_, d) {
            if (countryCodeMap[d.properties.name]) {
                document.getElementById("visualization-revert-button").style.display = 'block';
                currentCountry = d.properties.name;
                update(true, false);
            }
        };

        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(topo.features)
            .enter()
            .append("path")
            // draw each country
            .attr("d", d3.geoPath().projection(projection))
            // set the color of each country
            .attr("fill", function (d) {
                d.total = data.get(d.id) || 0;
                return colorScale(d.total);
            })
            .style("stroke", "black")
            .attr("class", function (_) {
                return "Country";
            })
            .style("opacity", 0.9)
            .style("cursor", "pointer")
            .on("mouseover", mouseOver)
            .on("mouseleave", mouseLeave)
            .on("click", mouseClick);

            // document.getElementById('total-ghg-emissions-id').innerText = emissionData["GLOBAL"].emissionDataByYear[+year - 1970].toFixed(2);
            // document.getElementById('visualization-title').innerText = `Global Emission Analysis (${year})`;
            // chart1.data.datasets[0].data = emissionData["GLOBAL"].emissionDataByYear;
            // chart2.data.datasets[0].data = Object.values(emissionData["GLOBAL"].emissionDataBySubstance);
            // chart3.data.datasets[0].data = Object.values(emissionData["GLOBAL"].emissionDataBySector);

            // chart1.update();
            // chart2.update();
            // chart3.update();
    });
}

d3.csv(
    "https://raw.githubusercontent.com/sn0wstorm20202/Uncover-Greenhouse-Gas-Emissions-Tell-a-Climate-Story/main/data/ghgemission.csv",
    function (d) {
        if (emissionData[d.Code]) {
            for (let i = 0; i < 54; i++) {
                emissionData[d.Code].emissionDataByYear[i] += +d[(1970 + i).toString()];
                emissionData["GLOBAL"].emissionDataByYear[i] += +d[(1970 + i).toString()];

                emissionData[d.Code].emissionDataBySubstance[i][d["Substance"]] += +d[(1970 + i).toString()];
                emissionData["GLOBAL"].emissionDataBySubstance[i][d["Substance"]] += +d[(1970 + i).toString()];

                emissionData[d.Code].emissionDataBySector[i][d["Sector"]] += +d[(1970 + i).toString()];
                emissionData["GLOBAL"].emissionDataBySector[i][d["Sector"]] += +d[(1970 + i).toString()];
            }
        }
    }
).then(function() {
    update(false, true);
});

// let emissionDataByYear = Array.new(54);
// let emissionDataBySubstance;
// let emissionDataBySector;

function update(openPanel, refresh) {
    if (openPanel && document.getElementById("visualization-id").classList.contains("closed")) {
        document.getElementById("visualization-id").classList.remove("closed");
    }
    if (refresh) {
        render();
    }
    if (currentCountry) {
        const countryCode = countryCodeMap[currentCountry];
        document.getElementById('total-ghg-emissions-id').innerText = emissionData[countryCode].emissionDataByYear[+year - 1970].toFixed(2);
        document.getElementById('visualization-title').innerText = `${currentCountry}'s Emission Analysis (${year})`;
        chart1.data.datasets[0].data = emissionData[countryCode].emissionDataByYear;
        chart2.data.datasets[0].data = Object.values(emissionData[countryCode].emissionDataBySubstance[+(year - 1970)]);
        chart3.data.datasets[0].data = Object.values(emissionData[countryCode].emissionDataBySector[+(year - 1970)]);

    } else {
        document.getElementById('total-ghg-emissions-id').innerText = emissionData["GLOBAL"].emissionDataByYear[+year - 1970].toFixed(2);
        document.getElementById('visualization-title').innerText = `Global Emission Analysis (${year})`;
        chart1.data.datasets[0].data = emissionData["GLOBAL"].emissionDataByYear;
        chart2.data.datasets[0].data = Object.values(emissionData["GLOBAL"].emissionDataBySubstance[+(year - 1970)]);
        chart3.data.datasets[0].data = Object.values(emissionData["GLOBAL"].emissionDataBySector[+(year - 1970)]);
    }
    chart1.update();
    chart2.update();
    chart3.update();
}

function onVisualizationRevertClick() {
    if (currentCountry) {
        document.getElementById("visualization-revert-button").style.display = 'none';
        currentCountry = undefined;
        update(true, false);
    }
}

function onYearChange() {
    year = document.getElementById("year-range").value;
    update(false, true);
}
