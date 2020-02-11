import React from "react";

const Header = props => {
  return (
    <header>
      <div className="top-header">
        <div className="container">
          <img className="logo" src="/logo.svg" alt="deliveroo"></img>
        </div>
      </div>
      <div className="bottom-header container">
        <div className="bottom-info-header">
          <div className="bottom-left-header">
            <h1>{props.data.restaurant.name}</h1>
            <p className="header-description">
              {props.data.restaurant.description}
            </p>
          </div>
          <div className="bottom-right-header">
            <img
              src={props.data.restaurant.picture}
              alt="props.data.restaurant.path"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
