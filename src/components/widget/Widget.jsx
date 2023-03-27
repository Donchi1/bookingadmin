import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HouseOnOutlinedIcon from "@mui/icons-material/HouseOutlined";
import { useNavigate } from "react-router-dom";

const Widget = ({ type, data }) => {

  const navigate = useNavigate()

  let info;

  //temporary
  const amount = data;
  const diff = () => {
    if(amount > 0 && amount < 20) return {amt: 20, status: "error"}
    if(amount > 20 && amount < 40) return {amt: 40, status: "warning"}
    if(amount > 40 && amount < 60) return {amt: 60, status: "success"}
    if(amount > 60 && amount < 80) return {amt:80, status: "success"}
    if(amount > 80 && amount < 100) return {amt:100, status: "success"}
    return {amt:100, status: "success"}
  };

  switch (type) {
    case "user":
      info = {
        title: "USERS",
        isMoney: false,
        link: {url:"/users", text:"See all users"},
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "rooms":
      info = {
        title: "BOOKED",
        isMoney: false,
        link:{url:"/rooms", text: "View all bookings"},
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "hotels":
      info = {
        title: "HOTELS",
        isMoney: false,
        link: {url:"/hotels", text:"View all hotels"},
        icon: (
          <HouseOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      info = {
        title: "BALANCE",
        isMoney: true,
        link: {url: "/", text: "See details"},
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{info.title}</span>
        <span className="counter">
          {info.isMoney && "$"} {amount}
        </span>
        <span onClick={() => navigate(`${info.link.url}`)} className="link">{info.link.text}</span>
      </div>
      <div className="right">
          {diff().status === "success" && 
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff().amt} %
        </div>}
          {diff().status === "error" && 
        <div className="percentage negative">
          <KeyboardArrowDownIcon />
          {diff().amt} %
        </div>}
          {diff().status === "warning" && 
        <div className="percentage warning">
          <KeyboardArrowUpIcon />
          {diff().amt} %
        </div>}
        {info.icon}
      </div>
    </div>
  );
};

export default Widget;
