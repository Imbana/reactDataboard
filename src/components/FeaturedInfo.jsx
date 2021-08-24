import React from 'react'
import "./featuredInfo.css"
import ArrowUpward from "@material-ui/icons/ArrowUpward";
const FeaturedInfo = () => {
    return (
      <div className="featuredInfo">
        <div className="featuredItem">
          <h2 className="infoTitle">Revanue</h2>
          <div className="infoNumber">
            <span className="numberPrecio">$2.415</span>
            <span className="numberLevel">
              -11
              <ArrowUpward className="featureIcon" />
            </span>
          </div>
          <div className="infoDescription">Compared to last month</div>
        </div>
        <div className="featuredItem">
          <h2 className="infoTitle">Revanue</h2>
          <div className="infoNumber">
            <span className="numberPrecio">$2.415</span>
            <span className="numberLevel">
              -11
              <ArrowUpward className="featureIcon" />
            </span>
          </div>
          <div className="infoDescription">Compared to last month</div>
        </div>

        <div className="featuredItem">
          <h2 className="infoTitle">Revanue</h2>
          <div className="infoNumber">
            <span className="numberPrecio">$2.415</span>
            <span className="numberLevel">
              -11
              <ArrowUpward className="featureIcon" />
            </span>
          </div>
          <div className="infoDescription">Compared to last month</div>
        </div>
      </div>
    );
}

export default FeaturedInfo
