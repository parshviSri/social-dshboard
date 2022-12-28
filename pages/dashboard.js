import React,{useState} from 'react';
import BubblesScene from './components/landing-page/dashboard/bubbles';
import LensDashboard from './components/landing-page/dashboard/lens-dashboard/lens-dashboard';
import LoginElement from './components/landing-page/dashboard/login';
import Modal from './components/landing-page/dashboard/modal';
import {connect } from 'react-redux';
export const Dashboard = (props) => {
    const {mediaType} = props
    return (
      <div className="h-screen">
        {mediaType?.length > 0 ? (
          <LensDashboard />
        ) : (
          <>
            <BubblesScene />
            <Modal>
              <LoginElement />
            </Modal>
          </>
        )}
      </div>
    );
}
const mapStateToProps = (state) => ({
  mediaType: state.reducer?.mediaTypeSlice?.mediaType,
});
export default connect(mapStateToProps)(Dashboard)
