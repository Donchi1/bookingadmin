import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const [data] = useFetch("/bookings/revenue/today")

const progressValue = () => {
  const [info] = data
   if(info?.revenue > 100  && info?.revenue < 200) return 10
   if(info?.revenue > 100  && info?.revenue < 200) return 10
   if(info?.revenue > 200  && info?.revenue < 300) return 20
   if(info?.revenue > 300  && info?.revenue < 400) return 30
   if(info?.revenue > 400  && info?.revenue < 500) return 40
   if(info?.revenue > 500  && info?.revenue < 600) return 50
   if(info?.revenue > 600  && info?.revenue < 700) return 60
   if(info?.revenue > 800  && info?.revenue < 900) return 70
   if(info?.revenue > 900  && info?.revenue < 1000) return 80
   if(info?.revenue > 1000) return 100
   return 0
}



  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={progressValue()} text={`%${progressValue().toString()}`} strokeWidth={5} />
        </div>
        <p className="title">Total made today</p>
        <p className="amount">${data[0]?.revenue || 0}</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
