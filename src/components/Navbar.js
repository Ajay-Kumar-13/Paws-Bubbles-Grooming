import React, { useEffect, useState } from "react";

function Navbar() {
    const [online, setOnline] = useState(false);

    useEffect(() => {
        if(online) {
            document.getElementById('grayOut').style.display = 'none'
        } else {
            document.getElementById('grayOut').style.display = 'block'
        }
    }, [online])

    return (
        <React.Fragment>
            <div className="navbar">
                <div className="d-flex align-items-center">
                    <label class="switch">
                        <input type="checkbox" onClick={() => { setOnline(!online) }} />
                        <span class="slider round"></span>
                    </label>
                    {/* <div className={`status ${online && 'active'}`}></div> */}
                </div>
                <div className="d-flex justify-content-center p-2 title">
                    Paws and Bubbles
                </div>
                <div className="profile">
                    <div className="user d-flex align-items-center justify-content-center">
                        A
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="content">
                <div className="grayOut" id="grayOut">
                    <div className="container p-4">
                        <h1>Go Online to receive clients.</h1>
                        <p>Tap the above toogle button to go online..</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 p-0 raleWay d-flex align-items-center">
                        <div className="dashboardIcon">
                            <i class="fa-solid fa-coins fa-2x"></i>
                        </div>
                        <div className="iconText">
                            <p>Earnings</p>
                            <span className="caudex">500 $</span>
                        </div>
                    </div>

                    <div className="col-6 p-0 raleWay d-flex align-items-center justify-content-end">
                        <div className="dashboardIcon">
                            <i class="fa-solid fa-person-biking fa-2x"></i>
                        </div>
                        <div className="iconText">
                            <p>Trips</p>
                            <span className="caudex">500 $</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6 p-0 raleWay d-flex align-items-center">
                        <div className="dashboardIcon">
                            <i class="fa-solid fa-star fa-2x"></i>
                        </div>
                        <div className="iconText">
                            <p>Ratings</p>
                            <span className="caudex">500 $</span>
                        </div>
                    </div>
                    <div className="col-6 p-0 raleWay d-flex align-items-center justify-content-end">
                        <div className="dashboardIcon">
                            <i class="fa-solid fa-map-location-dot fa-2x"></i>
                        </div>
                        <div className="iconText">
                            <p>KM</p>
                            <span className="caudex">500 $</span>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 p-3 raleWay goals">
                    <p className="m-0">
                        Monthly Service Goals
                    </p>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Navbar;