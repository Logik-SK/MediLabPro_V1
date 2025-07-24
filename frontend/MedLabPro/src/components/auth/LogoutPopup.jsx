import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../common/popup';
import LogoutButton from './LogoutButton';

const LogoutPopup = () => {
    const navigate = useNavigate();

    const handleClose = () => navigate(-1); // Go back

    return (
        <Popup isOpen={true} onClose={handleClose} title="Confirm Logout">
            <p className="text-gray-700 mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-3">
                <button
                    onClick={handleClose}
                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 text-gray-700"
                >
                    Cancel
                </button>
                <LogoutButton />
            </div>
        </Popup>
    );
};
export default LogoutPopup;
