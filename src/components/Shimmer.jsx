import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects-18";

const Shimmer = () => {
  return (
    <>
      <ShimmerSimpleGallery imageType="thumbnail" imageHeight={300} col={4} />
      {/* <div className="content" data-testid="shimmer">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div className="shimmer-cards" key={index}></div> // note that we should not give index as a key but here we have no unique id, that's why we used index
          ))}
      </div> */}
    </>
  );
};

export default Shimmer;
