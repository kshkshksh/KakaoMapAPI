import React, { useEffect } from "react";

const { kakao } = window;

function Kakao() {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(35.8410039, 128.6346888),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [])



    return (
        <div id="map" style={{
            width: '500px',
            height: '500px'
        }}></div>
    )
}

export default Kakao;