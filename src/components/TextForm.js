import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('UpperCase Button is clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () =>{
    let lowText = text.toLocaleLowerCase();
    setText(lowText);
  }

  const hanldeOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={hanldeOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>your text summary</h2>
        <p>{text.split(' ').length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
