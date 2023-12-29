import React, { createContext, useContext, useReducer } from "react";

const QuantityContext = createContext();

const initialState = {
  perUnitQuantity: 1,
  totalQuantity: 1,
  amount: 249.0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        perUnitQuantity: state.perUnitQuantity + 1,
        totalQuantity: state.totalQuantity + 1,
        amount: state.amount + 249.0,
      };
    case "DECREMENT":
      return {
        ...state,
        perUnitQuantity:
          state.perUnitQuantity - 1 > 0 ? state.perUnitQuantity - 1 : 1,
        perUnitQuantity: state.perUnitQuantity - 1,
        totalQuantity:
          state.totalQuantity - 1 > 0 ? state.totalQuantity - 1 : 1,
        amount: state.amount - 249.0,
      };
    default:
      return state;
  }
};

const QuantityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuantityContext.Provider value={{ state, dispatch }}>
      {children}
    </QuantityContext.Provider>
  );
};

const useQuantity = () => {
  const context = useContext(QuantityContext);
  if (!context) {
    throw new Error("useQuantity must be used within a QuantityProvider");
  }
  return context;
};

export { QuantityProvider, useQuantity };
