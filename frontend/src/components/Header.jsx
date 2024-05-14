import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src="/fragrance.png" alt="logooo" />
        </Link>
      </div>
      <div className="images-header">
        <img className="sea" src="/mer.png" alt="" />
        <img className="flower" src="/fleur.png" alt="" />
        <img className="mountain" src="/montagne.png" alt="" />
      </div>
    </div>
  );
}
