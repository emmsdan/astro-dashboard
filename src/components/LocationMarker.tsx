import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import { props } from './Map'
import Styles from './styles.module.css';
import React from "react";
import axios from "axios";


const LocationMarker = (center: typeof props.center) => {
    return (<div onClick={()=>{}}>
        <Icon icon={locationIcon} className={Styles.location_icon} />
    </div>)
}

export default LocationMarker