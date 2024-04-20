import {useEffect} from 'react';

export default function TextDetails() {
  useEffect(() => {
    document.title = 'Text Details | Gita';

    return () => {
      document.title = 'Text Details | Gita';
    };
  }, []);
  return (
    <div className='container'>
      <div className='con-wrap'>
        <div className='c-si-wrap'>
          <div id='content'>
            <section id='post-content' role='main'>
              <h1 className='pa-title'>Srimad Bhagavadgita Details</h1>
              <div className='fi-items'>
                <p>
                  <b>Bhagavadgita </b>
                  with the Commentary of Sankaracharya translated by Swami
                  Gambhirananda (1995, Advaita Ashrama, Calcutta)
                  <br />
                  <b>Gita Bhashya</b> [Commentary by Sri Ramanuja]
                  <br />
                  <b>Gitarthasangraha by Sri Abhinavagupta</b>
                </p>
                <p>
                  <b>Srimad Bhagavadgita</b>
                  <br />
                  <b>Srimad Bhagavadgita Sankarabhashya</b> [Commentary by Sri
                  Sankaracharya]
                  <br />
                  <b>Srimadbhagavadgita translated by Swami Tejomayananda</b>
                  (1993, Central Chinmaya Mission Trust, Bombay) [Hindi
                  translation of The Holy Geeta by Swami Chinmayananda]
                  <br />
                  <b>
                    Srimadbhagavadgita with Gitarthasangraha of Abhinavagupta
                    Part 1 &amp; 2: Translation by Dr. S Sankaranarayan
                  </b>
                  (1985, Sri Venkateswara University, Tirupati)
                  <br />
                  <b>Srimadbhagavadgita: Sadhaka Sanjivani </b>(Hindi
                  Commentary) by Swami Ramsukhdas (1985, Gita Press, Gorakhpur)
                  <br />
                  <b>
                    Srimadbhagavadgita: with Hindi translation of Sankarabhashya
                    translated by Sri Harikrishandas Goenka
                  </b>
                  (1998, Gita Press, Gorakhpur)
                  <br />
                  <b>The Bhagavad Gita by Swami Sivananda</b> (1995, The Divine
                  Life Society, Shivanandanagar)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
