import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navigation, TopPanel } from "../../components";
import MyWords from "./MyWords";
import ComunityCategories from "./ComunityCategories";
import LearnWords from "./LearnWords";
import MyCategories from "./MyCategories";

import "./Main.scss";

function Main() {
    return (
        <div>
            <TopPanel />
            <div className="main-page">
                <Router>
                    <Navigation />
                    <div className="content">
                        <div className="content_container">
                            <Switch>
                                <Route exact path="/categories" component={MyCategories} />
                                <Route exact path="/learnWords" component={LearnWords} />
                                <Route exact path="/comunitycategories" component={ComunityCategories} />
                                <Route exact path="/words" component={MyWords} />
                                <Route exact path="/" component={MyWords} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default Main;
