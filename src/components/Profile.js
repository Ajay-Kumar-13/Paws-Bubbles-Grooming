import React from 'react';
import Taskbar from './taskbar';

function Profile() {
    return (
        <React.Fragment>
            <div  style={{ backgroundColor: '#faeada', height: '100vh', overflow: 'scroll' }}>
                <div className='greetings roboto d-flex align-items-center'>
                    <div className="profile" style={{ width: 'fit-content' }}>
                        <div className="user d-flex align-items-center justify-content-center" style={{ boxShadow: 'none' }}>
                            A
                        </div>
                    </div>
                    <div className='mx-2'>
                        <p className='m-0' style={{ fontSize: '10px' }}>Good Morning</p>
                        <h6 className='m-0'>Ajay kumar</h6>
                    </div>
                </div>
                <div className='p-3'>
                    <div className='roboto'>
                        <input type='checkbox' id='online24-7'></input>
                        <label for='online24-7' className='fw-medium' style={{ marginLeft: '8px' }}>Mark as online 24/7</label>
                    </div>
                    <div className='accountDetails mt-3'>
                        <div className='d-flex justify-content-between roboto'>
                            <div className='fw-medium fs-3'>
                                Account Details
                            </div>
                            <button className='btn btn-outline-dark py-1'>Update</button>
                        </div>
                        <form className='mt-2'>
                            <div class="row roboto">
                                <div class="col" style={{ paddingRight: '5px', paddingLeft: '0' }}>
                                    <label for="accountNumber">Account Number</label>
                                    <input type="text" class="form-control" id='accountNumber' placeholder="Account Number" value='345323485234' disabled />
                                </div>
                                <div class="col" style={{ paddingLeft: '5px', paddingRight: '0' }}>
                                    <label for="ifscCode">IFSC Code</label>
                                    <input type="text" id='ifscCode' class="form-control" placeholder="IFSC Code" value='XHASN2345' disabled />
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className='insurance mt-4 roboto'>
                        <div className='p-3 d-flex'>
                            <img src='/assests/Images/insurance.png' />
                            <div className='fw-bold text-white' style={{ marginLeft: '10px' }}>
                                Claim Insurance For Your Machine
                            </div>
                        </div>
                        <div className='conditions mt-2 px-2' >
                            <ul className='text-white'>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                                <li>incididunt ut labore et dolore magna aliqua.</li>
                                <li>Nec ultrices dui sapien eget mi proin sed libero enim.</li>
                                <li>Bibendum ut tristique et egestas.</li>
                                <li>Quis ipsum suspendisse ultrices gravida dictum fusce.</li>
                            </ul>
                        </div>
                        <div className='text-center'>
                            <button className='claim'>Claim!</button>
                        </div>
                    </div>
                    <div className='password form-group roboto mt-3 mb-5'>
                        <label for="currentPassword" className='fw-medium'>Change Password</label>
                        <div className='d-flex input mt-1'>
                            <input className='form-control' type='password' placeholder='Current Password' id='currentPassword'></input>
                            <img src='/assests/Images/EyeHide.png' />
                        </div>
                        {/* <button className='btn btn-lg btn-block btn-outline-dark py-1 mt-2'>Verify</button> */}
                    </div>
                </div>
            </div>
            <Taskbar tab='profile'/>
        </React.Fragment>
    )
}

export default Profile