import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { BsFillBookmarkFill, BsPeopleFill } from 'react-icons/bs'
import { FaStethoscope, FaUserNurse } from 'react-icons/fa'
import { MdBedroomChild } from 'react-icons/md'
import { HiDocumentReport } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from './../Components/Config/Config'
/* import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement); */






const HomePage = () => {
    const [countDoctors, setcountDoctors] = useState("")
    const [countAppointments, setcountAppointments] = useState("")
    const [countNurses, setcountNurses] = useState("")
    const [countPatients, setcountPatients] = useState("")
    const [countRooms, setcountRooms] = useState("")
    const [countReports, setcountReports] = useState("")

    useEffect(async () => {
        const query1 = collection(db, "doctors");
        const snapshot1 = await getDocs(query1);
        setcountDoctors(snapshot1.size);

        const query2 = collection(db, "appointments");
        const snapshot2 = await getDocs(query2);
        setcountAppointments(snapshot2.size);

        const query3 = collection(db, "nurses");
        const snapshot3 = await getDocs(query3);
        setcountNurses(snapshot3.size);

        const query4 = collection(db, "patients");
        const snapshot4 = await getDocs(query4);
        setcountPatients(snapshot4.size);

        const query5 = collection(db, "rooms");
        const snapshot5 = await getDocs(query5);
        setcountRooms(snapshot5.size);

        const query6 = collection(db, "reports");
        const snapshot6 = await getDocs(query6);
        setcountReports(snapshot6.size);

    }, [])
    //const[pieChartState, setpieChartState]=useState( );
    const state = {
        labels: ['Patients', 'Doctors', 'Nurses'],
        datasets: [
            {
                label: 'fgvbhnjk',
                backgroundColor: [
                    '#ffba56',
                    '#2fbff8',
                    '#38ef7d'

                ],
                hoverBackgroundColor: [
                    '#a86008',
                    '#025170',
                    '#0a504a'

                ],
                data: [countPatients, countDoctors, countNurses]
            }
        ]
    }
    return (
        <div className="container px-0">

            <div class="col-md-12 pt-5">
                <div class="row ">
                    <div class="col-xl-4 col-lg-6 ">
                        <div class="card l-bg-cherry border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><BsFillBookmarkFill /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Appointements</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            {countAppointments}
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6">
                        <NavLink className="card-nav" to="/doctors">
                            <div class="card l-bg-blue-dark border-0">
                                <div class="card-statistic-3 p-4">
                                    <div class="card-icon card-icon-large"><i class="fas"><FaStethoscope /></i></div>
                                    <div class="mb-4">
                                        <h5 class="card-title mb-0">Doctors</h5>
                                    </div>
                                    <div class="row align-items-center mb-2 d-flex">
                                        <div class="col-8">
                                            <h2 class="d-flex align-items-center mb-0">
                                                {countDoctors}
                                            </h2>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </NavLink>
                    </div>

                    <div class="col-xl-4 col-lg-6">
                        <NavLink className="card-nav" to="/viewnurse">
                            <div class="card l-bg-green-dark border-0">
                                <div class="card-statistic-3 p-4">
                                    <div class="card-icon card-icon-large"><i class="fas"><FaUserNurse /></i></div>
                                    <div class="mb-4">
                                        <h5 class="card-title mb-0">Nurses</h5>
                                    </div>
                                    <div class="row align-items-center mb-2 d-flex">
                                        <div class="col-8">
                                            <h2 class="d-flex align-items-center mb-0">
                                                {countNurses}
                                            </h2>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-orange-dark border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><BsPeopleFill /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Patients</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            {countPatients}
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <NavLink className="card-nav" to="/rooms">
                            <div class="card l-bg-new1-dark border-0">
                                <div class="card-statistic-3 p-4">
                                    <div class="card-icon card-icon-large"><i class="fas"><MdBedroomChild /></i></div>
                                    <div class="mb-4">
                                        <h5 class="card-title mb-0">Rooms</h5>
                                    </div>
                                    <div class="row align-items-center mb-2 d-flex">
                                        <div class="col-8">
                                            <h2 class="d-flex align-items-center mb-0">
                                                {countRooms}
                                            </h2>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-new2-dark border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><HiDocumentReport /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Reports</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            {countReports}
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  <div className="col-md-3">
                 <Pie
                    data={state}
                    // plugins={[ChartDataLabels]}
                    options={{
                        title: {
                            display: true,
                            text: 'Registered users',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        datalabels: {
                            display: true,
                            color: "black",
                        },
                        tooltips: {
                            backgroundColor: "#5a6e7f",
                        },
                    }}
                /> 

                <Doughnut
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        datalabels: {
                            display: true,
                            color: "black",
                        },
                        tooltips: {
                            backgroundColor: "#5a6e7f",
                        },
                    }}
                />
            </div> */}
        </div>
    )
}

export default HomePage
