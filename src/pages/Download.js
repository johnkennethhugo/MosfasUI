import { useState } from "react";

function Download(sensor) {
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (entry) => {
    
    const data = {
        sensorName: address,
        date: date
    };

    entry.preventDefault();
    console.log(data);
    // sensor.onSubmit(data);
    setAddress("");
    setDate("");
    alert("Downloading from " + data.sensorName + "\nLogfile : " + data.date + ".csv");
  };

  return (
    <div className="app-body">
      <div className="card-container">
        <form className="card-forms" onSubmit={submitHandler}>
          <table className="device-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> &emsp;Sensor: </td>
                <td className="IPAddress">
                  <input
                    onChange={handleChange}
                    value={address}
                    placeholder="192.168.1.XXX"
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td> &emsp;Date: </td>
                <td className="IPAddress">
                  <input type="date" onChange={handleChangeDate} value={date}
                  required></input>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="submit">Download Logfile</button>
        </form>
      </div>
    </div>
  );
}

export default Download;
