import React from 'react'
import { createPortal } from 'react-dom'
import SharePop from '../../../componets/SharePop'
import { ContentPropTypes } from '../../../Function/PropTypes'
import { TranslateView } from '../../../componets/TranslateView'
const BrahmaSutraComponent = ({
  OptionLength,
  _changeCodeToEn,
  _changeCodeToHi,
  clickEvent,
  handleChapterChange,
  handleClick,
  handleQuarterChange,
  handleSutraChange,
  _hideTrans,
  hideTrans,
  isHindiTranslate,
  isSharePopVisible,
  selectedChapter,
  selectedQuarter,
  selectedSutra,
  shareRef,
  shareTitle,
  shId,
  site,
  sutraContent,
  translateContent,
}) => {
  return (
    <div className='container'>
      <div className='con-wrap'>
        <div className='c-si-wrap'>
          <div id='content'>
            <section id='post-content' role='main'>
              <h1 className='pa-title'>BrahmaSutra </h1>
              <div className='region region-content'>
                <div className='content'>
                  <div>
                    <div className='filter'>
                      <div className='v-ex-widgets clearfix'>
                        <div id='edit-language-wrapper' className='v-ex-widget'>
                          <label htmlFor='edit-language' className='fw-normal'>
                            Script
                          </label>
                          <div>
                            <div className='views-widget'>
                              <select id='edit-language' defaultValue={'dv'}>
                                <option value={'dv'}>Devanagari</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div id='edit-field-chapter' className='v-ex-widget'>
                          <label htmlFor='sel-chapters' className='fw-normal'>
                            Chapter
                          </label>
                          <div>
                            <div className='views-widget'>
                              <select
                                id='sel-chapters'
                                value={selectedChapter}
                                onChange={handleChapterChange}>
                                {Array.from({ length: 4 }, (_, index) => (
                                  <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div id='edit-field-shloka' className='v-ex-widget'>
                          <label htmlFor='sel-quarter' className='fw-normal'>
                            Quarter
                          </label>
                          <div>
                            <div className='views-widget'>
                              <select
                                id='sel-quarter'
                                value={selectedQuarter}
                                onChange={handleQuarterChange}>
                                {Array.from({ length: 4 }, (_, index) => (
                                  <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div id='edit-field-shloka' className='v-ex-widget'>
                          <label htmlFor='sel-sutra' className='fw-normal'>
                            Sutra
                          </label>
                          <div>
                            <div className='views-widget'>
                              <select
                                id='sel-sutra'
                                value={selectedSutra}
                                onChange={handleSutraChange}>
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
                    <div className='view-content'>
                      <div className='c-dis-sutra'>
                        <div>
                          <div className='v-fi_sutra'>
                            <p className='text-center'>
                              <font className='color-dark-aubergine fw-normal size-6'>
                                <b>BrahmaSutra</b>
                                <br />
                              </font>
                            </p>
                            <div className='hov-parent'>
                              <div id='shareTop' className='hov-child ml-auto mr-1 p-absolute'>
                                <div className='d-flex flex-row'>
                                  <div className=''>
                                    <button
                                      className='d-flex vertical-center-children horizontal-center bg-transparent border-0 text-typo rounded-full h-8 w-8 bg-transparent border-0 text-typo cursor-pointer'
                                      aria-expanded='false'
                                      onClick={event => {
                                        handleClick(event)
                                      }}>
                                      <i ref={shareRef} className='sdf material-symbols-outlined'>
                                        share
                                      </i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <p className='h-fonts'>
                                <font id={shId} className='text-center fw-normal size-6 line-150'>
                                  {sutraContent
                                    ? sutraContent
                                        .split(' ')
                                        .map((line, index) => (
                                          <React.Fragment key={index}>{line + ' '}</React.Fragment>
                                        ))
                                    : `Sutra not found.`}
                                </font>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='l-t-action'>
                          <div onClick={_hideTrans}>{hideTrans ? 'Hide' : 'Show'}</div>
                        </div>
                        {hideTrans && (
                          <TranslateView
                            _changeCodeToEn={_changeCodeToEn}
                            _changeCodeToHi={_changeCodeToHi}
                            isHindiTranslate={isHindiTranslate}
                            translateContent={translateContent}
                          />
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
            isLargeLength={true}
          />,
          document.body
        )}
    </div>
  )
}
export default BrahmaSutraComponent

BrahmaSutraComponent.propTypes = ContentPropTypes
