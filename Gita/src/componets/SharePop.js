export default function SharePop({ e, Idx, site, title, isLargeLength }) {
  var useX = 0;
  var useY = 0;
  var content = "";
  if (e && Idx) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (clientY < 690) {
      useX = clientX - 200;
      useY = clientY + 20;
    } else {
      useX = clientX - 210;
      useY = clientY - 70;
    }
    const hoverParent = e.target.closest(".hover-parent");
    if (hoverParent) {
      const fontEl = hoverParent.querySelector(`#${Idx}`);
      if (fontEl) {
        content = fontEl.innerText;
      }
    }
  }

  const copy = () => {
    if (e) {
      navigator.clipboard
        .writeText(title + "\t\n\n" + content + "\nYour Opinion: \n\n\n")
        .catch((err) => {
          console.error("Unable to copy to clipboard", err);
        });
    }
  };

  return (
    <div
      data-tippy-root=""
      id={`tippy-${Idx}`}
      style={{
        zIndex: "800",
        visibility: "visible",
        position: "fixed",
        inset: "0px auto auto 0px",
        margin: "0px",
        transform: `translate3d(${useX}px, ${useY}px, 0px)`,
      }}
    >
      <div
        className="tippy-box"
        data-state="visible"
        tabIndex="-1"
        data-animation="fade"
        role="tooltip"
        style={{ maxWidth: "800px", transitionDuration: "300ms" }}
        data-placement="bottom-start"
      >
        <div
          className="tippy-content"
          data-state="visible"
          style={{ transitionDuration: "300ms" }}
        >
          <div>
            <div className="shadow-elevated bg-fill-content-prime rounded-20 rounded-15-mobile pb-mobile-xxxs pt-mobile-xxxs pb-xxxs pt-xxxs">
              <ul className="d-flex flex-col min-w-[220px]">
                <li className="w-full d-flex">
                  <div
                    onClick={copy}
                    className="cursor-pointer inline-flex vertical-center-children w-full py-1.5 text-tight-m px-4 bg-ui-fill text-typo d-flex vertical-center-children box-border hover:bg-ui-fill-hover focus:border focus:border-ui-stroke-primary focus:outline-none"
                  >
                    <span className="pr-2 d-flex place-content-center">
                      <i
                        className="icon-content_copy-outlined text-icon"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </span>
                    <span className="grow">Copy</span>
                  </div>
                </li>
                {isLargeLength ? (
                  <></>
                ) : (
                  <>
                    <li className="w-full d-flex">
                      <a
                        href={`https://twitter.com/intent/tweet?lang=en&url=https%3A%2F%2Fgita1a.web.app%2F${site}&text=${encodeURIComponent(
                          title + "\t\n\n" + content + "\nYour Opinion: \n\n\n"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer inline-flex vertical-center-children w-full py-1.5 text-tight-m px-4 bg-ui-fill text-typo d-flex vertical-center-children box-border hover:bg-ui-fill-hover focus:border focus:border-ui-stroke-primary focus:outline-none"
                      >
                        <span className="pr-2 d-flex place-content-center">
                          <i
                            className="icon-brand_logos-twitter-x text-icon"
                            style={{ fontSize: "24px" }}
                          ></i>
                        </span>
                        <span className="grow">Twitter</span>
                      </a>
                    </li>
                    <li className="w-full d-flex">
                      <a
                        href={
                          window.innerWidth > 690
                            ? `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(
                                title
                              )}&body=${encodeURIComponent(
                                content + `\nYour Opinion:\n\n\n`
                              )}`
                            : `mailto:?subject=${encodeURIComponent(
                                title
                              )}&body=${encodeURIComponent(
                                content + `\nYour Opinion:\n\n\n`
                              )}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer inline-flex vertical-center-children w-full py-1.5 text-tight-m px-4 bg-ui-fill text-typo d-flex vertical-center-children box-border hover:bg-ui-fill-hover focus:border focus:border-ui-stroke-primary focus:outline-none"
                      >
                        <span className="pr-2 d-flex place-content-center">
                          <i
                            className="icon-email-outlined text-icon"
                            style={{ fontSize: "24px" }}
                          ></i>
                        </span>
                        <span className="grow">Email</span>
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
