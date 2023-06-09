import { useState } from 'react';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const jsonData = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, auto: 'auto' },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Home() {
const [rows, setRows] = useState(jsonData);

const data = jsonData.map(row => row.firstName)

const value = (params) => {
  return params.row.options == 'Jon' ? 'auto' : null;
}

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "options",
    headerName: "Options",
    width: 150,
    editable: true,
    type: 'singleSelect',
    valueOptions: data
  },
  {
    field: 'auto',
    headerName: "Auto",
    width: 150,
    editable: true,
    valueGetter: value,
  },
  {
    field: "test",
    headerName: "Test",
    width: 150,
    valueGetter: (params) => {
      return params.row.options == 'Topi' ? params.row.lastName : null;
    },
    editable: true,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    editable: true,
  }
];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
