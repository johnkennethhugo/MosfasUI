import { useState } from "react";

function SensorForms(sensor) {
  const [address, setAddress] = useState('');

  const handleChange = (event) => {
    setAddress(event.target.value);
  }

  const submitHandler = (entry) => {
    entry.preventDefault();
    console.log(address);
    sensor.onSubmit(address);
    setAddress('');
  }

    
  return (
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
                placeholder='192.168.1.XXX'
                required>
              </input>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="submit">Add Device</button>
    </form>
    );
}

export default SensorForms;
