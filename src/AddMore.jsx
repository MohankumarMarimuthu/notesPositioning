/* eslint-disable react/prop-types */

import { useState } from "react";

const AddMore = ({ setNotes }) => {
  const [inputValue, setInputValue] = useState("");

  const addNotes = () => {
    const newNote = {
      id: Date.now(),
      text: inputValue,
    };
    setNotes((prev) => [...prev, newNote]);
    setInputValue("");
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addNotes}>add</button>
    </div>
  );
};

export default AddMore;
