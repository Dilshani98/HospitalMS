import React, { useState, useEffect } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../Config/Config"
import { NavLink } from 'react-router-dom'


const NewPatient = () => {
    const patientCollectionRef = collection(db, "patients");

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [submitted, setsubmitted] = useState(false);

    const createPatient = async (e) => {
        e.preventDefault();
        function refreshPage() {
            window.location.reload(false);
        }

        await addDoc(patientCollectionRef, {
            firstName: fname,
            lastName: lname,
            address: address,
            age: age,
            gender: gender
        });
        setsubmitted(true);

    };

    return (
        <div className="container">
            <h1 className="display-5 text-center">Add a New Patient</h1>
            {(submitted) && <div class="alert alert-primary" role="alert">
                The details of the new patient were added successfully!.
            </div>}
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
                    <label>Age</label>
                    <input type="text" class="form-control" id="exampleAge" placeholder="Enter Age" onChange={(e) => {
                        setAge(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label>Address</label>
                    <input type="text" class="form-control" id="exampleAddress" placeholder="Enter Address" onChange={(e) => {
                        setAddress(e.target.value);
                    }} />

                </div>
                <div class="form-group pb-4">
                    <label>Gender</label>
                    <input type="text" class="form-control" id="exampleGender" placeholder="Select Gender" onChange={(e) => {
                        setGender(e.target.value);
                    }} />

                </div>


                <button type="submit" class="btn btn-success" onClick={createPatient}>Submit</button> {""}
                <NavLink to="/patients">
                    <button type="button" class="btn btn-secondary"> Go Back</button>
                </NavLink>

            </form>
            <br />

        </div>

    );
}

export default NewPatient;