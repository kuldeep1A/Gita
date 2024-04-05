import React from 'react';
import {createPortal} from 'react-dom';
import SharePop from '../../../componets/SharePop';
import {kandaNo} from '../../../DATA/MoreData';
import {valmikiramayanaPropTypes} from '../../../Function/PropTypes';
const ValmikiramayanaComponent = ({
  _hideTrans,
  clickEvent,
  handleClick,
  handleKandaChange,
  handleSargaChange,
  handleSargaLen,
  handleShlokaChange,
  shlokaOptionLen,
  hideTrans,
  isSharePopVisible,
  sanEng,
  selectedKanda,
  selectedSarga,
  selectedShloka,
  shId,
  shareRef,
  shareTitle,
  shlokaContent,
  shlokaDescription,
  shlokaTranslate,
  site,
}) => {
  return (
    <>
      <div className='container'>
        <div className='con-wrap'>
          <div className='c-si-wrap'>
            <div id='content'>
              <section id='post-content' role='main'>
                <h1 className='pa-title'>Valmiki Ramayana</h1>
                <div className='region region-content'>
                  <div className='content'>
                    <div>
                      <div className='filter'>
                        <div className='v-ex-widgets clearfix'>
                          <div
                            id='edit-language-wrapper'
                            className='v-ex-widget'>
                            <label
                              htmlFor='edit-language'
                              className='fw-normal'>
                              Script
                            </label>
                            <div>
                              <div className='views-widget'>
                                <select defaultValue={'dv'}>
                                  <option value={'dv'}>Devanagari</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div
                            id='edit-language-wrapper'
                            className='v-ex-widget'>
                            <label
                              htmlFor='edit-language'
                              className='fw-normal'>
                              Kanda
                            </label>
                            <div>
                              <div className='views-widget'>
                                <select
                                  defaultValue={'BALAKANDA'}
                                  onChange={handleKandaChange}>
                                  <option value={'BALAKANDA'}>BALAKANDA</option>
                                  <option value={'AYODHYAKANDA'}>
                                    AYODHYAKANDA
                                  </option>
                                  <option value={'ARANYAKANDA'}>
                                    ARANYAKANDA
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id='edit-field-chapter' className='v-ex-widget'>
                            <label className='fw-normal'>Sarga</label>
                            <div>
                              <div className='views-widget'>
                                <select
                                  value={selectedSarga}
                                  onChange={handleSargaChange}>
                                  {Array.from(
                                    {length: handleSargaLen()},
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
                          <div id='edit-field-shloka' className='v-ex-widget'>
                            <label className='fw-normal'>Shloka</label>
                            <div>
                              <div className='views-widget'>
                                <select
                                  value={selectedShloka}
                                  onChange={handleShlokaChange}>
                                  {Array.from(
                                    {length: shlokaOptionLen},
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
                      <div className='c-dis-sutra'>
                        <div>
                          <div className='v-fi_sutra'>
                            <p className='text-center'>
                              <font className='color-dark-aubergine fw-normal size-6'>
                                <b>Shloka</b>
                                <br />
                              </font>
                            </p>
                            <div className='hov-parent'>
                              <p className='text-center h-fonts'>
                                <font
                                  id={shId}
                                  className='fw-normal size-6 line-100'>
                                  {selectedShloka === 1 && shlokaContent ? (
                                    <React.Fragment>
                                      <>
                                        <span className='d-block'>
                                          <span className='d-block eng-title size-8 line-50'>
                                            {`[${sanEng(shlokaContent, 0, false)[0]}]`}
                                          </span>
                                        </span>
                                      </>
                                    </React.Fragment>
                                  ) : (
                                    ''
                                  )}
                                  {selectedShloka === 1 && shlokaContent
                                    ? sanEng(shlokaContent, 0, true).map(
                                        (line, index) => (
                                          <React.Fragment key={index}>
                                            {line.split("'")}
                                            <>
                                              <br />
                                              <br />
                                            </>
                                          </React.Fragment>
                                        ),
                                      )
                                    : shlokaContent &&
                                        selectedShloka >= 2 &&
                                        shlokaContent
                                          .trim()
                                          .includes(
                                            `${kandaNo[selectedKanda]}.${selectedSarga}.${selectedShloka}`,
                                          )
                                      ? shlokaContent
                                          .split(',')
                                          .filter(line => line.trim() !== '')
                                          .map((line, index) => (
                                            <React.Fragment key={index}>
                                              {line.split("'")}
                                              <>
                                                <br />
                                                <br />
                                              </>
                                            </React.Fragment>
                                          ))
                                      : shlokaContent
                                        ? shlokaContent
                                        : 'Shloka not found.'}
                                </font>
                              </p>
                              <div
                                id='shareBottom'
                                className='hov-child ml-auto mr-1 p-absolute'>
                                <div className='d-flex flex-row'>
                                  <div className=''>
                                    <button
                                      className='d-flex vertical-center-children horizontal-center bg-transparent border-0 text-typo rounded-full h-8 w-8 bg-transparent border-0 text-typo cursor-pointer'
                                      aria-expanded='false'
                                      onClick={event => {
                                        handleClick(event);
                                      }}>
                                      <i
                                        ref={shareRef}
                                        className='sdf material-symbols-outlined'>
                                        share
                                      </i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='l-t-action'>
                          <div onClick={_hideTrans}>
                            {hideTrans ? 'Hide' : 'Show'}
                          </div>
                        </div>
                        {hideTrans ? (
                          <div className='translate-view'>
                            <div className='v-fi_sutra'>
                              <p className='text-left'>
                                <font className='color-dark-aubergine fw-normal size-6'>
                                  <b>Translate</b>
                                  <br />
                                </font>
                              </p>
                              <p className='h-fonts'>
                                <font className='fw-normal size-6 line-150'>
                                  {shlokaTranslate}
                                </font>
                              </p>
                              <br />
                              <p className='h-fonts'>
                                <font className='fw-normal size-6 line-150'>
                                  {shlokaDescription}
                                </font>
                              </p>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='_is-database-available-on-kuldeep1a-dataset'>
                  <div>
                    <span style={{marginRight: '10px'}}>KISHKINDAKANDA,</span>
                    <span style={{marginRight: '10px'}}>SUNDARAKANDA,</span>
                    <span style={{marginRight: '10px'}}>YUDDHAKANDA</span>
                  </div>
                  <div>
                    <span>
                      <em style={{color: 'red'}}>Not</em> available, it will be{' '}
                      <em style={{color: 'green'}}>updated</em> in our database{' '}
                      <em style={{color: 'green'}}>soon</em>.
                    </span>
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

export default ValmikiramayanaComponent;

ValmikiramayanaComponent.propTypes = valmikiramayanaPropTypes;
