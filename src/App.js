import React, { useState } from 'react';
import './App.sass';
import ReactMarkdown from "react-markdown";


export default function App() {
  const [markdown, setMarkdown] = useState("# Type here...");


  const handleTextAreaChange = (e) => {
    setMarkdown(e.target.value);
  }


  return (
    <div className="app">
      <textarea onChange={handleTextAreaChange} value={markdown} />

      <ReactMarkdown source={markdown} className="preview" />
    </div>
  );
}
