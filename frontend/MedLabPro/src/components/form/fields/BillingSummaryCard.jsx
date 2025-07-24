import React from 'react';

const BillingSummaryCard = ({ formData, onChange }) => {
    const serviceTotal = Array.isArray(formData.services)
        ? formData.services.reduce((acc, s) => acc + (Number(s.price) || 0), 0)
        : 0;

    const testTotal = Number(formData.totalAmount) || 0;
    const discount = Number(formData.discount) || 0;
    const netTotal = testTotal + serviceTotal - discount;

    const serviceEntries = Array.isArray(formData.services)
        ? formData.services.map((service) => ({
            label: service.serviceName || service.key,
            amount: service.price,
        }))
        : [];

    const testTotals = [
        { label: "Test Total", amount: testTotal },
        ...serviceEntries,
        { label: "Service Total", amount: serviceTotal },
        { label: "Total Discount", amount: discount },
        { label: "Net Total", amount: netTotal },
    ];



    return (
        <div className="bg-white shadow rounded p-4 border">
            <h2 className="text-lg font-semibold mb-2">Billing Summary</h2>
            <div className="space-y-1 mb-4">
                {testTotals.map((item, index) => (
                    <div key={index} className="flex justify-between">
                        <span className="text-gray-700">{item.label}</span>
                        <span className="text-green-600 font-medium">₹{item.amount}</span>
                    </div>
                ))}
            </div>

            {/* Paid Amount Field */}
            <div className="mt-3">
                <label htmlFor="paidAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Paid Amount
                </label>
                <input
                    type="number"
                    id="paidAmount"
                    name="paidAmount"
                    value={formData.paidAmount ?? ''}
                    onChange={(e) => onChange(e.target.name, e.target.value)}

                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter paid amount"
                />
            </div>
        </div>
    );
};

export default BillingSummaryCard;
