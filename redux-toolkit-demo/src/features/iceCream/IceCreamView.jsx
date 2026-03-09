import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams,
  );
  const dispatch = useDispatch();

  return (
    <>
      <h1>IceCream View - Total IceCreams are: {numberOfIceCreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restocked(value))}>
          Restock IceCream
        </button>
      </div>
    </>
  );
};
