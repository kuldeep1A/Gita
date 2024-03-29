import { OtherGitasPropTypesv1 } from "../../../../Function/PropTypes";
import React from "react";
import { TranslateView } from "../../../../componets/TranslateView";
import SharePop from "../../../../componets/SharePop";
import { createPortal } from "react-dom";
const UddhavaComponent = ({
  selectedChapter,
  handleChapterChange,
  selectedShloka,
  handleShlokaChange,
  OptionLength,
  shId,
  ShlokaContent,
  handleClick,
  shareRef,
  _hideTrans,
  hideTrans,
  _changeCodeToEn,
  _changeCodeToHi,
  isHindiTranslate,
  translateContent,
  isSharePopVisible,
  clickEvent,
  site,
  shareTitle,
}) => {
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">Uddhava Gita</h1>
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
                          <div id="edit-field-chapter" className="v-ex-widget">
                            <label className="fw-normal">Chapter</label>
                            <div>
                              <div className="views-widget">
                                <select value={selectedChapter} onChange={handleChapterChange}>
                                  {Array.from({ length: 24 }, (_, index) => (
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
                                <select value={selectedShloka} onChange={handleShlokaChange}>
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
                  </div>
                </div>
                <div className="view-content">
                  <div className="c_dis">
                    <div>
                      <div className="v-fi_sutra">
                        <p className="text-center">
                          <font className="color-dark-aubergine fw-normal size-6">
                            <b>Uddhava Gita</b>
                            <br />
                          </font>
                        </p>
                        <div className="hov-parent">
                          <p className="text-center h-fonts">
                            <font id={shId} className="fw-normal size-6">
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
                      <TranslateView
                        _changeCodeToEn={_changeCodeToEn}
                        _changeCodeToHi={_changeCodeToHi}
                        isHindiTranslate={isHindiTranslate}
                        translateContent={translateContent}
                      />
                    ) : (
                      <></>
                    )}
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
};

export default UddhavaComponent;
UddhavaComponent.propTypes = OtherGitasPropTypesv1;
