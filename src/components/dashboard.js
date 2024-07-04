import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Taskbar from "./taskbar";

function Dashboard() {
    return (
        <React.Fragment>
            <Navbar />
            <Taskbar />
        </React.Fragment>
    )
}

export default Dashboard;