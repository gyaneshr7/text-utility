import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
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
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setText(text.toUpperCase());
            props.showAlert("Converted to UpperCase!", "success")
          }}
        >
          Convert to Upper Case
        </button>

        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setText(text.toLowerCase());
            props.showAlert("Converted to LowerCase!", "success")
          }}
        >
          Convert to Lower Case
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          onClick={() => {
            setText("");
            props.showAlert("Text cleared!", "success")
          }}
        >
          Clear Text
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          onClick={() => {
            let string = "";
            text
              .split(" ")
              .filter((element) => {
                return element.length > 0;
              })
              .map((element) => {
                string += element + " ";
              });

            setText(string);
            props.showAlert("Extra spaces removed!", "success")
          }}
        >
          Remove extra spaces
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          onClick={() => {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to clipboard!", "success")
          }}
        >
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length > 0;
              }).length
            }{" "}
          </b>
          words and <b>{text.length} </b>characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length > 0;
              }).length}
          </b>{" "}
          minutes read
        </p>
        <p>
          <b>
            {
              text.split(".").filter((element) => {
                return element.length > 0;
              }).length
            }
          </b>{" "}
          sentences
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something"}</p>
      </div>
    </>
  );
}
