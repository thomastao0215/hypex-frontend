import React from "react";
import Page1 from "./landingPage/Page1";
import Page2 from "./landingPage/Page2";
import Page3 from "./landingPage/Page3";
import Page4 from "./landingPage/Page4";
import ScrollAnimation from 'react-animate-on-scroll';

export default function LandingPage() {
    return (
        <div className="bg-dark-blue-HypeX h-auto">
            <h1 className="text-white">Landing Page</h1>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </div>
    )
}