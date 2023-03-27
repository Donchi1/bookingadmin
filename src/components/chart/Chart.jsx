import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../hooks/useFetch";




const Chart = ({ aspect, title }) => {

  const [info] = useFetch("/bookings/revenue/sixmonths")
  
 

  const refactored = () => {
    return info.map(each => {
      let dd = ""
     switch(each._id){
      case 1:
        dd = "January"
        break
      case 2:
        dd = "February"
        break
      case 3:
        dd = "March"
        break
      case 4:
        dd = "April"
        break
      case 5:
        dd = "May"
        break
      case 6:
        dd = "June"
        break
      case 7:
        dd = "July"
        break
      case 8:
        dd = "August"
        break
      case 9:
        dd = "September"
        break
      case 10:
        dd = "October"
        break
      case 11:
        dd = "November"
        break
      case 12:
        dd = "December"
        break
        default: dd = ""
     }
     return {month: dd, total: each.total}
    })
  }
 
  
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={refactored()}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
