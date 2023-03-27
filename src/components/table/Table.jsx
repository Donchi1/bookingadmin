import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({bookings}) => {
 

 console.log(bookings)

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Trans ID</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Currency</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings?.map((row) => (
            <TableRow key={row?.booking._id}>
              <TableCell className="tableCell">{row?.booking?._id?.slice(0, 10)}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row?.hotel?.photos} alt="" className="image" />
                  {row?.hotel.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row?.user.firstname}</TableCell>
              <TableCell className="tableCell">{new Date(row?.booking.createdAt).toDateString()}</TableCell>
              <TableCell className="tableCell">{row?.booking.totalPrice}</TableCell>
              <TableCell className="tableCell">{row?.booking.currency}</TableCell>
              <TableCell className="tableCell">
                <span className={`status success`}>success</span>
              </TableCell>
            </TableRow>
          ))}
          {bookings.length === 0 &&  
          <TableRow >
              <TableCell  colSpan={10} className="tableCell noInfo">
                No booking found
              </TableCell>
            </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
