import * as React from "react";
import HelmetHelper from "../../Helpers/HelmetHelper";

export default function Home({authService}) {
    return (
        <div>
            <HelmetHelper/>
            <h1>Home page</h1>
            <h2>goto <a href="/about">About page</a></h2>
        </div>
    )
}