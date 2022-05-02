import React from 'react';
import {Marker} from "@react-google-maps/api";

const CustomMark = ({position}) => {
    return (
        <>
            <Marker
                position={position}
                icon={{
                    url: "/marker.svg",
                    scaledSize: new window.google.maps.Size(35, 35),
                    // origin: new window.google.maps.Point(0,0), // -> origin The position of the image within a sprite, if any. By default, the origin is located at the top left corner of the image (0, 0)
                    // anchor: new window.google.maps.Point(50, 50) // -> anchor  The position at which to anchor an image in correspondence to the location of the marker on the map. By default, the anchor is located along the center point of the bottom of the image.
                }}
                shape={{ // clickable position of marker
                    coords: [1, 1, 1, 20, 18, 20, 18, 1],
                    type: "poly",
                }}
                // zIndex={1000}
                visible={true}
                title={"Hello Word"}
                opacity={0.9}
                // label={{text: "Hello World", className: "text"}}
            />
        </>

    );
};

export default CustomMark;