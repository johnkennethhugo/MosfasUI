
import SensorLists from "../components/SensorLists";

function LandingPage(page){

    const submitHandler = (entry) => {
        page.onSubmit(entry);
    }
    
    return(
        <div className="app-body">
            {page.reading.length === 0 ? (
              <div className='notFound'><p>No Available Devices</p></div>
            ) : null}
            <div className="card-container">
                <SensorLists data={page.reading} onSubmit={submitHandler}/>
            </div>
        </div>
    )
}

export default LandingPage;