import React from "react";
import { Link } from "react-router-dom"
import '../style/style_button.css'

export default function Button({ description, url }) {
    return <li><Link to={url}> {description}</Link></li>
}