import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";
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
    console.log(sutraContent);
    const fetchSutraContent = async () => {
      try {
        console.log("start");
        const pathC = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}`;
        const refC = collection(firestore, pathC);

        getDocs(refC).then((sanpshot) => {
          sanpshot.docs.forEach((doc) => {
            setidC(`${doc.id}`);
          });
        });

        const pathQ = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}/${idC}/Quarter${selectedQuarter}/`;
        const refQ = collection(firestore, pathQ);

        getDocs(refQ).then((sanpshot) => {
          sanpshot.docs.forEach((doc) => {
            setidQ(`${doc.id}`);
          });
        });

        var documentPath = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}/${idC}/Quarter${selectedQuarter}/${idQ}`;
        console.log(documentPath);

        const docRef = doc(firestore, documentPath);
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
                <h1 className="page-title"> </h1>
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
                                  <b>Main</b>
                                  <br />
                                </font>
                              </p>
                              <p className="text-center">
                                <font className="fw-normal size-7">
                                  {sutraContent || "Sutra not found"}
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
