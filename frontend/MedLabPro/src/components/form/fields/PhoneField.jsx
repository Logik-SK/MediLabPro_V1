import React from 'react';

const PhoneField = ({
  label = 'Phone',
  name = 'phone',
  value,
  onChange,
  placeholder = 'Enter phone number',
  required = false,
  countryCode = '',
  onCountryCodeChange,
  countryCodeOptions = ['+1', '+44', '+91', '+61', '+81'],
  margin = '' // 'top' or 'bottom'
}) => {
  // Conditional Tailwind margin class
  const marginClass = margin === 'top'
    ? 'mt-2'
    : margin === 'bottom'
      ? 'mb-2'
      : '';

  // Dynamic placeholder
  const effectivePlaceholder = required
    ? placeholder
    : `${placeholder} (Optional)`;

  const handleInputChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    onChange({ ...e, target: { ...e.target, value: digitsOnly } });
  };

  return (
    <div className={`flex items-center space-x-3 w-full ${marginClass}`}>
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 whitespace-nowrap w-32"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Country code dropdown */}
      <select
        value={countryCode}
        onChange={onCountryCodeChange}
        className="w-16 border border-gray-300 rounded px-2 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">--</option>
        {countryCodeOptions.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>

      {/* Phone number input */}
      <input
        type="tel"
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={effectivePlaceholder}
        required={required}
        inputMode="numeric"
        pattern="[0-9]*"
        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default PhoneField;
