import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../Config/Config"

const NewDoctor = () => {
    const doctorCollectionRef = collection(db, "doctors");

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [submitted, setsubmitted] = useState(false);


    const createDoctor = async (e) => {
        e.preventDefault();
        function refreshPage() {
            window.location.reload(false);
        }

        await addDoc(doctorCollectionRef, {
            firstName: fname,
            lastName: lname,
            address: address,
            qualifications: qualifications,
            phoneNo: phoneNo
        });
        setsubmitted(true);

    };

    return (
        <div className="container">
            <h1 className="display-5 text-center">Add a New Doctor</h1>
            <form>
                <div class="form-group pb-4">
                    <label >First Name</label>
                    <input type="text" class="form-control" id="exampleFirstName" placeholder="Enter First Name" onChange={(e) => {
                        setFname(e.target.value);
                    }} />

                </div>

                <div class="form-group pb-4">
                    <label>Last Name</label>
                    <input type="text" class="form-control" id="exampleLatName" placeholder="Enter Last Name" onChange={(e) => {
                        setLname(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" id="examplePhone" placeholder="Enter Phone Number" onChange={(e) => {
                        setPhoneNo(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label>Address</label>
                    <input type="text" class="form-control" id="exampleAddress" placeholder="Enter Address" onChange={(e) => {
                        setAddress(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label>Qualifications</label>
                    <input type="text" class="form-control" id="exampleQualification" placeholder="Enter Qualifications" onChange={(e) => {
                        setQualifications(e.target.value);
                    }} />

                </div>


                <button type="submit" class="btn btn-primary" onClick={createDoctor}>Submit</button>
            </form>
            <br />
            {(submitted) && <div class="alert alert-primary" role="alert">
                The details of the doctor were added successfully!.
            </div>}
        </div>
    )
}

export default NewDoctor
