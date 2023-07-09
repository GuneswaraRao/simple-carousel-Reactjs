import React from "react";
import "./styles.css";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Card, CardContent, CardHeader } from "@material-ui/core";

export default function App1() {
    return (
        <div className="App">
            <Tooltip title=' <Card>
          <CardContent>
            <CardHeader>hai</CardHeader>
        <Button variant="contained">Register</Button>
  </CardContent>
  </Card>' placement="right">
                <Card>
                    <CardContent>
                        <CardHeader>hai</CardHeader>
                        <Button variant="contained">Register</Button>
                    </CardContent>
                </Card>
            </Tooltip>
        </div>
    );
}
