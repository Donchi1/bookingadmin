import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import useFetchSingle from "../../hooks/useFetchSingle"
import {useParams} from "react-router-dom"
import useFetch from "../../hooks/useFetch";

const Single = () => {
  const {userId} = useParams()
  const {data} = useFetchSingle(`/users/${userId}`)
  const [bookings]= useFetch(`/bookings/single/${userId}`)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data?.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt="profile"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data?.firstname} {data?.lastname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data?.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  24 colyn {data?.city}  {data?.country}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data?.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List bookings={bookings}/>
        </div>
      </div>
    </div>
  );
};

export default Single;
