import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Item from "./Food.jsx";
import "./index.css";
import PackingList from "./Food.jsx";
import FeedbackForm from "./Practice.jsx";
import Person from "./Person.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <PackingList/>
    <FeedbackForm/>
    <Person/>
  </StrictMode>,
);
