import React, { useState } from "react";

const Transform2 = () => {
  const [inputText, setInputText] = useState("Example text");
  const [outputText, setOutputText] = useState("");
  const [conversionMode, setConversionMode] = useState("lowercase");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleConversion = (e) => {
    setConversionMode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutputText(
      conversionMode === "lowercase"
        ? inputText.toLowerCase()
        : conversionMode === "uppercase"
        ? inputText.toUpperCase()
        : inputText.split("").reverse().join("")
    );
  };

  return (
    <section>
      <h1>Transform Text</h1>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="inputText">
          Enter Text
        </label>
        <input
          className="input"
          type="text"
          name="inputText"
          id="inputText"
          value={inputText}
          onChange={handleChange}
        />
        {/* lowercase text */}
        <div>
          <input
            className="radio"
            type="radio"
            id="lowercase"
            name="lowercase"
            value="lowercase"
            checked={conversionMode === "lowercase"}
            onChange={handleConversion}
          />
          <label htmlFor="lowercase" className="radio_label">
            lowercase
          </label>
        </div>
        {/* capitalize text */}
        <div>
          <input
            className="radio"
            type="radio"
            id="uppercase"
            name="uppercase"
            value="uppercase"
            checked={conversionMode === "uppercase"}
            onChange={handleConversion}
          />
          <label htmlFor="uppercase" className="radio_label">
            uppercase
          </label>
        </div>
        {/* reverse text */}
        <div>
          <input
            className="radio"
            type="radio"
            id="reverse"
            name="reverse"
            value="reverse"
            checked={conversionMode === "reverse"}
            onChange={handleConversion}
          />
          <label htmlFor="reverse" className="radio_label">
            reverse
          </label>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <div>
        <textarea
          type="text"
          id="outputText"
          name="outputText"
          value={outputText}
          readOnly
        />
      </div>
    </section>
  );
};

export default Transform2;
