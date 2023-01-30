import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import "./map.scss";
import { useNavigate } from "react-router-dom";
const locationName = "Lahore Pakistan";
function Map({ user }) {
  console.log("user is ", user);
  const navigate = useNavigate();
  const mapStyle = {
    width: "100%",
    height: "88vh",
  };
  const location = {
    lat: parseFloat(user?.lat),
    lng: parseFloat(user?.lon),
  };
  setTimeout(() => {
    setZoomx(1);
  }, 1500);
  //console.log("locatoin name ", location);
  // const [libraries] = useState(["places"]);
  const [zoomx, setZoomx] = useState(1);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDTVNLbPHJFW13XDe31-oaMsrhRNxhhH7g",
    // googleMapsApiKey: "AIzaSyABX4LTqTLQGg_b3jFOH8Z6_H5CDqn8tbc",
    // libraries,
  });
  const [map, setMap] = useState(null);
  const [show, setShow] = useState(false);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(location);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  //console.log("is loaded ", isLoaded);
  //alert(loadError);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyle}
      center={location}
      zoom={zoomx}
      options={{
        controlSize: false,
        panControl: false,
        fullscreenControl: false,
        zoomControl: false,
      }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={location}
        onClick={() => setShow(true)}
        icon={{
          // url: gym_location,
          scaledSize: { width: 50, height: 40 },
        }}
      >
        {/* {show && locationName != "" && (
          <Modal
            size="sm"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            centered={true}
          >
            <Modal.Body>
              <div
                className="content-map"
                onClick={() => navigate("/user/profile")}
              >
                <div className="desc">
                  <b>{user?.GymName}</b>
                  <span
                    className={`${
                      user?.GymType == "Ordinary Gym"
                        ? "ordinary"
                        : user?.GymType == "Outdoor-only Gym"
                        ? "outdoor"
                        : "realhotel"
                    }`}
                  >
                    {user?.GymType}
                  </span>
                </div>
                <div className="pic-x">
                  <img
                    // src={user?.ProfilePic}
                    src={user?.ProfilePic}
                    loading="lazy"
                    className="fluid"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-primary"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </Modal.Footer>
          </Modal>
        )} */}
      </Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
