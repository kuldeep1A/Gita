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

export default function Srimad() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedSholka, setSelectedSholka] = useState(1);
  const [OptionLength, setOptionLength] = useState(1);
  const [shlokaContent, setsholaContent] = useState("");
  const [idx, setidx] = useState("");

  const handleChapterChange = (event) => {
    const newChapter = parseInt(event.target.value, 10);
    setSelectedChapter(newChapter);
    setSelectedSholka(1);
  };

  const handleSholkaChange = (event) => {
    const newSholka = parseInt(event.target.value, 10);
    setSelectedSholka(newSholka);
  };
  useEffect(() => {
    const fetchShlokaContent = async () => {
      try {
        const path = `bhagavadgita/3T3Q1BxO62exEMBlREJR/Chapter${selectedChapter}`;

        const ref = collection(firestore, path);

        getDocs(ref).then((sanpshot) => {
          sanpshot.docs.forEach((doc) => {
            setidx(`${doc.id}`);
          });
        });

        var documentPath = `bhagavadgita/3T3Q1BxO62exEMBlREJR/Chapter${selectedChapter}/${idx}`;

        const docRef = doc(firestore, documentPath);
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
          const shloka = shlokaData[`shloka${selectedSholka}`];

          setsholaContent(shloka);
        } else {
          setsholaContent("");
        }
      } catch (error) {
        console.error("Error fetching shloka content:", error);
      }
    };

    fetchShlokaContent();
  }, [selectedChapter, selectedSholka, idx]);

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
                                  value={selectedSholka}
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
                            <div className="view-field">
                              <p className="text-center">
                                <font className="color-dark-aubergine fw-normal size-6">
                                  <b>मूल श्लोकः</b>
                                  <br />
                                </font>
                              </p>
                              <p className="text-center h-fonts">
                                <font className="fw-normal size-6">
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
