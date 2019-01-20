import json from '../API/locations.json';




export function craetedMarkers({map}) {
   let markers = [];
   const shoppingList = json.Einkaufen;
   console.log(json)
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
      marker.addListener('click',markerAnmiation)
      markers.push(marker);
      
      return markers;
   })
  

    
      
  
   
 }

export function shoppingMarkers() {
   return {type: "Set_Shopping_Marker_Position", location: json.Einkaufen}
 }

