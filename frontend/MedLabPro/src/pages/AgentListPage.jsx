import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { viewAgentListConfig } from "../config/tablesConfig";
import agentListTable from "../hooks/getTableData";

const AgentListPage = () => {
  const { title, subtitle, ...tableProps } = agentListTable(viewAgentListConfig);

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default AgentListPage;
