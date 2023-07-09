import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductItems from "./components/Carousel/ProductItems";
import ProductDisplay from "./components/productdec/ProductDisplay";
import DesignTesting from "./components/testing/DesignTesing";
import TestingC from "./components/TestingC";


const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">{<ProductItems />}</Route>
                    <Route exact path="/display" > {<ProductDisplay />}</Route>
                    <Route exact path="/testing" > {<TestingC />}</Route>
                    <Route exact path="/test" > {<DesignTesting />}</Route>
                </Switch>
            </Router>

        </div >
    )
}
export default App;
