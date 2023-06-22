import React from "react";
import { Link } from "react-router-dom"
import '../style/style_button.css'

export default function Button({ description, url }) {
    return (
        <li>
            <Link to={url} style={{ color: '#6643b5' }}>
                {description}
            </Link>
        </li>
    );
}
