import React from "react";
import { Link } from "react-router-dom"


export default function Button({ description, url }) {
    return <li><Link to={url}> {description}</Link></li>
}