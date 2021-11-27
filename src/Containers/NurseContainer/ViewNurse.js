import React from 'react'
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { collection , getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../../Components/Config/Config'

const ViewNurse = () => {

    const nurseCollectionRef = collection(db, "nurses");

    const [nurses, setNurses] = useState([]);

    useEffect(() => {
        getNurses();
        
      }, []);

    const getNurses = async () => {
        const data = await getDocs(nurseCollectionRef);
        setNurses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        console.log(nurses);
    };

    const deleteNurse = async (id) => {
        const nurseDoc = doc(db, "nurses", id);
    
        await deleteDoc(nurseDoc);
        
    }

    return (
        <>
       
        <div className="container">

            <h1 className="mt-3">Nurses of this Hospital</h1>

            <Link to="/addnurse" className="d-flex align-items-left">
                <button  className="btn btn-primary mt-5">Add Nurse</button>
            </Link>

            <table className="table table-striped mt-5">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Grade</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {nurses.map((nurse) => {
                        return(
                            <tr>
                                <td scope="row">{nurse.firstName}</td>
                                <td>{nurse.lastName}</td>
                                <td>{nurse.address}</td>
                                <td>{nurse.phoneNo}</td>
                                <td>{nurse.grade}</td>
                                <td>
                                    {/* <Link to="/updateuser">     */}
                                        <button  className="btn btn-success">Edit Nurse</button><br />
                                    {/* </Link> */}
                                </td>
                                <td>
                                    <button  className="btn btn-danger" onClick={() => deleteNurse(nurse.id)}>Delete Nurse</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </>         
    )
}

export default ViewNurse
