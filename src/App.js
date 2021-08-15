import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./pages";

import "./App.scss";

function App() {
    return (
        <Router>
            <Main />
        </Router>
    );
}

export default App;
