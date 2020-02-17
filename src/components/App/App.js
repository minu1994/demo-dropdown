import React from "react";
import styles from "./App.module.css";
import TableData from "../TableData";

const App = () => {
  return (
    <div className={styles.App}>
      <h1> Demo Dropdown </h1>
      <TableData />
    </div>
  );
};

export default App;
