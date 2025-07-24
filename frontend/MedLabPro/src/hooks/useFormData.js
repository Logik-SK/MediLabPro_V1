import { useState, useCallback } from 'react';

function useFormData(initialValues = {}) {
  const [formData, setFormData] = useState(initialValues);

  const handleFieldChange = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  return { formData, handleFieldChange, setFormData };
};

export default useFormData;
