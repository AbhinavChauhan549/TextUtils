import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    console.log("uppercase was clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase ", "success");
  };

  const handleLowerClick = () => {
    console.log("lowercase was clicked");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase ", "success");
  };
  const handleClearClick = () => {
    console.log("Clear click was clicked");
    const newText = "";
    setText(newText);
    props.showAlert("Text cleared Successfully ", "success");
  };

  const handleChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const removeExtraSpace = () => {
    console.log("removeExtraSpaces being called");
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed successfully", "success");
  };

  const handleCopy = () => {
    let txt = document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copied text successfully", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        ></textarea>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={handleUpperClick}
        >
          Convert to upper case
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={handleLowerClick}
        >
          Convert to lower case
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={removeExtraSpace}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} minutes required to read Whole Text
          Summary.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
};
export default TextForm;
