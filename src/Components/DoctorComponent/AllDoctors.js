import React, { useState, useEffect } from 'react'
import { FaStethoscope, FaUserNurse } from 'react-icons/fa'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../Components/Config/Config'


const AllDocors = () => {

    const doctorCollectionRef = collection(db, "doctors");

    const [doctors, setdoctors] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const [editingdoctor, seteditingdoctor] = useState('');

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [editingdoctorid, seteditingdoctorid] = useState("")

    const handleClickEdit = (doctor) => {
        console.log(doctor);
        seteditingdoctor(doctor);
        setFname(doctor.firstName);
        setLname(doctor.lastName);
        setAddress(doctor.address);
        setQualifications(doctor.qualifications);
        setPhoneNo(doctor.phoneNo);
        seteditingdoctorid(doctor.id);


    }

    useEffect(() => {
        getdoctors();

    }, [refresh]);

    const getdoctors = async () => {
        const data = await getDocs(doctorCollectionRef);
        setdoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(doctors);
    };

    const deletedoctor = async (id) => {
        const doctorDoc = doc(db, "doctors", id);

        await deleteDoc(doctorDoc);
        setrefresh(!refresh);

    }
    const editDoctor = async (e) => {
        e.preventDefault();

        await setDoc(doc(db, "doctors", editingdoctorid), {
            firstName: fname,
            lastName: lname,
            address: address,
            qualifications: qualifications,
            phoneNo: phoneNo
        });
        setrefresh(!refresh);

    };

    return (
        <div className="container ">
            <h1 className="display-3 text-center"><FaStethoscope />Doctors</h1>
            <hr />
            <div class="d-flex flex-row-reverse">
                <NavLink to="/new-doctor">
                    <button type="button" class="btn btn-primary float-right"><BsFillPlusCircleFill /> Add New Doctor</button>
                </NavLink>
            </div>

            <table className="table table-striped mt-5">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Qualifications</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                {doctors.map((doctor) => {
                    return (
                        <tbody key={doctor.id}>
                            <tr>
                                <td scope="row">{doctor.firstName}</td>
                                <td>{doctor.lastName}</td>
                                <td>{doctor.address}</td>
                                <td>{doctor.phoneNo}</td>
                                <td>{doctor.qualifications}</td>
                                <td>
                                    {/* <Link to="/updateuser">     */}
                                    <button className="btn btn-success" onClick={() => handleClickEdit(doctor)}>Edit Doctor</button><br />
                                    {/* </Link> */}
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deletedoctor(doctor.id)}>Delete Doctor</button>
                                </td>
                            </tr>
                            {(editingdoctor === doctor) &&
                                <tr className="table-primary mt-5 hide-table-padding table-details"  >
                                    <td></td>
                                    <td colspan="6">
                                        <div id="collapseTwo" className="pgh pr-4" >



                                            <div className="col-md-12 col-sm-12  bg-transparent   pt-1 pb-1"><b>Edit the doctor details.</b></div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>First Name</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {fname}
                                                    <input
                                                        type="text"
                                                        id="fname"
                                                        name="ad-fname"
                                                        Value={editingdoctor.firstName}
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
                                                        Value={editingdoctor.lastName}
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
                                                        Value={editingdoctor.address}
                                                        onChange={(e) => { setAddress(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>Phone Number</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {phoneNo}
                                                    <input
                                                        type="text"
                                                        id="phone"
                                                        name="ad-phone"
                                                        Value={editingdoctor.phoneNo}
                                                        onChange={(e) => { setPhoneNo(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>Qualifications</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {qualifications}
                                                    <input
                                                        type="text"
                                                        id="qual"
                                                        name="ad-qual"
                                                        Value={editingdoctor.qualifications}
                                                        onChange={(e) => { setQualifications(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 bg-transparent  pt-1 pb-1 d-sm-none d-md-block ">

                                                </div>
                                                <div className="row col-md-6 col-sm-12 text-muted bg-transparent  pt-1 pb-1 pr-2 d-flex justify-content-end">
                                                    <div className="row  p-1 ">
                                                        <div >
                                                            <button className="btn-primary " onClick={() => seteditingdoctor('')}>Cancel</button>


                                                        </div>&nbsp;
                                                        <div className=" userTile-save-button-bar  ">

                                                            <button className='btn-primary ' onClick={editDoctor}>Save</button>

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
    )
}

export default AllDocors
