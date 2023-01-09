import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src="assets/logo.svg" />
        <span>Motiv.</span>
      </Link>
    </>
  );
};

export default Logo;
