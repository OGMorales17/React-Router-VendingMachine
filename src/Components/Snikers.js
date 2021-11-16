import React, { useState } from "react";
import { Link } from "react-router-dom";
import snikerImg from './Png-Gif/Snikers.png'
import "./Style/Snikers.css";

function Chips() {

    const [bars, setBars] = useState([]);

    function handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setBars(prevBars => [...prevBars, { x, y }]);
    }

    const b = bars.map((bar, i) => (
        <img
            key={i}
            src={snikerImg}
            className="bar"
            style={{ top: `${bar.y}px`, left: `${bar.x}px`, width: '300px' }}
            alt="sniker-bar"
        />
    ));
    return (
        <div className="Sniker">
            <div className="SnikerMessage">
                <h1>bags eaten: {bars.length}</h1>
                <button onClick={handleClick}>nom nom nom</button>
                <h1>
                    <Link style={{ color: `white` }} to="/">go back</Link>
                </h1>
            </div>
            {b}
        </div>
    );
}

export default Chips;