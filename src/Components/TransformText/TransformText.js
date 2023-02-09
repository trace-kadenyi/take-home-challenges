import React, { useState } from "react";

import "./transform_text.css";

const TransformText = () => {
  const [text, setText] = useState("");

  return (
    <section className="transform_text">
      <h1>Transform Text</h1>
      {/* initial input */}
      <div className="inputs">
        <div className="first_input">
          <form>
            <label>Enter Text</label>
            <input
              type="text"
              placeholder="Enter Text"
              name="text"
              id="text"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
        {/* capitalize text */}
        <div className="capitalize">
          <label>Capitalize text</label>
          <textarea type="text" value={text.toUpperCase()} readOnly />
        </div>
        {/* lowercase text */}
        <div className="lowercase">
          <label>Lowercase text</label>
          <textarea type="text" value={text.toLowerCase()} readOnly />
        </div>
        {/* reverse text */}
        <div className="reverse">
          <label>Reverse text</label>
          <textarea
            type="text"
            value={text.split("").reverse().join("")}
            readOnly
          />
        </div>
        {/* title case text */}
        <div className="title_case">
          <label>Title Case text</label>
          <textarea
            type="text"
            value={text.replace(/\w\S*/g, (w) =>
              w.replace(/^\w/, (c) => c.toUpperCase())
            )}
            readOnly
          />
        </div>
      </div>
    </section>
  );
};

export default TransformText;
