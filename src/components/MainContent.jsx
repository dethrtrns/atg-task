import React, { useState } from "react";
import Content from "./Content";
import ContentRaw from "./ContentRaw";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("allPosts");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='container px-0 px-md-5 py-3'>
      <div
        id='filter-bar'
        className='d-md-none border-bottom mb-3'>
        <div className='d-flex justify-content-between align-items-center p-1'>
          <h5>Posts (368)</h5>
          <div className='dropdown '>
            <button
              className='btn btn-outline-secondary dropdown-toggle'
              type='button'
              id='filterDropdown'
              data-bs-toggle='dropdown'
              aria-expanded='false'>
              Filter: {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </button>
            <ul
              className='dropdown-menu'
              aria-labelledby='filterDropdown'>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() => handleTabClick("allPosts")}>
                  All Posts
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() => handleTabClick("article")}>
                  Article
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() => handleTabClick("event")}>
                  Event
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() => handleTabClick("education")}>
                  Education
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() => handleTabClick("job")}>
                  Job
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='d-none d-md-flex justify-content-start align-items-center border-bottom mb-3'>
        <div
          className='nav nav-tabs border-0'
          role='tablist'>
          <button
            className={`nav-link ${
              activeTab === "allPosts" ? "active text-dark" : "text-secondary"
            } border-0`}
            id='allPostsTab'
            onClick={() => handleTabClick("allPosts")}
            type='button'
            role='tab'
            aria-controls='allPosts'
            aria-selected={activeTab === "allPosts"}>
            All Posts (32)
          </button>
          <button
            className={`nav-link ${
              activeTab === "article" ? "active text-dark" : "text-secondary"
            } border-0`}
            id='articleTab'
            onClick={() => handleTabClick("article")}
            type='button'
            role='tab'
            aria-controls='article'
            aria-selected={activeTab === "article"}>
            Article
          </button>
          <button
            className={`nav-link ${
              activeTab === "event" ? "active text-dark" : "text-secondary"
            } border-0`}
            id='eventTab'
            onClick={() => handleTabClick("event")}
            type='button'
            role='tab'
            aria-controls='event'
            aria-selected={activeTab === "event"}>
            Event
          </button>
          <button
            className={`nav-link ${
              activeTab === "education" ? "active text-dark" : "text-secondary"
            } border-0`}
            id='educationTab'
            onClick={() => handleTabClick("education")}
            type='button'
            role='tab'
            aria-controls='education'
            aria-selected={activeTab === "education"}>
            Education
          </button>
          <button
            className={`nav-link ${
              activeTab === "job" ? "active text-dark" : "text-secondary"
            } border-0`}
            id='jobTab'
            onClick={() => handleTabClick("job")}
            type='button'
            role='tab'
            aria-controls='job'
            aria-selected={activeTab === "job"}>
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
      {/* <code>figma to code{`<jsx>`} from here on out! </code> */}
      {/* <ContentRaw /> */}
      <Content />
      <style jsx>{`
        .nav-link.active.text-dark {
          color: #000 !important;
          margin-bottom: -3px;
          position: relative;
          font-weight: "900";
        }
        .nav-link.active.text-dark::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000;
        }
        .nav-link:not(.active).text-secondary {
          color: #6c757d !important;
        }
      `}</style>
    </div>
  );
};

export default MainContent;
