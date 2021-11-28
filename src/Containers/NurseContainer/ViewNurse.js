import React from 'react'
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { collection , getDocs, setDoc, deleteDoc, doc} from 'firebase/firestore';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import {FaUserNurse} from 'react-icons/fa';
import {db} from '../../Components/Config/Config'

const ViewNurse = () => {

    const nurseCollectionRef = collection(db, "nurses");

    const [nurses, setNurses] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const [editingnurse, seteditingnurse] = useState('');

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [grade, setGrade] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [editingnurseid, seteditingnurseid] = useState("")

    const handleClickEdit = (nurse) => {
        console.log(nurse);
        seteditingnurse(nurse);
        setFname(nurse.firstName);
        setLname(nurse.lastName);
        setAddress(nurse.address);
        setGrade(nurse.grade);
        setPhoneNo(nurse.phoneNo);
        seteditingnurseid(nurse.id);


    }


    useEffect(() => {
        getNurses();
        
      }, [refresh]);

    const getNurses = async () => {
        const data = await getDocs(nurseCollectionRef);
        setNurses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        console.log(nurses);
    };

    const deleteNurse = async (id) => {
        const nurseDoc = doc(db, "nurses", id);
    
        await deleteDoc(nurseDoc);
        setrefresh(!refresh);
        
    }

    const editNurse = async (e) => {
        e.preventDefault();

        await setDoc(doc(db, "nurses", editingnurseid), {
            firstName: fname,
            lastName: lname,
            address: address,
            grade: grade,
            phoneNo: phoneNo
        });
        setrefresh(!refresh);

    };

    return (
        <>
       
        <div className="container">

            <h1 className="display-3 text-center"><FaUserNurse />Nurses</h1>
            <hr />

            <div class="d-flex flex-row-reverse">
                <Link to="/addnurse" className="d-flex align-items-left">
                    <button  className="btn btn-primary mt-5"><BsFillPlusCircleFill /> Add New Nurse</button>
                </Link>
            </div>

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
                
                    {nurses.map((nurse) => {
                        return(
                            <tbody key={nurse.id}>
                                <tr>
                                    <td scope="row">{nurse.firstName}</td>
                                    <td>{nurse.lastName}</td>
                                    <td>{nurse.address}</td>
                                    <td>{nurse.phoneNo}</td>
                                    <td>{nurse.grade}</td>
                                    <td>
                                        <button  className="btn btn-success" onClick={() => handleClickEdit(nurse)}>Edit Nurse</button><br />
                                    </td>
                                    <td>
                                        <button  className="btn btn-danger" onClick={() => deleteNurse(nurse.id)}>Delete Nurse</button>
                                    </td>
                                </tr>
                                {(editingnurse === nurse) &&
                                <tr className="table-primary mt-5 hide-table-padding table-details"  >
                                    <td></td>
                                    <td colspan="6">
                                        <div id="collapseTwo" className="pgh pr-4" >



                                            <div className="col-md-12 col-sm-12  bg-transparent   pt-1 pb-1"><b>Edit the nurse details.</b></div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>First Name</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {fname}
                                                    <input
                                                        type="text"
                                                        id="fname"
                                                        name="ad-fname"
                                                        Value={editingnurse.firstName}
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
                                                        Value={editingnurse.lastName}
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
                                                        Value={editingnurse.address}
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
                                                        Value={editingnurse.phoneNo}
                                                        onChange={(e) => { setPhoneNo(e.target.value) }} />

                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 text-muted bg-transparent  border-white border-bottom pt-1 pb-1"><b>Grade</b></div>
                                                <div className="col-md-6 col-sm-12 text-muted bg-transparent border-white border-bottom pt-1 pb-1"> {grade}
                                                    <select type="text" id="qual" name="ad-qual" Value={editingnurse.grade} onChange={(e) => { setGrade(e.target.value) }}>
                                                        <option>Add Grade</option>
                                                        <option>Grade1</option>
                                                        <option>Grade2</option>
                                                        <option>Grade3</option>   
                                                    </select>
                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-12 bg-transparent  pt-1 pb-1 d-sm-none d-md-block ">

                                                </div>
                                                <div className="row col-md-6 col-sm-12 text-muted bg-transparent  pt-1 pb-1 pr-2 d-flex justify-content-end">
                                                    <div className="row  p-1 ">
                                                        <div >
                                                            <button className="btn-primary " onClick={() => seteditingnurse('')}>Cancel</button>


                                                        </div>&nbsp;
                                                        <div className=" userTile-save-button-bar  ">

                                                            <button className='btn-primary ' onClick={editNurse}>Save</button>

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
    </>         
    )
}

export default ViewNurse
