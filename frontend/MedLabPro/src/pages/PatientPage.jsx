import { useEffect, useState } from "react";
import axios from "axios";

import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper";
import TableContainer from "../components/Table/TableContainer";

import { patientTableConfig } from "../config/tablesConfig";
import PatientPageTable from "../hooks/getTableData";

const PatientPage = () => {

  const username = 'labadmin';
  const password = 'lab123';

  axios.get('http://localhost:8080/api/patients', {
    auth: {
      username,
      password,
    },
  }).then((response) => console.log(response))
    .catch((error) => console.error("Patient fetch failed:", error));



  const { title, subtitle, ...tableProps } = PatientPageTable(patientTableConfig);
  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default PatientPage;
