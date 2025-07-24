import React from 'react';

const AgeDobField = ({
  label = 'Year/DOB',
  year = '',
  onYearChange,
  month = '',
  onMonthChange,
  day = '',
  onDayChange,
  required = false,
  margin = '' // 'top' or 'bottom'
}) => {
  const marginClass =
    margin === 'top' ? 'mt-2' : margin === 'bottom' ? 'mb-2' : '';

  return (
    <div className={`flex items-center space-x-3 w-full ${marginClass}`}>
      {/* Label */}
      <label className="text-sm font-medium text-gray-700 whitespace-nowrap w-32">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="flex flex-1 space-x-2">
        {/* Year input */}
        <input
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          value={year}
          onChange={onYearChange}
          placeholder="Year"
          className="flex-1 border border-blue-300 rounded px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Month input */}
        <input
          type="number"
          min="1"
          max="12"
          value={month}
          onChange={onMonthChange}
          placeholder="Month"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Day input */}
        <input
          type="number"
          min="1"
          max="31"
          value={day}
          onChange={onDayChange}
          placeholder="Day"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default AgeDobField;
