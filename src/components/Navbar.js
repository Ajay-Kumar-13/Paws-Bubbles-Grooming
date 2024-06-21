import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Navbar() {
    const [online, setOnline] = useState(false);

    useEffect(() => {
        if (online) {
            document.getElementById('grayOut').style.display = 'none'
        } else {
            document.getElementById('grayOut').style.display = 'block'
        }
    }, [online])

    const percentage = 66;
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
                    <p className="m-0 text-center">
                        Monthly Service Goals
                    </p>
                    <div className="d-flex justify-content-center mt-4 align-items-center">
                        <div className="d-flex justify-content-center align-items-center" style={{ width: 200, height: 200 }}>
                            <div style={{ position: 'absolute' }}>
                                <h1 className="m-0 fw-bold">66%</h1>
                            </div>
                            <CircularProgressbar
                                value={percentage}
                                // text={`${percentage}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'round',

                                    // Text size
                                    textSize: '16px',

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                    textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',

                                })}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-2 roboto d-flex">
                    <h4 className="fw-bold">Reviews</h4>
                    <input />
                </div>
                <div className="reviews">
                    <table class="table raleWay">
                        <thead>
                            <tr>
                                <th scope="col">Ord No</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ratings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Navbar;