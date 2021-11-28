import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import {
    FaCheck,
    FaFileExport,
    FaPlus,
    FaRegTrashAlt,
    FaSearch,
    FaTimes,
  } from "react-icons/fa";
  
  import {
    BiChevronRight,
    BiChevronsLeft,
    BiEdit,
    BiSortAlt2,
  } from "react-icons/bi";
  import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import config from "../../Components/Config/Config";
  import {
    setDoc,
    doc,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    DocumentData,
    deleteDoc,
    updateDoc,
  } from "firebase/firestore";

 const Appointment=() =>{


    firebase.initializeApp(config);

    const [appointments, setAppointments] = useState([]);
  

    useEffect(() => {
        
      const data = () => {
        // const querySnapshot = await getDocs(collection(getFirestore(), "shops"));  // need to reload the page
        // setShops(querySnapshot.docs.map((doc) => doc.data()));
  
        onSnapshot(collection(getFirestore(), "appointments"), (snapshot) => {
          // realtime update
          setAppointments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
      };
      data();
      console.log(appointments);
      console.log((appointments.data.seconds * 1000).toLocaleDateString("en-US"))
    }, []);



    const handleUpdate = async (oldData, newData, resolve) => {
        await updateDoc(doc(getFirestore(), "appointments", newData.id), {
          
          date: oldData.date,
          doctorId: newData.doctorId,
          patientId: newData.patientId,
          payment:newData.payment,
        });
        resolve();
        console.log(newData);
      }
    

    return (
        <div>
      <div className="">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Appointments</h1>
          <div className="btn-toolbar mb-2 mb-md-0"></div>
        </div>

        <div className="container-fluid mt-4">
          {/* <button
            type="button"
            className="btn btn-dark"
            onClick={() => alert("clickes")}
          >
            Dark
          </button> */}

          <MaterialTable
            icons={{
              Filter: forwardRef((props, ref) => <FaSearch />),
              Search: forwardRef((props, ref) => <FaSearch />),
              SortArrow: forwardRef((props, ref) => <BiSortAlt2 />),
              Clear: forwardRef((props, ref) => <FaTimes />),
              Export: forwardRef((props, ref) => <FaFileExport />),
              FirstPage: forwardRef((props, ref) => (
                <h1 style={{ fontSize: "15px" }}>First Page</h1>
              )),
              LastPage: forwardRef((props, ref) => (
                <h1 style={{ fontSize: "15px" }}>Last Page</h1>
              )),
              NextPage: forwardRef((props, ref) => <BiChevronRight />),
              PreviousPage: forwardRef((props, ref) => <BiChevronsLeft />),
              ResetSearch: forwardRef((props, ref) => (
                <h1 style={{ fontSize: "15px" }}>Clear</h1>
              )),
              Edit: forwardRef((props, ref) => <BiEdit />),
              Check: forwardRef((props, ref) => <FaCheck />),
              Delete: forwardRef((props, ref) => <FaRegTrashAlt />),
              Add: forwardRef((props, ref) => <FaPlus />),
            }}
            columns={[
              { title: "appointmentId", field: "id" },
              { title: "date", field: "date" ,
              
            },
              { title: "payment", field: "payment" },
              {
                title: "doctorId",
                field: "doctorId",
                editable: "never",
                sorting: false,
                // render: (rowData) => (
                //   <span
                //     className="badge rounded-pill"
                //     style={{ backgroundColor: roleType(rowData.status) }}
                //   >
                //     {rowData.status}
                //   </span>
                // ),
              },
              {
                title: "patientId",
                field: "patientId",
                editable: "never",
                searchable: false,
                sorting: false,
                // render: (rowData) =>
                //   rowData && (
                //     <div
                //       className="form-check form-switch"
                //       style={{ margin: "auto" }}
                //     >
                //       <input
                //         className="form-check-input"
                //         type="checkbox"
                //         role="switch"
                //         id="flexSwitchCheckDefault"
                //         checked={rowData.status == "active" ? true : false}
                //         onChange={() => HandleBlocked(rowData)}
                //       />
                //     </div>
                //   ),
              },
              // {
              //   title: "Doğum Yeri",
              //   field: "birthCity",
              //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
              // },
            ]}
            data={appointments}
            options={{
              sorting: true,
              filtering: true,
              actionsColumnIndex: -1,
              selection: true,
            }}
            title="Demo Title"
            actions={[]}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    handleUpdate(oldData, newData, resolve);
                  }, 1000);
                }),

            //   onRowDelete: (oldData) =>
            //     new Promise((resolve) => {
            //       setTimeout(() => {
            //         handleDelete(oldData, resolve);
            //       }, 1000);
            //     }),

            //   onRowAdd: (newData) =>
            //     new Promise((resolve) => {
            //       setTimeout(() => {
            //         AddUser(newData, resolve);
            //       }, 1000);
            //     }),
            }}
          />
        </div>
      </div>
    </div>
    )
}


export default Appointment;