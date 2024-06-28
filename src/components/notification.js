import React, { useState } from "react";

function Notification(props) {
    const [showOptions, setShowOptions] = useState(false);
    const handleOptions = () => {
        setShowOptions(!showOptions)
    }
    const handleAccept = () => {
        console.log("accepted");
    }

    const handleDecline = () => {
        console.log("rejected");
    }
    return (
        <React.Fragment>
            <div className={`${props.active ? 'notification active align-items-center roboto' : 'notification align-items-center roboto'}`} onClick={handleOptions}>
                {/* <div className="dot"></div> */}
                <div className="d-flex justify-content-between">
                    <p>View Notification</p>
                    <div className="d-flex align-items-end flex-column">
                        <p className="m-0">{props.time}</p>
                        {props.expired && <div className="expired">Expired</div>}
                    </div>
                </div>
                {
                    showOptions

                    &&
                    <div>
                        <p>Service: Bathing</p>
                        <p>Location: KPHB Road</p>
                        <div className="btnGroup d-flex">
                            <button className="roboto fw-bold" style={{ backgroundColor: '#cbda75' }} onClick={handleAccept} disabled={props.expired}>Accept <i class="fa-solid fa-check"></i></button>
                            <button className="roboto fw-bold" style={{ backgroundColor: '#fbd978' }} onClick={handleDecline} disabled={props.expired}>Decline <i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>

                }

            </div>
        </React.Fragment>
    )
}

export default Notification;