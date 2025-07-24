import React from 'react'

const FormSection = ({title, subtitle, children}) => {
    return (
        <div className="border rounded shadow bg-white w-full">
            <div
                className="bg-gray-100 border-b px-4 py-2 flex justify-between items-center">
                <h2 className="text-sm font-semibold text-blue-600">
                    {title}
                    {subtitle && <span className="text-gray-700 font-normal">
                        {subtitle}</span>}
                </h2>

            </div>
            <div className="p-2">{children}</div>
        </div>
    );
};

export default FormSection