import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
      <h3>props.name</h3>
      <h3>props.brand</h3>
      <h3>props.price</h3>
      <h3>props.alcoholContent</h3>
      <h3>props.pintsLeft</h3>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string, 
  brand: PropTypes.string,
  price: PropTypes.string, 
  alcoholContent: PropTypes.number,
  pintsLeft: PropTypes.number
};

export default Keg;