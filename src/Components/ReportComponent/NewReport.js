import React, { useState, useEffect } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../Config/Config"
import { NavLink } from 'react-router-dom'

const NewReport = () => {
    const reportCollectionRef = collection(db, "reports");

    const [reportId, setreportId] = useState("")
    const [reportName, setreportName] = useState("");
    const [rate, setrate] = useState("");
    const [patientName, setpatientName] = useState("");
    const [doctorName, setdoctorName] = useState("");
    const [description, setdescription] = useState("");
    const [submitted, setsubmitted] = useState(false);

    const createReport = async (e) => {
        e.preventDefault();
        function refreshPage() {
            window.location.reload(false);
        }

        await addDoc(reportCollectionRef, {
            reportId: reportId,
            reportName: reportName,
            rate: rate,
            patientName: patientName,
            doctorName: doctorName,
            description: description,
        });
        setsubmitted(true);

    };


    return (
        <div className="container">
            <h1 className="display-5 text-center">Add a New Medical Report</h1>
            {(submitted) && <div class="alert alert-primary" role="alert">
                New Medical Report has been added successfully!.
            </div>}
            <form>

                <div class="form-group pb-4">
                    <label >Report Id</label>
                    <input type="text" class="form-control" id="exampleReportId" placeholder="Enter Report Id" onChange={(e) => {
                        setreportId(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label >Report Name</label>
                    <input type="text" class="form-control" id="exampleReportName" placeholder="Enter Report Name" onChange={(e) => {
                        setreportName(e.target.value);
                    }} />

                </div>

                <div class="form-group pb-4">
                    <label>Patient Name</label>
                    <input type="text" class="form-control" id="examplepatientName" placeholder="Enter Patient Name" onChange={(e) => {
                        setpatientName(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label>Doctor Name </label>
                    <input type="text" class="form-control" id="exampleDoctorName" placeholder="Enter Doctor Name" onChange={(e) => {
                        setdoctorName(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label>Rate</label>
                    <input type="text" class="form-control" id="exampleRate" placeholder="Enter Rate" onChange={(e) => {
                        setrate(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label>Description</label>
                    <input type="text" class="form-control" id="exampleDescription" placeholder="Enter Description" onChange={(e) => {
                        setdescription(e.target.value);
                    }} />

                </div>


                <button type="submit" class="btn btn-success" onClick={createReport}>Submit</button> {""}
                <NavLink to="/reports">
                    <button type="button" class="btn btn-secondary"> Go Back</button>
                </NavLink>

            </form>
            <br />

        </div>


    );
}

export default NewReport;