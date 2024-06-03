import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from '../../table-pagination/TablePagination';
import { useState } from 'react';

function createData(avatar: string, name: string, email: string) {
  return { avatar, name, email };
}

const rows = [
  createData("https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo", "John Doe", "john@gmail.com"),
  createData("https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo", "Jane Doe", "jane@gmail.com"),
  createData("https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo", "Jane Doe", "jane@gmail.com"),
  createData("https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo", "Jane Doe", "jane@gmail.com"),
  createData("https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo", "Jane Doe", "jane@gmail.com"),
  createData("https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo", "Jane Doe", "jane@gmail.com"),
  createData("https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo", "Jane Doe", "jane@gmail.com"),
  createData("https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo", "Jane Doe", "jane@gmail.com"),
];

const Users = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div className='admin__data'>
      <h1>Manage users</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User picture</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar alt="Remy Sharp" src={row.avatar} />
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                <IconButton color='primary' aria-label="promote" size="large">
                  <AdminPanelSettingsIcon/>
                </IconButton>
                <IconButton color='error' aria-label="delete" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
                
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Users
