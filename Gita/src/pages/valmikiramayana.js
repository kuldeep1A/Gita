import { createPortal } from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { database } from "../firebase";
import { optionData, kandaNo } from "../DATA/OptionData";
import SharePop from "../componets/SharePop";
export default function Valmikiramayana() {
  useEffect(() => {
    document.title = "Valmiki Ramayana | Gita";

    return () => {
      document.title = "Valmiki Ramayana | Gita";
    };
  }, []);
  const [selectedKanda, setSelectedKanda] = useState("BALAKANDA");
  const [selectedSarga, setSelectedSarga] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const balakandaLen = Object.keys(optionData.BALAKANDA).length;
  const ayodhyaLen = Object.keys(optionData.AYODHYAKANDA).length;
  const aranyadaLen = Object.keys(optionData.ARANYAKANDA).length;
  const kishkindaLen = Object.keys(optionData.KISHKINDAKANDA).length;
  const sundaraLen = Object.keys(optionData.SUNDARAKANDA).length;
  const yuddhadaLen = Object.keys(optionData.YUDDHAKANDA).length;
  const [shlokaData, setShlokaData] = useState({});
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = "valmikiramayana";
  var shId = `sh-${selectedKanda}-${selectedSarga}-${selectedShloka}`;
  var shareTitle = `Valmiki Ramayana, Kanda: ${selectedKanda}, Sarga: ${selectedSarga}, Shloka: ${selectedShloka}.`;
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
  const sanEng = (shloka, c, isSans) => {
    var engs = [];
    var all = {};
    if (shloka && c === 0) {
      all = shloka.split("'").filter((line) => line.trim() !== "," && line.trim() !== "");
      c = c + 1;
    }
    var ed = "";
    var sd = all.filter((e) => {
      if (/[a-zA-Z]/.test(e) && !engs.includes(e)) {
        ed = `${ed}${e}`;
      }
      return !/[a-zA-Z]/.test(e);
    });
    engs.push(ed);
    if (isSans) {
      return sd;
    } else {
      return engs;
    }
  };
  const handleKandaChange = (event) => {
    setSelectedKanda(event.target.value);
    setSelectedSarga(1);
    setSelectedShloka(1);
  };
  const handleSargaChange = (event) => {
    const newSarga = parseInt(event.target.value, 10);
    setSelectedSarga(newSarga);
    setSelectedShloka(1);
  };
  const handleShlokaChange = (event) => {
    const newShloka = parseInt(event.target.value, 10);
    setSelectedShloka(newShloka);
  };
  const handleSargaLen = () => {
    if (selectedKanda === "BALAKANDA") {
      return balakandaLen;
    } else if (selectedKanda === "AYODHYAKANDA") {
      return ayodhyaLen;
    } else if (selectedKanda === "ARANYAKANDA") {
      return aranyadaLen;
    } else if (selectedKanda === "KISHKINDAKANDA") {
      return kishkindaLen;
    } else if (selectedKanda === "SUNDARAKANDA") {
      return sundaraLen;
    } else if (selectedKanda === "YUDDHAKANDA") {
      return yuddhadaLen;
    }
  };
  const handleShlokaLen = () => {
    var l = 1;
    if (selectedKanda === "BALAKANDA") {
      l = optionData.BALAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "AYODHYAKANDA") {
      l = optionData.AYODHYAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "ARANYAKANDA") {
      l = optionData.ARANYAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "KISHKINDAKANDA") {
      l = optionData.KISHKINDAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "SUNDARAKANDA") {
      l = optionData.SUNDARAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "YUDDHAKANDA") {
      l = optionData.YUDDHAKANDA[selectedSarga];
      return l;
    }
  };
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false);
    } else {
      setHideTrans(true);
    }
  }
  useEffect(() => {
    const fetchSutraContent = async () => {
      try {
        const pathK = `/valmikiramayana/J9qxm1uTJFUgEKP0fVvF/${selectedKanda}`;
        const refK = collection(database, pathK);
        getDocs(refK).then((sanpshot) => {
          sanpshot.docs.forEach(async (docx) => {
            const idKValue = docx.id;
            if (idKValue) {
              const pathS = `/valmikiramayana/J9qxm1uTJFUgEKP0fVvF/${selectedKanda}/${idKValue}/sarga${selectedSarga}/Shloka${selectedShloka}`;
              const refS = doc(database, pathS);
              const docSnapshot = await getDoc(refS);
              if (docSnapshot.exists()) {
                setShlokaData(docSnapshot.data());
              }
            }
          });
        });
      } catch (error) {
        console.error("Error fetching shloka content:", error);
      }
    };
    fetchSutraContent();
  }, [selectedKanda, selectedSarga, selectedShloka]);
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">Valmiki Ramayana</h1>
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
                          <div id="edit-language-wrapper" className="v-ex-widget">
                            <label htmlFor="edit-language" className="fw-normal">
                              Kanda
                            </label>
                            <div>
                              <div className="views-widget">
                                <select defaultValue={"BALAKANDA"} onChange={handleKandaChange}>
                                  <option value={"BALAKANDA"}>BALAKANDA</option>
                                  <option value={"AYODHYAKANDA"}>AYODHYAKANDA</option>
                                  <option value={"ARANYAKANDA"}>ARANYAKANDA</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id="edit-field-chapter" className="v-ex-widget">
                            <label className="fw-normal">Sarga</label>
                            <div>
                              <div className="views-widget">
                                <select value={selectedSarga} onChange={handleSargaChange}>
                                  {Array.from({ length: handleSargaLen() }, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                      {index + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id="edit-field-shloka" className="v-ex-widget">
                            <label className="fw-normal">Shloka</label>
                            <div>
                              <div className="views-widget">
                                <select value={selectedShloka} onChange={handleShlokaChange}>
                                  {Array.from({ length: handleShlokaLen() }, (_, index) => (
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
                      <div className="c-dis-sutra">
                        <div>
                          <div className="v-fi_sutra">
                            <p className="text-center">
                              <font className="color-dark-aubergine fw-normal size-6">
                                <b>Shloka</b>
                                <br />
                              </font>
                            </p>
                            <div className="hov-parent">
                              <p className="text-center h-fonts">
                                <font id={shId} className="fw-normal size-6 line-100">
                                  {selectedShloka === 1 && shlokaData.content ? (
                                    <React.Fragment>
                                      <>
                                        <span className="d-block">
                                          <span className="d-block eng-title size-8 line-50">
                                            {`[${sanEng(shlokaData.content, 0, false)[0]}]`}
                                          </span>
                                        </span>
                                      </>
                                    </React.Fragment>
                                  ) : (
                                    ""
                                  )}
                                  {selectedShloka === 1 && shlokaData.content
                                    ? sanEng(shlokaData.content, 0, true).map((line, index) => (
                                        <React.Fragment key={index}>
                                          {line.split("'")}
                                          <>
                                            <br />
                                            <br />
                                          </>
                                        </React.Fragment>
                                      ))
                                    : shlokaData.content &&
                                      selectedShloka >= 2 &&
                                      shlokaData.content
                                        .trim()
                                        .includes(
                                          `${kandaNo[selectedKanda]}.${selectedSarga}.${selectedShloka}`,
                                        )
                                    ? shlokaData.content
                                        .split(",")
                                        .filter((line) => line.trim() !== "")
                                        .map((line, index, array) => (
                                          <React.Fragment key={index}>
                                            {line.split("'")}
                                            <>
                                              <br />
                                              <br />
                                            </>
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
                          <div className="translate-view">
                            <div className="v-fi_sutra">
                              <p className="text-left">
                                <font className="color-dark-aubergine fw-normal size-6">
                                  <b>Translate</b>
                                  <br />
                                </font>
                              </p>
                              <p className="h-fonts">
                                <font className="fw-normal size-6 line-150">
                                  {shlokaData.translate}
                                </font>
                              </p>
                              <br />
                              <p className="h-fonts">
                                <font className="fw-normal size-6 line-150">
                                  {shlokaData.description}
                                </font>
                              </p>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_is-database-available-on-kuldeep1a-dataset">
                  <div>
                    <span style={{ marginRight: "10px" }}>KISHKINDAKANDA,</span>
                    <span style={{ marginRight: "10px" }}>SUNDARAKANDA,</span>
                    <span style={{ marginRight: "10px" }}>YUDDHAKANDA</span>
                  </div>
                  <div>
                    <span>
                      <em style={{ color: "red" }}>Not</em> available, it will be{" "}
                      <em style={{ color: "green" }}>updated</em> in our database{" "}
                      <em style={{ color: "green" }}>soon</em>.
                    </span>
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
