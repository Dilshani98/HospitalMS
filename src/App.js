
import './App.css';
import SideBar from  './Components/SideBar/SideBar';
import {  Route,Routes,BrowserRouter } from "react-router-dom";
import Appointment from './Containers/AppointmentDashboard/Appointment'


function App() {
  return (
    <div className="App">
      <SideBar/>
      
    </div>
  );
}

export default App;
