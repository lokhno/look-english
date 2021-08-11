import React from "react";

import Menu from "./Menu";

import "./TopPanel.scss";

function TopPanel() {
    return (
        <div className="top-panel">
            <h1 className="top-panel__title">Looks English</h1>
            <Menu className="top-panel__menu" />
        </div>
    );
}

export default TopPanel;
