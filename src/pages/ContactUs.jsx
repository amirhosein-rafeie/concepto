import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "leaflet/dist/leaflet.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import { Location } from "../assets/images";

function Contact() {
  const marks = [{ id: 1, loc: [35.6, 51.39], title: "Tehran" }];

  const iconHa = new Icon({
    iconUrl: Location,
    iconSize: [45, 45],
    iconAnchor: [22, 45],
    popupAnchor: [0, -45],
  });
  return (
    <div className="contact-page">
      {" "}
      <div className="map-wrapper">
        <MapContainer
          className="w-full h-[500px] rounded-xl"
          center={[35.6, 51.39]}
          zoom={14}
          scrollWheelZoom={true}
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
                  <p className="font-bold">کانسپتو</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <div className="cards-overlay"></div>
        </MapContainer>
      </div>
      <div>
        <div className="contact-container">
          {" "}
          <form className="contact-form">
            {" "}
            <h2> تماس با ما</h2>{" "}
            <Box sx={{ width: 500, maxWidth: "50%" }}>
              <LocationOnOutlinedIcon /> <strong>آدرس :</strong>{" "}
              <p>تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو</p>
              {""}
              <PhoneEnabledOutlinedIcon /> <strong>تلفن:</strong>{" "}
              <p>021-65824421</p>
              {""}
              <MailOutlineOutlinedIcon /> <strong>ایمیل:</strong>
              <p>info@concepto.com</p>
            </Box>
            <Button
              variant="outlined"
              startIcon={<LocationOnOutlinedIcon />}
              className="font-bold"
              size="large"
            >
              جستجو در گوگل مپ
            </Button>
          </form>
          <div className="contact-info card"></div>
        </div>
      </div>
      <section className="align-center mb-2rem">
        {" "}
        <p>
          ما در مجموعه کانسپتو همواره به نظرات، پیشنهادات و سوالات شما عزیزان
          ارزش قائلیم و مشتاقانه منتظر کمک به شما هستیم.
        </p>
      </section>
      <div className="contact-container">
        {" "}
        <form className="contact-form">
          {" "}
          <h2>فرم تماس با ما</h2>{" "}
          <Box sx={{ width: 500, maxWidth: "50%" }}>
            <TextField fullWidth label="fullWidth" id="fullWidth" />
            <TextField fullWidth label="fullWidth" id="fullWidth" />
            <TextField fullWidth label="fullWidth" id="fullWidth" />
          </Box>
        </form>
        <div className="contact-info card">
          <textarea
            placeholder="متن پیام"
            required
            className="box-border bg-amber-950"
          />{" "}
        </div>
        <Button variant="contained" size="large" color="primary">
          ارسال پیام
        </Button>
      </div>
    </div>
  );
}

export default Contact;
