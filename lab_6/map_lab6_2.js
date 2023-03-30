var mymap = L.map("map", {
    center: [51.48882027639122, -0.1028811094342392],
    zoom: 11,
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

function getColor(value) {
    return value > 139 ? '#006837':
            value > 87 ? '#31a354':
            value > 53 ? '#78c679':
            value > 32 ? '#c2e699':
                         '#ffffcc';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.pop_den),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function highlightFeature(e) {
    var feature = e.target;
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });
   
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
     });
}

var geojson;      
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

    geojson = L.geoJson(data, {
        style:style,
        onEachFeature: onEachFeature
    }).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);


var legend = L.control({position: 'bottomright'}); 
legend.onAdd = function (mymap) {
        var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 32, 53, 87, 139]; 
        div.innerHTML = '<b>Density per square unit area <br></b>';
        for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};
legend.addTo(mymap);



//this is where the language layer starts
function getColor1(value) {
    return value > 7.72  ? '#980043':
           value > 4.66  ? '#dd1c77':
           value > 3.03  ? '#df65b0':
           value > 1.34  ? '#d7b5d8':
                        '#f1eef6';                       
}

function style1(feature){
    return {
        fillColor: getColor1(feature.properties.none_Pden), 
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
    }

  function highlightFeature1(e1) {
    var feature = e1.target;

    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}


    function onEachFeature1(feature, layer) {
        layer.on({
            mouseover: highlightFeature1, 
            mouseout: resetHighlight1,    
        });
    }

    var nonenglish2;  
        function resetHighlight1(e1) {
            nonenglish2.resetStyle(e1.target);
    }

    nonenglish2 = L.geoJson(pden2, {
        style: style1,
        onEachFeature: onEachFeature1
    }).bindPopup(function (layer){
    return layer.feature.properties.name 
           + '<p style="color:pink">' + layer.feature.properties.none_Pden.toString() + ' people/hectare </p>';       
}).addTo(mymap);

//the legend works
  var legend1 = L.control({position: 'bottomleft'}); 
    legend1.onAdd = function (mymap) {
        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 1.34, 3.03, 4.66, 7.72]; 
        div.innerHTML = '<b>Non-English Speaking Households <br></b>'; 
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor1(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
    };
    legend1.addTo(mymap);

//menu items
var baseLayers = {
    'Grayscale': grayscale,
    };

var overlays = {
    'Population Density': geojson,
    'Non-English Speaking Households': nonenglish2,
};

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);