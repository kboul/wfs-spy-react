import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./index.sass";

import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
