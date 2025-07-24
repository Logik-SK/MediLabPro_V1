import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { doctorIpDirectoryConfig } from "../config/tablesConfig";
import doctorIpDirectory from "../hooks/getTableData";

const ReferralDoctorIPPage = () => {
  const { title, subtitle, ...tableProps } = doctorIpDirectory(doctorIpDirectoryConfig,'');

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default ReferralDoctorIPPage;