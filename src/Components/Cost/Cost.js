import React, { useState } from "react";

const Cost = () => {
  const [memory, setMemory] = useState(0);
  const [storage, setStorage] = useState(0);
  const [delivery, setDelivery] = useState(0);

  const [code, setCode] = useState("");

  const submitValue = () => {
    var promoCodeFromUser = {
      "promo-code": code,
    };
    console.log(promoCodeFromUser["promo-code"]);
  };
  let mainPrice = 1299 + memory + storage + delivery;

  return (
    <div className="">
      <div className="mt-3 ">
        <h3>Memory</h3>
        <div className="d-flex">
          <button
            onClick={() => {
              setMemory(0);
            }}
            className="btn btn-outline-dark"
          >
            8GB unified memory
          </button>
          <button
            onClick={() => {
              setMemory(100);
            }}
            className="btn btn-outline-dark mx-2"
          >
            16GB unified memory
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h3>Storage</h3>
        <div className="d-flex">
          <button
            onClick={() => {
              setStorage(0);
            }}
            className="btn btn-outline-dark"
          >
            256GB SSD storage
          </button>
          <button
            onClick={() => {
              setStorage(50);
            }}
            className="btn btn-outline-dark mx-2"
          >
            512GB SSD storage
          </button>
          <button
            onClick={() => {
              setStorage(100);
            }}
            className="btn btn-outline-dark"
          >
            1TB SSD storage
          </button>
        </div>
      </div>{" "}
      <div className="mt-3">
        <h3>Choose Your delivery Option</h3>
        <div className="d-flex">
          <button
            onClick={() => {
              setDelivery(0);
            }}
            className="btn btn-outline-dark"
          >
            Friday, Aug 25 FREE Prime Delivery
          </button>
          <button
            onClick={() => {
              setDelivery(20);
            }}
            className="btn btn-outline-dark mx-2"
          >
            Friday, Aug 21 Delivery charge $20
          </button>
        </div>
      </div>
      <div className="mt-5 row">
        <div className="col-7">
          <div className="d-flex justify-content-between">
            <h4 className="text-strong"> Best Price</h4>
            <h4 className="text-strong"> 1299$</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h4 className="text-strong"> Extra Memory Cost </h4>
            <h4 className="text-strong"> {memory}$</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h4 className="text-strong"> Extra Storage Cost</h4>
            <h4 className="text-strong"> {storage}$</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h4 className="text-strong"> Delivery Charge</h4>
            <h4 className="text-strong"> {delivery}$</h4>
          </div>
          <hr
            style={{ border: "1px solid black", opacity: 100 }}
            className=""
          />
          <div className="d-flex justify-content-between">
            <h4 className="text-strong"> Total Price</h4>

            <h4 className="text-strong">{mainPrice}</h4>
            <hr />
          </div>
          <h5 className="mt-4"> Add Promo code</h5>
          <div className="d-flex">
            {" "}
            <input
              type="text"
              onChange={(e) => setCode(e.target.value)}
            ></input>
            <button
              type="button"
              onClick={submitValue}
              className="btn btn-danger"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        {code === "Apple" ? (
          <h3 className="text-success">
            {" "}
            Now your Discounted Price is {mainPrice - 40}
          </h3>
        ) : (
          <h1>Total {mainPrice}</h1>
        )}
      </div>
    </div>
  );
};

export default Cost;
