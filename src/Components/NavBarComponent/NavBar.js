import React from 'react'

const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a class="navbar-brand" href="#">Hospital Mangement System</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Patients</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Doctors</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nurses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Appointements</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Reports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rooms</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
