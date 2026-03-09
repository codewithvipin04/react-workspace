import React from 'react';

import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from './iceCreamSlice';

export const IceCreamView = () => {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams,
  );
  const dispatch = useDispatch();

  return (
    <>
      <h1>IceCream View - Total IceCreams are: {numberOfIceCreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock IceCream</button>
    </>
  );
};
