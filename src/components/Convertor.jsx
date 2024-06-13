import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from './CodeEditor'; // Assuming you have a CodeEditor component

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [outputCode, setOutputCode] = useState('Your output code come here');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await axios.post('http://localhost:4000/convert/json-to-xml', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setOutputCode(response.data.formattedCode);
            setErrorMessage('');
        } catch (error) {
            setOutputCode('');
            setErrorMessage('Error uploading file');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">File Upload</h1>
            <input type="file" id="fileInput" accept=".js,.html,.css,.xml,.json" onChange={handleFileChange} className="mb-4" />
            <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Upload
            </button>
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            {outputCode && (
                <div className="mt-4 border rounded p-4 w-[90vw]">
                    <CodeEditor code={outputCode} />
                </div>
            )}
        </div>
    );
};

export default FileUpload;
