var mymap = L.map("map", {
    center: [0.0, 0.0],
    zoom: 2,
});

//baselayers
var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 3,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 3,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


//this is where the proportion of deforestation layer starts
function getColor1(value) {
    return value > 3.00  ? '#980043':
           value > 2.00  ? '#dd1c77':
           value > 0.80  ? '#df65b0':
           value > 0.25  ? '#d7b5d8':
                        '#f1eef6';                       
}

function style1(feature){
    return {
        fillColor: getColor1(feature.properties.propdef), 
        weight: 1,
        opacity: 1,
        color: '#D3D3D3',
        fillOpacity: 0.9
    };
    }

  function highlightFeature1(e1) {
    var feature = e1.target;

    feature.setStyle({
        weight: 2,
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

    var proportiondef;  
        function resetHighlight1(e1) {
            proportiondef.resetStyle(e1.target);
    }

    proportiondef = L.geoJson(propdef, {
        style: style1,
        onEachFeature: onEachFeature1
    }).bindPopup(function (layer){
    return layer.feature.properties.COUNTRY
           + '<p style="color:black">' + layer.feature.properties.propdef.toString() + ' % </p>';       
}).addTo(mymap);

//the legend works
 var legend1 = L.control({position: 'bottomright'}); 
    legend1.onAdd = function (mymap) {
        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 0.25, 0.80, 2.00, 3.00]; 
        div.innerHTML = '<b>Proportion of deforestation <br> per country %<br></b>'; 
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor1(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
    };
    legend1.addTo(mymap);

//this is where the Share of Global Forest Area layer starts
function getColor2(value) {
    return value > 5.00  ? '#54278f':
           value > 1.00  ? '#756bb1':
           value > 0.25  ? '#9e9ac8':
           value > 0.10 ? '#cbc9e2':
                        '#f2f0f7';                       
}

function style2(feature){
    return {
        fillColor: getColor2(feature.properties.Share_of_global_forest_area), 
        weight: 1,
        opacity: 1,
        color: '#D3D3D3',
        fillOpacity: 0.9
    };
    }

  function highlightFeature2(e2) {
    var feature = e2.target;

    feature.setStyle({
        weight: 2,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

    function onEachFeature2(feature, layer) {
        layer.on({
            mouseover: highlightFeature2, 
            mouseout: resetHighlight2,    
        });
    }

    var shareforest;  
        function resetHighlight2(e2) {
            shareforest.resetStyle(e2.target);
    }

    shareforest = L.geoJson(shareforestarea, {
        style: style2,
        onEachFeature: onEachFeature2
    }).bindPopup(function (layer){
    return layer.feature.properties.COUNTRY
           + '<p style="color:black">' + layer.feature.properties.Share_of_global_forest_area.toString() + ' % </p>';       
}).addTo(mymap);

  var legend2 = L.control({position: 'bottomright'}); 
    legend2.onAdd = function (mymap) {
        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 0.10, 0.25, 1.00, 5.00]; 
        div.innerHTML = '<b>Share of Global Forest Area % <br></b>'; 
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor2(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
    };
    legend2.addTo(mymap);

//deforestation causes
//popups with image
var indonesiaPopup = "Indonesia deforestation for palm oil<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Riau_palm_oil_2007.jpg/1920px-Riau_palm_oil_2007.jpg' alt='deforestation in Sumatra' width='150px'/>"; 

var malaysiaPopup = "Malaysia Palm Oil Plantation<br/><img src='https://upload.wikimedia.org/wikipedia/commons/f/f2/Oil_palm_plantations_in_Sarawak.jpg' alt='Malaysia palm oil plantation' width='150px'/>"; 

var colombiaPopup = "Soil Conditions in Colombia after deforestation for palm oil production<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/STS61C-36-0029_Orinoco%2C_Meta_Rivers%2C_Colombia_and_Venezuela_January_1986.jpg/1024px-STS61C-36-0029_Orinoco%2C_Meta_Rivers%2C_Colombia_and_Venezuela_January_1986.jpg' alt='Colombia Aerial photo' width='150px'/>";

var nigeriaPopup = "Clear Cutting in Nigeria for palm oil plantation<br/><img src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Deforestation_in_Nigeria_%283509228297%29.jpg' alt='Clear Cutting in Nigeria' width='150px'/>";

var thailandPopup = "Forest Burns in Thailand for palm oil production<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karen_rice_fields_controlled_burn.JPG/1280px-Karen_rice_fields_controlled_burn.JPG' alt='Forest Burns in Thailand' width='150px'/>";

var brazilPopup = "Deforestation line in Brazil<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Opera%C3%A7%C3%A3o_Hymenaea%2C_Julho-2016_%2829399454651%29.jpg/1280px-Opera%C3%A7%C3%A3o_Hymenaea%2C_Julho-2016_%2829399454651%29.jpg' alt='Deforestation line in Brazil' width='150px'/>";

var peruPopup = "Deforestation in Peruvian Amazon for cattle grazing<br/><img src='https://live.staticflickr.com/4848/32891352068_a55f970f34_b.jpg' alt='Deforestation in Peruvian Amazon' width='150px'/>";

var boliviaPopup = "Replacing forest area for cattle in Bolivia<br/><img src='https://upload.wikimedia.org/wikipedia/commons/b/b3/Caranavi_field5_lo_%284387016012%29.jpg' alt='Agriculture replacing forest area' width='150px'/>";

var swedenPopup = "Logging in Sweden<br/><img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Piles_of_logs_beside_a_road_1.jpg' alt='Logging in Sweden' width='150px'/>";

var finlandPopup = "Unsustainable logging in Finland<br/><img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Wood_exploitation_in_Finland.jpg' width='150px'/>";

var usaPopup = "Logging in USA<br/><img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/fl48762262713-public-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d8e928484167abe6b8dbb91a6b8ffaf0' alt='Logging in USA' width='150px'/>";

var russiaPopup = "Wildfires in Siberia<br/><img src='https://live.staticflickr.com/4891/46200452944_348f8c76b4_b.jpg' width='150px'/>";

var canadaPopup = "Aerial view of wildfires in Alberta, Canada<br/><img src='https://live.staticflickr.com/2412/5734695196_4a9b016414_b.jpg' alt='Aerial view of wildfires in Alberta, Canada' width='150px'/>";

var drcPopup = "Deforestation for agricultural land in Democratic Republic of the Congo<br/><img src='https://live.staticflickr.com/1805/43394936502_f2271a7208_b.jpg' width='150px'/>";

var papuanewguineaPopup = "Deforestation for agricultural land in Papua New Guinea<br/><img src='https://live.staticflickr.com/4325/35502816890_d8bee8f7c5_b.jpg' alt='Deforestation for agricultural land in Papua New Guinea' width='150px'/>";

var venezualaPopup = "Deforestation for agricultural land in Venezuala<br/><img src='https://vociglobali.it/wp-content/uploads/2020/09/Deforestation-Romania-Hannes-Knapp_1220253-800x445.jpg' alt='Deforestation for agricultural land in Venezuala' width='150px'/>";

var mexicoPopup = "Land cleared for agriculture in Mexico<br/><img src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Opera%C3%A7%C3%A3o_Onda_Verde%2C_2014_%2829390177775%29.jpg' alt='Aerial view of wildfires in Alberta, Canada' width='150px'/>";

var customOptions ={'maxWidth': '150','className' : 'custom'};

//icons
var myoil = L.icon({
    iconUrl: 'palmtree.png',
    iconSize: [30,30],
    iconAnchor: [0,0],
    popupAnchor: [15,10],
});

var mycow = L.icon({
    iconUrl: 'cow.png',
    iconSize: [30,30],
    iconAnchor: [0,0],
    popupAnchor: [15,10],
});

var mylog = L.icon({
    iconUrl: 'logs.png',
    iconSize: [30,20],
    iconAnchor: [0,0],
    popupAnchor: [15,10],
});

var myfire = L.icon({
    iconUrl: 'fire.png',
    iconSize: [30,30],
    iconAnchor: [0,0],
    popupAnchor: [15,10],
});

var myag = L.icon({
    iconUrl: 'wheat.png',
    iconSize: [30,30],
    iconAnchor: [0,0],
    popupAnchor: [15,10],
});

// Set up landmark variables and individual landmarks
var landmarks = L.layerGroup();

var indonesia = L.marker([-2.1398551303154862, 120.14215625636726]).bindPopup(indonesiaPopup, customOptions).addTo(landmarks);

var malaysia = L.marker([4.709802777624353, 102.16852412494171]).bindPopup(malaysiaPopup, customOptions).addTo(landmarks);

var colombia = L.marker([4.157119874956017, -73.12834982586696]).bindPopup(colombiaPopup, customOptions).addTo(landmarks);

var nigeria = L.marker([9.100385524484677, 7.519420394522782]).bindPopup(nigeriaPopup, customOptions).addTo(landmarks);

var thailand = L.marker([16.20338008528617, 100.97401225842313]).bindPopup(thailandPopup, customOptions).addTo(landmarks);

var brazil = L.marker([-8.852146855668108, -51.18591359553596]).bindPopup(brazilPopup, customOptions).addTo(landmarks);

var peru = L.marker([-8.91458275929927, -75.58341289048228]).bindPopup(peruPopup, customOptions).addTo(landmarks);

var bolivia = L.marker([-18.164020883661863, -64.94211552196934]).bindPopup(boliviaPopup, customOptions).addTo(landmarks);

var sweden = L.marker([63.74625095636995, 16.279862145271043]).bindPopup(brazilPopup, customOptions).addTo(landmarks);

var finland = L.marker([63.804508095267984, 26.738847062785755]).bindPopup(peruPopup, customOptions).addTo(landmarks);

var usa = L.marker([40.85739576373528, -100.32931056177343]).bindPopup(boliviaPopup, customOptions).addTo(landmarks);

var russia = L.marker([63.97162334872082, 93.41928054711394]).bindPopup(brazilPopup, customOptions).addTo(landmarks);

var canada = L.marker([56.507164485782404, -111.54709625072189]).bindPopup(peruPopup, customOptions).addTo(landmarks);

var drc = L.marker([-4.030905732176824, 23.709228278052247]).bindPopup(drcPopup, customOptions).addTo(landmarks);

var papuanewguinea = L.marker([-6.529688607593652, 142.53916693838323]).bindPopup(papuanewguineaPopup, customOptions).addTo(landmarks);

var venezuala = L.marker([6.263410002367836, -65.46277300190629]).bindPopup(venezualaPopup, customOptions).addTo(landmarks);

var mexico = L.marker([17.059126434620875, -95.22369099967288]).bindPopup(mexicoPopup, customOptions).addTo(landmarks);

//data points
coords =[
    [-2.1398551303154862, 120.14215625636726],
    [4.709802777624353, 102.16852412494171],
    [4.157119874956017, -73.12834982586696],
    [9.100385524484677, 7.51942039452278],
    [16.20338008528617, 100.97401225842313],
    [-8.852146855668108, -51.18591359553596],
    [-8.91458275929927, -75.58341289048228],
    [-18.164020883661863, -64.94211552196934],
    [63.74625095636995, 16.279862145271043],
    [63.804508095267984, 26.738847062785755],
    [40.85739576373528, -100.32931056177343],
    [63.97162334872082, 93.41928054711394],
    [56.507164485782404, -111.54709625072189],
    [-4.030905732176824, 23.709228278052247],
    [-6.529688607593652, 142.53916693838323],
    [6.263410002367836, -65.46277300190629],
    [17.059126434620875, -95.22369099967288]
];

//marker layergroup
var loc = L.layerGroup();
L.marker(coords[0], {icon: myoil}).bindPopup(indonesiaPopup, customOptions).addTo(loc);
L.marker(coords[1], {icon: myoil}).bindPopup(malaysiaPopup, customOptions).addTo(loc);
L.marker(coords[2], {icon: myoil}).bindPopup(colombiaPopup, customOptions).addTo(loc);
L.marker(coords[3], {icon: myoil}).bindPopup(nigeriaPopup, customOptions).addTo(loc);
L.marker(coords[4], {icon: myoil}).bindPopup(thailandPopup, customOptions).addTo(loc);
L.marker(coords[5], {icon: mycow}).bindPopup(brazilPopup, customOptions).addTo(loc);
L.marker(coords[6], {icon: mycow}).bindPopup(peruPopup, customOptions).addTo(loc);
L.marker(coords[7], {icon: mycow}).bindPopup(boliviaPopup, customOptions).addTo(loc);
L.marker(coords[8], {icon: mylog}).bindPopup(swedenPopup, customOptions).addTo(loc);
L.marker(coords[9], {icon: mylog}).bindPopup(finlandPopup, customOptions).addTo(loc);
L.marker(coords[10], {icon: mylog}).bindPopup(usaPopup, customOptions).addTo(loc);
L.marker(coords[11], {icon: myfire}).bindPopup(russiaPopup, customOptions).addTo(loc);
L.marker(coords[12], {icon: myfire}).bindPopup(canadaPopup, customOptions).addTo(loc);
L.marker(coords[13], {icon: myag}).bindPopup(drcPopup, customOptions).addTo(loc);
L.marker(coords[14], {icon: myag}).bindPopup(papuanewguineaPopup, customOptions).addTo(loc);
L.marker(coords[15], {icon: myag}).bindPopup(venezualaPopup, customOptions).addTo(loc);
L.marker(coords[16], {icon: myag}).bindPopup(mexicoPopup, customOptions).addTo(loc);
loc.addTo(mymap);

//menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    };

var overlays = {
    'Proportion of Deforestation': proportiondef,
    'Share of Global Forest Area': shareforest,
    'Deforestation Causes': loc,
};

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);

//take me home button
L.easyButton(('<img src="globe.png", height=85%>'), function(btn, map){
    map.setView([40, 0.0], 2);
}).addTo(mymap);

