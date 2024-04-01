import JsGoogleTranslateFree from '@kreisler/js-google-translate-free';
export const _SpeakInEnHi = (_isEn, _isHi, _content, speak, voices, cancel) => {
  if (_isEn) {
    const _englishMaleVoice = voices.find(voice => voice.lang.startsWith('en'));
    if (_englishMaleVoice && _content) {
      speak({
        text: _content,
        voice: _englishMaleVoice,
      });
    }
  } else if (_isHi) {
    const _hindiFemaleVoice = voices.find(voice => voice.lang.startsWith('hi'));
    if (_hindiFemaleVoice && _content) {
      speak({
        text: _content,
        voice: _hindiFemaleVoice,
      });
    }
  } else {
    cancel();
  }
};
export default function _set_session() {
  if (window.sessionStorage.getItem('isDark') === null) {
    window.sessionStorage.setItem('isDark', 'true');
  } else if (window.sessionStorage.getItem('isDark') === 'true') {
    window.sessionStorage.setItem('isDark', 'false');
  } else if (window.sessionStorage.getItem('isDark') === 'false') {
    window.sessionStorage.setItem('isDark', 'true');
  }
  window.location.reload();
}
export const _translate = async (sansContent, whatcode) => {
  try {
    var lanCode = whatcode ? 'hi' : 'en';
    const translation = await JsGoogleTranslateFree.translate({
      from: 'sa',
      to: lanCode,
      text: sansContent,
    });
    return translation;
  } catch (error) {
    console.error('Trans error:', error);
    return '';
  }
};
export const goTranslate = async ({
  sansContent,
  whatcode,
  setTranslateCotent,
}) => {
  console.log(whatcode);
  if (sansContent.length < 1912) {
    const content = await _translate(sansContent, whatcode);
    if (content !== '') {
      setTranslateCotent(content);
    } else {
      setTranslateCotent('Wait for Shloka!');
    }
  } else {
    setTranslateCotent(
      'Wait for Shloka! Shloka Length must be less than 1912 character.',
    );
  }
};
export let _isDark =
  window.sessionStorage.getItem('isDark') === 'true' ? true : false;
if (window.sessionStorage.getItem('isDark') === null) {
  const _t_hours = new Date().getHours();
  if (_t_hours >= 19 || _t_hours < 7) {
    _isDark = true;
    _set_session();
  } else {
    _isDark = false;
  }
}
