import React from 'react'

const NewDoctor = () => {
    return (
        <div className="container">
            <h1 className="display-5 text-center">Add a New Doctor</h1>
            <hr />
            <form>
                <div class="form-group">
                    <label >First Name</label>
                    <input type="text" class="form-control" id="exampleFirstName" placeholder="Enter First Name" />

                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" id="exampleLatName" placeholder="Enter Last Name" />

                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" id="examplePhone" placeholder="Enter Phone Number" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewDoctor
