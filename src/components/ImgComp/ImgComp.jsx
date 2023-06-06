import React from 'react';

const ImgComp = () => {
  return (
    <>
     <img 
      style={{
        width: "100vw",
        height: "100vh",
        objectFit: "contain"
      }}
      src={"https://picsum.photos/1920"}
      alt={"Nice"}
     />
    </>
  )
}

export default ImgComp;