var mymap = L.map("map").setView([43.81642117539796, -91.23209456992531], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1tYXRyZXR0aW4iLCJhIjoiY2xkdWRmYmUyMDRuaDNwcGNzM2d0dnd6MiJ9.bxqy5mC6pzQLHHSN4-1WqA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([43.81642117539796, -91.23209456992531])
    .addTo(mymap)
    .bindPopup("<b>Hello!</b><br>Hello! Welcome to University of Wisconsin-La Crosse.")
    .openPopup();