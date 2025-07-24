const toNumber = val => Number(val) || 0;

const useBillingTotals = (formData, billTotalConfig, billVariableTotals, offerAmount) => {
  const { dataPath: fixedPath, metricKey } = billTotalConfig;
  const { dataPath: variablePath, valueKey } = billVariableTotals;

  const fixedTotal = toNumber(formData?.[fixedPath]?.[metricKey]);
  const variableItems = Array.isArray(formData?.[variablePath]) ? formData[variablePath] : [];
  const serviceTotal = variableItems.reduce((sum, item) => sum + toNumber(item?.[valueKey]), 0);
  const flatDiscount = toNumber(formData.centerDiscount) + toNumber(formData.doctorDiscount);
  const totalDiscount = flatDiscount + offerAmount;
  const paidTotal = Array.isArray(formData.payments)
    ? formData.payments.reduce((sum, p) => sum + toNumber(p.amount), 0)
    : 0;
  const billTotal = fixedTotal + serviceTotal - totalDiscount;
  const dueAmount = billTotal - paidTotal;

  return {
    fixedTotal,
    serviceTotal,
    flatDiscount,
    totalDiscount,
    paidTotal,
    billTotal,
    dueAmount,
    variableItems
  };
};

export default useBillingTotals;
