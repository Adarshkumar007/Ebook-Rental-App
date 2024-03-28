import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PdfViewer = ({ pdfUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    console.log("file", pdfUrl);
    return (
        <div style={{ height: '750px' }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
                {({ worker }) => (
                    <Viewer
                        fileUrl={`data:application/pdf;base64,${pdfUrl}`}
                        worker={worker}
                        plugins={[defaultLayoutPluginInstance]}
                    />
                )}
            </Worker>
        </div>
    );
};

export default PdfViewer;
