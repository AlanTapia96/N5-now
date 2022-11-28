import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["N5 Now Challenge"],
      typeSpeed: 50,
      backSpeed: 70,
      loop: false,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  const el = useRef(null);
  const typed = useRef(null);

  return (
    <div className="type-wrap title-container">
      <span className="title" style={{ whiteSpace: "pre" }} ref={el} />
    </div>
  );
};
