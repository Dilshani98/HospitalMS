import React, { useState } from 'react';
import './RoomsContainer.css';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Link, useHistory } from 'react-router-dom';

const CreateRoomsContainer = () => {

    return (
        <>
           <div className="room-ttl">Rooms Details</div>
            <div className='row'>
                <div className='col-md-6 col-sm-12' >
                    <img src="https://wallpaperaccess.com/full/7176781.jpg" className='img-room' alt="room" width="750px" /><br />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <div className='row form-group c-s-row' style={{ marginTop: "100px", width:"700px" }}>
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
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">512A</th>
                                    <td>5</td>
                                    <td>100 x 100</td>
                                    <td>4/5</td>
                                    <td>yes</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CreateRoomsContainer;
