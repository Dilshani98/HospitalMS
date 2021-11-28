import React, { useState, useEffect } from 'react';
import './RoomsContainer.css';
import { FaBed } from 'react-icons/fa';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    setDoc
} from 'firebase/firestore';
import { db } from '../../Components/Config/Config'
import { Link, useNavigate } from 'react-router-dom';

const CreateRoomsContainer = () => {

    const roomsCollectionRef = collection(db, "rooms");

    const [rooms, setRooms] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [editingRoom, setEditingRoom] = useState('');

    const [roomNo, setRoomNo] = useState("");
    const [bedsCount, setBedsCount] = useState(0);
    const [roomSize, setRoomSize] = useState("");
    const [rate, setRate] = useState("");
    const [AC, setAC] = useState("");
    const [editingRoomId, setEditingRoomId] = useState("")


    const editRoom = (room) => {
        console.log(room);
        setEditingRoom(room);
        setRoomNo(room.roomNo);
        setBedsCount(room.bedsCount);
        setRoomSize(room.roomSize);
        setRate(room.rate);
        setAC(room.AC);
        setEditingRoomId(room.id)
    }


    useEffect(() => {
        getRooms();

    }, [refresh]);

    const getRooms = async () => {
        const data = await getDocs(roomsCollectionRef);
        setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // console.log(rooms);
    };

    const deleteRooms = async (id) => {
        const roomsDoc = doc(db, "rooms", id);

        await deleteDoc(roomsDoc);
        setRefresh(!refresh);
    };

    const editSave = async (e) => {
        e.preventDefault();

        await setDoc(doc(db, "rooms", editingRoomId), {
            roomNo: roomNo,
            bedsCount: bedsCount,
            roomSize: roomSize,
            rate: rate,
            AC: AC
        });

        setRefresh(!refresh);
    };



    return (
        <>
            <center><div className="room-ttl"><FaBed style={{marginRight:"20px"}}/>Details of Rooms</div></center>

            <div className='row'>
                <div className='col-md-6 col-sm-12' style={{ margin: "auto" }}>
                    <img src="https://wallpaperaccess.com/full/7176781.jpg" className='img-room' alt="room" width="550px" style={{marginLeft:"60px"}}/><br />
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

                            {rooms.map((room) => {
                                return (
                                    <tbody key={room.id}>
                                        <tr>
                                            <td scope="row">{room.roomNo}</td>
                                            <td>{room.bedsCount}</td>
                                            <td>{room.roomSize}</td>
                                            <td>{room.rate}</td>
                                            <td>{room.AC}</td>
                                            <td>
                                                <button
                                                    className='col c-s-btn'
                                                    onClick={() => editRoom(room)}
                                                    style={{ paddingLeft: "0", marginLeft: "0", width: "60px" }}>
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className='col c-s-btn'
                                                    onClick={() => deleteRooms(room.id)}
                                                    style={{ paddingLeft: "0", marginLeft: "0", width: "60px" }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>

                                        {(editingRoom === room) &&
                                            <tr>
                                                <td scope="row">
                                                    <input
                                                        type="text"
                                                        id="roomNo"
                                                        value={roomNo}
                                                        onChange={(e) => { setRoomNo(e.target.value) }}
                                                        style={{ width: "80px" }} required />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        id="bedsCount"
                                                        value={bedsCount}
                                                        onChange={(e) => { setBedsCount(e.target.value) }}
                                                        style={{ width: "80px" }} required />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        id="roomSize"
                                                        value={roomSize}
                                                        onChange={(e) => { setRoomSize(e.target.value) }}
                                                        style={{ width: "80px" }} required />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        id="rate"
                                                        value={rate}
                                                        onChange={(e) => { setRate(e.target.value) }}
                                                        style={{ width: "80px" }} required /></td>
                                                <td>
                                                    <select
                                                        id="AC"
                                                        value={AC}
                                                        onChange={(e) => { setAC(e.target.value) }}
                                                        style={{ width: "80px" }} required>
                                                        <option>Select A/C or Non A/C</option>
                                                        <option>Non A/C</option>
                                                        <option>A/C</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button className='c-s-btn' style={{ margin: 0, backgroundColor: "#25523b" }} onClick={editSave}>save</button>
                                                </td>
                                                <td>
                                                    <button className='c-s-btn' style={{ margin: 0, backgroundColor: "#8e1600" }} onClick={() => setEditingRoom('')}>cancel</button>
                                                </td>
                                            </tr>}



                                    </tbody>
                                );
                            })}

                        </table>
                    </div>


                </div>


            </div>
            <div className='row lst-rw' style={{ textAlign: "center" }}>
                <Link to="/addroom"><button className='col c-s-btn' >AddNewRoom</button></Link>
            </div>
        </>
    )
}

export default CreateRoomsContainer;
