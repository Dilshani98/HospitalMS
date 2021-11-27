
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBar';
import HomePage from './Containers/HomePage';
import SideBar from './Components/SideBar/SideBar';
import ViewNurse from './Containers/NurseContainer/ViewNurse';


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
