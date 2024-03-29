import SharePop from "../../../componets/SharePop";
import React from "react";
import { createPortal } from "react-dom";
import { YogaSutraPropTypes } from "../../../Function/PropTypes";

const YogaSutraComponent = ({
  selectedChapter,
  handleChapterChange,
  selectedSutra,
  handleSutraChange,
  OptionLength,
  handleCheckboxChange,
  isViewBhasya,
  isViewSutra,
  isViewVritti,
  shsId,
  SutraContent,
  handleClick,
  setShareTC,
  shareRefB,
  shareRefS,
  shareRefV,
  shareTitle,
  shbId,
  shvId,
  BhasyaContent,
  VrittiContent,
  _hideTrans,
  hideTrans,
  _changeCodeToEn,
  _changeCodeToHi,
  isHindiTranslate,
  setWhichSutra,
  whichSutra,
  translateContent,
  clickEvent,
  shId,
  site,
  isSharePopVisible,
  areAnyCheckboxesChecked,
}) => {
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
                {areAnyCheckboxesChecked && <p>At least one Sutra&apos;s is checked.</p>}
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
};
export default YogaSutraComponent;
YogaSutraComponent.propTypes = YogaSutraPropTypes;
