import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Main, Auth } from "./pages";

import "./App.scss";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/auth" render={() => <Auth />} />

                <Route path={"/"} render={() => <Main />} />
            </Switch>
        </Router>
    );
}

export default App;
