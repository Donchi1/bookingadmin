import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const [users, loading]= useFetch("/users")
  const [rooms]= useFetch("/rooms")
  const [hotels]= useFetch(`/hotels?fromAdmin=${true}`)
  const [bookings]= useFetch(`/bookings?limit=${10}`)
  
console.log(bookings)
  const totalBookNum = rooms?.map(each => each.roomNumbers.map(r => r.unavailableDates.length))
  const fBook  = [...totalBookNum].map((ea, i ) =>{
    return totalBookNum[i].reduce((acc, init) => Number(acc) + Number(init), 0)

  })

  const totalBookings = fBook.reduce((acc, init) => acc + init,0)
  const totalBalance = hotels.reduce((acc, init) => acc + init.totalBookPrice, 0)

 
  
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget data={users.length} type="user" />
          <Widget data={totalBookings} type="rooms" />
          <Widget data={hotels.length} type="hotels" />
          <Widget data={totalBalance} type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Bookings</div>
          <Table bookings={bookings}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
