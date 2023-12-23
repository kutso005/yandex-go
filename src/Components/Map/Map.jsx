import React from 'react'

export default function Map() {
  return (
    <div>
        
        <iframe
        className="yandex-map"
        title="Yandex Map"
        color='red'
        width="100%"
        height="1000px"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://yandex.ru/map-widget/v1/-/CDq5aOm5"
      />
    </div>
  )
}



// import React, { useRef, useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// const Map = () => {
//   const mapRef = useRef(null);
//   const [markerPosition, setMarkerPosition] = useState([54.981, 82.891]);

//   const handleMarkerDrag = (e) => {
//     const lat = e.target._latlng.lat.toFixed(9);
//     const lng = e.target._latlng.lng.toFixed(9);
//     setMarkerPosition([lat, lng]);
//   };

//   useEffect(() => {
//     if (mapRef.current) {
//       mapRef.current.setView(markerPosition, 15);
//     }
//   }, [markerPosition]);

//   return (
//     <div>
//       {/* <p>Координаты маркера: {`LatLng(${markerPosition.join(', ')})`}</p> */}
//       <MapContainer
//         center={markerPosition}
//         zoom={15}
//         style={{ width: "100%", height: "1000px" }}
//         whenCreated={(map) => (mapRef.current = map)}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker
//           position={markerPosition}
//           draggable={true}
//           eventHandlers={{ drag: handleMarkerDrag }}
//         >
//           {/* <Popup>Маркер</Popup> */}
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
