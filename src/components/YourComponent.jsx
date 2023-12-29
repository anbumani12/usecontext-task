import React from "react";
import { useQuantity } from "./QuantityContext";

const YourComponent = () => {
  const { state, dispatch } = useQuantity();

  return (
    <div className="card">
      <div className="content">
        <img
          src="https://media.takealot.com/covers_images/90e450ec89dd4dafadd23edf0dc724b3/s-pdpxl.file"
          alt=""
        />
        <div className="text-content">
          <p className="title">
            WOLF SO GRIM AND MANGY{" "}
            <span className="quantity">{state.perUnitQuantity}</span> &nbsp;
            <span className="rate"> ${state.amount.toFixed(2)}</span>
          </p>
          <p className="topic">Defoils & Core</p>
          <p className="data">
            We provide great-looking book cover artwork that is eye-catching and
            pulls your reader in, we can provide you with a full digital pdf of
            your book cover.
          </p>
          <p className="store">Susteniability</p>
          <div className="btn">
            <button
              style={{ color: "#198754", border: "white" }}
              onClick={() => dispatch({ type: "INCREMENT" })}
            >
              ADD
            </button>
            <button
              style={{ color: "orangered", border: "white" }}
              onClick={() => dispatch({ type: "DECREMENT" })}
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>

      <p className="prize">
        SUBTOTAL: <span className="cash">${state.amount.toFixed(2)}</span>
      </p>
      <p className="shipping">
        SHIPPING: <span className="charge">FREE</span>
      </p>
      <p className="price">
        TOTAL: <span className="rupee">${state.amount.toFixed(2)}</span>
      </p>
      <p className="para">Get Daily Cash With Nespola Card</p>
    </div>
  );
};

export default YourComponent;
