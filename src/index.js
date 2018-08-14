import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";
import "./css/style.css";

render(<Router />, document.getElementById("root"));
registerServiceWorker();
