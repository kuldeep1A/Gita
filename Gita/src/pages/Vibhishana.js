import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementid: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
initializeApp(firebaseConfig);
const firestore = getFirestore();

export default function Vibhishana() {
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
        const documentPath = `/vibhishana/sJ26lCYr7IwNrElxjTd9`;
        const docRef = doc(firestore, documentPath);
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
                <h1 className="page-title">Vibhishana Gita</h1>
                <div className="region region-content">
                  <div className="content">
                    <div>
                      <div className="filter">
                        <div className="views-exposed-widgets clearfix">
                          <div
                            id="edit-language-wrapper"
                            className="views-exposed-widget"
                          >
                            <label for="edit-language" className="fw-normal">
                              Script
                            </label>
                            <div>
                              <div className="views-widget">
                                <select
                                  id="edit-language"
                                  className="form-select required"
                                >
                                  <option value={"dv"} selected="selected">
                                    Devanagari
                                  </option>
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
                  <div className="content_display_sutra">
                    <div>
                      <div className="view-field_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>Vibhishana Gita</b>
                            <br />
                          </font>
                        </p>
                        <p className="text-center">
                          <font className="fw-normal size-7">
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
