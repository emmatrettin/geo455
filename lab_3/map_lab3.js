var mymap = L.map("map").setView([28.74815838484581, 3.7253254861328573], 2)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1tYXRyZXR0aW4iLCJhIjoiY2xkdWRmYmUyMDRuaDNwcGNzM2d0dnd6MiJ9.bxqy5mC6pzQLHHSN4-1WqA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon12 = L.icon({
    iconUrl: 'images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var canada = L.marker([49.27486287156947, -123.09801778789223], {icon: myIcon1}).bindPopup("<b>Vancouver").addTo(mymap);

var oregon = L.marker([45.50907230856323, -122.66473799243306], {icon: myIcon2}).bindPopup("<b>Portland").addTo(mymap);

var alaska = L.marker([61.206837273293125, -149.8834971854895], {icon: myIcon3}).bindPopup("<b>Anchorage").addTo(mymap);

var england = L.marker([51.76228637476411, -1.2561036947802433], {icon: myIcon4}).bindPopup("<b>Oxford").addTo(mymap);

var scottland = L.marker([55.922706839565876, -4.301811194102122], {icon: myIcon5}).bindPopup("<b>Glasgow").addTo(mymap);

var ireland = L.marker([53.43115964276164, -6.323717058563655], {icon: myIcon6}).bindPopup("<b>Dublin").addTo(mymap);

var Reykjavik = L.marker([64.17900401828781, -21.961765731046032], {icon: myIcon7}).bindPopup("<b>Reykjavik").addTo(mymap);

var italy = L.marker([43.801160562288636, 11.228305536716071], {icon: myIcon8}).bindPopup("<b>Florance").addTo(mymap);

var greece = L.marker([38.093538768054735, 23.796373080257574], {icon: myIcon9}).bindPopup("<b>Athens").addTo(mymap);

var turkey = L.marker([41.21719863489421, 29.187613364650467], {icon: myIcon10}).bindPopup("<b>Istanbul").addTo(mymap);

var japan = L.marker([35.47563526443694, 139.89937513869558], {icon: myIcon11}).bindPopup("<b>Tokyo").addTo(mymap);

var australia = L.marker([-33.655273875343774, 151.00302542401872], {icon: myIcon12}).bindPopup("<b>Sydney").addTo(mymap);
