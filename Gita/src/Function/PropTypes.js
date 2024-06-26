import PropTypes from 'prop-types';

export const SharePopTypes = {
  e: PropTypes.any,
  Idx: PropTypes.string,
  site: PropTypes.string,
  title: PropTypes.string,
  isLargeLength: PropTypes.bool,
};

export const TranslateViewTypes = {
  _changeCodeToEn: PropTypes.func,
  _changeCodeToHi: PropTypes.func,
  isHindiTranslate: PropTypes.bool,
  translateContent: PropTypes.string,
};

export const EmailLinkPropTypes = {
  email: PropTypes.string,
  subject: PropTypes.string,
};

export const ContentPropTypes = {
  _changeCodeToEn: PropTypes.func,
  _changeCodeToHi: PropTypes.func,
  _hideTrans: PropTypes.func,
  clickEvent: PropTypes.object,
  handleChapterChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleShlokaChange: PropTypes.func,
  hideTrans: PropTypes.bool,
  isHindiTranslate: PropTypes.bool,
  isSharePopVisible: PropTypes.bool,
  OptionLength: PropTypes.number,
  selectedChapter: PropTypes.number,
  selectedShloka: PropTypes.number,
  shareRef: PropTypes.object,
  shareTitle: PropTypes.string,
  shId: PropTypes.string,
  ShlokaContent: PropTypes.string,
  site: PropTypes.string,
  translateContent: PropTypes.string,
};

export const OtherGitasPropTypesv1 = {
  OptionLength: PropTypes.number,
  ShlokaContent: PropTypes.string,
  _changeCodeToEn: PropTypes.func,
  _changeCodeToHi: PropTypes.func,
  clickEvent: PropTypes.object,
  handleChapterChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleShlokaChange: PropTypes.func,
  _hideTrans: PropTypes.func,
  hideTrans: PropTypes.bool,
  isHindiTranslate: PropTypes.bool,
  isSharePopVisible: PropTypes.bool,
  selectedChapter: PropTypes.number,
  selectedShloka: PropTypes.number,
  shareRef: PropTypes.object,
  shareTitle: PropTypes.string,
  shId: PropTypes.string,
  site: PropTypes.string,
  translateContent: PropTypes.string,
};

export const OtherGitasPropTypesv2 = {
  OptionLength: PropTypes.number,
  ShlokaContent: PropTypes.string,
  _changeCodeToEn: PropTypes.func,
  _changeCodeToHi: PropTypes.func,
  clickEvent: PropTypes.object,
  handleClick: PropTypes.func,
  handleShlokaChange: PropTypes.func,
  _hideTrans: PropTypes.func,
  hideTrans: PropTypes.bool,
  isHindiTranslate: PropTypes.bool,
  isSharePopVisible: PropTypes.bool,
  selectedShloka: PropTypes.number,
  shareRef: PropTypes.object,
  shareTitle: PropTypes.string,
  shId: PropTypes.string,
  site: PropTypes.string,
  translateContent: PropTypes.string,
};

export const YogaSutraPropTypes = {
  _changeCodeToEn: PropTypes.func,
  _changeCodeToHi: PropTypes.func,
  _hideTrans: PropTypes.func,
  areAnyCheckboxesChecked: PropTypes.bool,
  BhasyaContent: PropTypes.string,
  clickEvent: PropTypes.object,
  handleChapterChange: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleSutraChange: PropTypes.func,
  hideTrans: PropTypes.bool,
  isHindiTranslate: PropTypes.bool,
  isSharePopVisible: PropTypes.bool,
  isViewBhasya: PropTypes.bool,
  isViewSutra: PropTypes.bool,
  isViewVritti: PropTypes.bool,
  OptionLength: PropTypes.number,
  selectedChapter: PropTypes.number,
  selectedSutra: PropTypes.number,
  setShareTC: PropTypes.func,
  setWhichSutra: PropTypes.func,
  shbId: PropTypes.string,
  shId: PropTypes.string,
  shareRefB: PropTypes.object,
  shareRefS: PropTypes.object,
  shareRefV: PropTypes.object,
  shareTitle: PropTypes.string,
  shsId: PropTypes.string,
  shvId: PropTypes.string,
  site: PropTypes.string,
  SutraContent: PropTypes.string,
  translateContent: PropTypes.string,
  VrittiContent: PropTypes.string,
  whichSutra: PropTypes.number,
};

export const valmikiramayanaPropTypes = {
  _hideTrans: PropTypes.func,
  clickEvent: PropTypes.object,
  handleClick: PropTypes.func,
  handleKandaChange: PropTypes.func,
  handleSargaChange: PropTypes.func,
  handleSargaLen: PropTypes.func,
  handleShlokaChange: PropTypes.func,
  shlokaOptionLen: PropTypes.number,
  hideTrans: PropTypes.bool,
  isSharePopVisible: PropTypes.bool,
  sanEng: PropTypes.func,
  selectedKanda: PropTypes.string,
  selectedSarga: PropTypes.number,
  selectedShloka: PropTypes.number,
  shId: PropTypes.string,
  shareRef: PropTypes.object,
  shareTitle: PropTypes.string,
  shlokaContent: PropTypes.string,
  shlokaDescription: PropTypes.string,
  shlokaTranslate: PropTypes.string,
  site: PropTypes.string,
};
export const LoginPropTypes = {
  UTN: PropTypes.bool,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  handleAuth: PropTypes.func,
  displayName: PropTypes.string,
  userEmail: PropTypes.string,
  emailVerified: PropTypes.bool,
  photoURL: PropTypes.string,
  logedIn: PropTypes.bool,
};
export const NavPropTypes = {
  isWorkspace: PropTypes.bool,
};
export const WorkspacePropTypes = {
  userEmail: PropTypes.string,
  emailVerified: PropTypes.bool,
};
export const OptionPropTypes = {
  chV: PropTypes.number,
};
export const ShlokasOptionPropTypes = {
  preSel: PropTypes.any,
  cSel3V: PropTypes.number,
  type: PropTypes.string,
  shlokasLen: PropTypes.number,
  handleChange: PropTypes.func,
};
export const ConfrimPropTypes = {
  handleConfirm: PropTypes.func,
  confirm: PropTypes.bool,
  changeData: PropTypes.string,
  update: PropTypes.func,
  mode: PropTypes.number,
};
