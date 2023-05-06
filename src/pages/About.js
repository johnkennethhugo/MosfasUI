import { Fragment } from "react";

function About(props) {
  return (
    <div className="app-body">
      <div className="card-container">

        <div className="card-recommendation">
          <table className="recommendation-table">
            <thead>
              <tr>
                <th>192.168.1.101</th>
                <th>3:37PM - 02, March 2023</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="card-recontent">
            Air Temperature is high, please maintain 16-30&#176;C. The
            recommended temperature for most indoor plants is around 24°C. When temperatures are above the recommended level for a
            particular plant, you can help improve humidity by spray misting the
            leaves. Some plants grow well in higher temperatures, which are
            usually placed in humidity trays and are misted regularly.<br/>
            Watering is also recommended in the next hour.
          </div>
        </div>

        <div className="card-recommendation">
          <table className="recommendation-table">
            <thead>
              <tr>
                <th>192.168.1.102</th>
                <th>3:37PM - 02, March 2023</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="card-recontent">
            Watering is also recommended in the next hour.
          </div>
        </div>

        <div className="card-recommendation">
          <table className="recommendation-table">
            <thead>
              <tr>
                <th>192.168.1.103</th>
                <th>3:37PM - 02, March 2023</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="card-recontent">
            Air Temperature is high, please maintain 16-30&#176;C. The
            recommended temperature for most indoor plants is around 24°C. When temperatures are above the recommended level for a
            particular plant, you can help improve humidity by spray misting the
            leaves. Some plants grow well in higher temperatures, which are
            usually placed in humidity trays and are misted regularly.<br/>
          </div>
        </div>

        <div className="card-recommendation">
          <table className="recommendation-table">
            <thead>
              <tr>
                <th>192.168.1.104</th>
                <th>3:37PM - 02, March 2023</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="card-recontent">
            Water pH level is not nominal, please check the sensor if it is properly deployed
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
