import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from "../Config/Config"
import { NavLink } from 'react-router-dom'

const FindReport = () => {

    const reportCollectionRef = collection(db, "reports");

    const [reports, setreports] = useState([]);

    const [reportId, setreportId] = useState("");
    const [submitted, setsubmitted] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const FindAReport = async (e) => {
        e.preventDefault();
        function refreshPage() {
            window.location.reload(false);
        }

        await addDoc(reportCollectionRef, {
            reportId: reportId,
        });
        setsubmitted(true);
        setreportId(reportId);

    };


    useEffect(() => {
        getReport();

    }, [refresh]);

    const getReport = async () => {
        const data = await getDocs(reportCollectionRef);
        setreports(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteReport = async (id) => {
        const roomsDoc = doc(db, "reports", id);

        await deleteDoc(roomsDoc);
        setRefresh(!refresh);
    };


    return (
        <>
            <div className="container">
                <h1 className="display-5 text-center">Find Medical Reports</h1>
                <form>

                    <div class="form-group pb-4">
                        <label >Enter Report ID </label>
                        <input type="text" class="form-control" id="exampleReportId" placeholder="Enter Report Id to find the Medical Report" onChange={(e) => {
                            setreportId(e.target.value);
                        }} />

                    </div>
                    <button type="submit" class="btn btn-primary" onClick={FindAReport}>Find</button> {""}
                    <NavLink to="/reports">
                        <button type="button" class="btn btn-secondary"> Go Back</button>
                    </NavLink>

                </form>
                <br />
                <hr />
                <div style={{ marginTop: "50px", width: "1000px" }}>
                    <table className="table table-striped mt-5">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Report ID</th>
                                <th scope="col">Report Name</th>
                                <th scope="col">Patient Name</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Description</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        {(submitted) &&
                            <tbody key={reports.id}>
                                <tr className="table-primary mt-5 hide-table-padding table-details">
                                    <td scope="row">{reports.reportId}</td>
                                    <td>{reports.reportName}</td>
                                    <td>{reports.patientName}</td>
                                    <td>{reports.doctorName}</td>
                                    <td>{reports.rate}</td>
                                    <td>{reports.description}</td>
                                    <td>
                                        <button
                                            className='col c-s-btn'
                                            onClick={() => deleteReport(reports.id)}
                                            style={{ paddingLeft: "0", marginLeft: "0", width: "60px" }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                            </tbody>


                        }

                    </table>
                </div>


            </div>

        </>


    );
}

export default FindReport;