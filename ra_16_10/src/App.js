import React from "react";
import { ServiceAdd } from "./engine/Add";
import { ServiceList } from "./engine/List";
import { ServiceFilter } from "./engine/Filtr";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="redux_filter">
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
    </div>
  );
}

export { App };
