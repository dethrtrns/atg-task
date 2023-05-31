import MainContent from "@/components/MainContent";
import SignUpModal from "@/components/SignUpModal";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ATG Task</title>
        <meta
          name='description'
          content='ATG Task'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>
      <main className='container-fluid p-0'>
        {/* bg-warning */}
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between align-items-center py-2 px-4 d-none d-md-flex sticky-top'>
          <a
            className='navbar-brand p-1'
            href='#'>
            <img
              src='/figmaAssets/whole.png'
              alt='Logo'
              height='20'
            />
          </a>
          <div
            style={{ width: "22rem" }}
            className='position-relative'>
            <input
              type='search'
              className='form-control rounded-pill py-1'
              placeholder='Search for your favorite groups in ATG'
              style={{ paddingLeft: "2.5rem" }}
            />
            <span className='position-absolute top-50 start-0 translate-middle-y px-2'>
              <i className='fas fa-search'></i>
            </span>
          </div>

          <div className='d-flex justify-content-end'>
            <div className='dropdown'>
              <button
                className='btn dropdown-toggle rounded'
                type='button'
                id='dropdownMenuButton'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                Create account. <span className='text-primary'>It's free!</span>
                {/* <i className='bi bi-caret-down-fill'></i> */}
              </button>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton'>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                    data-bs-toggle='modal'
                    data-bs-target='#signInModal'>
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                    data-bs-toggle='modal'
                    data-bs-target='#signUpModal'>
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='hero bg-cover text-start d-flex align-items-end justify-content-start bg-rectangle-2'>
          <div className='d-flex text-container align-items-end bg-color w-100 h-100'>
            <button className='btn btn-link text-white position-absolute top-0 start-0 m-3 d-md-none'>
              <i className='fas fa-arrow-left'></i>
            </button>
            <button
              className='btn btn-outline-light position-absolute top-0 end-0 m-3 d-md-none'
              data-bs-toggle='modal'
              data-bs-target='#signUpModal'>
              Join Group
            </button>
            <div className='text-white p-3'>
              <h1>Computer Engineering</h1>
              <p>142,765 Computer Engineers follow this</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .bg-rectangle-2 {
            position: relative;
            background-image: url(/figmaAssets/Rectangle2.png);
            height: 70vh;
            background-size: cover;
          }

          .bg-rectangle-2::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url(/figmaAssets/Rectangle1.png);
            background-size: cover;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }

          .bg-color {
            background-color: rgba(0, 0, 0, 0.5);
          }

          .text-container {
            position: relative;
            z-index: 1;
          }

          @media (max-width: 767px) {
            .bg-rectangle-2::before {
              opacity: 1;
            }
          }
        `}</style>

        <MainContent />
      </main>
      {/* Sign In Modal */}
      <div
        className='modal fade'
        id='signInModal'
        tabIndex='-1'
        aria-labelledby='signInModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id='signInModalLabel'>
                Sign In
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>{/* Sign in form goes here */}</div>
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
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <SignUpModal />
    </>
  );
}
