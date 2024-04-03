import {useEffect, useState, useCallback} from 'react';
import {getShloka, getShlokasLen} from './services/workstation.service';

const WorkStationFun = () => {
  const [dbC, setDbc] = useState('');
  const [chV, setChV] = useState(0);
  const [cSel1V, setSel1V] = useState(0);
  const [cSel2V, setSel2V] = useState(0);
  const [cSel3V, setSel3V] = useState(0);
  const [ckanV, setCkanV] = useState('BALAKANDA');
  const [csarV, setCsarV] = useState(0);
  const [csutV, setCsutV] = useState('Bhashya');
  const [data, setData] = useState('');
  const [chcode, setChcode] = useState([]);
  const [qucode, setQucode] = useState([]);
  const [shcode, setShcode] = useState([]);
  const [path, setPath] = useState('');
  const [shlokasLen, setShlokasLen] = useState(0);
  const [mode, setMode] = useState(0);
  const [field, setField] = useState('');
  const dpath = '/gitas/database';

  const _fetch = () => {
    if (field !== '') {
      getShloka({field, setData});
    }
  };

  function newCodes(indexs) {
    const newcodes = [];
    for (let index = 0; index < indexs; index++) {
      const ran = Array.from({length: 6}, () =>
        String.fromCharCode(
          Math.floor(Math.random() * 26) + (Math.random() > 0.5 ? 65 : 97),
        ),
      ).join('');
      newcodes[index] = ran;
    }
    return newcodes;
  }
  const shcodeGen = useCallback(shlokasLen => {
    setShcode(newCodes(shlokasLen));
  }, []);

  useEffect(() => {
    console.log('use 1');
    setChcode([]);
    setSel1V(0);
    setSel2V(0);
    setData('');
  }, [dbC]);
  useEffect(() => {
    console.log('use 2');
    setShcode([]);
    setSel3V(0);
    setShlokasLen(0);
    setData('');
    cSel2V > 0 && path && getShlokasLen({_path: path, setShlokasLen});
  }, [cSel2V, path]);

  // useEffect(() => {
  //   console.log('use ex');
  //   cSel1V > 0 &&
  //     path &&
  //     getShlokasLen({_path: path, setShlokasLen}) &&
  //     shcodeGen();
  // }, [cSel1V, dbC, path, shcode, shcodeGen]);

  useEffect(() => {
    console.log('use 3');
    setDbc('');
    setData('');
  }, [mode]);
  useEffect(() => {
    console.log('use 4');

    const chcodeGen = () => {
      setChcode(newCodes(chV));
    };
    const qucodeGen = () => {
      setQucode(newCodes(4));
    };

    const dbCValues = {
      'c-bra': 4,
      'c-ash': 20,
      'c-kap': 3,
      'c-sru': 2,
      'c-udd': 24,
      'c-sri': 18,
      'c-val': 0,
      'c-yog': 4,
    };
    setChV(dbCValues[dbC] || 0);
    chV > 0 && chcode.length === 0 && chcodeGen();
    cSel1V > 0 && qucode.length === 0 && qucodeGen();
    cSel2V > 0 && shcode.length === 0 && shlokasLen > 0 && shcodeGen();
  }, [dbC, chV, cSel1V, chcode, shlokasLen, shcode, cSel2V, qucode, shcodeGen]);
  useEffect(() => {
    console.log('use 5');
    const paths = {
      'c-bra': `${dpath}/brahmasutra/chapters/Chapter${cSel1V}/quarters/Quarter${cSel2V}/sutrasdoc`,
      'c-ash': `${dpath}/othergitas/collection/ashtavakra/chapters/Chapter${cSel1V}/shlokasdoc`,
      'c-kap': `${dpath}/othergitas/collection/kapila/chapters/Chapter${cSel1V}/shlokasdoc`,
      's-sri': `${dpath}/othergitas/collection/sriram/shlokasdoc`,
      'c-sru': `${dpath}/othergitas/collection/sruti/chapters/Chapter${cSel1V}/shlokasdoc`,
      'c-udd': `${dpath}/othergitas/collection/uddhava/chapters/Chapter${cSel1V}/shlokasdoc`,
      's-vib': `${dpath}/othergitas/collection/vibhishana/shlokasdoc`,
      'c-sri': `${dpath}/bhagavadgita/chapters/Chapter${cSel1V}/shlokasdoc`,
      'c-val': `${dpath}/valmikiramayana/kandas/${ckanV}/sargas/sarga${csarV}/shlokasdoc`,
      'c-yog': `${dpath}/yogasutra/chapters/Chapter${cSel1V}/shlokas/${csutV}/shlokasdoc`,
    };
    setPath(paths[dbC] || '');
  }, [dbC, dpath, cSel1V, cSel2V, ckanV, csarV, csutV]);

  useEffect(() => {
    console.log('use 6');
    const fields = {
      'c-bra': `Sutra${cSel3V}`,
      'c-ash': `Shloka${cSel3V}`,
      'c-kap': `Shloka${cSel3V}`,
      's-sri': `Shloka${cSel3V}`,
      'c-sru': `Shloka${cSel3V}`,
      'c-udd': `Shloka${cSel3V}`,
      's-vib': `Shloka${cSel3V}`,
      'c-sri': `Shloka${cSel3V}`,
      'c-val': `Shloka${cSel3V}`,
      'c-yog': `Sutra${cSel3V}`,
    };
    setField(fields[dbC] || '');
    setData('');
  }, [cSel3V, dbC]);

  return {
    cSel1V,
    chcode,
    chV,
    ckanV,
    csarV,
    cSel3V,
    csutV,
    cSel2V,
    dbC,
    data,
    _fetch,
    mode,
    qucode,
    setData,
    setSel1V,
    setSel3V,
    setSel2V,
    setDbc,
    setMode,
    shcode,
    shlokasLen,
  };
};
export default WorkStationFun;
