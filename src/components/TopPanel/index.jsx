import React from "react";

import Menu from "./Menu";
import Title from "./Title";

import "./TopPanel.scss";

function TopPanel() {
    return (
        <div className="top-panel">
            <Title className="top-panel__title"/>
            <Menu className="top-panel__menu" />
        </div>
    );
}

export default TopPanel;
