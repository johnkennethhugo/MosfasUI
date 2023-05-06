import { Link } from "react-router-dom";

function SensorTable(sensor) {
  const statusChecker = (unit, data, lower, upper) => {
    if (data > lower && data < upper) {
      return (
          <td id="good">
            {data} {unitChecker(unit)}
          </td>
      );
    } else {
      return (
          <td id="bad">
            {data} {unitChecker(unit)}
          </td>
      );
    }
  };
  const unitChecker = (unit) => {
    if (unit === "celsius") {
      return <span>&#176;C</span>;
    } else if (unit === "percent") {
      return <span> %</span>;
    } else if (unit === "ph") {
      return <span> pH</span>;
    }
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    sensor.onDelete(sensor.entry.id);
  }
  const restartHandler = (e) => {
    e.preventDefault();
    alert("Restarting Device: "+ sensor.entry.sensorName);
  }

  return (
    <tr>
        <td>{sensor.entry.sensorName}</td>
        {/* {statusChecker("celsius", sensor.entry.sensor.temp, 27, 35)}
        {statusChecker("percent", sensor.entry.sensor.humi, 80, 100)}
        {statusChecker("celsius", sensor.entry.sensor.stem, 27, 35)}
        {statusChecker("percent", sensor.entry.sensor.smoi, 80, 100)}
        {statusChecker("ph", sensor.entry.sensor.ph, 4, 7)} */}

          {statusChecker("celsius", sensor.entry.sensor.temp, 33, 37)}
          {statusChecker("percent", sensor.entry.sensor.humi, 97, 101)}
          {statusChecker("celsius", sensor.entry.sensor.stem, 33, 37)}
          {statusChecker("percent", sensor.entry.sensor.smoi, 97, 101)}
          {statusChecker("ph", sensor.entry.sensor.ph, 3, 7)}
        <td>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={restartHandler}>Restart</button>
            {/* <Link to={sensor.entry.id}><button>Restart</button></Link> */}
        </td>
    </tr>
  );
}

export default SensorTable;
