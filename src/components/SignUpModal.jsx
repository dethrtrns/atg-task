import React from "react";

const SignUpModal = () => {
  return (
    <div>
      <div
        className='modal fade'
        id='signUpModal'
        tabIndex='-1'
        aria-labelledby='signUpModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id='signUpModalLabel'>
                Sign Up
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>{/* Sign up form goes here */}</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'>
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
