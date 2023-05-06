import Sensor from './Sensor';

function SensorLists(list){

    return(
      <div className="card-row">
          {list.data.map((data) =>
          <Sensor entry={data}  key={data.id}/>
          )}
      </div>
    )
}

export default SensorLists;