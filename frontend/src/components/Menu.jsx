import React from "react";
import Button from "./Button"

export default function Menu() {
    return (
        <div>
            <ul>
                <p> Se hai già un account effettua il login </p>
                <Button description="Login" url="/login" />

                <p> Altrimenti effettua la registrazione </p>
                <Button description="SignUp" url="/signup"/>

            </ul>
        </div>
    )
}