import { useEffect } from "react";

export default function BrahmasutraAbout() {
  useEffect(() => {
    document.title = "Brahmasutra About | Gita";

    return () => {
      document.title = "Brahmasutra About | Gita";
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">About Brahma Sutra</h1>
                <div className="fi-items">
                  <p className="size-7">
                    Vedanta philosophy acknowledges the Prasthana Trayi as its three authoritative
                    primary sources. The texts comprising the Prasthana Trayi are the Upanishads,
                    the Bhagavadgita and the Brahma Sutra. The Upanishads are the sruti prasthana,
                    the revealed texts (sruti - that which is heard); the Bhagavadgita is the smriti
                    prasthana, composed by sages based on their understanding of the Vedas (smriti -
                    that which is remembered); the Brahma Sutra is the nyaya prasthana, the logical
                    text that sets forth the philosophy systematically (nyaya - logic/order). No
                    study of Vedanta is considered complete without a close examination of the
                    Prasthana Trayi.
                  </p>
                  <p className="size-7">
                    While the Upanishads and the Bhagavadgita are authoritative Vedanta texts, it is
                    in the Brahma Sutra that the teachings of Vedanta are set forth in a systematic
                    and logical order. The Brahma Sutra is known by many names: it is also called
                    the Vedanta Sutra, Uttara-mimamsa Sutra, Shariraka Sutra and the Bhikshu Sutra.
                  </p>
                  <p className="size-7">
                    The Brahma Sutra consists of 555 aphorisms or sutras, in 4 chapters, each
                    chapter being divided into 4 sections each. The first chapter (Samanvaya:
                    harmony) explains that all the Vedantic texts talk of Brahman, the ultimate
                    reality, which is the goal of life. The second chapter (Avirodha: non-conflict)
                    discusses and refutes the possible objections against Vedanta philosophy. The
                    third chapter (Sadhana: the means) describes the process by which ultimate
                    emancipation can be achieved. The fourth chapter (Phala: the fruit) talks of the
                    state that is achieved in final emancipation.
                  </p>
                  <p className="size-7">
                    Indian tradition identifies Badrayana, the author of the Brahma Sutra, with
                    Vyasa, the compiler of the Vedas. Many commentaries have been written on this
                    text, the earliest extant one being the one by Adi Sankara. Later commentators
                    include Bhaskara, Yadavaprakasha, Ramanuja, Keshava, Neelakantha, Madhva,
                    Baladeva, Vallabha, Vijnana Bhikshu, Vacaspati and Padmapada. Among all these,
                    and other commentaries, Sankara&apos;s commentary is considered as an exemplary
                    model of how a commentary should be written, and most commentators are
                    influenced by it, even when they disagree with Sankara&apos;s interpretations.
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
