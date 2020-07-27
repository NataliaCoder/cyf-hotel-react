import React from "react";

const Footer = props => {
  return (
    <div>
      <ul className="footer">
        {props.addresses.map(name => {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
