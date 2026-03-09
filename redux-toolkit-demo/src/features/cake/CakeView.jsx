import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Cake View - Total Cakes are: {numberOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(1))}>Order Cake</button>
    </>
  );
};
