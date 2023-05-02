import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {
  DataGrid,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';

function Pagination({ page, onPageChange, className }) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,
};

function CustomPagination(props) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

const columns = [
  { field: 'KodeBarang', headerName: 'Kode Barang', width: 150 },
  { field: 'Nomor', headerName: 'Nomor', width: 120 },
  { field: 'TanggalPesanan', headerName: 'Tanggal Pesanan', width: 180 },
  { field: 'NoResi', headerName: 'No. Resi', width: 150 },
  { field: 'Pelanggan', headerName: 'Pelanggan', width: 150 },
];

const rows = [
  {
    KodeBarang: 1,
    Nomor: '1',
    TanggalPesanan: '15/04/2023',
    NoResi: '000001',
    Pelanggan: 'Ardian',
  },
  {
    KodeBarang: 2,
    Nomor: '2',
    TanggalPesanan: '15/04/2023',
    NoResi: '000002',
    Pelanggan: 'Angga',
  },
];

export default function CustomPaginationGrid() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        pagination
        columns={columns}
        rows={rows}
        getRowId={(row) => row.KodeBarang}
        slots={{
          pagination: CustomPagination,
        }}
        pageSize={25}
      />
    </Box>
  );
}
