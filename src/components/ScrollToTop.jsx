import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "../style/scroll-to-top.css";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
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
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Səhifənin yuxarısına qayıt"
      title="Yuxarı qayıt"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;