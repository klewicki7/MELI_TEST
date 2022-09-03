import React, { useState } from "react";

function ImageDetails({ pictures, thumbnail }) {
  const [thumbHover, setThumbHover] = useState(thumbnail);

  return (
    <div className="img-container-card bg-white">
      <div className="preview-image bg-white">
        {pictures?.map((e) => (
          <img
            onMouseEnter={() => setThumbHover(e.secure_url)}
            onMouseLeave={() => setThumbHover(thumbnail)}
            className="bg-white img-active"
            src={e.secure_url}
            alt={"photo"}
          />
        ))}
      </div>
      <div className="image-active">
        <img className="bg-white" src={thumbHover} alt={"photo"} />
      </div>
    </div>
  );
}

export default ImageDetails;
