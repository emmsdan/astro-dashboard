import GoogleMapReact from 'google-map-react'
import LocationMarker from "./LocationMarker";

export const props = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 5
}
export default function Map ({ center, zoom, events }: typeof props & { events?: any}) {
    const marker = events?.map(({geometries, categories}) => {
        const [lng, lat] = geometries?.[0]?.coordinates || []
        if (categories?.[0]?.id === 8 && lng && lat) {
            return <LocationMarker lat={lat} lng={lng} />
        }
        return null
    })
    return <div className={'map'}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCOhiBkBUdCUdpzvcB7gIs4PA0VkTqvuSs"}}
        defaultZoom={zoom}
        defaultCenter={center}
         >
            {marker}
         </GoogleMapReact>
    </div>
}
