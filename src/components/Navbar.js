import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./changeProgressProvider";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { onlineStatus } from "./redux/user/userActions";


function Navbar(props) {
    const [offline, setOffline] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(props.offline);
        if (props.offline) {
            navigate('/offline')
        } else {
            document.getElementById("power").checked = true;
        }
    }, [])

    const goOnline = async () => {
        await props.onlineStatus();
        setOffline(true);
        navigate('/offline')
    }

    const percentage = 66;

    return (
        <React.Fragment>
            <div className="navbar">
                <div className="d-flex align-items-center">
                    <label class="switch">
                        <input type="checkbox" id="power" onClick={goOnline} />
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
            <div className="p-3 text-center roboto">
                <i class="fa-solid fa-location-dot" style={{marginRight: '5px', color: '#d97a0f'}}></i>
                Visakhapatnam
            </div>
            <hr></hr>

            <div className="content">
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

                <div className="container d-flex mt-4 raleWay goals">
                    <div className="w-50 p-2">
                        <ChangingProgressProvider values={[0, 90]}>
                            {(percentage) => (
                                <CircularProgressbar  strokeWidth={8} value={percentage} styles={buildStyles({ textColor: 'white', pathTransitionDuration: 1 })} text={`${percentage}%`} />
                            )}
                        </ChangingProgressProvider>
                        <div className="identifiers mt-2">
                            <span style={{ backgroundColor: '#3e98c7' }}></span>
                            Online
                        </div>
                        <div className="identifiers">
                            <span style={{ backgroundColor: `#d6d6d6` }}></span>
                            Cash
                        </div>
                    </div>
                    <div className="w-50 p-2">
                        <ChangingProgressProvider values={[0, 66]}>
                            {(percentage) => (
                                <CircularProgressbar strokeWidth={50} styles={buildStyles({ strokeLinecap: 'butt', textColor: '#d97a0f',  pathTransitionDuration: 1 })} value={percentage} text={`${percentage}%`} />
                            )}
                        </ChangingProgressProvider>

                        <div className="mt-2">
                            You have done {percentage}% service out of 100% in this month.
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

const mapStateToProps = (state) => {
    return {
        offline: state.offline
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onlineStatus: () => dispatch(onlineStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);