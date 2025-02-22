import { useState } from "react";
import ImgZoom from "./components/img-zoom";

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [isopen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setImgUrl(e.target.src);
    setIsOpen(true);
  };

  return (
    <div className="relative flex justify-center">
      <label htmlFor="checkbox-img" className="">
        <img src="src\assets\images\prj.png" alt="" onClick={handleClick} />
      </label>
      <ImgZoom imageUrl={imgUrl} isOpen={isopen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
