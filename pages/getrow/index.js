import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function RowsGridWithGetRowId() {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        columns={[
          { field: "firstname", editable: true },
          { field: "lastname", editable: true },
          { field: "selectOptions", editable: true },
        ]}
        rows={[
          { internalId: 1, firstname: "Lincoln", lastname: "Kakak", selectOptions: 'option2' },
          { internalId: 2, firstname: "Michael", lastname: "Adek", selectOptions: 'option1'},
        ]}
        getRowId={(row) => row.internalId}
        autoHeight
      />
    </div>
  );
}
