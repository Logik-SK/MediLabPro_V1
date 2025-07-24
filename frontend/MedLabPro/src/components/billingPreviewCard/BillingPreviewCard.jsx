import React, { useEffect } from 'react';
import OfferEditor from './OfferEditor';
import PaymentField from './PaymentField';
import SummaryRow from './SummaryRow';
import useBillingTotals from '../../hooks/useBillingTotals';
import useOfferLogic from '../../hooks/useOfferLogic';
import usePaymentHandlers from '../../hooks/usePaymentHandlers';

const BillingPreviewCard = ({
  formData,
  onChange,
  billTotalConfig,
  billVariableTotals,
  summaryKeys = { totalKey: 'billTotal', dueKey: 'dueAmount' },
  summaryLabels = {
    fixedLabel: 'Test Total',
    variableLabel: 'Service',
    flatDiscountLabel: 'Flat Discount',
    offerLabel: 'Offer'
  }
}) => {
  const { offerData, offerAmount, handleOfferAmountChange } = useOfferLogic(formData, onChange);
  const {
    payments,
    handlePaymentChange,
    addPayment,
    removePayment,
    paidTotal
  } = usePaymentHandlers(formData, onChange);
  const {
    fixedTotal,
    serviceTotal,
    flatDiscount,
    totalDiscount,
    billTotal,
    dueAmount,
    variableItems
  } = useBillingTotals(formData, billTotalConfig, billVariableTotals, offerAmount);

 useEffect(() => {
  formData[summaryKeys.totalKey] !== billTotal && onChange(summaryKeys.totalKey, billTotal);
  formData[summaryKeys.dueKey] !== dueAmount && onChange(summaryKeys.dueKey, dueAmount);
}, [billTotal, dueAmount, summaryKeys, formData]);


  return (
    <div className="p-4 space-y-4">
      <SummaryRow label={summaryLabels.fixedLabel} value={fixedTotal} isPositive />
      {variableItems.map((item, i) => (
        <SummaryRow
          key={i}
          label={item?.[billVariableTotals.displayLabel] || `${summaryLabels.variableLabel} ${i + 1}`}
          value={item?.[billVariableTotals.valueKey]}
          isPositive
        />
      ))}
      <SummaryRow label={summaryLabels.flatDiscountLabel} value={flatDiscount} isNegative />
      <OfferEditor
        offerData={offerData}
        offerAmount={offerAmount}
        onChange={handleOfferAmountChange}
        fallbackLabel={summaryLabels.offerLabel}
      />

      <hr className="my-2" />

      {payments.map((p, i) => (
        <PaymentField
          key={i}
          index={i}
          payment={p}
          onChange={handlePaymentChange}
          onRemove={removePayment}
          removable={payments.length > 1}
        />
      ))}

      {payments.length < 5 && (
        <button
          type="button"
          onClick={addPayment}
          className="text-blue-600 text-sm underline hover:text-blue-800 transition"
        >
          + Add Another Payment
        </button>
      )}

      <div className="flex justify-between mt-4 border-t pt-3 text-base">
        <span className="text-red-500 font-semibold">Due: ₹{dueAmount.toFixed(2)}</span>
        <span className="font-semibold text-gray-800">Bill Total: ₹{billTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default BillingPreviewCard;
