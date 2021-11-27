import React from 'react'
import { FaStethoscope, FaUserNurse } from 'react-icons/fa'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


const AllDocors = () => {
    return (
        <div className="container ">
            <h1 className="display-3 text-center"><FaStethoscope />Doctors</h1>
            <hr />
            <div class="d-flex flex-row-reverse">
                <NavLink to="/new-doctor">
                    <button type="button" class="btn btn-primary float-right"><BsFillPlusCircleFill /> Add New Doctor</button>
                </NavLink>
            </div>
        </div>
    )
}

export default AllDocors
