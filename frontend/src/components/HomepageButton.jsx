import React from "react";
import { Link } from "react-router-dom"
import '../style/style_homepagebutton.css'

export default function HomepageButton({ description, url }) {
    return (
        <li>
            <Link to={url} style={{ color: '#f2f2f2' }}>
                {description}
            </Link>
        </li>
    );
}
