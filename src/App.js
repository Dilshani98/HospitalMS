
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBar';
import HomePage from './Containers/HomePage';
import SideBar from './Components/SideBar/SideBar';
import AllDoctors from './Components/DoctorComponent/AllDoctors';
import NewDoctor from './Components/DoctorComponent/NewDoctor';
import CreateRoomsContainer from './Containers/CreateRoomsContainer/CreateRoomsContainer';
import RoomsContainer from './Containers/RoomsContainer/RoomsContainer';
import ViewNurse from './Containers/NurseContainer/ViewNurse';
import AddNurse from './Containers/NurseContainer/AddNurse';
import Patients from './Containers/PatientsContainer/PatientsContainer'
import NewPatient from './Components/PatientComponent/NewPatient'
import AllPatient from './Components/PatientComponent/AllPatients'

import SideBar from './Components/SideBar/SideBar';
import Appointment from './Containers/AppointmentDashboard/Appointment';
import HomePage from './Containers/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/*   <NavBar /> */}
        <div className="row">
          <div className="col-md-2 col-sm-1">
            <SideBar />
          </div>
          <div className="col-md-10 col-sm-11">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Appointments" element={<Appointment />} />
              
              <Route path="/doctors" exact element={<AllDoctors />} />
              <Route path="/new-doctor" exact element={<NewDoctor />} />

              <Route path="/addroom" element={<CreateRoomsContainer />} />
              <Route path="/rooms" element={<RoomsContainer />} />

              <Route path="/patients" element={<Patients />} />
              <Route path="/new-patient" element={<NewPatient />} />
              <Route path="/all-patients" element={<AllPatient />} />

              <Route path="/viewnurse" element={<ViewNurse />} />
              <Route path="/addnurse" element={<AddNurse />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
