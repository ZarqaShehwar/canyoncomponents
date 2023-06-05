import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange, orderBy, order, createSortHandler, filterRows  } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(Partno, StartingPrice, Stock,Material,Color,Hardness,Scale,Type,Size,cs,id,Materialdesc,Heightemp,Lowtemp) {
  return { Partno, StartingPrice, Stock,Material,Color,Hardness,Scale,Type,Size,cs,id,Materialdesc,Heightemp,Lowtemp };
}

const rows = [
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
  createData('CP80BK21-OR-204', 10.00, "IN STOCK","FMK","Black",80,"Shore A","O-Ring","AS568-204",3.53,9.12,"CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA",320,-15),
 
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500,maxHeight: 350 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
              >
                PartNo
              </TableSortLabel>
            
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Starting Price
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Stock
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Material
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Color
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Hardness
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Scale
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Type
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Size
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              CS(mm)
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              ID(mm)
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Material Desc
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Height Temprature (C)
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
            Low Temprature (C)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
           ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.Partno}>
              <TableCell component="th" scope="row">
                {row.Partno}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.StartingPrice}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Stock}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Material}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Color}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Hardness}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Scale}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Type}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Size}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.cs}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.id}
              </TableCell>
              <TableCell style={{ width: 10000 }} align="right">
                {row.Materialdesc}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Heightemp}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Lowtemp}
              </TableCell>
            </TableRow>
          ))}
    
          {emptyRows > 0 && (
            <TableRow style={{ height: 530 * emptyRows }}>
              <TableCell colSpan={20} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow >
            <TablePagination
              rowsPerPageOptions={[ 10, { label: 'All', value: -1 }]}
              colSpan={14}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}