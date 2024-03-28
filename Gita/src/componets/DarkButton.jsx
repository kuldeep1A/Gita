import _set_session from "../Function/utils";
import Svgs from "./Svgs";
const DarkButton = () => {
  return (
    <>
      <div className="_c-mode">
        <div onClick={_set_session} className="_dark-bu">
          {window.sessionStorage.getItem("isDark") === "true" ? (
            <>
              <span>{Svgs._svgSunRise()}</span>
            </>
          ) : (
            <>
              <span>{Svgs._svgSunSet()}</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DarkButton;
