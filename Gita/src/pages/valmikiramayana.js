import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { database } from "../firebase";
import { optionData } from "./OptionData";

export default function Valmikiramayana() {
  const [selectedKanda, setSelectedKanda] = useState("BALAKANDA");
  const [selectedSarga, setSelectedSarga] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const balakandaLen = Object.keys(optionData.BALAKNADA).length;
  const ayodhyaLen = Object.keys(optionData.AYODHYAKANDA).length;
  const aranyadaLen = Object.keys(optionData.ARANYAKANDA).length;
  const kishkindaLen = Object.keys(optionData.KISHKINDAKANDA).length;
  const sundaraLen = Object.keys(optionData.SUNDARAKANDA).length;
  const yuddhadaLen = Object.keys(optionData.YUDDHAKANDA).length;
  const [shlokaData, setShlokaData] = useState({});
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
      l = optionData.BALAKNADA[selectedSarga];
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
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">Valmiki Ramayana</h1>
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
                            id="edit-language-wrapper"
                            className="views-exposed-widget"
                          >
                            <label
                              htmlFor="edit-language"
                              className="fw-normal"
                            >
                              Kanda
                            </label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                  defaultValue={"BALAKANDA"}
                                  onChange={handleKandaChange}
                                >
                                  <option value={"BALAKANDA"}>BALAKANDA</option>
                                  <option value={"AYODHYAKANDA"}>
                                    AYODHYAKANDA
                                  </option>
                                  <option value={"ARANYAKANDA"}>
                                    ARANYAKANDA
                                  </option>
                                  <option value={"KISHKINDAKANDA"}>
                                    KISHKINDAKANDA
                                  </option>
                                  <option value={"SUNDARAKANDA"}>
                                    SUNDARAKANDA
                                  </option>
                                  <option value={"YUDDHAKANDA"}>
                                    YUDDHAKANDA
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div
                            id="edit-field-chapter"
                            className="views-exposed-widget"
                          >
                            <label className="fw-normal">Sarga</label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                  value={selectedSarga}
                                  onChange={handleSargaChange}
                                >
                                  {Array.from(
                                    { length: handleSargaLen() },
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
                                    { length: handleShlokaLen() },
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
                      <div className="content_display_sutra">
                        <div>
                          <div className="view-field_sutra">
                            <p className="text-center h-fonts">
                              <font className="fw-normal size-6 line-150">
                                {selectedShloka === 1 && shlokaData.content
                                  ? shlokaData.content
                                  : shlokaData.content
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

                              <font className="fw-normal size-6 line-150">
                                {}
                              </font>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="view-field_sutra">
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
