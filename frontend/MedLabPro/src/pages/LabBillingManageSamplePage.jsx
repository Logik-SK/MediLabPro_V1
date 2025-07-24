import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { manageLabSampleConfig } from "../config/tablesConfig";
import useBillingTable from "../hooks/getTableData";

const LabBillingManageSamplePage = () => {
  const { title, subtitle, ...tableProps } = useBillingTable(manageLabSampleConfig);

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};
export default LabBillingManageSamplePage