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
import { NavLink } from "react-router-dom";
import {
  BiChevronRight,
  BiChevronsLeft,
  BiEdit,
  BiSortAlt2,
} from "react-icons/bi";

import {
  doc,
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  updateDoc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  // const [doctorId, setDoctorId] = useState([]);
  // const [doctorName, setDoctorName] = useState([]);

  useEffect(() => {
    const data = () => {
      onSnapshot(collection(getFirestore(), "appointments"), (snapshot) => {
        // realtime update
        setAppointments(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    };
    data();
  }, []);

  const handleUpdate = async (oldData, newData, resolve) => {
    await updateDoc(doc(getFirestore(), "appointments", newData.id), {
      date: oldData.date,
      doctorId: newData.doctorId,
      patientId: newData.patientId,
      payment: newData.payment,
    });
    resolve();
    console.log(new Date(oldData.date.seconds * 1000));
  };

  const handleDelete = async (oldData, resolve) => {
    console.log(oldData);
    const docRef = doc(getFirestore(), "appointments", oldData.id);
    await deleteDoc(docRef);
    resolve();
    console.log("succesfully delete");
  };

  return (
    <div>
      <div className="">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1
            className="h2"
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "30px",
              marginLeft: "10px",
            }}
          >
            Appointment DashBoard
          </h1>
          <div className="btn-toolbar mb-2 mb-md-0"></div>
        </div>

        <div className="container-fluid mt-4">
          <NavLink className="card-nav" to="/CreateAppointment">
            <div
              className="addCard"
              style={{
                width: "210px",
                height: "1px",
                marginBottom: "50px",
                paddingBottom: "30px",
                marginLeft: "10px",
                backgroundColor: "gray",
              }}
            >
              <div class="card l-bg-blue-dark border-0">
                <div class="card-statistic-3 p-1">
                  <div class="mb-4">
                    <h5
                      class="card-title mb-0"
                      style={{
                        fontFamily: "Trebuchet MS",
                        fontSize: "15px",
                        padding: "10px",
                      }}
                    >
                      Create New Appointment
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

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
              {
                title: "appointmentId",
                field: "appointmentId",
                editable: "never",
              },
              {
                title: "date",
                field: "date",
                render: (rowData) => (
                  <span className="">
                    {rowData.date}
                    {/* {(new Date(rowData.date*1000).toUTCString())}
                   {console.log(new Date(rowData.date*1000).toUTCString())} */}
                    {/* {console.log(rowData.date)} */}
                  </span>
                ),
              },
              {
                title: "payment",
                field: "payment",
                render: (rowData) => (
                  <span className="">{rowData.payment}</span>
                ),
              },
              {
                title: "Doctor's Name",
                field: "doctorId",

                sorting: false,

                render: (rowData) => (
                  <span>
                    {console.log(rowData.doctorId)}
                    {rowData.doctorId}
                  </span>
                ),
              },
              {
                title: "patient's Name",
                field: "patientId",
                searchable: false,
                sorting: false,
                render: (rowData) => (
                  <span>
                    {rowData.patientId}
                    {console.log(rowData.patientId)}
                  </span>
                ),
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
              selection: false,
            }}
            title=""
            actions={[]}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    handleUpdate(oldData, newData, resolve);
                  }, 1000);
                }),

              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    handleDelete(oldData, resolve);
                  }, 1000);
                }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
