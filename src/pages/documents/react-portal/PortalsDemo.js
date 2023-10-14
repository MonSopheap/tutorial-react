import React from 'react';
import ReactDOM from 'react-dom';

// This Portal react we use for Modal, dialog
function PortalsDemo() {
    return ReactDOM.createPortal(
        <div className='text-center'>
            <h1 className='text-2xl mb-1'>Portals Demo</h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalsDemo