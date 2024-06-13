import Editor from "@monaco-editor/react";

import React from 'react'

const CodeEditor = ({code, change}) => {
    return (
        <Editor
            height="80vh"
            width="100%"
            language="javascript"
            theme="vs-light"
            value={code}
            options={{
                inlineSuggest: true,
                fontSize: "14px",
                formatOnType: true,
                autoClosingBrackets: true,
                minimap: { scale: 10 }
            }}
            onChange={change}
        />
    );
}

export default CodeEditor;