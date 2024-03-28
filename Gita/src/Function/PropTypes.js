import PropTypes from "prop-types";

export const SharePopTypes = {
  e: PropTypes.any.isRequired,
  Idx: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isLargeLength: PropTypes.bool.isRequired,
};

export const TranslateViewTypes = {
  _changeCodeToEn: PropTypes.func.isRequired,
  _changeCodeToHi: PropTypes.func.isRequired,
  isHindiTranslate: PropTypes.bool.isRequired,
  translateContent: PropTypes.string.isRequired,
};

export const EmailLinkPropTypes = {
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};
