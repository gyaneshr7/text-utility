import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setText(text.toUpperCase());
          }}
        >
          Convert to Upper Case
        </button>
        
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setText(text.toLowerCase());
          }}
        >
          Convert to Lower Case
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p> <b>{text.split(" ").length} </b> words and <b>{text.length} </b>characters </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
