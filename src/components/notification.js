import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { currentNotification } from "./redux/user/userActions";
import {useNavigate} from 'react-router-dom';

function Notification(props) {

    const navigate = useNavigate();

    const handleOptions = async () => {
        if (props.id == props.currentNotification) {
            await props.dispatchCurrentNotification('')
        } else {
            await props.dispatchCurrentNotification(props.id);
        }
        
    }
    const handleAccept = () => {
        navigate('/acceptService')
    }

    const handleDecline = () => {
        console.log("rejected");
    }

    useEffect(() => {
        if(props.currentNotification == props.id) {
            document.getElementById(props.id).style.height = '120px'
            document.getElementById(props.id).style.opacity = 1;
        } else {
            document.getElementById(props.id).style.height = '0px'
            document.getElementById(props.id).style.opacity = 0;
        }
    })
    return (
        <React.Fragment>
            <div className={`${props.active ? 'notification active align-items-center roboto' : 'notification align-items-center roboto'}`}>
                {/* <div className="dot"></div> */}
                <div className="d-flex justify-content-between">
                    <p>View Notification  <div className="view" onClick={handleOptions}><i class="fa-solid fa-chevron-down"></i></div></p>
                    <div className="d-flex align-items-end flex-column">
                        <p className="m-0">{props.time}</p>
                        {props.expired && <div className="expired">Expired</div>}
                    </div>
                </div>

                <div className="service" id={props.id}>
                    <p>Service: Bathing</p>
                    <p>Location: KPHB Road</p>
                    <div className="d-flex">
                        <button className="roboto fw-bold" style={{ backgroundColor: '#cbda75' }} onClick={handleAccept} disabled={props.expired}>Accept <i class="fa-solid fa-check"></i></button>
                        <button className="roboto fw-bold" style={{ backgroundColor: '#fbd978' }} onClick={handleDecline} disabled={props.expired}>Decline <i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>



            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        currentNotification:  state.currentNotification
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchCurrentNotification: (id) => dispatch(currentNotification(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);