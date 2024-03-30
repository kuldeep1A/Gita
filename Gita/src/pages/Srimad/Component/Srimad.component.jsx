import {createPortal} from 'react-dom';
import React from 'react';
import SharePop from '../../../componets/SharePop';
import {ContentPropTypes} from '../../../Function/PropTypes';
const SrimadComponent = ({
  _changeCodeToEn,
  _changeCodeToHi,
  _hideTrans,
  clickEvent,
  handleChapterChange,
  handleClick,
  handleSholkaChange,
  hideTrans,
  isHindiTranslate,
  isSharePopVisible,
  OptionLength,
  selectedChapter,
  selectedShloka,
  shareRef,
  shareTitle,
  shId,
  ShlokaContent,
  site,
  translateContent,
}) => {
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">श्रीमद् भगवद्गीता </h1>
                <div className="region region-content">
                  <div className="content">
                    <div>
                      <div className="filter">
                        <div className="v-ex-widgets clearfix">
                          <div
                            id="edit-language-wrapper"
                            className="v-ex-widget">
                            <label
                              htmlFor="edit-language"
                              className="fw-normal">
                              Script
                            </label>
                            <div>
                              <div className="views-widget">
                                <select defaultValue={'dv'}>
                                  <option value={'dv'}>Devanagari</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id="edit-field-chapter" className="v-ex-widget">
                            <label className="fw-normal">Chapter</label>
                            <div>
                              <div className="views-widget">
                                <select
                                  value={selectedChapter}
                                  onChange={handleChapterChange}>
                                  {Array.from({length: 18}, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                      {index + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id="edit-field-shloka" className="v-ex-widget">
                            <label className="fw-normal">Sholka</label>
                            <div>
                              <div className="views-widget">
                                <select
                                  value={selectedShloka}
                                  onChange={handleSholkaChange}>
                                  {Array.from(
                                    {length: OptionLength},
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    ),
                                  )}
                                </select>
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
                                  <b>मूल श्लोकः</b>
                                  <br />
                                </font>
                              </p>
                              <div className="hov-parent">
                                <p className="text-center h-fonts">
                                  <font id={shId} className="fw-normal size-6">
                                    {ShlokaContent
                                      ? ShlokaContent.split('।')
                                          .filter(line => line.trim() !== '')
                                          .map((line, index, array) => (
                                            <React.Fragment key={index}>
                                              {line.trim()}
                                              {index === 0 ? '।' : ''}
                                              {index === 1 &&
                                              selectedChapter <= 18
                                                ? '।।'
                                                : ''}
                                              {<br />}
                                              {
                                                (index < array.length - 1 && (
                                                  <br />
                                                ),
                                                (<br />))
                                              }
                                            </React.Fragment>
                                          ))
                                      : 'Shloka not found.'}
                                  </font>
                                </p>
                                <div
                                  id="shareBottom"
                                  className="hov-child ml-auto mr-1 p-absolute">
                                  <div className="d-flex flex-row">
                                    <div className="">
                                      <button
                                        className="d-flex vertical-center-children horizontal-center bg-transparent border-0 text-typo rounded-full h-8 w-8 bg-transparent border-0 text-typo cursor-pointer"
                                        aria-expanded="false"
                                        onClick={event => {
                                          handleClick(event);
                                        }}>
                                        <i
                                          ref={shareRef}
                                          className="sdf material-symbols-outlined">
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
                            <div onClick={_hideTrans}>
                              {hideTrans ? 'Hide' : 'Show'}
                            </div>
                          </div>
                          {hideTrans ? (
                            <div className="translate-view">
                              <div className="v-fi_sutra">
                                <div className="c-lc-action">
                                  <div>
                                    <span onClick={_changeCodeToEn}>
                                      {isHindiTranslate ? 'En' : 'English'}
                                    </span>
                                  </div>
                                  <div>
                                    <span onClick={_changeCodeToHi}>
                                      {isHindiTranslate ? 'Hindi' : 'Hi'}
                                    </span>
                                  </div>
                                </div>
                                <div className="hov-parent">
                                  <p className="text-center h-fonts">
                                    <font className="fw-normal size-6">
                                      {translateContent}
                                    </font>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
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
            document.body,
          )}
      </div>
    </>
  );
};

export default SrimadComponent;

SrimadComponent.propTypes = ContentPropTypes;
