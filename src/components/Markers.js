

export default function Markers({ map }) {

  const marker = new window.google.maps.Marker({
      map: map,
      draggable: true,
      animation: window.google.maps.Animation.DROP,
      position: {lat: 59.327, lng: 18.067}
    })
   return marker;

}

