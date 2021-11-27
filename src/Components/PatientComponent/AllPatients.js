import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../Components/Config/Config'

const AllPatients = () => {
    const patientCollectionRef = collection(db, "patients");

    const [patients, setpatients] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const [editingpatient, seteditingpatient] = useState('');

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [editingpatientid, seteditingpatientid] = useState("");

    const handleClickEdit = (patient) => {
        seteditingpatient(patient)
        setFname(patient.firstName);
        setLname(patient.lastName);
        setAddress(patient.address);
        setAge(patient.age);
        setGender(patient.gender);
        seteditingpatientid(patient.id);

    }

    useEffect(() => {
        getpatients();

    }, [refresh]);

    const getpatients = async () => {
        const data = await getDocs(patientCollectionRef);
        setpatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(patients);
    };

    const deletePatient = async (id) => {
        const patientDoc = doc(db, "patients", id);

        await deleteDoc(patientDoc);
        setrefresh(!refresh);

    }
    const editPatient = async (e) => {
        e.preventDefault();

        await setDoc(doc(db, "patients", editingpatientid), {
            firstName: fname,
            lastName: lname,
            address: address,
            gender: gender,
            age: age
        });
        setrefresh(!refresh);

    };

    return (
        <div className="container ">
            <h1 className="display-3 text-center">Dtails of Patients</h1>
            <hr />
            <table className="table table-striped mt-5">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                {patients.map((patient) => {
                    return (
                        <tbody key={patient.id}>
                            <tr>
                                <td scope="row">{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{patient.address}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>
                                    {/* <Link to="/updateuser">     */}
                                    <button className="btn btn-success" onClick={() => handleClickEdit(patient)}>Edit Patient</button><br />
                                    {/* </Link> */}
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deletePatient(patient.id)}>Delete Patient</button>
                                </td>
                            </tr>
                            {(editingpatient === patient) &&
                                <tr className="table-primary mt-5 hide-table-padding table-details"  >
                                    <td></td>
                                    <td colspan="6">
                                        <div id="collapseTwo" className="pgh pr-4" >



                                            <div className="col-md-12 col-sm-12  bg-transparent   pt-1 pb-1"><b>Edit the Patient details.</b></div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>First Name</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {fname}
                                                    <input
                                                        type="text"
                                                        id="fname"
                                                        name="ad-fname"
                                                        Value={editingpatient.firstName}
                                                        onChange={(e) => { setFname(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>Last Name</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {lname}
                                                    <input
                                                        type="text"
                                                        id="lname"
                                                        name="ad-lname"
                                                        Value={editingpatient.lastName}
                                                        onChange={(e) => { setLname(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>Address</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {address}
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        name="ad-address"
                                                        Value={editingpatient.address}
                                                        onChange={(e) => { setAddress(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>Age</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {age}
                                                    <input
                                                        type="text"
                                                        id="phone"
                                                        name="ad-phone"
                                                        Value={editingpatient.age}
                                                        onChange={(e) => { setAge(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>Qualifications</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {gender}
                                                    <input
                                                        type="text"
                                                        id="qual"
                                                        name="ad-qual"
                                                        Value={editingpatient.gender}
                                                        onChange={(e) => { setGender(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 bg-transparent  pt-1 pb-1 d-sm-none d-md-block ">

                                                </div>
                                                <div className="row col-md-6 col-sm-12 text-muted bg-transparent  pt-1 pb-1 pr-2 d-flex justify-content-end">
                                                    <div className="row  p-1 ">
                                                        <div >
                                                            <button className="bg-light text-dark" onClick={() => seteditingpatient('')}>Cancel</button>


                                                        </div>&nbsp;
                                                        <div className=" userTile-save-button-bar  ">

                                                            <button buttonColour='dark-blue' onClick={editPatient}>Save</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </td>


                                </tr>}
                        </tbody>
                    );
                })}

            </table>
        </div>

    );
}

export default AllPatients;