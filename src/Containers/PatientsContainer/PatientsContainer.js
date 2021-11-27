import React from 'react'
import './PatientContainer.css'
import { BsPeopleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import patientimg from '../../assets/img/patient.jpg'
import { HiDocumentReport } from 'react-icons/hi'
import { BsFillPlusCircleFill } from 'react-icons/bs'


const Patients = () => {
    return (
        <>
            <div className="container ">
                <h1 className="display-3 text-center"><BsPeopleFill />Patients</h1>
                <hr />
                <div className='row row-md-3'>
                    <div className='col-md-6 col-sm-12' style={{ margin: "auto" }}>
                        <img src={patientimg} />
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div class="d-flex justify-content-between">
                            <NavLink to="/all-patients">
                                <button type="button" class="btn btn-info btn-patient btn-lg"><HiDocumentReport /> View Patients Details</button>
                            </NavLink>
                            <br></br><br></br><br></br>
                        </div>
                        <div class="d-flex justify-content-between">
                            <NavLink to="/new-patient">
                                <button type="button" class="btn btn-info btn-patient btn-lg"><BsFillPlusCircleFill /> Add New Patient</button>
                            </NavLink>
                        </div>


                    </div>

                </div>



            </div>

        </>
    );
}

export default Patients;