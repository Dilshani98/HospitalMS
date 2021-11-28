import React from 'react'
import './HomePage.css'
import { BsFillBookmarkFill, BsPeopleFill } from 'react-icons/bs'
import { FaStethoscope, FaUserNurse } from 'react-icons/fa'
import { MdBedroomChild } from 'react-icons/md'
import { HiDocumentReport } from 'react-icons/hi'




const HomePage = () => {
    return (
        <div className="container px-0">

            <div class="col-md-10 pt-5">
                <div class="row ">
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-cherry border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><BsFillBookmarkFill /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Appointements</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            3,243
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-blue-dark border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><FaStethoscope /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Doctors</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            15.07k
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-green-dark border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><FaUserNurse /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Nurses</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            578
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-orange-dark border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><BsPeopleFill /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Patients</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            $11.61k
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-new1-dark border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><MdBedroomChild /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Rooms</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            578
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-new2-dark border-0">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas"><HiDocumentReport /></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Reports</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            578
                                        </h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
