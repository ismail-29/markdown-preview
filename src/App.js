import React, { useState } from 'react';
import {marked} from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function MarkdownPreviewer() {
  const [text, setText] = useState(`# H1
    ## H2
    [title](https://www.example.com)
    \`code\`
    \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item

> blockquote

**bold text**
![alt text](image.jpg)
  `);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const getMarkdownText = () => {
    return { __html: marked(text) };
  };

  return (
    <div className="markdown-previewer-container">
      <h1>Markdown Previewer</h1>
      <div className="editor-container">
        <label htmlFor="editor">Editor</label>
        <br />
        <textarea
          id="editor"
          value={text}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="preview-container">
        <label htmlFor="preview">Preview</label>
        <br />
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </div>
    </div>
  );
}

export default MarkdownPreviewer;
