import { createPortal } from "react-dom";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { database } from "../../Function/A_Functions";
import SharePop from "../../componets/SharePop";
import { _translate } from "../../Function/A_Functions";

export default function Brahmasutra() {
  useEffect(() => {
    document.title = "Brahmasutra | Gita";
    return () => {
      document.title = "Brahmasutra | Gita";
    };
  }, []);
  const [idC, setidC] = useState("");
  const [idQ, setidQ] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [selectedSutra, setSelectedSutra] = useState(1);
  const [OptionLength, setOptionLength] = useState(1);
  const [sutraContent, setSutraContent] = useState("");
  const [translateContent, setTranslateCotent] = useState("");
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = "brahmasutra";
  var shId = `sh-${site}-${selectedChapter}-${selectedQuarter}-${selectedSutra}`;
  var shareTitle = `Brahma Sutra, Chapter: ${selectedChapter}, Quarter: ${selectedQuarter}, shloka: ${selectedSutra}.`;
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
  const handleChapterChange = (evnet) => {
    const newChapter = parseInt(evnet.target.value, 10);
    setSelectedChapter(newChapter);
    setSelectedQuarter(1);
    setSelectedSutra(1);
  };
  const handleQuarterChange = (evnet) => {
    const newQuarter = parseInt(evnet.target.value, 10);
    setSelectedQuarter(newQuarter);
    setSelectedSutra(1);
  };
  const handleSutraChange = (evnet) => {
    const newSutra = parseInt(evnet.target.value, 10);
    setSelectedSutra(newSutra);
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
    await goTranslate(sutraContent, isHindiTranslate);
  };
  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true);
    await goTranslate(sutraContent, isHindiTranslate);
  };
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false);
    } else {
      setHideTrans(true);
    }
  }
  useEffect(() => {
    if (sutraContent !== "" && sutraContent) {
      goTranslate(sutraContent, isHindiTranslate);
    } else {
      setTranslateCotent("Wait for Shloka!");
    }
    const fetchSutraContent = async () => {
      try {
        const pathC = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}`;
        const refC = collection(database, pathC);
        getDocs(refC).then((sanpshot) => {
          sanpshot.docs.forEach((doc) => {
            setidC(`${doc.id}`);
          });
        });
        if (idC) {
          const pathQ = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}/${idC}/Quarter${selectedQuarter}/`;
          const refQ = collection(database, pathQ);
          getDocs(refQ).then((sanpshot) => {
            sanpshot.docs.forEach((doc) => {
              setidQ(`${doc.id}`);
            });
          });
        }
        if (idC && idQ) {
          var documentPath = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}/${idC}/Quarter${selectedQuarter}/${idQ}`;
          const docRef = doc(database, documentPath);
          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists) {
            const sutraData = docSnapshot.data();
            if (sutraData !== undefined && sutraData !== null) {
              const sutraArray = Object.entries(sutraData).map(([sutraNumber, sutra]) => ({
                sutraNumber,
                sutra,
              }));
              setOptionLength(sutraArray.length);
              const sutra = sutraData[`Sutra${selectedSutra}`];
              setSutraContent(sutra);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching shloka content:", error);
      }
    };
    fetchSutraContent();
  }, [
    sutraContent,
    goTranslate,
    isHindiTranslate,
    selectedChapter,
    selectedQuarter,
    selectedSutra,
    idC,
    idQ,
  ]);
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">BrahmaSutra </h1>
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
                          <div id="edit-field-chapter" className="v-ex-widget">
                            <label className="fw-normal">Chapter</label>
                            <div>
                              <div className="views-widget">
                                <select value={selectedChapter} onChange={handleChapterChange}>
                                  {Array.from({ length: 4 }, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                      {index + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id="edit-field-shloka" className="v-ex-widget">
                            <label className="fw-normal">Quarter</label>
                            <div>
                              <div className="views-widget">
                                <select value={selectedQuarter} onChange={handleQuarterChange}>
                                  {Array.from({ length: 4 }, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                      {index + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id="edit-field-shloka" className="v-ex-widget">
                            <label className="fw-normal">Sutra</label>
                            <div>
                              <div className="views-widget">
                                <select value={selectedSutra} onChange={handleSutraChange}>
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
                      <div className="view-content">
                        <div className="c-dis-sutra">
                          <div>
                            <div className="v-fi_sutra">
                              <p className="text-center">
                                <font className="color-dark-aubergine fw-normal size-6">
                                  <b>BrahmaSutra</b>
                                  <br />
                                </font>
                              </p>
                              <div className="hov-parent">
                                <div id="shareTop" className="hov-child ml-auto mr-1 p-absolute">
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
                                <p className="h-fonts">
                                  <font id={shId} className="text-center fw-normal size-6 line-150">
                                    {sutraContent
                                      ? sutraContent
                                          .split(" ")
                                          .map((line, index) => (
                                            <React.Fragment key={index}>
                                              {line + " "}
                                            </React.Fragment>
                                          ))
                                      : `Sutra not found.`}
                                  </font>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="l-t-action">
                            <div onClick={_hideTrans}>{hideTrans ? "Hide" : "Show"}</div>
                          </div>
                          {hideTrans ? (
                            <div className="translate-view">
                              <div className="v-fi_sutra">
                                <div className="c-lc-action">
                                  <div>
                                    <span onClick={_changeCodeToEn}>
                                      {isHindiTranslate ? "En" : "English"}
                                    </span>
                                  </div>
                                  <div>
                                    <span onClick={_changeCodeToHi}>
                                      {isHindiTranslate ? "Hindi" : "Hi"}
                                    </span>
                                  </div>
                                </div>
                                <div className="hov-parent">
                                  <p className="text-center h-fonts">
                                    <font className="fw-normal size-6">{translateContent}</font>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
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
              isLargeLength={true}
            />,
            document.body,
          )}
      </div>
    </>
  );
}
