import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const token = localStorage.getItem('token');


function Index() {
    return(
            <div className="main-content">
                <div className="container-fluid p-5 pt-3">
                    <h1>No effort here</h1>
                    <Link to="/reservation"><button className='btn btn-primary'>Rezervuokites</button></Link>
                </div>
            </div>
        )
}

export default Index