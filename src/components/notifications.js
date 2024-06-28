import React, { useState } from "react";
import Taskbar from "./taskbar";
import animationData from '../lotties/doggy.json';
import Lottie from 'react-lottie';
import Notification from "./notification";

function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const [temp, setTemp] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    setTimeout(() => {
        setTemp(true)
    }, 3000)

    return (
        <React.Fragment>
            <div className="notifications">
                <div className='greetings roboto d-flex align-items-center'>
                    <div className="profile" style={{ width: 'fit-content' }}>
                        <div className="user d-flex align-items-center justify-content-center" style={{boxShadow: 'none'}}>
                            A
                        </div>
                    </div>
                    <div className='mx-2'>
                        <p className='m-0' style={{ fontSize: '10px' }}>Good Morning</p>
                        <h6 className='m-0'>Ajay kumar</h6>
                    </div>
                </div>
                {
                    temp

                        ?
                        <div className="notificationsSpace">
                            <Notification active={true} time={'2:40 PM'} expired={false}/>
                            <Notification active={false} time={'9:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                            <Notification active={false} time={'11:40 AM'} expired={true}/>
                        </div>
                        :

                        <div className="roboto d-flex align-items-center justify-content-center h-100 flex-column notificationsSpace">
                            <h1 className="text-center">Currently, You have no notifications.</h1>
                            <Lottie
                                options={defaultOptions}
                                height={100}
                                width={150}
                            />
                        </div>
                }
            </div>
            <Taskbar tab='notifications' />
        </React.Fragment>
    )
}

export default Notifications;