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
    .domain([0, 90, 90, 1000, 2000, 5000, 6000, 80000])
    .range(d3.schemeReds[8]);

// Load external data and boot
Promise.all([
    d3.json(
        "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ),
    d3.csv(
        "https://raw.githubusercontent.com/sn0wstorm20202/Uncover-Greenhouse-Gas-Emissions-Tell-a-Climate-Story/main/data/ghgemissiontotals.csv",
        function (d) {
            data.set(d["Code"], +d["2023"]);
        }
    ),
]).then(function (loadData) {
    let topo = loadData[0];

    let mouseOver = function (_) {
        d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", 0.6);
        // .style("stroke", "transparent");
        d3.select(this).transition().duration(200).style("opacity", 1);
        // .style("stroke", "black");
    };

    let mouseLeave = function (_) {
        d3.selectAll(".Country").transition().duration(200).style("opacity", 0.8);
        // .style("stroke", "transparent");
        // d3.select(this)
        //     .transition()
        //     .duration(200)
        //     .style("stroke", "transparent");
    };

    let mouseClick = function (_, d) {
        console.log(d["2023"]);
        console.log(d.properties.name);
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
