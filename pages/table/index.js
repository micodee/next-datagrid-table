import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Select, MenuItem } from '@mui/material';

export default function Table() {
  const [selectedOption, setSelectedOption] = useState('');
  const [rows, setRows] = useState([]);

  function handleSelectionChange(event) {
    setSelectedOption(event.target.value);
    insertRow(event.target.value);
  }

  const data = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35, auto: 'auto' },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: "Michael", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
   ];

  function insertRow(selectedOption) {
    const newRow = {
      id: rows.length + 1,
      selectedOption: selectedOption,
      otherData: selectedOption == data[0].firstName ? data[0].lastName : null,
      age: data[0].age
    };
    setRows([...rows, newRow]);
  }
  console.log(data.firstName);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, editable: true },
    { field: 'selectedOption', headerName: 'First Name', width: 130, editable: true },
    { field: 'otherData', headerName: 'Last Name', width: 130, editable: true },
    { field: 'age', headerName: 'Age', width: 130, editable: true },
  ];
  

  return (
    <div>
      <DataGrid rows={rows} columns={columns} autoHeight />
      <Select value={selectedOption} onChange={handleSelectionChange}>
      {data.map((item) => {
          return (
            <MenuItem value={item.firstName}>{item.firstName}</MenuItem>
          )
        })}
      </Select>
    </div>
  );
}
