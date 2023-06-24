import {Link} from "react-router-dom";
import React from "react";

export default function ChatButton({description, url}) {
    return (<li>
        <h1><Link to={url} style={{color: '#6643b5'}}>
            {description}
        </Link></h1>
    </li>);
}