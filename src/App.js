
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBar';

import SideBar from './Components/SideBar/SideBar';
import Appointment from './Containers/AppointmentDashboard/Appointment';
import HomePage from './Containers/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/*   <NavBar /> */}
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Appointments" element={<Appointment />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
