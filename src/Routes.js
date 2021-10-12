import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

const Routes = () => {
    const STARTING_COLORS = { blue: "#001EB3", purple: "#8A00B3", green: "#00B316" };
    const [colors, updateColors] = useState(STARTING_COLORS);

    function addColor(newColor) {
        console.log(colors);
        console.log(newColor)
        updateColors(currentColors => ({ ...newColor, ...currentColors }));
        console.log("after" + JSON.stringify(colors))
    }
    console.log("after, outside" + colors)

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <ColorList colors={colors}></ColorList>
                </Route>
                <Route exact path="/colors/new">
                    <NewColorForm addColor={addColor} />
                </Route>
                <Route exact path="/colors/:color">
                    <Color colors={colors} />
                </Route>
                <Redirect to="/colors" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;