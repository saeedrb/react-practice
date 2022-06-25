import React, {useState, useCallback} from "react";
import axios from "axios";
import Child from "./Child";

const CallbackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("yo, pls sub to the channel!");

  const returnComment = useCallback(() => {
    return data;
  }, [data]);

  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
};

export default CallbackTutorial;
