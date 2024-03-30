import {useEffect} from 'react';
import {Link} from 'react-router-dom';
export default function SriIntro() {
  useEffect(() => {
    document.title = 'Srimad Intro | Gita';

    return () => {
      document.title = 'Srimad Intro | Gita';
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <div className="pa-title">
                  श्रीमद् भगवद्गीता
                  <h1>
                    <Link to="/srimad">View Shloka</Link>
                  </h1>
                </div>
                <div className="fi-items">
                  <h1 className="size-6 color-dark-blue">
                    INTRODUCTION TO THE BHAGAVADGITA
                  </h1>

                  <p className="size-7 fw-normal">
                    The Bhagavadgita, or the Song of the Lord, is a dialogue
                    between Krishna, an incarnation of Vishnu, and his friend
                    and disciple, Arjuna. This dialogue takes place in the
                    Bhishma Parva of the Mahabharata. The Bhagavadgita is
                    composed of 700 (or 701) shlokas (verses) arranged in 18
                    chapters. It is one of the best-known philosophical texts of
                    Hinduism, and is said to contain the essence of Upanishadic
                    thought.
                  </p>

                  <p className="size-7 fw-normal">
                    The Bhagavadgita occurs just before the great battle of
                    Mahabharata begins. The army mustered by the five Pandava
                    brothers was to fight the battle against the army of the
                    Pandava’s cousin, Duryodhana, who had robbed them (the
                    Pandavas) of their rightful kingdom and further, refused to
                    participate in any plans for a compromise. After making all
                    possible attempts to peacefully get back their kingdom, or
                    even the right to own a mere five villages in the kingdom,
                    the Pandava brothers decided to fight a war to gain justice.
                  </p>

                  <p className="size-7 fw-normal">
                    Arjuna, the third of the five Pandava princes, was perhaps
                    the greatest and most renowned warrior-hero in the Pandava
                    army. Before the battle began, both Duryodhana and Arjuna
                    went to Krishna to seek his aid. Krishna said that he would
                    not personally lift weapons and fight in the battle, but the
                    cousins could choose to have him, unarmed, on their side, or
                    to have the use of his large army. Arjuna chose to have
                    Krishna with him, and Duryodhana was delighted to add the
                    vast, skilled army of Krishna to his forces. Krishna agreed
                    to drive Arjuna’s chariot and thus to be with him
                    throughtout the battle.
                  </p>

                  <p className="size-7 fw-normal">
                    Just before the fighting commenced, Arjuna asked Krishna to
                    place his chariot between the two armies, so that he could
                    take a good look at his enemy. In the enemy ranks, Arjuna
                    saw his cousins, other relatives and his teachers. At this
                    crucial moment, Arjuna’s attachment to his preceptors and
                    family came to the fore, and doubt entered his mind as to
                    the ‘rightness’ of the battle. In his confusion, he no
                    longer knew the course of action that he should take, and he
                    turned to Krishna for guidance. Krishna talked to him,
                    helping him to examine his own motives and desires, and
                    showing him ways to rise above the limitations of his own
                    personality to do what was best for himself and good for
                    society. This dialogue between Krishna and Arjuna, is the
                    Bhagavadgita.
                  </p>

                  <p className="size-7 fw-normal">
                    The eighteen chapters of the Bhagavadgita are classified as
                    ‘yogas’, starting with the ‘yoga’ of Arjuna’s depression and
                    ending with the yoga of ‘liberation through renunciation’.
                    The eighteen chapters are:
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 1: अर्जुनविषादयोग - arjunavishadayoga The Yoga of
                    The Despondancy of Arjuna
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 2: संख्यायोग - sankhyayoga The Yoga of Knowledge
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 3: कर्मयोग - karmayoga The Yoga of Action
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 4: ज्ञानविभगयोग - jyanavibhagayoga The Yoga of The
                    Division of Wisdom
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 5: कर्मसंन्यासयोग - karmasannyasayoga The Yoga of
                    Renunciation of Action
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 6: ध्यानयोग - dhyanayoga The Yoga of Meditation
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 7: ज्ञानविज्ञानयोग - gyanavigyanayoga The Yoga of
                    Wisdom and Realisation
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 8: अक्षरब्रह्मयोग - aksharabrahmayoga The Yoga of
                    The Imperishable Brahman
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 9: राजविद्याराजगुह्ययोग - rajavidyarajaguhyayoga The
                    Yoga of The Kingly Science and the Kingly Secret
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 10: विभूतियोग - vibhutiyoga The Yoga of The Divine
                    Glories
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 11: विस्वरूपदर्शनयोगा - visvarupadarshanayoga The
                    Yoga of The Vision of the Cosmic Form
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 11: विस्वरूपदर्शनयोगा - visvarupadarshanayoga The
                    Yoga of The Vision of the Cosmic Form
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 13: क्षेत्रक्षेत्रविभागयोगा -
                    kshetrakshetravibhagayoga The Yoga of The Distinction
                    Between the Field and the Knower of the Field
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 14: गुणत्रयविभागयोग - gunatrayavibhagayoga The Yoga
                    of The Division of the Three Gunas
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 15: पुरुषोत्तमयोग - purushottamayoga The Yoga of The
                    Supreme Spirit
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 16: दैवासुरसम्पद्विभागयोग -
                    daivasurasampadvibhagayoga The Yoga of The Division Between
                    the Divine and the Demoniacal
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 17: श्रद्धात्रयविभागयोग - sraddhatrayavibhagayoga
                    The Yoga of The Division of the Threefold Faith
                  </p>

                  <p className="size-7 fw-normal">
                    Chapter 18: मोक्षसंन्यासयोग - mokshasannyasayoga The Yoga of
                    Liberation By Renunciation
                  </p>

                  <h1 className="size-6 color-dark-blue">
                    INTRODUCTION TO THE SUPERSITE
                  </h1>

                  <p className="size-7 fw-normal">
                    This is an effort to bring the heritage of Indian Scriptures
                    to the Internet. The project attempts to harness modern
                    technology to make one of the most ancient sources of wisdom
                    in the world accessible to the contemporary reader. On this
                    Supersite, you can view the entire Bhagavadgita in its
                    original language (Sanskrit), or in English or Hindi
                    translations. The text can be viewed in any one of ten
                    Indian language scripts (Assamese, Bengali, Devanagari,
                    Gujarati, Kannada, Malayalam, Oriya, Punjabi, Tamil,Telegu),
                    or in Roman (English script). The Supersite also contains
                    many Classical and Contemporary Commentaries on the
                    Bhagavadgita, together with translations in Hindi and
                    English, and many more texts are on the anvil.
                  </p>

                  <h1 className="size-6 color-dark-blue">
                    MULTILINGUAL BHAGAVADGITA
                  </h1>

                  <p className="size-7 fw-normal">
                    This Supersite allows you to view the Sanskrit slokas
                    [verses] of the Bhagavadgita in 11 language scripts:
                    Assamese, Bengali, Devanagari, Gujarati, Kannada, Malayalam,
                    Oriya, Punjabi, Roman, Tamil and Telegu. When viewing the
                    texts you have selected, choose the desired script from the
                    drop-down list of available scripts in the Navigation Window
                    at the top of the page; the slokas [verses] of the
                    Bhagavadgita will be phonetically transliterated into the
                    script of your choice. The transliteration is not yet
                    perfect, especially for those languages where spellings are
                    not phonetic and words are constructed in ways that are
                    unique to that language. We welcome suggestions/corrections
                    to the multilingual version. If you would like to volunteer
                    to proof-read any of the Indian language texts, please
                    contact us.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
