import SensorForms from "../components/SensorForms";
import SensorTable from "../components/SensorTable";

function Device(page) {
  const submitHandler = (entry) => {
    page.onSubmit(entry);
  };

  const deleteHandler = (entry) => {
    page.onDelete(entry);
  };

  return (
    <div className="app-body">
      <div className="card-container">
        <SensorForms onSubmit={submitHandler} />
        <table className="sensor-master-table">
          <thead>
            <tr>
              <th>Sensor</th>
              <th>Air Temperature</th>
              <th>Air Humidity</th>
              <th>Soil Temperature</th>
              <th>Soil Humidity</th>
              <th>pH Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {page.reading.map((data) => (
              <SensorTable
                entry={data}
                key={data.id}
                onDelete={deleteHandler}
              />
            ))}
            {page.reading.length === 0 ? (
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Device;
