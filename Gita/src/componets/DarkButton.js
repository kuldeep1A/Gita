const DarkButton = () => {
  const _cs = () => {
    if (window.sessionStorage.getItem("isDark") === "true") {
      window.sessionStorage.setItem("isDark", "false");
    } else if (window.sessionStorage.getItem("isDark") === null) {
      window.sessionStorage.setItem("isDark", "true");
    } else if (window.sessionStorage.getItem("isDark") === "false") {
      window.sessionStorage.setItem("isDark", "true");
    }
    window.location.reload();
  };
  return (
    <>
      <div className="_c-mode">
        <div onClick={_cs} className="_dark-bu">
          {window.sessionStorage.getItem("isDark") === "true" ? (
            <>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  className="_dark-lo"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Light">
                    <g>
                      <path d="M12,18.09A6.09,6.09,0,1,1,18.09,12,6.1,6.1,0,0,1,12,18.09ZM12,6.91A5.09,5.09,0,1,0,17.09,12,5.1,5.1,0,0,0,12,6.91Z"></path>
                      <path d="M11.5,2.568v1.6a.5.5,0,1,0,1,0v-1.6a.5.5,0,1,0-1,0Z"></path>
                      <path d="M12.5,21.432v-1.6a.5.5,0,0,0-1,0v1.6a.5.5,0,1,0,1,0Z"></path>
                      <path d="M21.432,11.5h-1.6a.5.5,0,0,0,0,1h1.6a.5.5,0,1,0,0-1Z"></path>
                      <path d="M2.568,12.5h1.6a.5.5,0,1,0,0-1h-1.6a.5.5,0,1,0,0,1Z"></path>
                      <path d="M18.316,4.977l-.992.992-.141.141a.514.514,0,0,0-.146.353.508.508,0,0,0,.146.354.5.5,0,0,0,.354.146.515.515,0,0,0,.353-.146l.992-.992.141-.141a.515.515,0,0,0,.147-.354.508.508,0,0,0-.147-.353.5.5,0,0,0-.353-.147.522.522,0,0,0-.354.147Z"></path>
                      <path d="M5.684,19.023l.992-.992.141-.141a.514.514,0,0,0,.146-.353.508.508,0,0,0-.146-.354.5.5,0,0,0-.354-.146.515.515,0,0,0-.353.146l-.992.992-.141.141a.515.515,0,0,0-.147.354.508.508,0,0,0,.147.353.5.5,0,0,0,.353.147.522.522,0,0,0,.354-.147Z"></path>
                      <path d="M19.023,18.316l-.992-.992-.141-.141a.514.514,0,0,0-.353-.146.508.508,0,0,0-.354.146.5.5,0,0,0-.146.354.515.515,0,0,0,.146.353l.992.992.141.141a.515.515,0,0,0,.354.147.508.508,0,0,0,.353-.147.5.5,0,0,0,.147-.353.522.522,0,0,0-.147-.354Z"></path>
                      <path d="M4.977,5.684l.992.992.141.141a.514.514,0,0,0,.353.146.508.508,0,0,0,.354-.146.5.5,0,0,0,.146-.354.515.515,0,0,0-.146-.353l-.992-.992-.141-.141A.515.515,0,0,0,5.33,4.83a.508.508,0,0,0-.353.147.5.5,0,0,0-.147.353.522.522,0,0,0,.147.354Z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </>
          ) : (
            <>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 512 512"
                  className="_dark-lo"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M100.18 241.19a15.93 15.93 0 0013.37-13.25C126.6 145.59 186.34 96 256 96c64.69 0 107.79 42.36 124.92 87a16.11 16.11 0 0012.53 10.18C449.36 202.06 496 239.21 496 304c0 66-54 112-120 112H116c-55 0-100-27.44-100-88 0-54.43 43.89-80.81 84.18-86.81z"
                  ></path>
                </svg>
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DarkButton;
