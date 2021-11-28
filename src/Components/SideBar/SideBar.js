import React, { useState, useEffect } from "react";
import { MenuItem } from "./MenuItem";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingMedical,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Appointment from "../../Containers/AppointmentDashboard/Appointment";
import './SideBar.css';

function SideBar() {
  return (
    <div className="SideBar">
      <NavLink to="/" className="text-decoration-none">
        <div className="logo"><FontAwesomeIcon icon={faHandHoldingMedical} style={{ color: 'white', fontSize: '60px' }} />
          <p className="Title" style={{ color: 'white', fontSize: '25px', fontFamily: 'Trebuchet MS' }}>Hospital  Management System</p>
        </div>
      </NavLink>
      <ul className="SidebarList ">
        {MenuItem.map((val, key) => {
          return (
            <li
              key={key}
              className="rowItem"
            >
              <a className="nav-link" href={val.path}>
                <div id="icon" >{val.icon}</div>
                <div id="title">{val.title}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
