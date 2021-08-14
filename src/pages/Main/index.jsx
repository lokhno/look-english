import React from "react";

import { Navigation, TopPanel, ControlMenu, List } from "../../components";
import MyWords from "./MyWords";

import "./Main.scss";

function Main() {
    return (
        <div>
            <TopPanel />
            <div className="main-page">
                <Navigation />
                <div className="content">
                    <div className="content_container">
                        <ControlMenu />
                        <MyWords />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
