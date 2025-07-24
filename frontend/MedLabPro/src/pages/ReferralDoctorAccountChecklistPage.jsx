import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { referralDoctorAccountChecklistConfig } from "../config/tablesConfig";
import referralDoctorAccountChecklist from "../hooks/getTableData";

const ReferralDoctorAccountChecklistPage = () => {
  const { title, subtitle, ...tableProps } = referralDoctorAccountChecklist(referralDoctorAccountChecklistConfig);

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default ReferralDoctorAccountChecklistPage;