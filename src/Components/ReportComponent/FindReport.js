import React, { useState, useEffect } from 'react'
import { doc, collection, getDocs, onSnapshot, deleteDoc, updateDoc, getFirestore, } from 'firebase/firestore';
import { forwardRef } from "react";
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


import MaterialTable from "material-table";
import { NavLink } from 'react-router-dom'

const FindReport = () => {

    const [reports, setreports] = useState([]);

    useEffect(() => {
        const data = () => {
            onSnapshot(collection(getFirestore(), "reports"), (snapshot) => {
                // realtime update
                setreports(
                    snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
            });
        };
        data();
    }, []);


    const handleDelete = async (oldData, resolve) => {
        console.log(oldData);
        const docRef = doc(getFirestore(), "reports", oldData.id);
        await deleteDoc(docRef);
        resolve();
        console.log("succesfully delete");
    };


    return (
        <>
            <div className="container">
                <h1 className="display-5 text-center">Find Medical Reports</h1>
                <br />
                <hr />
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
                            title: "Report Id",
                            field: "reportId",
                            editable: "never",
                        },
                        {
                            title: "Report Name",
                            field: "reportName",
                            render: (rowData) => (
                                <span className="">
                                    {rowData.reportName}
                                    {/* {(new Date(rowData.date*1000).toUTCString())}
                   {console.log(new Date(rowData.date*1000).toUTCString())} */}
                                    {/* {console.log(rowData.date)} */}
                                </span>
                            ),
                        },
                        {
                            title: "Rate",
                            field: "rate",
                            render: (rowData) => (
                                <span className="">{rowData.rate}</span>
                            ),
                        },
                        {
                            title: "Doctor's Name",
                            field: "doctorName",

                            sorting: false,

                            render: (rowData) => (
                                <span>
                                    {rowData.doctorName}
                                    {console.log(rowData.doctorName)}
                                </span>
                            ),
                        },
                        {
                            title: "Patient's Name",
                            field: "patientName",
                            searchable: false,
                            sorting: false,
                            render: (rowData) => (
                                <span>
                                    {rowData.patientName}
                                </span>
                            ),
                        },
                        {
                            title: "Description",
                            field: "description",
                            searchable: false,
                            sorting: false,
                            render: (rowData) => (
                                <span>
                                    {rowData.description}
                                </span>
                            ),
                        },
                        // {
                        //   title: "Doğum Yeri",
                        //   field: "birthCity",
                        //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
                        // },
                    ]}
                    data={reports}
                    options={{
                        sorting: true,
                        filtering: true,
                        actionsColumnIndex: -1,
                        selection: false,
                    }}
                    title=""
                    actions={[]}
                    editable={{
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    handleDelete(oldData, resolve);
                                }, 1000);
                            }),
                    }}
                />


            </div>

        </>


    );
}

export default FindReport;
