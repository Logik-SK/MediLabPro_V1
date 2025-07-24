import { useCallback } from 'react';

const useOfferLogic = (formData, onChange) => {
  const rawOffer = formData.offer;
  const offerData = typeof rawOffer === 'object' && rawOffer !== null
    ? rawOffer
    : { value: Number(rawOffer) || 0, label: '' };

  const offerAmount = typeof offerData.value === 'object' && offerData.value !== null
    ? Number(offerData.value.amount || offerData.value.discount || 0)
    : Number(offerData.value) || 0;

  const handleOfferAmountChange = useCallback((newValue) => {
    const updatedValue = typeof offerData.value === 'object' && offerData.value !== null
      ? { ...offerData.value, amount: Number(newValue) }
      : Number(newValue);
    onChange('offer', { ...offerData, value: updatedValue });
  }, [offerData, onChange]);

  return { offerData, offerAmount, handleOfferAmountChange };
};

export default useOfferLogic;
