import "./featuredInfo.css";
import { ArrowBackIosSharp, ArrowDownward, ArrowForwardIosSharp, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Congratulations Julia</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$39,358</span>
          <span className="featuredMoneyRate">
            +9% <ArrowBackIosSharp  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Download</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Purchases</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,376</span>
          <span className="featuredMoneyRate">
            {/* -1.4 <ArrowDownward className="featuredIcon negative"/> */}
          </span>
        </div>
        <span className="featuredSub">Monthly Sales</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Earnings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$93,438.78</span>
          <span className="featuredMoneyRate">
            {/* +2.4 <ArrowUpward className="featuredIcon"/> */}
          </span>
        </div>
        <span className="featuredSub">Monthly Revenue</span>
      </div>
    </div>
  );
}
