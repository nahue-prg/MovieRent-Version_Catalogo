import React from "react";
import { TbMovie } from "react-icons/tb";
import { Link } from "react-router-dom";

const Logo = ({ dark, bolder }) => {
  return (
    <div
      style={{
        display: "inline-block",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: dark ? "black" : "white",
        }}
      >
        <TbMovie
          style={{
            color: "red",
            marginBottom: 3.2,
            marginRight: 2,
          }}
        />
        <span style={{ color: dark ? "black" : "white" }}>Movie</span>
        <span style={{ color: "red", fontWeight: "bolder" }}></span>|
        <span style={{ fontWeight: "bolder" }}>Rent</span>
      </Link>
    </div>
  );
};

export default Logo;
