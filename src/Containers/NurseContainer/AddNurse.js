import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { collection , getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../../Components/Config/Config'

const AddNurse = () => {

    const nurseCollectionRef = collection(db, "nurses");

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [grade, setGrade] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const createNurse = async (e) => {
        e.preventDefault(); 

        await addDoc(nurseCollectionRef, {
          firstName: fname,
          lastName: lname,
          address: address,
          grade: grade,
          phoneNo: phoneNo
        });
      };


    return (
        <>
        <div className="container">
            <h1 className="mt-3 mb-3">ADD NURSES TO YOUR SYSTEM</h1>
            <form className="mt-5">
                <div className="mb-3 text-align-left">
                    <label for="inputName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="name" value={fname} onChange={(e) => {
                            setFname(e.target.value);
                        }}/>
                </div>

                <div className="mb-3 text-align-left">
                    <label for="inputName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="name" value={lname} onChange={(e) => {
                            setLname(e.target.value);
                        }}/>
                </div>

                <div className="mb-3">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" value={address} onChange={(e) => {
                            setAddress(e.target.value);
                        }}/>
                </div>

                <div className="mb-3">
                    <label for="inputPhoneNo" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="pno" value={phoneNo} onChange={(e) => {
                            setPhoneNo(e.target.value);
                        }}/>
                </div>

                <div className="mb-3">
                    <label for="packageSelect" className="form-label">Grade</label>
                    <select id="disabledSelect" className="form-select" value={grade} onChange={(e) => {
                            setGrade(e.target.value);
                        }}>
                        <option>Grade1</option>
                        <option>Grade2</option>
                        <option>Grade3</option>   
                    </select>
                </div>
                
                <button className="btn btn-success mb-3" onClick={createNurse}>Submit</button>
                

            </form>
        </div>
        </>
    )
}

export default AddNurse;
