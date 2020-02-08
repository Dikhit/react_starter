import * as React from "react";
import HelmetHelper from "../../Helpers/HelmetHelper";

export default function About({authService}) {
    return (
        <div>
            <HelmetHelper/>
            <h1>About Page</h1>
            <h2>goto <a href="/"> Home Page </a></h2>
        </div>
    )
}