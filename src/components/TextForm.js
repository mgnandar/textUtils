import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
   let newText = text.toUpperCase()
    setText(newText);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          onChange={handleonChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}

TextForm.prototype = { heading: "" };
