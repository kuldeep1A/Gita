import {useEffect, useState} from 'react';
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
  const [path, setPath] = useState('');
  const [shlokasLen, setShlokasLen] = useState(0);
  const [mode, setMode] = useState(0);
  const [field, setField] = useState('');
  const [disappear, setDisappear] = useState(true);
  const [fetchEnable, setFetchEnable] = useState(false);
  const dpath = '/gitas/database';

  const _fetch = () => {
    if (field !== '') {
      console.log('fetch');
      getShloka({field, setData});
      setDisappear(false);
    }
  };

  useEffect(() => {
    // console.log('use 1');
    setSel1V(0);
    setSel2V(0);
    setSel3V(0);
    setData('');
    setDisappear(true);
  }, [dbC]);

  useEffect(() => {
    // console.log('use 2');
    setSel3V(0);
    setShlokasLen(0);
    setData('');
    cSel2V > 0 && path && getShlokasLen({_path: path, setShlokasLen});
  }, [cSel2V, path, mode]);

  useEffect(() => {
    // console.log('use 3');
    setDbc('');
    setData('');
  }, [mode]);

  useEffect(() => {
    setSel2V(0);
    setSel3V(0);
  }, [cSel1V]);

  useEffect(() => {
    const _sdb = ['c-bra', 'c-val', 'c-yog'];
    if (_sdb.includes(dbC)) {
      cSel1V > 0 && cSel2V > 0 && setDisappear(true);
    } else {
      console.log('d', cSel3V);
      cSel1V > 0 && cSel3V === 0 && setDisappear(true);
    }
  }, [cSel1V, cSel2V, cSel3V, dbC]);
  useEffect(() => {
    // console.log('use 4');

    const _sdb = [
      'c-ash',
      'c-kap',
      's-sri',
      'c-sru',
      'c-udd',
      's-vib',
      'c-sri',
      'c-val',
    ];
    if (_sdb.includes(dbC)) {
      cSel1V > 0 && path && getShlokasLen({_path: path, setShlokasLen});
    }
  }, [cSel1V, dbC, path]);

  useEffect(() => {
    // console.log('use 5');
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
  }, [dbC, chV, cSel1V, shlokasLen, cSel2V]);

  useEffect(() => {
    // console.log('use 6');

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
    // console.log('use 7');
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
    chV,
    ckanV,
    csarV,
    cSel3V,
    csutV,
    cSel2V,
    dbC,
    data,
    disappear,
    _fetch,
    fetchEnable,
    mode,
    setData,
    setSel1V,
    setSel3V,
    setSel2V,
    setDbc,
    setMode,
    shlokasLen,
  };
};
export default WorkStationFun;
