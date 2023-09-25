import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { database } from "../firebase";

export default function Brahmasutra() {
  const [idC, setidC] = useState("");
  const [idQ, setidQ] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [selectedSutra, setSelectedSutra] = useState(1);
  const [OptionLength, setOptionLength] = useState(1);
  const [sutraContent, setSutraContent] = useState("");
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
  useEffect(() => {
    const fetchSutraContent = async () => {
      try {
        const pathC = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}`;
        const refC = collection(database, pathC);
        getDocs(refC).then((sanpshot) => {
          sanpshot.docs.forEach((doc) => {
            setidC(`${doc.id}`);
          });
        });
        const pathQ = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}/${idC}/Quarter${selectedQuarter}/`;
        const refQ = collection(database, pathQ);
        getDocs(refQ).then((sanpshot) => {
          sanpshot.docs.forEach((doc) => {
            setidQ(`${doc.id}`);
          });
        });
        var documentPath = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}/${idC}/Quarter${selectedQuarter}/${idQ}`;
        const docRef = doc(database, documentPath);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists) {
          const sutraData = docSnapshot.data();
          const sutraArray = Object.entries(sutraData).map(
            ([sutraNumber, sutra]) => ({
              sutraNumber,
              sutra,
            })
          );
          setOptionLength(sutraArray.length);
          const sutra = sutraData[`Sutra${selectedSutra}`];
          setSutraContent(sutra);
        }
      } catch (error) {
        console.error("Error fetching shloka content:", error);
      }
    };
    fetchSutraContent();
  }, [sutraContent, selectedChapter, selectedQuarter, selectedSutra, idC, idQ]);
  return (
    <>
      <div className="container">
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">BrahmaSutra </h1>
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
                                  {Array.from({ length: 4 }, (_, index) => (
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
                            <label className="fw-normal">Quarter</label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                  value={selectedQuarter}
                                  onChange={handleQuarterChange}
                                >
                                  {Array.from({ length: 4 }, (_, index) => (
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
                            <label className="fw-normal">Sutra</label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                  value={selectedSutra}
                                  onChange={handleSutraChange}
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
                        <div className="content_display_sutra">
                          <div>
                            <div className="view-field_sutra">
                              <p className="text-center">
                                <font className="color-dark-aubergine fw-normal size-6">
                                  <b>BrahmaSutra</b>
                                  <br />
                                </font>
                              </p>
                              <p className="h-fonts">
                                <font className="fw-normal size-6 line-150">
                                  {sutraContent
                                    ? sutraContent
                                        .split(" ")
                                        .map((line, index, array) => (
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
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
