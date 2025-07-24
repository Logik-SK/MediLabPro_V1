import React from 'react';

const ArrowControls = ({handleTransferRight, handleTransferLeft, disableRight, disableLeft}) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 px-1">
            <button
                onClick={handleTransferRight}
                disabled={disableRight}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded disabled:opacity-50">
                &gt;
            </button>
            <button
                onClick={handleTransferLeft}
                disabled={disableLeft}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded disabled:opacity-50">
                &lt;
            </button>
        </div>
    );
};

export default ArrowControls;
