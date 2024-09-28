import * as React from "react";
import * as ReactDomClient from "react-dom/client";

import { CustomPrint } from "./examples/CustomPrint";
import "./example.css";

class Example extends React.Component {
  render() {
    return <CustomPrint />;
  }
}

const container = document.getElementById("app-root");
const root = ReactDomClient.createRoot(container);
root.render(<Example />);
