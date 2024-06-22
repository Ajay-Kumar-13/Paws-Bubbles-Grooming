import React from "react";

function Taskbar() {
    return (
        <React.Fragment>
            <div className="taskbar">
                <hr style={{boxShadow: '1px -10px 20px 2px #000000'}}></hr>
                <div className="taskbar d-flex justify-content-around align-items-center">
                    <i class="fa-solid fa-house"></i>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Taskbar;