import { createPortal } from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase";
import SharePop from "../componets/SharePop";

export default function Sriram() {
  const [OptionLength, setOptionLength] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const [ShlokaContent, setShlokaContent] = useState("");
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = "sriram";
  var shId = `sh-${site}-${selectedShloka}`;
  var shareTitle = `Sriram Gita, shloka: ${selectedShloka}.`;
  const handleClick = (event) => {
    if (!isSharePopVisible) {
      setClickEvent(event);
      setSharePopVisible(true);
    } else {
      closeSharePop();
    }
  };
  const closeSharePop = () => {
    setSharePopVisible(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target || event.srcElement;
      if (target && shareRef !== null) {
        const share_b = !shareRef.current.contains(target);
        const tippy_s = document.getElementById(`tippy-${shId}`)
          ? !document.getElementById(`tippy-${shId}`).contains(target)
          : true;
        if (share_b && tippy_s) {
          closeSharePop();
        }
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", () => closeSharePop(), { capture: true });
    window.addEventListener("resize", () => closeSharePop());

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", () => closeSharePop(), {
        capture: true,
      });
      window.removeEventListener("resize", () => closeSharePop());
    };
  }, [shId]);
  const handleShlokaChange = (event) => {
    const newShloka = parseInt(event.target.value, 10);
    setSelectedShloka(newShloka);
  };
  useEffect(() => {
    const fetchShlokaContent = async () => {
      try {
        const documentPath = `/sriram/oShTnZHJGovqgQ0tPs24/`;
        const docRef = doc(database, documentPath);
        const docSanpshot = await getDoc(docRef);
        if (docSanpshot.exists) {
          const ShlokaData = docSanpshot.data();
          const ShlokaArray = Object.entries(ShlokaData).map(
            ([shlokaNumber, Shloka]) => ({ shlokaNumber, Shloka })
          );
          setOptionLength(ShlokaArray.length);
          const shloka = ShlokaData[`Shloka${selectedShloka}`];
          setShlokaContent(shloka);
        }
      } catch (error) {
        console.error("Error fetching shloka content: ", error);
      }
    };
    fetchShlokaContent();
  }, [selectedShloka]);
  return (
    <>
      <div className="container">
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">Sriram Gita</h1>
                <div className="region region-content">
                  <div className="content">
                    <div>
                      <div className="filter">
                        <div className="views-exposed-widgets clearfix">
                          <div
                            id="edit-language-wrapper"
                            className="views-exposed-widget"
                          >
                            <label
                              htmlFor="edit-language"
                              className="fw-normal"
                            >
                              Script
                            </label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                  defaultValue={"dv"}
                                >
                                  <option value={"dv"}>Devanagari</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div
                            id="edit-field-shloka"
                            className="views-exposed-widget"
                          >
                            <label className="fw-normal">Shloka</label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                  value={selectedShloka}
                                  onChange={handleShlokaChange}
                                >
                                  {Array.from(
                                    { length: OptionLength },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-content">
                  <div className="content_display">
                    <div>
                      <div className="view-field_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>Sriram Gita</b>
                            <br />
                          </font>
                        </p>
                        <div className="hover-parent">
                          {" "}
                          <p className="text-center h-fonts">
                            <font id={shId} className="fw-normal size-6">
                              {ShlokaContent
                                ? ShlokaContent.split("।")
                                    .filter((line) => line.trim() !== "")
                                    .map((line, index, array) => (
                                      <React.Fragment key={index}>
                                        {array.length === 2
                                          ? index === 1
                                            ? ` ।। ${line} ।।`
                                            : line.trim()
                                          : array.length >= 4
                                          ? index === 3
                                            ? ` ।। ${line} ।।`
                                            : line.trim()
                                          : index === 2
                                          ? ` ।। ${line} ।।`
                                          : line.trim()}

                                        {array.length >= 4
                                          ? index === 1
                                            ? "।"
                                            : ""
                                          : array.length === 2
                                          ? ""
                                          : index === 0
                                          ? "।"
                                          : ""}

                                        {array.length === 2
                                          ? ""
                                          : index === 0 && (
                                              <>
                                                <br />
                                                <br />
                                              </>
                                            )}

                                        {array.length >= 4
                                          ? index === 1 && (
                                              <>
                                                <br />
                                                <br />
                                              </>
                                            )
                                          : ""}
                                      </React.Fragment>
                                    ))
                                : "Shloka not found."}
                            </font>
                          </p>
                          <div
                            id="shareBottom"
                            className="hover-child ml-auto mr-1 p-absolute"
                          >
                            <div className="d-flex flex-row">
                              <div className="">
                                <button
                                  className="d-flex vertical-center-children horizontal-center bg-transparent border-0 text-typo rounded-full h-8 w-8 bg-transparent border-0 text-typo cursor-pointer"
                                  aria-expanded="false"
                                  onClick={(event) => {
                                    handleClick(event);
                                  }}
                                >
                                  <i
                                    ref={shareRef}
                                    className="sdf material-symbols-outlined"
                                  >
                                    share
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {isSharePopVisible &&
          createPortal(
            <SharePop
              e={clickEvent}
              Idx={shId}
              site={site}
              title={shareTitle}
              isLargeLength={false}
            />,
            document.body
          )}
      </div>
    </>
  );
}
