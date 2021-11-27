import React, { useState } from 'react';
import './RoomsContainer.css';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Link, useHistory } from 'react-router-dom';

const CreateRoomsContainer = () => {

    return (
        <>
            <center><div className="room-ttl">Rooms Details</div></center>

            <div className='row'>
                <div className='col-md-6 col-sm-12' style={{margin:"auto"}}>
                    <img src="https://wallpaperaccess.com/full/7176781.jpg" className='img-room' alt="room" width="550px" /><br />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <div className='row form-group c-s-row' style={{ marginTop: "50px", width: "600px" }}>
                        <table className="table room-tbl">
                            <thead>
                                <tr>
                                    <th scope="col">Room Number</th>
                                    <th scope="col">Bed Count</th>
                                    <th scope="col">Room Size</th>
                                    <th scope="col">Room Rate</th>
                                    <th scope="col">A/C</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px"}}>Edit</button></td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px" }}>Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px"}}>Edit</button></td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px" }}>Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px"}}>Edit</button></td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px" }}>Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px"}}>Edit</button></td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px" }}>Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px"}}>Edit</button></td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px" }}>Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px"}}>Edit</button></td>
                                    <td><button className='col c-s-btn' style={{ paddingLeft:"0" , marginLeft:"0" , width:"60px" }}>Delete</button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </div>


            </div>
            <div className='row lst-rw'>
                <button className='col c-s-btn'>AddNewRoom</button>
            </div>
        </>
    )
}

export default CreateRoomsContainer;
