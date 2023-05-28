import MainContent from "@/components/MainContent";
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
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between align-items-center py-2 px-4 d-none d-md-flex'>
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
                <i className='bi bi-caret-down-fill'></i>
              </button>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton'>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'>
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='hero bg-cover text-start d-flex align-items-end justify-content-start bg-rectangle-2'>
          <button className='btn btn-link text-white position-absolute top-0 start-0 m-3 d-md-none'>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='btn btn-outline-light position-absolute top-0 end-0 m-3 d-md-none'>
            Join Group
          </button>
          <div className='text-white  p-3'>
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
        <style jsx>{`
          .bg-rectangle-2 {
            background-image: url(/figmaAssets/Rectangle2.png);
            height: 70vh;
            background-size: cover;
          }

          @media (max-width: 767px) {
            .bg-rectangle-2 {
              background-image: url(/figmaAssets/Rectangle1.png);
            }
            .navbar:not(.d-md-none) {
              display: none;
            }
          }
        `}</style>
        <MainContent />
      </main>
    </>
  );
}
