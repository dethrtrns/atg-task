import React from "react";
import styles from "./CardPost.module.css";

const CardPost = ({
  title,
  category,
  authorName,
  authorImgUrl,
  postImgUrl,
}) => {
  let emoji =
    category === "Article"
      ? "✍️"
      : category === "Education"
      ? "🔬"
      : category === "Meetup"
      ? "🗓️"
      : "💼";
  return (
    <div className={`card bg-light mb-4 ${styles.card}`}>
      {postImgUrl && (
        <img
          className='card-img-top'
          src={postImgUrl}
          alt={title}
          style={{ height: "220px", objectFit: "cover" }}
        />
      )}
      <div className='card-body'>
        <p className='card-text fw-normal align-items-center m-0'>
          {emoji} {category}
        </p>
        <div className='d-flex align-items-center justify-content-between'>
          <h3 className='card-title m-0'>{title}</h3>
          <div className='dropdown'>
            <button
              className='btn btn-light rounded'
              type='button'
              id='dropdownMenuButton'
              data-bs-toggle='dropdown'
              aria-expanded='false'>
              <i class='fas fa-ellipsis-h'></i>
            </button>
            <ul
              className='dropdown-menu'
              aria-labelledby='dropdownMenuButton'>
              <li>
                <a
                  className='dropdown-item'
                  href='#'>
                  Edit
                </a>
              </li>
              <li>
                <a
                  className='dropdown-item'
                  href='#'>
                  Report
                </a>
              </li>
              <li>
                <a
                  className='dropdown-item'
                  href='#'>
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        {(category === "Article" || category === "Education") && (
          <p className='fw-light text-truncate'>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to redesign the entire Interface of some of the famous tech...
          </p>
        )}
        {category === "Meetup" && (
          <div className='fw-bold py-2 mb-3'>
            <i class='fas fa-calendar-day'></i>
            <span className='ms-1'>Fri, 12 Oct, 2018</span>
            <i class='fas fa-map-marker-alt ms-5'></i>
            <span className='ms-1 text-'>Ahmedabad, India</span>
            <div>
              <button className='mt-2 btn btn-outline-secondary shadow-sm fw-bold text-warning w-100'>
                Visit Website
              </button>
            </div>
          </div>
        )}
        {category === "Job" && (
          <div className='fw-bold py-2 mb-3'>
            <i class='fas fa-briefcase'></i>
            <span className='ms-1'>Innovaccer Analytics Private Ltd.</span>
            <i class='fas fa-map-marker-alt ms-5'></i>
            <span className='ms-1 text-'>Noida, India</span>
            <div>
              <button className='mt-2 btn btn-outline-secondary shadow-sm fw-bold text-success w-100'>
                Apply on Timesjobs
              </button>
            </div>
          </div>
        )}
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <img
              className='rounded-circle author-image'
              height={"48px"}
              src={authorImgUrl}
              alt={authorName}
            />
            <p className='author-name p-2 mb-0 fw-bold'>{authorName}</p>
          </div>
          <div className='d-flex align-items-center'>
            <i class='fas fa-light fa-eye fa-sharp me-1'></i>
            1.4k views{" "}
            <span className='btn btn-light ms-4'>
              <i className='fas fa-share-alt'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
