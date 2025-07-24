import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { manageAppointmentsConfig } from "../config/tablesConfig";
import manageAppointmentsTable from "../hooks/getTableData";

const ManageAppointmentsPage = () => {
  const { title, subtitle, ...tableProps } = manageAppointmentsTable(manageAppointmentsConfig);

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default ManageAppointmentsPage;
