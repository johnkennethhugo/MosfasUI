import LandingPage from './pages/LandingPage';
import Device from './pages/Device';
import './styles/App.css';
import Api from './api/Api';
import {useState, useEffect, Fragment} from 'react';
import {ReactComponent as MosfasLogo} from './images/Mosfas.svg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Download from './pages/Download';
import About from './pages/About';

function App() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const allData = await retrieveSensors();
      if (allData) setSensorData(allData);
    };
    
      const interval=setInterval(()=>{
        getAllData();
        }, 500)

        return()=>clearInterval(interval)
       
  });

  //Get
  const retrieveSensors = async () => {
    const response = await Api.get("/complete");
    return response.data;
  };
  
  //Add
  const submitHandler = async (entry) => {
    await Api.post("/add", entry);
    console.log(entry);
  }

  //Delete
  const deleteHandler = async (entry) => {
    console.log(entry);
    await Api.delete(`/delete/${entry}`);
  }

  return (
    <div className="app">
      <Router>
      {sensorData.map((data) =>
      <Fragment key={1}>
        <header className="app-header">
            <div className='app-header-item'>
                <div className="app-header-nav">
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/device'><button>Device</button></Link>
                    <Link to='/download'><button>Download</button></Link>
                    <Link to='/adviser'><button>Adviser</button></Link>
                </div>                
            </div>
            <div className="app-header-item">
                <div className="app-header-logo">
                <MosfasLogo />
                </div>
            </div>
            <div className='app-header-item'>
                <div className='app-header-timestamp'>{data.payloadDate}</div>
                <div className='app-header-timestamp'>{data.payloadTime}</div>
            </div>
        </header>
        <Routes>
          <Route exact path='/' element={<LandingPage reading={data.sensorPayload}/>} />
          <Route exact path='/device' element={<Device reading={data.sensorPayload} onDelete={deleteHandler} onSubmit={submitHandler}/>} />
          <Route exact path='/download' element={<Download/>} />
          <Route exact path='/adviser' element={<About />} />
          <Route exact path='*' element ={<div className='notFound'><p>404</p></div>}/>
        </Routes>
        
        <footer className="app-footer">
            Greenhouse Environment Parameter Monitoring Device
        </footer>
      </Fragment>     
      )}      
      
      </Router>
    </div>
  );
}

export default App;
