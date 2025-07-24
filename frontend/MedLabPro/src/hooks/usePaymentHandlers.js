import { useCallback } from 'react';

const usePaymentHandlers = (formData, onChange) => {
  const payments = Array.isArray(formData.payments) ? formData.payments : [{ amount: '', mode: '', reference: '' }];

  const handlePaymentChange = useCallback((index, field, value) => {
    onChange('payments', payments.map((p, i) => i === index ? { ...p, [field]: value } : p));
  }, [payments, onChange]);

  const addPayment = useCallback(() => {
    payments.length < 5 && onChange('payments', [...payments, { amount: '', mode: '', reference: '' }]);
  }, [payments, onChange]);

  const removePayment = useCallback((index) => {
    onChange('payments', payments.filter((_, i) => i !== index));
  }, [payments, onChange]);

  const paidTotal = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

  return { payments, handlePaymentChange, addPayment, removePayment, paidTotal };
};

export default usePaymentHandlers;
