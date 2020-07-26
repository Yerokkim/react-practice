import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return { value, bind, reset };
}

export default useInput;

//how to import and use to the really component

import React, { useState } from "react";
import useInput from "./exxxfile";

const CustomeHooks = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, bindFirstName, restFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    restFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName</label>
          <input type="text" {...bindFirstName} />
          <label>LastName</label>
          <input type="text" {...bindLastName} />
        </div>
      </form>
    </div>
  );
};

export default CustomeHooks;
