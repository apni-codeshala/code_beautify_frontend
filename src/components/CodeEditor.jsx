import Editor from "@monaco-editor/react";

import React from 'react'

const CodeEditor = () => {
    const code = "var message = 'Monaco Editor!' \nconsole.log(message);";
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
        />
    );
}

export default CodeEditor;