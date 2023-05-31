import React from "react";

const SignUpModal = () => {
  return (
    <div
      className='modal fade'
      id='signUpModal'
      tabIndex='-1'
      aria-labelledby='signUpModalLabel'
      aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered custom-modal'>
        <div className='modal-content overflow-hidden p-0'>
          <button
            type='button'
            className='btn-outline-secondary rounded-circle text-secondary border-0'
            data-bs-dismiss='modal'
            aria-label='Close'
            style={{
              position: "absolute",
              right: "-28px",
              top: "-25px",
            }}>
            <i className='fas fa-times'></i>
          </button>
          <h6 className='text-success bg-light p-4 text-center'>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now🤘🏼
          </h6>
          <div className='row p-2'>
            <div className='col-md-6 p-5'>
              <h2>Create Account</h2>
              <form className='my-4 rounded-0'>
                <div className='row'>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='First Name'
                    />
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Last Name'
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Confirm Password'
                  />
                </div>
                <button
                  type='submit'
                  className='mt-3 btn btn-primary rounded-pill w-100'>
                  Create Account
                </button>
              </form>
              <button className='mt-1 btn btn-outline-dark w-100'>
                <img
                  src='/figmaAssets/f_logo_RGB-Blue_1024.png'
                  alt='Facebook Logo'
                />{" "}
                Sign up with Facebook
              </button>
              <button className='mt-1 btn btn-outline-dark w-100'>
                <img
                  src='/figmaAssets/search.png'
                  alt='Google Logo'
                />{" "}
                Sign up with Google
              </button>
            </div>
            <div className='col-md-6 text-center'>
              <p className='text-end'>
                Already have an account? <a href='#'>Sign In</a>
              </p>
              <img
                src='/figmaAssets/atg_illustration.png'
                alt='Illustration'
              />
              <div>
                <small>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
