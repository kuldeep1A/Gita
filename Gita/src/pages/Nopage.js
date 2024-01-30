import { useEffect } from "react";

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
          <div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="5em"
              width="5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13.5 8.5-5 5"></path>
              <path d="m8.5 8.5 5 5"></path>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <div className="_s-word">
            This "{_sw}" search word not found in our workspace
          </div>
        </div>
      </section>
    </>
  );
};

export default Nopage;
