import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { database } from "../firebase";

export default function Yogasutra() {
  const [idC, setidC] = useState("");
  const [OptionLength, setOptionLength] = useState(1);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedSutra, setSelectedSutra] = useState(1);
  const [SutraContent, setSutraContent] = useState("");
  const [BhasyaContent, setBhasyaContent] = useState("");
  const [VrittiContent, setVrittiContent] = useState("");
  const [isViewSutra, setIsViewSutra] = useState(false);
  const [isViewBhasya, setIsViewBhasya] = useState(false);
  const [isViewVritti, setIsViewVritti] = useState(false);
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
        setIsViewSutra(!isViewSutra);
        break;
      case 2:
        setIsViewBhasya(!isViewBhasya);
        break;
      case 3:
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
      } catch (error) {
        console.error("Error fetching sutras content: ", error);
      }
    };
    fetching();
  }, [idC, selectedChapter, selectedSutra]);

  return (
    <>
      <div className="container">
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">YogaSutra</h1>
                <div className="region region-content">
                  <div className="content-y">
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
                  <div className="content_display_sutra">
                    <div
                      className={`_sutra ${
                        isViewSutra
                          ? "view_sutra is-hidden-mobile is-hidden-desktop "
                          : ""
                      }`}
                    >
                      <div className="view-field_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>सूत्र</b>
                            <br />
                          </font>
                        </p>
                        <p className="text-center h-fonts">
                          <font className="fw-normal size-6 line-150">
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
                      </div>
                    </div>
                    <div
                      className={`_bhasya ${
                        isViewBhasya
                          ? "view_bhasya is-hidden-mobile is-hidden-desktop"
                          : ""
                      }`}
                    >
                      <div className="view-field_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>भाष्य</b>
                            <br />
                          </font>
                        </p>
                        <p className="text-center h-fonts">
                          <font className="fw-normal size-6 line-150">
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
                      </div>
                    </div>
                    <div
                      className={`_vritti ${
                        isViewVritti
                          ? "view_vritti is-hidden-mobile is-hidden-desktop"
                          : ""
                      }`}
                    >
                      <div className="view-field_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>भोजवृत्ति</b>
                            <br />
                          </font>
                        </p>
                        <p className="text-center h-fonts">
                          <font className="fw-normal size-6 line-150">
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
                      </div>
                    </div>
                  </div>
                </div>
                {areAnyCheckboxesChecked && (
                  <p>At least one Sutra's is checked.</p>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
