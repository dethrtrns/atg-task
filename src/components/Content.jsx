import React from "react";
import CardPost from "./CardPost";

const postsData = [
  {
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    category: "Article",
    authorName: "Sarthak Kamra",
    authorImgUrl: "https://i.pravatar.cc/150?img=1",
    postImgUrl: "https://picsum.photos/800/600?random=1",
  },
  {
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    category: "Education",
    authorName: "Sarah West",
    authorImgUrl: "/external/rectangle31871-tzo-200h.png",
    postImgUrl: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    category: "Meetup",
    authorName: "Ronal Jones",
    authorImgUrl: "/external/rectangle31905-oydi-200h.png",
    postImgUrl: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Software Developer",
    category: "Job",
    authorName: "Joseph Gray",
    authorImgUrl: "https://i.pravatar.cc/150?img=4",
    // postImgUrl: "https://picsum.photos/800/600?random=4",
  },
];

const Content = () => {
  return (
    <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-md-8 p-0'>
          {postsData.map((post, index) => (
            <CardPost
              key={index}
              {...post}
            />
          ))}
        </div>
        <div className='col-md-4 d-none d-md-block'>
          <div className='mb-3 position-relative'>
            <i
              className='fas fa-map-marker-alt position-absolute'
              style={{ left: "10px", top: "10px" }}></i>
            <input
              type='text'
              className='form-control border-0 border-bottom pl-5'
              value='   Noida, India'
            />
            <i
              className='fas fa-pencil-alt position-absolute'
              style={{ right: "10px", top: "10px" }}></i>
          </div>
          <div
            className='px-4 py-4 text-muted mt-2'
            style={{ fontSize: "0.8rem" }}>
            <i className='fas fa-exclamation-circle'></i> Your location will
            help us serve better and extend a personalised experience.
          </div>

          {/* Other elements will go here */}
        </div>
      </div>
    </div>
  );
}; //px-4 py-4 text-muted

export default Content;
