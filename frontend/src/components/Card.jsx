import React from "react"
import Button from "./Button"


export default function Card({icon: Icon, name, link}) {
    return (
        <div className="row row-cols-1 row-cols-md-1 g-5">
            <div className="col">
        
        <div className="card" style={{width: "18rem", textAlign: "center"}}>
  <div className="card-body">
    <Icon />
    <Button description={name}  url={link}/>
 
  </div>
</div>
</div>
       
            </div>


    )
}
