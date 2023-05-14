import React, { useState } from 'react'
import Editor from "@monaco-editor/react";
import Navbar from '../../Components/Navbar';
// import { UnControlled as CodeMirror } from 'react-codemirror2';

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/htmlmixed/htmlmixed';
// import 'codemirror/mode/css/css';
// import 'codemirror/mode/javascript/javascript';

export const Test = () => {
    const [code, setCode] = useState("");

  return (
    <div>
        <Navbar/>
        <div style={{ marginTop: "10px" }}></div>
        <Editor
          height="40vh"
          defaultLanguage="html"
          defaultValue="<p>Hello Flex</p>"
          onChange={(e) => setCode(e ?? "")}
          theme="vs-dark"
        />
    </div>
  )
}
