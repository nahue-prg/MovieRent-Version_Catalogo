import React from "react";
import styles from "./styles.module.css";

const Loader = ({padding}) => {

  return (
    <div style={{margin:'auto', display:'flex', justifyContent:'center', paddingTop:padding === undefined  || padding === null ? 50 : padding }}>
    <div className={styles.ldsSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loader;
