import React from 'react';


function AcceptService() {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#f4765b', padding: '10% 5% ', color: 'white', height:'20vh' }}>
                <h1 className='roboto m-0' style={{fontWeight: 'normal', width: '90%', fontSize: '1.5rem', width: 'fit-content', height: 'fit-content'}}>You have successfully accepted the request.</h1>
            </div>
            <div className='acceptService'>
                {/* <p className='fw-medium'>Request No: 1234-5678-9002</p> */}
                <h5 className='fw-bold'>Customer Details</h5>
                <div className='row mt-3'>
                    <div className='col-6 p-0'>
                        <h6 className='fw-bold'>Name</h6>
                        <h6>Ajay Kumar</h6>
                    </div>
                    <div className='col-6 p-0'>
                        <h6  className='fw-bold'>Contact</h6>
                        <h6>+91 9346072205</h6>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-6 p-0'>
                        <h6 className='fw-bold'>Address</h6>
                        <h6>14-3, Fuckyard, New York, USA.</h6>
                    </div>
                </div>
                <div className='otp mt-3'>
                <h6 className='fw-bold mb-3'>Enter OTP</h6>
                    <div className='inputs d-flex'>
                        <input maxLength="1" id='input1' onChange={() => {document.getElementById('input2').focus()}} oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                        <input maxLength="1" id='input2' onChange={() => {document.getElementById('input3').focus()}} oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                        <input maxLength="1" id='input3' onChange={() => {document.getElementById('input4').focus()}} oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                        <input maxLength="1" id='input4' oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                    </div>
                </div>
                <div className='btnGroup'>
                    <button className='button cancelBtn'>Cancel Service</button>
                    <button className='button delayBtn'>Delay by 5 min</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AcceptService;