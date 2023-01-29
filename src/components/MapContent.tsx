import Styles from "./styles.module.css";
import React from "react";
import axios from "axios";
import Map from "./Map";
import { Icon } from "@iconify/react";
import loadingIcon from "@iconify/icons-mdi/reload";
import { props } from "./Map";
import clsx from "clsx";

const MapWrapper = () => {
  const [events, setEvent] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  {
    /* <Map center={mapProps.center} zoom={mapProps.zoom} client:load  /> */
  }
  React.useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://eonet.gsfc.nasa.gov/api/v2.1/events "
      );
      setEvent(res.data.events);
      setLoading(false);
    };
    fetchEvent()
  }, []);

  return (
    <div>
      {!loading ? (
        <Map {...props} events={events} />
      ) : (
        <div className={clsx(Styles.loading_icon, Styles.loading)}>
          <svg viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="#333"
              strokeWidth="15"
            ></circle>
          </svg>
        </div>
      )}
    </div>
  );
};

export default MapWrapper;
