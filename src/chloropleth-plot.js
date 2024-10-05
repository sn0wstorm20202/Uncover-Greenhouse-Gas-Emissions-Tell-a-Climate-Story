const countryMappedData = {
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

// Load CSV data for GHG emissions
let emissionDataBySubstance = {
    CO2: 0,
    CH4: 0,
    N2O: 0,
    Fluorocarbons: 0,
};
let emissionDataBySector = {
    "Agriculture": 0,
    "Buildings": 0,
    "Fuel Exploitation": 0,
    "Industrial Combustion": 0,
    "Power Industry": 0,
    "Processes": 0,
    "Transport": 0,
    "Waste": 0,
};
let emissionDataByYear = {
    "2023": 0,
    "2022": 0,
    "2021": 0,
    "2020": 0,
    "2019": 0,
    "2018": 0,
    "2017": 0,
    "2016": 0,
    "2015": 0,
    "2014": 0,
    "2013": 0,
    "2012": 0,
    "2011": 0,
    "2010": 0,
    "2009": 0,
    "2008": 0,
    "2007": 0,
    "2006": 0,
    "2005": 0,
    "2004": 0,
    "2003": 0,
    "2002": 0,
    "2001": 0,
    "2000": 0,
    "1999": 0,
    "1998": 0,
    "1997": 0,
    "1996": 0,
    "1995": 0,
    "1994": 0,
    "1993": 0,
    "1992": 0,
    "1991": 0,
    "1990": 0,
    "1989": 0,
    "1988": 0,
    "1987": 0,
    "1986": 0,
    "1985": 0,
    "1984": 0,
    "1983": 0,
    "1982": 0,
    "1981": 0,
    "1980": 0,
    "1979": 0,
    "1978": 0,
    "1977": 0,
    "1976": 0,
    "1975": 0,
    "1974": 0,
    "1973": 0,
    "1972": 0,
    "1971": 0,
    "1970": 0,
}
// d3.csv(
//     "https://raw.githubusercontent.com/sn0wstorm20202/Uncover-Greenhouse-Gas-Emissions-Tell-a-Climate-Story/main/data/ghgemission.csv",
//     function (d) {
//         let country = emissionData[d["Code"]];
//         if (country) {

//         } else {

//         }
//     }
// );

let year = 2023;

function onYearChange() {
    year = document.getElementById("year-range").value;
    console.log(year);
}

// Load external data and boot
Promise.all([
    d3.json(
        "https://raw.githubusercontent.com/sn0wstorm20202/Uncover-Greenhouse-Gas-Emissions-Tell-a-Climate-Story/main/data/world.geojson"
    ),
    d3.csv(
        "https://raw.githubusercontent.com/sn0wstorm20202/Uncover-Greenhouse-Gas-Emissions-Tell-a-Climate-Story/main/data/ghgemissiontotals.csv",
        function (d) {
            data.set(d["Code"], +d[year.toString()]);
        }
    ),
]).then(function (loadData) {
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
            .style("opacity", 0.8)
            .style("stroke-width", "1px");
        // .style("stroke", "transparent");
        // d3.select(this)
        //     .transition()
        //     .duration(200)
        //     .style("stroke", "transparent");
    };

    let mouseClick = function (_, d) {
        const countryCode = countryMappedData[d.properties.name];
        if (countryCode) {
            if (document.getElementById("visualization-id").classList.contains("closed")) {
                document.getElementById("visualization-id").classList.remove("closed");
            }
            document.getElementById('visualization-title').innerText = `${d.properties.name}'s Emission Analysis (${year})`;
            console.log(d.properties.name, d.total, countryCode);
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
        .style("opacity", 0.8)
        .style("cursor", "pointer")
        .on("mouseover", mouseOver)
        .on("mouseleave", mouseLeave)
        .on("click", mouseClick);
});
