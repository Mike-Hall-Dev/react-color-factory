import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));

    return (
        <div>
            <header>
                <h1>The Color Factory</h1>
                <h2><Link to="/colors/new">Add a color</Link></h2>
            </header>
            <div>
                <p>Select a color below:</p>
                <ul>{colorLinks}</ul>
            </div>
        </div>
    )
}

export default ColorList;