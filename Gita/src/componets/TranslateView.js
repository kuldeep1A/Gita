import React from "react";
import Svgs from "./Svgs";
import { _SpeakInEnHi } from "../Function/A_Functions";
import { useSpeechSynthesis } from "react-speech-kit";

export const TranslateView = ({
  _changeCodeToEn,
  _changeCodeToHi,
  isHindiTranslate,
  translateContent,
}) => {
  const { speak, voices } = useSpeechSynthesis();
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
          <div className="audio-button">
            <div
              onClick={() => _SpeakInEnHi(!isHindiTranslate, isHindiTranslate, translateContent, speak, voices)}
            >
              {Svgs._svgAloud()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
