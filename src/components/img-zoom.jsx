import "./img-zoom.css";

const ImgZoom = (prop) => {
  return (
    <>
      {/* <div className="absolute w-screen bg-[rgba(0,0,0, 0.2)]">
         <input id="checkbox-img" type="checkbox" className=" peer" />
        
        <label htmlFor="checkbox-img" className="hidden peer-checked:flex">
           <button>X</button>
          
        </label>
        
        <div className="hidden peer-checked:flex">
           <img src={imageUrl} alt="img" width="300px" height="300px" />
          
        </div>
        
      </div> */}
      <div className="fullscreen-image w-[1028px]">
        <input
          id="checkbox-img"
          type="checkbox"
          className="input-checkbox-img"
        />

        <label htmlFor="checkbox-img" className="close-image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m3.59-13L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"
            />
          </svg>
        </label>
        <div className="img-zoom-in">
          <img src={prop.imageUrl} width="300px" height="300px" />
        </div>
      </div>
    </>
  );
};

export default ImgZoom;
