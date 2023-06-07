import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const columns = [
  {
    field: 'Partno', headerName: 'Partno', 
    renderCell: (params) => (
      <Link to={`/product`}>{params.row.Partno}</Link>
    ),
     width: 140
  },
  { field: 'StartingPrice', headerName: 'StartingPrice', width: 50, type: 'number' },
  { field: 'Stock', headerName: 'Stock', width: 100 },
  {
    field: 'Material',
    headerName: 'Material',
    // type: 'number',
    width: 90,
  },
  {
    field: 'Color',
    headerName: 'Color',
    // type: 'number',
    width: 90,
  },

  {
    field: 'Hardness',
    headerName: 'Hardness',
    // type: 'number',
    width: 90,
  },
  {
    field: 'Scale',
    headerName: 'Scale',
    // type: 'number',
    width: 90,
  },
  {
    field: 'Type',
    headerName: 'Type',
    // type: 'number',
    width: 90,
  },
  {
    field: 'Size',
    headerName: 'Size',
    // type: 'number',
    width: 90,
  },
  {
    field: 'cs',
    headerName: 'cs',
    // type: 'number',
    width: 90,
  },
  {
    field: 'id',
    headerName: 'id',
    // type: 'number',
    width: 90,
  },
  {
    field: 'Materialdesc',
    headerName: 'Materialdesc',
    // type: 'number',
    width: 90,
  },
  {
    field: 'Heightemp',
    headerName: 'Heightemp',
    // type: 'number',
    width: 90,
  },
  {
    field: 'Lowtemp',
    headerName: 'Lowtemp',
    // type: 'number',
    width: 90,
  },

];


const rows = [
  {Partno: 'CP80BK11-OR-204',StartingPrice: 10.00,Stock: 'OUT OF STOCK',Material: 'PLA',Color: 'Red',Hardness: 90,Scale: 'Shore B',Type: 'Wrist Wear',Size: 'AS568-204',cs: 3.53,id: 9.12,Materialdesc: 'CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA',Heightemp: 320,Lowtemp: -15,},
  {Partno: 'CP80BK21-OR-204',StartingPrice: 120.00,Stock: 'IN STOCK',Material: 'PLA',Color: 'Blue',Hardness: 910,Scale: 'Shore C',Type: 'Wrist Wear',Size: 'AS568-204',cs: 3.53,id: 9.12,Materialdesc: 'CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA',Heightemp: 320,Lowtemp: -15,},
];

const ProductTable = () => {
  return (
    <div style={{ height: 550, width: '87%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 7,8,9,10]}
      // checkboxSelection
      />
    </div>
  );
};

export default ProductTable;