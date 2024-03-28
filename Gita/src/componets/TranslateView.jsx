import { useState } from "react";
import Svgs from "./Svgs";
import { _SpeakInEnHi } from "../Function/utils";
import { useSpeechSynthesis } from "react-speech-kit";
import { TranslateViewTypes } from "../Function/PropTypes";
export const TranslateView = ({
  _changeCodeToEn,
  _changeCodeToHi,
  isHindiTranslate,
  translateContent,
}) => {
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();
  const [audioStatus, setAudioStatus] = useState("aloud");
  const handleSpeak = () => {
    if (speaking) {
      _SpeakInEnHi(false, false, "", speak, voices, cancel);
      setAudioStatus("aloud");
    } else {
      setAudioStatus("loading");
      setTimeout(() => {
        setTimeout(() => {
          setAudioStatus("playing");
        }, 1500);
        _SpeakInEnHi(!isHindiTranslate, isHindiTranslate, translateContent, speak, voices, cancel);
      }, 1000);
      setTimeout(() => {
        setAudioStatus("aloud");
      }, translateContent.length * 100 - 2200);
    }
  };
  const getAudioIcon = () => {
    if (audioStatus === "playing") {
      return Svgs._svgStop();
    } else if (audioStatus === "aloud") {
      return Svgs._svgAloud();
    } else if (audioStatus === "loading") {
      return Svgs._svgLoading();
    }
  };
  return (
    <div className="translate-view">
      <div className="v-fi_sutra">
        <div className="c-lc-action">
          <div>
            <span onClick={_changeCodeToEn}>{isHindiTranslate ? "En" : "English"}</span>
          </div>
          <div>
            <span onClick={_changeCodeToHi}>{isHindiTranslate ? "Hindi" : "Hi"}</span>
          </div>
        </div>
        <div className="hov-parent">
          <p className="text-center h-fonts">
            <font className="fw-normal size-6">{translateContent}</font>
          </p>
          {supported && translateContent !== "Wait for Shloka!" ? (
            <div className="audio-button">
              <div onClick={() => handleSpeak()}>{getAudioIcon()}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
TranslateView.propTypes = TranslateViewTypes;
