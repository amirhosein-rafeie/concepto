import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { marks } from "../Constants/Configs";
import { Location } from "../assets/images";

function GoogleMaps() {
  const iconHa = new Icon({
    iconUrl: Location,
    iconSize: [45, 45],
    iconAnchor: [22, 45],
    popupAnchor: [0, -45],
  });

  return (
    <div className="app-container">
      <div className="map-wrapper">
        <MapContainer
          className="w-full h-full"
          center={[35.6, 51.39]}
          zoom={6}
          scrollWheelZoom={false}
          zoomControl={true}
          attributionControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marks.map((item) => (
            <Marker key={item.id} position={item.loc} icon={iconHa}>
              <Popup className="custom-popup">
                <div className="popup-content">
                  <h3>{item.title}</h3>
                  <p>Click on the city cards below to explore!</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <div className="cards-overlay"></div>
        </MapContainer>
      </div>
    </div>
  );
}

export default GoogleMaps;
