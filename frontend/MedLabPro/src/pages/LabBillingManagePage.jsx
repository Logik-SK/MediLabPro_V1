import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { billingTableConfig } from "../config/tablesConfig";
import useBillingTable from "../hooks/getTableData";

const LabBillingManagePage = () => {
  const tableRowData = [
    {
      billNumber: 'DUMMY001',
      name: 'John Doe',
      mobile: '9000000001',
      refDoctor: 'Dr. Sample',
      payable: 1500,
      paidAmt: 500,
      due: 1000,
      discount: 0,
      billDate: '10/07/2025',
      paymentStatus: 'Partial',
      status: 'Processing'
    },
    {
      billNumber: 'DUMMY002',
      name: 'Jane Smith',
      mobile: '1',
      refDoctor: 'Dr. Test',
      payable: 2000,
      paidAmt: 2000,
      due: 0,
      discount: 100,
      billDate: '11/07/2025',
      paymentStatus: 'Paid',
      status: 'Completed'
    }
  ];
  const { title, subtitle, ...tableProps } = useBillingTable(billingTableConfig, tableRowData);

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default LabBillingManagePage;
