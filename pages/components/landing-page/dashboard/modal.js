import React from 'react';

const Modal = (props) => {
    return (
      <div className=" overflow-y-auto backdrop-blur-lg fixed top-[20%] right-[20%]  w-1/2 h-1/2 ">
        {props.children}
      </div>
    );
}

export default Modal;
