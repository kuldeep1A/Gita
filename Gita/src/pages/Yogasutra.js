import { createPortal } from "react-dom";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { database } from "../firebase";
import SharePop from "../componets/SharePop";
import { _translate } from "../Function/A_Functions";

export default function Yogasutra() {
  useEffect(() => {
    document.title = "Yogasutra | Gita";
    return () => {
      document.title = "Yogasutra | Gita";
    };
  }, []);
  const [idC, setidC] = useState("");
  const [OptionLength, setOptionLength] = useState(1);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedSutra, setSelectedSutra] = useState(1);
  const [SutraContent, setSutraContent] = useState("");
  const [BhasyaContent, setBhasyaContent] = useState("");
  const [VrittiContent, setVrittiContent] = useState("");
  const [stranslateContent, setSTranslateCotent] = useState("");
  const [btranslateContent, setBTranslateCotent] = useState("");
  const [vtranslateContent, setVTranslateCotent] = useState("");
  const [translateContent, setTranslateCotent] = useState("");
  const [whichSutra, setWhichSutra] = useState(2);
  const [isViewSutra, setIsViewSutra] = useState(false);
  const [isViewBhasya, setIsViewBhasya] = useState(false);
  const [isViewVritti, setIsViewVritti] = useState(false);
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(true);
  const [shareTC, setShareTC] = useState("sutra");
  const [clickEvent, setClickEvent] = useState(null);
  const shareRefS = useRef(null);
  const shareRefB = useRef(null);
  const shareRefV = useRef(null);
  var site = "surti";
  var shsId = `sh-${site}-sutra-${selectedChapter}-${selectedSutra}`;
  var shbId = `sh-${site}-bhasya-${selectedChapter}-${selectedSutra}`;
  var shvId = `sh-${site}-vritti-${selectedChapter}-${selectedSutra}`;
  var shId = `sh-${site}-${shareTC}-${selectedChapter}-${selectedSutra}`;
  var shareTitle = `Sruti Gita, Content: ${shareTC}, Chapter: ${selectedChapter}, shloka: ${selectedSutra}.`;
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
  const fillTranslate = useCallback(
    (whichSutra) => {
      if (whichSutra === 1) {
        setTranslateCotent(stranslateContent);
      } else if (whichSutra === 2) {
        setTranslateCotent(btranslateContent);
      } else if (whichSutra === 3) {
        setTranslateCotent(vtranslateContent);
      }
    },
    [stranslateContent, btranslateContent, vtranslateContent],
  );
  const goTranslate = useCallback(
    async (shsContent, shbContent, shvContent, whatcode) => {
      if (shbContent.length < 1912 && shvContent.length < 1912) {
        const shstcontent = await _translate(shsContent, whatcode);
        const shbtcontent = await _translate(shbContent, whatcode);
        const shvtcontent = await _translate(shvContent, whatcode);
        if (shstcontent !== "" && shbtcontent !== "" && shvtcontent !== "") {
          setSTranslateCotent(shstcontent);
          setBTranslateCotent(shbtcontent);
          setVTranslateCotent(shvtcontent);
          fillTranslate(whichSutra);
        } else {
          setSTranslateCotent("Wait for Shloka!");
          setBTranslateCotent("Wait for Shloka!");
          setVTranslateCotent("Wait for Shloka!");
        }
      } else {
        setSTranslateCotent("Wait for Shloka! Shloka Length must be less than 1912 character.");
        setBTranslateCotent("Wait for Shloka! Shloka Length must be less than 1912 character.");
        setVTranslateCotent("Wait for Shloka! Shloka Length must be less than 1912 character.");
      }
    },
    [whichSutra, fillTranslate],
  );
  const _changeCodeToEn = async () => {
    setIsHindiTranslate(false);
    await goTranslate(BhasyaContent, isHindiTranslate);
  };
  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true);
    await goTranslate(BhasyaContent, isHindiTranslate);
  };
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false);
    } else {
      setHideTrans(true);
    }
  }
  useEffect(() => {
    if (BhasyaContent !== "" && BhasyaContent) {
      goTranslate(SutraContent, BhasyaContent, VrittiContent, isHindiTranslate);
      fillTranslate(whichSutra);
    } else {
      setSTranslateCotent("Wait for Shloka!");
      setBTranslateCotent("Wait for Shloka!");
      setVTranslateCotent("Wait for Shloka!");
    }
    const handleClickOutside = (event, shareRef) => {
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
    const handleRef = (event) => {
      if (event) {
        const isShareS = event.target.hasAttribute("data-share-s");
        const isShareB = event.target.hasAttribute("data-share-b");
        const isShareV = event.target.hasAttribute("data-share-v");
        if (isShareS) {
          handleClickOutside(event, shareRefS);
        } else if (isShareB) {
          handleClickOutside(event, shareRefB);
        } else if (isShareV) {
          handleClickOutside(event, shareRefV);
        } else {
          closeSharePop();
        }
      }
    };
    document.body.addEventListener("click", handleRef);
    window.addEventListener("scroll", () => closeSharePop(), { capture: true });
    window.addEventListener("resize", () => closeSharePop());
    return () => {
      document.body.removeEventListener("click", handleRef);
      window.removeEventListener("scroll", () => closeSharePop(), {
        capture: true,
      });
      window.removeEventListener("resize", () => closeSharePop());
    };
  }, [
    shId,
    goTranslate,
    isHindiTranslate,
    BhasyaContent,
    SutraContent,
    VrittiContent,
    shareRefB,
    shareRefS,
    shareRefV,
    whichSutra,
    fillTranslate,
  ]);
  const handleChapterChange = (event) => {
    const newChapter = parseInt(event.target.value, 10);
    setSelectedChapter(newChapter);
    setSelectedSutra(1);
  };
  const handleSutraChange = (event) => {
    const newSutra = parseInt(event.target.value, 10);
    setSelectedSutra(newSutra);
  };
  const handleCheckboxChange = (checkboxNumber) => {
    switch (checkboxNumber) {
      case 1:
        fillTranslate(!isViewBhasya ? 2 : !isViewVritti ? 3 : 2);
        setIsViewSutra(!isViewSutra);
        break;
      case 2:
        fillTranslate(!isViewSutra ? 1 : !isViewVritti ? 3 : 2);
        setIsViewBhasya(!isViewBhasya);
        break;
      case 3:
        fillTranslate(!isViewSutra ? 1 : !isViewBhasya ? 2 : 2);
        setIsViewVritti(!isViewVritti);
        break;
      default:
        break;
    }
  };
  const areAnyCheckboxesChecked = isViewBhasya && isViewSutra && isViewVritti;

  useEffect(() => {
    const fetching = async () => {
      try {
        const pathC = `/yogasutra/sRlub19VnFbWvEfx4nGi/Chapter${selectedChapter}`;
        const refC = collection(database, pathC);
        getDocs(refC).then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            setidC(`${doc.id}`);
          });
        });
        if (idC) {
          const documentPath = `/yogasutra/sRlub19VnFbWvEfx4nGi/Chapter${selectedChapter}/${idC}`;
          const docRef = doc(database, documentPath);
          const docSanpshot = await getDoc(docRef);
          if (docSanpshot.exists) {
            const SutraData = docSanpshot.data();
            if (SutraData !== undefined && SutraData !== null) {
              const SutraArrays = Object.entries(SutraData).map(([key, value]) => ({
                key,
                value,
              }));
              setOptionLength(SutraArrays.length / 3);
              const Sutra = SutraData[`Sutra${selectedSutra}`];
              const Bhasya = SutraData[`Bhashya${selectedSutra}`];
              const Vritti = SutraData[`Vritti${selectedSutra}`];
              setSutraContent(Sutra);
              setBhasyaContent(Bhasya);
              setVrittiContent(Vritti);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching sutras content: ", error);
      }
    };
    fetching();
  }, [idC, selectedChapter, selectedSutra]);
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">YogaSutra</h1>
                <div className="region region-content">
                  <div className="content-y">
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
                    </div>
                    <div className="choice">
                      <div className="choice-view">
                        <label htmlFor="_sutra">Sutra</label>
                        <div>
                          <input
                            type="checkbox"
                            id="_sutra"
                            className="choice-box"
                            defaultChecked
                            onClick={() => handleCheckboxChange(1)}
                          ></input>
                        </div>
                      </div>
                      <div className="choice-view">
                        <label htmlFor="_Bhasya">Bhasya</label>
                        <div>
                          <input
                            type="checkbox"
                            id="_Bhasya"
                            className="choice-box"
                            defaultChecked
                            onClick={() => handleCheckboxChange(2)}
                          ></input>
                        </div>
                      </div>
                      <div className="choice-view">
                        <label htmlFor="_vritti">Vritti</label>
                        <div>
                          <input
                            type="checkbox"
                            id="_vritti"
                            className="choice-box"
                            defaultChecked
                            onClick={() => handleCheckboxChange(3)}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-content">
                  <div className="c-dis-sutra">
                    <div
                      className={`_sutra ${
                        isViewSutra ? "view_sutra is-hidden-mobile is-hidden-desktop " : ""
                      }`}
                    >
                      <div className="v-fi_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>सूत्र</b>
                            <br />
                          </font>
                        </p>
                        <div className="hov-parent">
                          <p className="text-center h-fonts">
                            <font id={shsId} className="fw-normal size-6 line-150">
                              {SutraContent
                                ? SutraContent.split("।")
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
                                : "Sutra not found."}
                            </font>
                          </p>
                          <div id="shareTop" className="hov-child ml-auto mr-1 p-absolute">
                            <div className="d-flex flex-row">
                              <div className="">
                                <button
                                  className="d-flex vertical-center-children horizontal-center bg-transparent border-0 text-typo rounded-full h-8 w-8 bg-transparent border-0 text-typo cursor-pointer"
                                  aria-expanded="false"
                                  onClick={(event) => {
                                    handleClick(event);
                                    setShareTC("sutra");
                                  }}
                                >
                                  <i
                                    ref={shareRefS}
                                    data-share-s
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
                    <div
                      className={`_bhasya ${
                        isViewBhasya ? "view_bhasya is-hidden-mobile is-hidden-desktop" : ""
                      }`}
                    >
                      <div className="v-fi_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>भाष्य</b>
                            <br />
                          </font>
                        </p>
                        <div className="hov-parent">
                          <p className="text-center h-fonts">
                            <font id={shbId} className="fw-normal size-6 line-150">
                              {BhasyaContent
                                ? BhasyaContent.split("।")
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
                                : "Bhasya not found."}
                            </font>
                          </p>
                          <div id="shareTop" className="hov-child ml-auto mr-1 p-absolute">
                            <div className="d-flex flex-row">
                              <div className="">
                                <button
                                  className="d-flex vertical-center-children horizontal-center bg-transparent border-0 text-typo rounded-full h-8 w-8 bg-transparent border-0 text-typo cursor-pointer"
                                  aria-expanded="false"
                                  onClick={(event) => {
                                    handleClick(event);
                                    setShareTC("bhasya");
                                  }}
                                >
                                  <i
                                    ref={shareRefB}
                                    data-share-b
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
                    <div
                      className={`_vritti ${
                        isViewVritti ? "view_vritti is-hidden-mobile is-hidden-desktop" : ""
                      }`}
                    >
                      <div className="v-fi_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>भोजवृत्ति</b>
                            <br />
                          </font>
                        </p>
                        <div className="hov-parent">
                          <p className="text-center h-fonts">
                            <font id={shvId} className="fw-normal size-6 line-150">
                              {VrittiContent
                                ? VrittiContent.split("।")
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
                                : "Vritti not found."}
                            </font>
                          </p>
                          <div id="shareTop" className="hov-child ml-auto mr-1 p-absolute">
                            <div className="d-flex flex-row">
                              <div className="">
                                <button
                                  className="d-flex vertical-center-children horizontal-center bg-transparent border-0 text-typo rounded-full h-8 w-8 bg-transparent border-0 text-typo cursor-pointer"
                                  aria-expanded="false"
                                  onClick={(event) => {
                                    handleClick(event);
                                    setShareTC("vritti");
                                  }}
                                >
                                  <i
                                    ref={shareRefV}
                                    data-share-v
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
                    {isViewBhasya && isViewSutra && isViewVritti ? (
                      <></>
                    ) : (
                      <>
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
                                <div className="whichTranslation">
                                  <span
                                    className={`_sutra ${
                                      isViewSutra
                                        ? "view_sutra is-hidden-mobile is-hidden-desktop "
                                        : ""
                                    }`}
                                    onClick={() => setWhichSutra(1)}
                                  >
                                    {whichSutra === 1 ? "Sutra" : "S"}
                                  </span>
                                  <span
                                    className={`_bhasya ${
                                      isViewBhasya
                                        ? "view_bhasya is-hidden-mobile is-hidden-desktop"
                                        : ""
                                    }`}
                                    onClick={() => setWhichSutra(2)}
                                  >
                                    {whichSutra === 2 ? "Bhasya" : "B"}
                                  </span>
                                  <span
                                    className={`_vritti ${
                                      isViewVritti
                                        ? "view_vritti is-hidden-mobile is-hidden-desktop"
                                        : ""
                                    }`}
                                    onClick={() => setWhichSutra(3)}
                                  >
                                    {whichSutra === 3 ? "Vritti" : "V"}
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
                      </>
                    )}
                  </div>
                </div>
                {areAnyCheckboxesChecked && <p>At least one Sutra's is checked.</p>}
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
