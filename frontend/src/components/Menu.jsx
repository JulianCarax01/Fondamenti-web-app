import React from "react";
import Button from "./Button"

export default function Menu() {
    return (
        <div>
            <ul>
                <Button description="Login" url="/login" />
                <Button description="SignUp" url="/signup"/>

            </ul>
        </div>
    )
}