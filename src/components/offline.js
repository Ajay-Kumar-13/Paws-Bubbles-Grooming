import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import {connect} from 'react-redux';
import { onlineStatus } from "./redux/user/userActions";

function Offine(props) {
    
    const navigate = useNavigate();
    
    const goOnline = async () => {
        await props.onlineStatus();
        navigate('/dashboard')
    }

    return (
        <React.Fragment>
            <div className="navbar">
                <div className="d-flex align-items-center">
                    <label class="switch">
                        <input type="checkbox" onClick={goOnline} />
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
            <div className="grayOut" id="grayOut">
                <div className="container p-4">
                    <h1>Go Online to receive clients.</h1>
                    <p>Tap the above toogle button to go online..</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Offine);