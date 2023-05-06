function Sensor(sensor) {
    const statusChecker = (parameter, unit, data, lower, upper) =>{
        if (data>lower&&data<upper){
            return(
                <tr id='good'>
                    <td>{parameter}</td>
                    <td>{data} {unitChecker(unit)}</td>
                    <td>Good</td>
                </tr>);
        }else{
            return(
                <tr  id='bad'>
                    <td>{parameter}</td>
                    <td>{data} {unitChecker(unit)}</td>
                    <td>Bad</td>
                </tr>);
        }
    }
    const unitChecker = (unit) =>{
        if (unit === "celsius"){
            return(
            <span>&#176;C</span>)
        }else if (unit === "percent"){
            return(
                <span> %</span>)
        }else if (unit === "ph"){
            return(
                <span> pH</span>)
        }
    }
  return (
    <div className="card">
      <table className="device-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sensor: </td>
            <td>{sensor.entry.sensorName}</td>
          </tr>
          <tr>
            <td>Timestamp: </td>
            <td>{sensor.entry.sensorTime}</td>
          </tr>
        </tbody>
      </table>
      <table className="sensor-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Reading</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {statusChecker("Air Temperature","celsius", sensor.entry.sensor.temp, 27, 35)}
          {statusChecker("Air Humidity","percent", sensor.entry.sensor.humi, 80, 100)}
          {statusChecker("Soil Temperature","celsius", sensor.entry.sensor.stem, 27, 35)}
          {statusChecker("Soil Humidity","percent", sensor.entry.sensor.smoi, 80, 100)}
          {statusChecker("pH Level","ph", sensor.entry.sensor.ph, 3, 7)} */}
          
          {statusChecker("Air Temperature","celsius", sensor.entry.sensor.temp, 33, 37)}
          {statusChecker("Air Humidity","percent", sensor.entry.sensor.humi, 97, 101)}
          {statusChecker("Soil Temperature","celsius", sensor.entry.sensor.stem, 33, 37)}
          {statusChecker("Soil Humidity","percent", sensor.entry.sensor.smoi, 97, 101)}
          {statusChecker("pH Level","ph", sensor.entry.sensor.ph, 3, 7)}
        </tbody>
      </table>
    </div>
  );
}

export default Sensor;
