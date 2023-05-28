import React from "react";
import Content from "./Content";

const MainContent = () => {
  return (
    <div className='container px-5 py-3'>
      <div className='d-flex justify-content-start align-items-center border-bottom mb-3'>
        <div
          className='nav nav-tabs border-0'
          role='tablist'>
          <button
            className='nav-link active text-dark border-0'
            id='allPostsTab'
            data-bs-toggle='tab'
            data-bs-target='#allPosts'
            type='button'
            role='tab'
            aria-controls='allPosts'
            aria-selected='true'>
            All Posts (32)
          </button>
          <button
            className='nav-link text-secondary border-0'
            id='articleTab'
            data-bs-toggle='tab'
            data-bs-target='#article'
            type='button'
            role='tab'
            aria-controls='article'
            aria-selected='false'>
            Article
          </button>
          <button
            className='nav-link text-secondary border-0'
            id='eventTab'
            data-bs-toggle='tab'
            data-bs-target='#event'
            type='button'
            role='tab'
            aria-controls='event'
            aria-selected='false'>
            Event
          </button>
          <button
            className='nav-link text-secondary border-0'
            id='educationTab'
            data-bs-toggle='tab'
            data-bs-target='#education'
            type='button'
            role='tab'
            aria-controls='education'
            aria-selected='false'>
            Education
          </button>
          <button
            className='nav-link text-secondary border-0'
            id='jobTab'
            data-bs-toggle='tab'
            data-bs-target='#job'
            type='button'
            role='tab'
            aria-controls='job'
            aria-selected='false'>
            Job
          </button>
        </div>
        <button className='btn btn-outline-secondary ms-auto me-0 m-1'>
          Write a Post <i className='fas fa-caret-down'></i>
        </button>
        <button className='btn btn-primary m-1'>
          <i className='fas fa-user-plus me-1'></i> Join Group
        </button>
      </div>
      <Content />
      <style jsx>{`
        .nav-link.active.text-dark {
          color: #000 !important;
        }
        .nav-link:not(.active).text-secondary {
          color: #6c757d !important;
        }
      `}</style>
    </div>
  );
};

export default MainContent;
