import React from "react";
import ReactDOM from "react-dom";
import ReportsCard from "./card";
import { Toolkit } from "@uitk/react";
import "@uitk/themes/optum/fonts.css";
import "./index.css";

const App = () => (
  <Toolkit appId="@uitk/react-starter-kit">
  <div className="reports-container">
    <ReportsCard/>
  </div>
  </Toolkit>
);
ReactDOM.render(<App />, document.getElementById("app"));
export default App;
