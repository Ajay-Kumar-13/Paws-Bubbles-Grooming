import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function Taskbar(props) {

    const [currentTab, setCurrentTab] = useState('home');

    const navigate = useNavigate();

    useEffect(() => {
        if(props.tab) {
            setCurrentTab(props.tab)
        } else {
            setCurrentTab('home')
        }
        
    }, [])

    const handleTaskbar = (tab) => {
        setCurrentTab(tab);
        if(tab == 'home') {
            navigate('/')
        } else if (tab == 'transactions') {
            navigate('/transactions')
        } else if (tab == 'notifications') {
            navigate('notifications')
        } else if (tab == 'profile') {
            navigate('profile')
        }
        

    }

    return (
        <React.Fragment>
            <div className="taskbar">
                {/* <hr style={{ boxShadow: '1px -10px 20px 2px #000000' }}></hr> */}
                <div className="taskbar d-flex justify-content-around align-items-center">
                    <div className={`icon ${currentTab === 'home' || 'home' === props?.tab ? 'active' : ''}`} onClick={() => {handleTaskbar('home')}}>
                        <i className={`fa-solid fa-house`}></i>
                    </div>
                    <div className={`icon ${currentTab === 'transactions' || 'transactions' === props?.tab ? 'active' : ''}`} onClick={() => {handleTaskbar('transactions')}}>
                        <i className={`fa-solid fa-indian-rupee-sign`}></i>
                    </div>
                    <div className={`icon ${currentTab === 'notifications' || 'notifications' === props?.tab ? 'active' : ''}`} onClick={() => {handleTaskbar('notifications')}}>
                        <i className={`fa-solid fa-bell`}></i>
                    </div>
                    <div className={`icon ${currentTab === 'profile' || 'profile' === props?.tab ? 'active' : ''}`} onClick={() => {handleTaskbar('profile')}}>
                        <i className={`fa-solid fa-user`}></i>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Taskbar;