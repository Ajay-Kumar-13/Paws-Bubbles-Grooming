import React from 'react';
import Taskbar from './taskbar';

function Transactions() {
    return (
        <React.Fragment>
            <div className='transactions'>
                <div className='greetings roboto d-flex align-items-center'>
                    <div className="profile" style={{width: 'fit-content'}}>
                        <div className="user d-flex align-items-center justify-content-center">
                            A
                        </div>
                    </div>
                    <div className='mx-2'>
                        <p className='m-0' style={{fontSize: '10px'}}>Good Morning</p>
                        <h6 className='m-0'>Ajay kumar</h6>
                    </div>
                </div>
                {/* <hr></hr> */}
                <div className='jumbotron px-3 py-5 roboto'>
                    <h1 className='m-0 fw-normal'>Your Balance this month:</h1>
                    <h1><span className='balance caudex'>0</span> INR</h1>
                </div>

                <div className="mt-4 mb-3 roboto d-flex px-3 align-items-center">
                    <h4 className="fw-bold m-0">Transactions History</h4>
                    <i class="fa fa-solid fa-filter mx-3"></i>
                </div>
                <div className="reviews px-3">
                    <table class="table raleWay">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Status</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ajay</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akhilesh</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akhil</td>
                                <td>Approved</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
            </div>
            <Taskbar tab='transactions' />
        </React.Fragment>
    )
}

export default Transactions;