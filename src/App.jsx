import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main, Auth, Registration, UserAccount } from "./pages";

import "./App.scss";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/UserAccount" render={() => <UserAccount />} />
                <Route exact path="/auth" render={() => <Auth />} />
                <Route exact path="/registration" render={() => <Registration />} />
                <Route path={"/"} render={() => <Main />} />
            </Switch>
        </Router>
    );
}

export default App;
