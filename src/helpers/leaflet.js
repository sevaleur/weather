import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let myMarker = L.icon({
    iconUrl: icon,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -40],
    shadowUrl: iconShadow
})

let myMap, marker; 

export const initMap = (coord) => 
{
    myMap = L.map('mapcontainer')

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    myMap.setView(coord, 13)
    marker = L.marker(coord, {icon: myMarker}).addTo(myMap)
}

export const changeView = (coord, text) => 
{
    marker.setLatLng(coord).bindPopup(text).openPopup()
    myMap.setView(coord, 13)
}

export const removeMap = () => 
{
    if(myMap)
    {
        myMap.off()
        myMap = null 
        //myMap.remove()
    }
}