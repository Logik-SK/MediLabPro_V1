import { useState } from 'react';
//import BillingPreviewCard from '../components/BillingPreviewCard';
import ContentWrapper from '../components/layout/ContentWrapper';
import DualListSelector from '../components/dualListSelector/DualListSelector';
import GridWrapper from '../components/layout/GridWrapper';
import SectionCard from '../components/layout/SectionCard';
import FieldWrapper from '../components/form/FieldWrapper';
import Form from '../components/form/Form';
import FormSection from '../components/form/FormSection';

import { additionalInformation, allTests, basicInfoConfig, billingInformation } from '../config/labPatientFormConfig';
import useFormData from '../hooks/useFormData';
import BillingPreviewCard from '../components/billingPreviewCard/BillingPreviewCard';

function LabBillingPage() {

    const { formData, handleFieldChange, setFormData } = useFormData();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <SectionCard title="Lab Patient Summary" subtitle="Entered Information" className="fixed">
                <pre className="text-sm bg-gray-100 p-2 rounded">{JSON.stringify(formData, null, 2)}</pre>
                <h2>{formData.totalAmount}</h2>
            </SectionCard>

            <ContentWrapper>
                <GridWrapper>
                    <FormSection title="Lab Patient" subtitle="Basic Information">
                        <FieldWrapper config={basicInfoConfig} formData={formData} onChange={handleFieldChange} />
                    </FormSection>
                    <FormSection title="Patient" subtitle="Additional Information">
                        <FieldWrapper config={additionalInformation} formData={formData} onChange={handleFieldChange} />
                    </FormSection>
                </GridWrapper>

                <DualListSelector
                    title="Lab Test" name="selectedTests" subtitle="Information"
                    items={allTests} itemKey="name" itemValue="price"
                    onChange={handleFieldChange}
                    leftTitle="Available Tests" rightTitle="Selected Tests" formData={formData}
                    leftName="availableTest" rightName="selectedTest"
                />

                <GridWrapper>
                    <FormSection title="Billing" subtitle="Information">
                        <FieldWrapper config={billingInformation} formData={formData} onChange={handleFieldChange} />
                    </FormSection>
                    <div>
                        <FormSection title="Billing" subtitle="Information">
                            <BillingPreviewCard
                                formData={formData}
                                onChange={handleFieldChange}
                                billTotalConfig={{ dataPath: "selectedTestTotal", metricKey: "totalPrice" }}
                                billVariableTotals={{ dataPath: "services", displayLabel: "label", valueKey: "price" }}
                                summaryKeys={{ totalKey: "billTotal", dueKey: "dueAmount" }}
                                summaryLabels={{
                                    fixedLabel: "Test Total",
                                    variableLabel: "Service",
                                    flatDiscountLabel: "Flat Discount",
                                    offerLabel: "Offer"
                                }}
                            />
                        </FormSection>
                    </div>
                </GridWrapper>
            </ContentWrapper>
        </Form>
    );
}

export default LabBillingPage;
