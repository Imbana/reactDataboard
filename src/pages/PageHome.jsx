import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo"
import "./home.css"
import {userData} from "./../dummyData"
import UserInformation from "../components/UserInformation";

const home = () => {
    return (
      <div className="home">
        <FeaturedInfo></FeaturedInfo>
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        ></Chart>
        <UserInformation></UserInformation>
      </div>
    );
}

export default home
