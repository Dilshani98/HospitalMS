import React, { useState, useEffect } from 'react';
import './RoomsContainer.css';
import {
    collection,
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc
} from 'firebase/firestore';
import { db } from '../../Components/Config/Config'
import { Link, useNavigate } from 'react-router-dom';

const CreateRoomsContainer = () => {

    const roomsCollectionRef = collection(db, "rooms");

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getRooms();

    }, []);

    const getRooms = async () => {
        const data = await getDocs(roomsCollectionRef);
        setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // console.log(rooms);
    };

    const deleteRooms = async (id) => {
        const roomsDoc = doc(db, "rooms", id);

        await deleteDoc(roomsDoc);
        window.location.reload(false);

    };



    return (
        <>
            <center><div className="room-ttl">Rooms Details</div></center>

            <div className='row'>
                <div className='col-md-6 col-sm-12' style={{ margin: "auto" }}>
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
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rooms.map((room) => {
                                    return (
                                        <tr>
                                            <td scope="row">{room.roomNo}</td>
                                            <td>{room.bedCount}</td>
                                            <td>{room.roomSize}</td>
                                            <td>{room.rate}</td>
                                            <td>{room.AC}</td>
                                            <td>   
                                                <button className='col c-s-btn'  style={{ paddingLeft: "0", marginLeft: "0", width: "60px" }}>Edit</button>
                                            </td>
                                            <td>
                                                <button
                                                    className='col c-s-btn'
                                                    onClick={() => deleteRooms(room.id)}
                                                    style={{ paddingLeft: "0", marginLeft: "0", width: "60px" }}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>


                </div>


            </div>
            <div className='row lst-rw'>
                <Link to="/addroom"><button className='col c-s-btn' style={{ width: "600px" }}>AddNewRoom</button></Link>
            </div>
        </>
    )
}

export default CreateRoomsContainer;
