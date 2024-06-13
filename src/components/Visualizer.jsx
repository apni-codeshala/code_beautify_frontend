import React, { useState } from 'react';
import JSONTree from 'react-json-tree';
import XMLViewer from 'react-xml-viewer-2';

const Visualizer = () => {
    let [data, setData] = useState("");

    const customTheme = {
        "attributeKeyColor": "#FF0000",
        "attributeValueColor": "#000FF"
      }
    return (
        <div>
            {type === 'json' ? (
                <JSONTree data={data} />
            ) : type === 'xml' ? (
                <XMLViewer xml={data} theme={customTheme} />
            ) : (
                <div>Invalid data type</div>
            )}
        </div>
    )
}

export default Visualizer;
