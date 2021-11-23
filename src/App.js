import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Perops from "./Perops";
import Login from "./Login";
import LoginEdit from "./LoginEdit";

function App() {
    return ( <>
    <Router>
    <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/perops" component={Perops}/>
    <Route exact path="/LoginEdit/:id" component={LoginEdit}/>
<Login />

</Switch>
</Router>
    </>  );
}

export default App; 
