import { useEffect, useState } from "react";


function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // 300px scroll ஆன பிறகு show
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button className="top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;