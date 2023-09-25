import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase";

export default function Sriram() {
  const [OptionLength, setOptionLength] = useState(1);
  const [selectShloka, setSelectedShloka] = useState(1);
  const [ShlokaContent, setShlokaContent] = useState("");
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
          const shloka = ShlokaData[`Shloka${selectShloka}`];
          setShlokaContent(shloka);
        }
      } catch (error) {
        console.error("Error fetching shloka content: ", error);
      }
    };
    fetchShlokaContent();
  }, [selectShloka]);
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
                                  value={selectShloka}
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
                        <p className="text-center h-fonts">
                          <font className="fw-normal size-6">
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
