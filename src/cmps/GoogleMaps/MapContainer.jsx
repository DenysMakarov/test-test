import React, {useEffect, useState} from 'react';
import "./googleMaps.css"
import {useLoadScript} from "@react-google-maps/api";
import CustomMap from "./CustomMap";

const MapContainer = () => {
    const API_KEY = "AIzaSyBErxUWWTHAI6wc-dEt2jwJxxniYZSeYo8"
    const API_KEY_POSITIONSTACK = "feb144f2403096f6bdf7a2dc25392400"

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: API_KEY,
        // libraries
    })

    const [pos, setPos] = useState(null);
    const [address, setAddress] = useState("1600 Beach Ave, Vancouver, BC V6G 1Y6, Canada")

    const getPositions = () => {
        fetch(`http://api.positionstack.com/v1/forward?access_key=${API_KEY_POSITIONSTACK}&query=${address}&country_module=1`)
            .then(data => data.json())
            .then((addr) => {
                setPos(addr.data)
            })
    }

    useEffect(() => {
        getPositions()
    }, [])

    return (
        <div className="map-container">
            {
                isLoaded
                    ? <CustomMap pos={pos} />
                    : <h1>Loading...</h1>
            }
        </div>
    );
};

export default MapContainer;