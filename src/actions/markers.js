import json from '../API/locations.json';
import markerWindow from '../components/Markers';

export function craetedMarkers({ map }) {
   let markers = [];
   const shoppingList = json.Einkaufen;

   shoppingList.forEach((list, i) => {
      const position = list.location;
      const title = list.title;
      const marker = new window.google.maps.Marker({
         map: map,
         draggable: true,
         animation: window.google.maps.Animation.DROP,
         title: title,
         position: position
      });
      
      function markerAnmiation() {

         if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
         } else {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
         }
      }
     
      const infowindow = new window.google.maps.InfoWindow({
         content: contentString
         
         });

      marker.addListener('click', function() {
         markerAnmiation();
         infowindow.open(map, marker);
       });

      markers.push(marker);

      return markers;
   })
}

var contentString = 'Das ist der Inhalt von InfoWindo TODO: REACT COMPONENTE ALS INHALT EINFÜGEN'





export function shoppingMarkers() {
   return { type: "Set_Shopping_Marker_Position", location: json.Einkaufen }
}

