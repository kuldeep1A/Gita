import { createPortal } from "react-dom";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../../Function/A_Functions";
import SharePop from "../../../componets/SharePop";
import { _translate } from "../../../Function/A_Functions";
import { TranslateView } from "../../../componets/TranslateView";

export default function Sriram() {
  useEffect(() => {
    document.title = "Sriram | Gita";

    return () => {
      document.title = "Sriram | Gita";
    };
  }, []);
  const [OptionLength, setOptionLength] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const [ShlokaContent, setShlokaContent] = useState("");
  const [translateContent, setTranslateCotent] = useState("");
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
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
        if (share_b) {
          setTimeout(() => {
            closeSharePop();
          }, 100);
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
  const goTranslate = useCallback(async (sansContent, whatcode) => {
    if (sansContent.length < 1912) {
      const content = await _translate(sansContent, whatcode);
      if (content !== "") {
        setTranslateCotent(content);
      } else {
        setTranslateCotent("Wait for Shloka!");
      }
    } else {
      setTranslateCotent("Wait for Shloka! Shloka Length must be less than 1912 character.");
    }
  }, []);
  const _changeCodeToEn = async () => {
    setIsHindiTranslate(false);
    await goTranslate(ShlokaContent, isHindiTranslate);
  };
  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true);
    await goTranslate(ShlokaContent, isHindiTranslate);
  };
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false);
    } else {
      setHideTrans(true);
    }
  }
  useEffect(() => {
    if (ShlokaContent !== "" && ShlokaContent) {
      goTranslate(ShlokaContent, isHindiTranslate);
    } else {
      setTranslateCotent("Wait for Shloka!");
    }
    const fetchShlokaContent = async () => {
      try {
        const documentPath = `/sriram/oShTnZHJGovqgQ0tPs24/`;
        const docRef = doc(database, documentPath);
        const docSanpshot = await getDoc(docRef);
        if (docSanpshot.exists) {
          const ShlokaData = docSanpshot.data();
          if (ShlokaData !== undefined && ShlokaData !== null) {
            const ShlokaArray = Object.entries(ShlokaData).map(([shlokaNumber, Shloka]) => ({
              shlokaNumber,
              Shloka,
            }));
            setOptionLength(ShlokaArray.length);
            const shloka = ShlokaData[`Shloka${selectedShloka}`];
            setShlokaContent(shloka);
          }
        }
      } catch (error) {
        console.error("Error fetching shloka content: ", error);
      }
    };
    fetchShlokaContent();
  }, [selectedShloka, goTranslate, isHindiTranslate, ShlokaContent]);
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">Sriram Gita</h1>
                <div className="region region-content">
                  <div className="content">
                    <div>
                      <div className="filter">
                        <div className="v-ex-widgets clearfix">
                          <div id="edit-language-wrapper" className="v-ex-widget">
                            <label htmlFor="edit-language" className="fw-normal">
                              Script
                            </label>
                            <div>
                              <div className="views-widget">
                                <select defaultValue={"dv"}>
                                  <option value={"dv"}>Devanagari</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id="edit-field-shloka" className="v-ex-widget">
                            <label className="fw-normal">Shloka</label>
                            <div>
                              <div className="views-widget">
                                <select value={selectedShloka} onChange={handleShlokaChange}>
                                  {Array.from({ length: OptionLength }, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                      {index + 1}
                                    </option>
                                  ))}
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
                  <div className="c_dis">
                    <div>
                      <div className="v-fi_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>Sriram Gita</b>
                            <br />
                          </font>
                        </p>
                        <div className="hov-parent">
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
                          <div id="shareBottom" className="hov-child ml-auto mr-1 p-absolute">
                            <div className="d-flex flex-row">
                              <div className="">
                                <button
                                  className="d-flex vertical-center-children horizontal-center bg-transparent border-0 text-typo rounded-full h-8 w-8 bg-transparent border-0 text-typo cursor-pointer"
                                  aria-expanded="false"
                                  onClick={(event) => {
                                    handleClick(event);
                                  }}
                                >
                                  <i ref={shareRef} className="sdf material-symbols-outlined">
                                    share
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="l-t-action">
                      <div onClick={_hideTrans}>{hideTrans ? "Hide" : "Show"}</div>
                    </div>
                    {hideTrans ? (
                      <TranslateView
                        _changeCodeToEn={_changeCodeToEn}
                        _changeCodeToHi={_changeCodeToHi}
                        isHindiTranslate={isHindiTranslate}
                        translateContent={translateContent}
                      />
                    ) : (
                      <></>
                    )}
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
            document.body,
          )}
      </div>
    </>
  );
}
