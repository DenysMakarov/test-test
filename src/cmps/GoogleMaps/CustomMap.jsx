import React, {useCallback, useEffect, useRef, useState} from 'react';
import {GoogleMap, Marker} from "@react-google-maps/api";
import {defaultTheme} from "./theme";
import {FaPlusSquare, FaMinusSquare} from "react-icons/fa"
import CustomMark from "./CustomMark";

const mockObj ={
    firstValue: "Neighborhood Median Home Value: $0.76",
    secondValue: "Property as is Value: TBD"
}

const defaultZoom = 0.2

const CustomMap = ({pos}) => {

    const mapRef = useRef(undefined)
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map
    }, [])

    const onUnmount = useCallback(function callback(map) {
        mapRef.current = undefined
    }, [])

    const [zoom, setZoom] = useState(15)


    return (
        <div className="wrapper-map">

            {
                pos && (
                    <>
                        <GoogleMap
                            zoom={zoom}
                            center={{lat: parseFloat(pos[0].latitude), lng: parseFloat(pos[0].longitude)}}
                            mapContainerClassName="map-container"
                            options={{
                                mapTypeControl: false,
                                scaleControl: false,
                                streetViewControl: false,
                                panControl: false,
                                rotateControl: false,
                                fullscreenControl: false,
                                styles: defaultTheme
                            }}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        >
                             <CustomMark position={{lat: parseFloat(pos[0].latitude), lng: parseFloat(pos[0].longitude)}}/>
                        </GoogleMap>
                        <div className="btn-block">
                            <FaPlusSquare onClick={() => {setZoom(zoom + defaultZoom)}} className="btn-icon"/>
                            <FaMinusSquare onClick={() => {setZoom(zoom - defaultZoom)}} className="btn-icon"/>
                        </div>
                        <div className="options-block">
                            <div className="options-box">
                                <input type="checkbox" name="a" id="a"/>
                                <span className="options-box-text">{mockObj.firstValue}</span>
                            </div>
                            <div className="options-box">
                                <input type="checkbox" name="b" id="b"/>
                                <span className="options-box-text">{mockObj.secondValue}</span>
                            </div>

                        </div>
                    </>
                )

            }
        </div>
    );
};

export default CustomMap;