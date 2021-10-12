import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import "./Color.css"

const Color = ({ colors }) => {
    console.log(colors)
    const colorObj = useParams();
    const currentColor = colorObj["color"];
    console.log(currentColor);

    if (currentColor in colors) {
        const hex = colors[currentColor]
        console.log(hex)
        return (
            <div className="Color" style={{ backgroundColor: hex }}>
                <h1>This is {currentColor}</h1>
                <p><Link to="/">Go Back</Link></p>
            </div>
        )
    } else {
        return (
            <Redirect to="/colors" />
        )
    }

}


export default Color;