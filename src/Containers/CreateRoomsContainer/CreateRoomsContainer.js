import React, { useState } from 'react';
import './CreateRoomsContainer.css';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Link, useHistory } from 'react-router-dom';

const CreateRoomsContainer = () => {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>

                    </div>
                    <div className='col-md-8 col-sm-12'>
                        <div className='title-c-s'>
                            <span>Add a New Room</span>
                        </div>
                        <div className='des-c-s'>
                            <span>Hospital room design has a significant impact on patient care and recovery outcomes. Patients rely on staff to respond to emergency situations quickly, check in on them frequently, and ensure a full recovery.</span>
                        </div>
                        <div className='container create-shop' style={{ maxWidth: '800px', padding: '0px' }}>
                            <form>
                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols'>
                                        <span className='c-s-feilds'>Room Number: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <input className="form-control form-control-sm" type="text" placeholder="Type room number here..." id="roomNo" required />
                                    </div>
                                </div>


                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols c-s-cols'>
                                        <span className='c-s-feilds'>Beds Count: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <input className="form-control form-control-sm" type="number" id="bedsCount" placeholder="Type bed count here..." required />
                                    </div>
                                </div>

                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols'>
                                        <span className='c-s-feilds'>Room Size: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <input className="form-control" type="text" id="roomSize" placeholder="Type room size here..." required />
                                    </div>
                                </div>

                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols'>
                                        <span className='c-s-feilds'>Room Rate: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <input className="form-control" type="text" id="rate" placeholder="type room rate here..." required />
                                    </div>
                                </div>

                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols'>
                                        <span className='c-s-feilds'>A/C: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        {/* <input className="form-control" type="text" id="A/C" required /> */}
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="A/C1"/>
                                            <label class="form-check-label" for="A/C1">
                                                A/C
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="A/C2" checked />
                                            <label class="form-check-label" for="A/C2">
                                                Non A/C
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row lst-rw'>
                                    <button className='col c-s-btn' style={{ width: "800px" }}>AddNewRoom</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateRoomsContainer;
