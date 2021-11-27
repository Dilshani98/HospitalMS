
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBar';
import HomePage from './Containers/HomePage';
import SideBar from './Components/SideBar/SideBar';
import AllDoctors from './Components/DoctorComponent/AllDoctors';
import NewDoctor from './Components/DoctorComponent/NewDoctor';


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
              <Route path="/doctors" exact element={<AllDoctors />} />
              <Route path="/new-doctor" exact element={<NewDoctor />} />




            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
