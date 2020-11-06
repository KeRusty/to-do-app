import React from "react";

import "./Landing.less";

const Landing: React.FC<LandingProps> = (props) => {

    return (

        <>

            <div className="container">

                <div className="heading-container">

                    <h1 className="heading-text">To Do</h1>

                </div>

            </div>

        </>

    );
};

interface LandingProps {
    [key: string]: any;
}

export default Landing;
