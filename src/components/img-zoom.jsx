import PropTypes from "prop-types";
import { useEffect } from "react";

const ImgZoom = ({ imageUrl, isOpen, setIsOpen }) => {
  useEffect(() => {
    if (imageUrl) {
      setIsOpen(true);
    }
  }, [imageUrl, setIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.8)]">
          <div className="flex flex-col items-center rounded-lg bg-white p-5 shadow-lg">
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-gray-300 px-2 py-2 text-xl text-black hover:bg-gray-400"
              onClick={handleClose}
            >
              ✖
            </button>

            <img
              src={imageUrl}
              alt="Zoomed"
              className="max-h-fit max-w-fit rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

ImgZoom.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ImgZoom;
