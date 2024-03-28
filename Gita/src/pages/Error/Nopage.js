import React, { useEffect } from "react";
import Svgs from "../../componets/Svgs";

const Nopage = () => {
  const _sw = window.location.pathname.slice(1, 19);
  useEffect(() => {
    document.title = "Search 😒";
    return () => {
      document.title = "Search 😒";
    };
  }, []);
  return (
    <>
      <section className="nopage">
        <div className="d-flex error">
          <div>{Svgs._svgNoFound()}</div>
          <div className="_s-word">This "{_sw}" search word not found in our workspace</div>
        </div>
      </section>
    </>
  );
};

export default Nopage;
