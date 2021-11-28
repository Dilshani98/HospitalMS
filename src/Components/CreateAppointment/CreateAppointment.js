import React, { useState, useEffect } from "react";
import "./CreateAppointment.css";
import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  addDoc,
  getDocs
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";

const CreateRoomsContainer = () => {
  

  const [Patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [payment, setPayment] = useState(0);
  const [date, setDate] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const [doctorList, setDoctorList] = useState([]);

  const [patientList, setPatientList] = useState([]);

  const AddAppointments = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(getFirestore(), "appointments"), {
      patientId: Patient,
      payment: payment,
      doctorId: doctor,
      date:date
    });
    await setDoc(doc(getFirestore(), "appointments", docRef.id), {
      appointmentId:docRef.id,
      doctorId:doctor ,
      patientId:Patient ,
      payment:payment,
      date:date
    });
    console.log(Patient);
    console.log(doctor);
    setsubmitted(!submitted);
  };

  useEffect(() => {
    const Patientdata = async() => {

    

      const querySnapshot = await getDocs(collection(getFirestore(), "patients"));  // need to reload the page
      setPatientList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    //   onSnapshot(collection(getFirestore(), "patients"), (snapshot) => {
    //     // realtime update
    //     setPatientList(
    //       snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //     );
    //   });
    };
    Patientdata();
    console.log(patientList)
  }, []);


  useEffect(() => {
    const docdata = async() => {
      const querySnapshot = await getDocs(collection(getFirestore(), "doctors"));  
      setDoctorList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    //   onSnapshot(collection(getFirestore(), "doctors"), (snapshot) => {
    //     // realtime update
    //     setDoctorList(
    //       snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //     );
    //   });
    };
    docdata();
  }, []);

  return (
    <div className="container">
      <h1 className="display-5 text-center">Add a New Appointment</h1>
      {submitted && (
        <div class="alert alert-primary" role="alert">
          The details of the new Appointment were added successfully!.
        </div>
      )}
      <form>
        <div class="form-group pb-4">
          <label>Patient Name:</label>
          <select
            class="form-control"
            
            onChange={(e) => setPatient(e.target.value)}
          >
            {patientList.map((patientItem) => {
              return (
                <option key={patientItem.id} value={patientItem.id}>
                  {patientItem.firstName}
                </option>
              );
            })}
          </select>
        </div>

        <div class="form-group pb-4">
          <label>Doctor Name:</label>
          <select
            class="form-control"
            
            onChange={(e) => setDoctor(e.target.value)}
          >
            {doctorList.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.firstName}
                </option>
              );
            })}
          </select>
        </div>
        
        <div class="form-group pb-4">
          <label>Date:</label>
          <input
            className="form-control form-control-sm"
            type="date"
            placeholder="2"
            id="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>

        <div class="form-group pb-4">
          <label>Full Payment:</label>
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Enter Full Payment here..."
            id="payment"
            value={payment}
            onChange={(e) => {
              setPayment(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={AddAppointments}>Submit</button>
      </form>
      <br />
    </div>
  );
};

export default CreateRoomsContainer;
