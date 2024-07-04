import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/dashboard')
    //     }, 3000)
    // }, [])
    return (
        <React.Fragment>
            <div className="banner lemon d-flex flex-column align-items-center justify-content-center">
                <div className="banner_title text-center">
                    Paws and Bubbles
                </div>
                <div className="text-white">Grooming services at your home.</div>
            </div>
        </React.Fragment>
    )
}

export default Banner