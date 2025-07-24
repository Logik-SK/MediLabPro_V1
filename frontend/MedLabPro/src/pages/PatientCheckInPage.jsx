import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { patientCheckInConfig } from "../config/tablesConfig";
import patientCheckIn from "../hooks/getTableData";

const PatientCheckInPage = () => {
  const { title, subtitle, ...tableProps } = patientCheckIn(patientCheckInConfig);

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default PatientCheckInPage;
