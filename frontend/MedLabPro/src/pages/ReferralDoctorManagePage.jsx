import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { ReferralDoctorConfig } from "../config/tablesConfig";
import ReferralDoctorPageTable from "../hooks/getTableData";

const ReferralDoctorManagePage = () => {
  const { title, subtitle, ...tableProps } = ReferralDoctorPageTable(ReferralDoctorConfig);

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default ReferralDoctorManagePage;
