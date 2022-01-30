import React from "react";

function Variants({ heading, text1, text2, text3 }) {
  return (
    <div className="mt-3">
      <h3>{heading}</h3>
      <div className="d-flex">
        <button className="btn btn-outline-dark">{text1}</button>
        <button className="btn btn-outline-dark mx-2">{text2}</button>
        {text3 && <button className="btn btn-outline-dark">{text3}</button>}
      </div>
    </div>
  );
}

export default Variants;
