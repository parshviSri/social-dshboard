import React from 'react';
import { useDispatch } from "react-redux";
import * as actions from '../../../../state/action-creator';
 const LoginElement = () => {
    const dispatch = useDispatch();
    const updateMediaType =(type) =>{
      dispatch(actions.setmediaType(type));
    }
    return (
      <div className="flex justify-center m-6">
        <div className="basis-2.5/3">
          <p className="text-4xl">Start your new digital life</p>
          <div className="flex justify-center m-12">
            <button className="text-3xl border rounded-md p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 ">
              Connect with google
            </button>
          </div>
          <div className="flex justify-center m-12">
            <button className="text-3xl border rounded-md p-4 bg-gradient-to-r from-cyan-500 to-blue-500 px-12 "
            onClick={()=>{updateMediaType('web3')}}>
              Connect with Wallet
            </button>
          </div>
        </div>
      </div>
    );
}
export default LoginElement

