import React, { useState } from 'react';
import './CreateRoomsContainer.css';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

const CreateRoomsContainer = () => {

    const navigate = useNavigate();

    const [roomNo, setRoomNo] = useState("");
    const [bedsCount, setBedsCount] = useState("");
    const [roomSize, setRoomSize] = useState("");
    const [rate, setRate] = useState("");
    const [AC, setAC] = useState("");

    const AddNewRoom = (e) => {

        e.preventDefault();

        const db = getFirestore();

        addDoc(collection(db, "rooms"), {
            roomNo: roomNo,
            bedsCount: bedsCount,
            roomSize: roomSize,
            rate: rate,
            AC: AC
        })
            .then(() => {

            })
            .catch((error) => {
                alert(error.message);
            })

        setRoomNo("");
        setBedsCount("");
        setRoomSize("");
        setRate("");
        setAC("");



        navigate('/rooms');
    }



    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-sm-12'>
                        <div className='title-c-s'>
                            <span>Add a New Room</span>
                        </div>
                        <div className='des-c-s'>
                            <span>Hospital room design has a significant impact on patient care and recovery outcomes. Patients rely on staff to respond to emergency situations quickly, check in on them frequently, and ensure a full recovery.</span>
                        </div>
                        <div className='container create-shop' style={{ maxWidth: '800px', padding: '0px' }}>
                            <form onSubmit={AddNewRoom} id="rooms">
                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols'>
                                        <span className='c-s-feilds'>Room Number: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <input className="form-control form-control-sm" type="text" placeholder="Type room number here..." id="roomNo" value={roomNo} onChange={(e) => { setRoomNo(e.target.value) }} required />
                                    </div>
                                </div>


                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols c-s-cols'>
                                        <span className='c-s-feilds'>Beds Count: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <input className="form-control form-control-sm" type="number" id="bedsCount" placeholder="Type bed count here..." value={bedsCount} onChange={(e) => { setBedsCount(e.target.value) }} required />
                                    </div>
                                </div>

                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols'>
                                        <span className='c-s-feilds'>Room Size: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <input className="form-control" type="text" id="roomSize" placeholder="Type room size here..." value={roomSize} onChange={(e) => { setRoomSize(e.target.value) }} required />
                                    </div>
                                </div>

                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols'>
                                        <span className='c-s-feilds'>Room Rate: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <input className="form-control" type="text" id="rate" placeholder="type room rate here..." value={rate} onChange={(e) => { setRate(e.target.value) }} required />
                                    </div>
                                </div>

                                <div className='row form-group c-s-row'>
                                    <div className='col-md-3 col-sm-12 c-s-cols'>
                                        <span className='c-s-feilds'>A/C: </span>
                                    </div>
                                    <div className='col-md-9 col-sm-12 c-s-cols'>
                                        <select className="form-control" id="AC" value={AC} onChange={(e) => { setAC(e.target.value) }} required>
                                            <option>Select A/C or Non A/C</option>
                                            <option>Non A/C</option>
                                            <option>A/C</option>
                                        </select>
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
