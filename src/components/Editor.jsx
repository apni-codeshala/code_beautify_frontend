import React from 'react'
import CodeEditor from './CodeEditor';

const Editor = () => {
    return (
        <div className='flex flex-wrap gap-10 justify-between pt-20 p-3'>
            <div className='border border-gray-300 w-[48%]'>
                <CodeEditor />
            </div>
            <div className='border border-gray-300 w-[45%]'>
                <CodeEditor />
            </div>
        </div>
    )
}

export default Editor;