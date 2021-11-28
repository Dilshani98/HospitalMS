import React from 'react'
import { HiDocumentReport } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import reportimg from '../../assets/img/report.jpg'
import { BsFillPlusCircleFill } from 'react-icons/bs'




const Reports = () => {

    return (
        <>
            <div className="container ">
                <h1 className="display-3 text-center"><HiDocumentReport />Medical Reports</h1>
                <hr />
                <div className='row row-md-3'>
                    <div className='col-md-6 col-sm-12' style={{ margin: "auto" }}>
                        <img src={reportimg} />
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div class="d-flex justify-content-between">
                            <NavLink to="/new-report">
                                <button type="button" class="btn btn-info  btn-lg"><BsFillPlusCircleFill /> Add New Medical Report</button>
                            </NavLink>
                            <br></br><br></br><br></br>
                        </div>

                        <div class="d-flex justify-content-between">
                            <NavLink to="/find-report">
                                <button type="button" class="btn btn-info btn-lg"><BsSearch /> Find a Medical Report</button>
                            </NavLink>
                            <br></br><br></br><br></br>
                        </div>


                    </div>

                </div>



            </div>

        </>

    );
}

export default Reports;