import React, { useState, useEffect } from "react";
import { FaFreeCodeCamp, FaExpand } from "react-icons/fa";
import styles from "./App.css"
const Editor = ({ onChange }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const defaultMarkdown = `
# Header 1
## Subheader 2
[Link](https://www.example.com)
\`Inline Code\`

\`\`\`
// Code Block
function example() {
  return "Hello, World!";
}
\`\`\`

- List Item 1
- List Item 2

> Blockquote

![Image](https://via.placeholder.com/150)

**Bolded Text**
`;
    setInput(defaultMarkdown);
    onChange(defaultMarkdown);
  }, [onChange]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "green",
          }}
        >
          <div className="icon_label">
            <div>
              <FaFreeCodeCamp className="ico" size={18} color="" />
              <label>Editor</label>
            </div>
            <div>
            <FaExpand className="ico2" size={18} color=""  />
            </div>
          </div>
          <textarea
            id="editor"
            className="textA"
            value={input}
            rows={10}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
