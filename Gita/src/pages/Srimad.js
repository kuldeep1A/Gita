import { createPortal } from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { database } from "../firebase";
import SharePop from "../componets/SharePop";

export default function Srimad() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedShloka, setselectedShloka] = useState(1);
  const [OptionLength, setOptionLength] = useState(1);
  const [shlokaContent, setsholaContent] = useState("");
  const [idx, setidx] = useState("");
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = "srimad";
  var shId = `sh-${site}-${selectedChapter}-${selectedShloka}`;
  var shareTitle = `Srimad Bhagavad Gita, Chapter: ${selectedChapter}, shloka: ${selectedShloka}.`;
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
  const handleChapterChange = (event) => {
    const newChapter = parseInt(event.target.value, 10);
    setSelectedChapter(newChapter);
    setselectedShloka(1);
  };
  const handleSholkaChange = (event) => {
    const newSholka = parseInt(event.target.value, 10);
    setselectedShloka(newSholka);
  };
  useEffect(() => {
    const fetchShlokaContent = async () => {
      try {
        const path = `bhagavadgita/3T3Q1BxO62exEMBlREJR/Chapter${selectedChapter}`;
        const ref = collection(database, path);
        getDocs(ref).then((sanpshot) => {
          sanpshot.docs.forEach((doc) => {
            setidx(`${doc.id}`);
          });
        });
        if (idx) {
          var documentPath = `bhagavadgita/3T3Q1BxO62exEMBlREJR/Chapter${selectedChapter}/${idx}`;
          const docRef = doc(database, documentPath);
          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists) {
            const shlokaData = docSnapshot.data();
            const shlokaArray = Object.entries(shlokaData).map(
              ([shlokaNumber, shloka]) => ({
                shlokaNumber,
                shloka,
              })
            );
            setOptionLength(shlokaArray.length);
            const shloka = shlokaData[`shloka${selectedShloka}`];
            setsholaContent(shloka);
          } else {
            setsholaContent("");
          }
        }
      } catch (error) {
        console.error("Error fetching shloka content:", error);
      }
    };
    fetchShlokaContent();
  }, [selectedChapter, selectedShloka, idx]);

  return (
    <>
      <div className="container">
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">श्रीमद् भगवद्गीता </h1>
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
                            id="edit-field-chapter"
                            className="views-exposed-widget"
                          >
                            <label className="fw-normal">Chapter</label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                  value={selectedChapter}
                                  onChange={handleChapterChange}
                                >
                                  {Array.from({ length: 18 }, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                      {index + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div
                            id="edit-field-shloka"
                            className="views-exposed-widget"
                          >
                            <label className="fw-normal">Sholka</label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                  value={selectedShloka}
                                  onChange={handleSholkaChange}
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
                      <div className="view-content">
                        <div className="content_display">
                          <div>
                            <div className="view-field_sutra">
                              <p className="text-center">
                                <font className="color-dark-aubergine fw-normal size-6">
                                  <b>मूल श्लोकः</b>
                                  <br />
                                </font>
                              </p>
                              <div className="hover-parent">
                                <p className="text-center h-fonts">
                                  <font id={shId} className="fw-normal size-6">
                                    {shlokaContent
                                      ? shlokaContent
                                          .split("।")
                                          .filter((line) => line.trim() !== "")
                                          .map((line, index, array) => (
                                            <React.Fragment key={index}>
                                              {line.trim()}
                                              {index === 0 ? "।" : ""}
                                              {index === 1 &&
                                              selectedChapter <= 18
                                                ? "।।"
                                                : ""}
                                              {<br />}
                                              {
                                                (index < array.length - 1 && (
                                                  <br />
                                                ),
                                                (<br />))
                                              }
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
