    import React, { useState } from 'react';
    import axios from 'axios';
    import CodeEditor from './CodeEditor';
    import toast, { Toaster } from 'react-hot-toast';

    const Editor = () => {
        const [inputCode, setInputCode] = useState('Enter your code here');
        const [outputCode, setOutputCode] = useState('Your formatted code come here');
        const [selectedLanguage, setSelectedLanguage] = useState('javascript');
        const backendURL = `http://localhost:4000`;

        const notify = (content) => toast(content);

        const handleFormat = async () => {
            try {
                const response = await axios.post(`${backendURL}/format/${selectedLanguage}`, { [selectedLanguage]: inputCode });
                setOutputCode(response.data[selectedLanguage]);
            } catch (error) {
                console.error('Error formatting code:', error);
                notify("Error formatting code: " + error.message); // Notify with error message
            }
        };
        
        const handleValidate = async () => {
            try {
                const response = await axios.post(`${backendURL}/validate/${selectedLanguage}`, { json: inputCode });
                if (response.data.valid) {
                    console.log('Code is valid.');
                    notify("Code is valid");
                } else {
                    console.log('Code is invalid:', response.data.error);
                    notify("Code is invalid: " + response.data.error); // Notify with error message
                }
            } catch (error) {
                console.error('Error validating code:', error);
                notify("Error validating code: " + error.message); // Notify with error message
            }
        };
        

        const handleLanguageChange = (e) => {
            setSelectedLanguage(e.target.value);
        };

        return (
            <div className='flex flex-col items-center pt-10'>
                <div className='mb-4'>
                    Select language: <select value={selectedLanguage} onChange={handleLanguageChange} className="bg-white border border-gray-300 rounded px-3 py-1">
                        <option value="javascript">JavaScript</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="xml">XML</option>
                        <option value="json">JSON</option>
                    </select>
                </div>
                <div className='flex justify-center gap-4 mb-8'>
                    <button onClick={handleFormat} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Format</button>
                    <button onClick={handleValidate} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Validate</button>
                </div>
                <div className='flex flex-wrap gap-10'>
                    <div className='w-[46vw] border border-gray-200'>
                        <CodeEditor
                            code={inputCode}
                            change={setInputCode}
                        />
                    </div>
                    <div className='w-[46vw] border border-gray-200'>
                        <CodeEditor 
                            code={outputCode} 
                            change={setOutputCode} 
                        />
                    </div>
                </div>
                <Toaster />
            </div>
        );
    };

    export default Editor;