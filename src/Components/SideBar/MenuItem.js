import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { faCalendarCheck, faHome, faNotesMedical, faProcedures, faUserInjured, faUserMd, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenuItem =[
  { 
    title: "Appointments",
    icon:<FontAwesomeIcon icon={faCalendarCheck} />,
    path: "/Appointments"
  },
  {
    title: "Doctors",
    icon:<FontAwesomeIcon icon={faUserMd} />,
    path: "/Doctors"
  },
  {
    title: "Nurses",
    icon:<FontAwesomeIcon icon={faUserNurse} />,
    path: "/Nurses"
  },
  {
    title: "Patients",
    icon:<FontAwesomeIcon icon={faUserInjured} />,
    path: "/Patients"
  },
  {
    title: "Rooms",
    icon:<FontAwesomeIcon icon={faProcedures} />,
    path: "/Rooms"
  },
  {
    title: "Reports",
    icon:<FontAwesomeIcon icon={faNotesMedical} />,
    path: "/Reports"
  }
]