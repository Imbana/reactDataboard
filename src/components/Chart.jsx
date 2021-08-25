import "./chart.css"
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Chart = ({title, data, dataKey, grid}) => {
    return (
      <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <LineChart data={data}>
            {grid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="name" stroke="#000"></XAxis>
            <Line type="monotone" dataKey={dataKey} stroke="#5df"></Line>
            <Line type="monotone" dataKey="pv" stroke="#33f"></Line>
            <Line type="monotone" dataKey="amt" stroke="#532"></Line>
            <Tooltip></Tooltip>
            <Legend></Legend>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Chart
