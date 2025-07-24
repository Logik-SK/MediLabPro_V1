import React, { useState, useEffect } from 'react';

const SelectField = ({
  label = 'Select',
  name = 'select',
  value,
  onChange,
  options = [], // options: [{ label: 'Center Discount', value: { type: 'center_discount', amount: 200 } }]
  required = false,
  margin = '', // 'top' or 'bottom'
}) => {
  const marginClass =
    margin === 'top' ? 'mt-2' : margin === 'bottom' ? 'mb-2' : '';

  const encodeValue = (val) => {
    if (typeof val === 'object' && val !== null) {
      return JSON.stringify(val);
    }
    return String(val ?? '');
  };

  const decodeValue = (val) => {
    try {
      if (val === "") {
        return "";
      }
      return JSON.parse(val);
    } catch {
      return val;
    }
  };

  const [internalValue, setInternalValue] = useState('');

  useEffect(() => {
    setInternalValue(encodeValue(value));
  }, [value]);

  const handleChange = (e) => {
    const selectedStringFromHTML = e.target.value; // This is the string from the HTML select

    let parsedValue;
    let selectedLabel = '';

    // If "Select" option is chosen, return empty value and label
    if (selectedStringFromHTML === "") {
        onChange({
            target: {
                name,
                value: { value: '', label: '' }
            },
        });
        return;
    }

    try {
      parsedValue = JSON.parse(selectedStringFromHTML);
    } catch {
      parsedValue = selectedStringFromHTML;
    }

    // Find the selected option object to get its label
    const selectedOption = options.find(opt => {
        const optionValueAsString = encodeValue(opt.value); // Use encodeValue for consistent comparison
        return optionValueAsString === selectedStringFromHTML;
    });

    if (selectedOption) {
        selectedLabel = selectedOption.label;
    }

    // Pass an object containing both the actual 'value' and its 'label' to the parent
    onChange({
      target: {
        name,
        value: {
          value: parsedValue, // The actual primitive or object data
          label: selectedLabel, // The display label of the selected option
        },
      },
    });
  };

  return (
    <div className={`flex items-center space-x-3 w-full ${marginClass}`}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 whitespace-nowrap w-32"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <select
        id={name}
        name={name}
        value={internalValue}
        onChange={handleChange}
        required={required}
        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled hidden>
          Select
        </option>

        {options.map((opt, idx) => (
          <option key={idx} value={encodeValue(opt.value)}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;