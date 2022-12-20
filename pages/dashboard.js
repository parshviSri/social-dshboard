import React from 'react';
import BubblesScene from './components/landing-page/dashboard/bubbles';
import LoginElement from './components/landing-page/dashboard/login';
import Modal from './components/landing-page/dashboard/modal';

const Dashboard = () => {
    return (
        <div className='h-screen'>
           <BubblesScene/>
           <Modal><LoginElement/></Modal>
        </div>
    );
}

export default Dashboard;
