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
  const [SutTypes, setSutTypes] = useState('');
  const [data, setData] = useState('');
  const [path, setPath] = useState('');
  const [shlokasLen, setShlokasLen] = useState(0);
  const [mode, setMode] = useState(0);
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [disappear, setDisappear] = useState(true);
  const [fetchDisable, setFetchDisable] = useState(true);
  const dpath = '/gitas/database';

  const _fetch = () => {
    if (dbC === 'c-bra' && cSel3V > 0) {
      getShloka({field: field2, setData});
      setDisappear(false);
    } else if (
      ['c-sri', 'c-ash', 'c-ava', 'c-kap', 'c-sru', 'c-udd'].includes(dbC) &&
      cSel2V > 0
    ) {
      getShloka({field: field1, setData});
      setDisappear(false);
    } else if (['s-sri', 's-vib'].includes(dbC)) {
      getShloka({field: field1, setData});
      setDisappear(false);
    } else if (dbC === 'c-yog' && cSel3V > 0) {
      getShloka({field: field2, setData});
      setDisappear(false);
    }
  };

  const handleMode = val => {
    setMode(val);
    setDbc('');
    setSel1V(0);
    setSel2V(0);
    setSel3V(0);
    setFetchDisable(true);
    setDisappear(true);
  };

  const handleDbChange = event => {
    const _val = event.target.value;
    setDbc(_val);
    setSel1V(0);
    setSel2V(0);
    setSel3V(0);
    setFetchDisable(true);
    setDisappear(true);
    setData('');
  };

  useEffect(() => {
    if (['s-sri', 's-vib'].includes(dbC) && path) {
      getShlokasLen({_path: path, setShlokasLen});
    }
  }, [dbC, path]);

  const handleChange1 = val => {
    setSel1V(val);
    setSel2V(0);
    setSel3V(0);
    setData('');
    setSutTypes('');
    const _sdb = [
      'c-sri',
      'c-ash',
      'c-ava',
      'c-kap',
      'c-sru',
      'c-udd',
      'c-yog',
    ];
    _sdb.includes(dbC) && setFetchDisable(true);
    _sdb.includes(dbC) && setDisappear(true);
  };

  useEffect(() => {
    const _sdb = ['c-sri', 'c-ash', 'c-ava', 'c-kap', 'c-sru', 'c-udd'];
    if (_sdb.includes(dbC) && cSel1V > 0) {
      getShlokasLen({_path: path, setShlokasLen});
    }
  }, [cSel1V, dbC, path]);

  const handleChange1a = val => {
    setSel1V(val);
    setSel2V(0);
    setSel3V(0);
    setData('');
    const _d = ['s-sri', 's-vib'];
    !_d.includes(dbC) && setShlokasLen(0);
    _d.includes(dbC) && setFetchDisable(false);
    _d.includes(dbC) && setDisappear(true);
  };

  const handleChange2a = val => {
    setSel2V(val);
    setSel3V(0);
    setData('');
    const _sdb = [
      'c-sri',
      'c-ash',
      'c-ava',
      'c-kap',
      'c-sru',
      'c-udd',
      'c-bra',
    ];

    !_sdb.includes(dbC) && setShlokasLen(0);
    _sdb.includes(dbC) && setFetchDisable(false);
    _sdb.includes(dbC) && setDisappear(true);
  };

  useEffect(() => {
    if (dbC === 'c-bra' && cSel2V > 0) {
      getShlokasLen({_path: path, setShlokasLen});
    }
  }, [cSel2V, path, dbC, shlokasLen]);

  const handleChange2b = val => {
    setSutTypes(val); // select 2
    setSel3V(0);
    'c-yog' !== dbC && setShlokasLen(0);
    'c-yog' === dbC && setFetchDisable(true);
    'c-yog' === dbC && setDisappear(true);
  };

  useEffect(() => {
    if (
      'c-yog' == dbC &&
      SutTypes &&
      path !==
        `${dpath}/yogasutra/chapters/Chapter${cSel1V}/shlokas//shlokasdoc`
    ) {
      getShlokasLen({_path: path, setShlokasLen});
    }
  }, [SutTypes, shlokasLen, cSel1V, dpath, dbC, path]);

  const handleChange2c = val => {
    setSel3V(val);
    setData('');
    'c-yog' !== dbC && setShlokasLen(0);
    'c-yog' === dbC && setFetchDisable(false);
    'c-yog' === dbC && setDisappear(true);
  };

  const handleChange3a = val => {
    setSel3V(val);
    setFetchDisable(false);
    setDisappear(true);
    setData('');
  };

  useEffect(() => {
    const dbCValues = {
      'c-sri': 18,
      'c-ash': 20,
      'c-ava': 8,
      'c-kap': 3,
      'c-sru': 2,
      'c-udd': 24,
      'c-yog': 4,
      'c-bra': 4,
    };
    setChV(dbCValues[dbC] || 0);
  }, [dbC]);

  useEffect(() => {
    const paths = {
      'c-ash': `${dpath}/othergitas/collection/ashtavakra/chapters/Chapter${cSel1V}/shlokasdoc`,
      'c-ava': `${dpath}/othergitas/collection/avadhuta/chapters/Chapter${cSel1V}/shlokasdoc`,
      'c-bra': `${dpath}/brahmasutra/chapters/Chapter${cSel1V}/quarters/Quarter${cSel2V}/sutrasdoc`,
      'c-kap': `${dpath}/othergitas/collection/kapila/chapters/Chapter${cSel1V}/shlokasdoc`,
      's-sri': `${dpath}/othergitas/collection/sriram/shlokasdoc`,
      'c-sri': `${dpath}/bhagavadgita/chapters/Chapter${cSel1V}/shlokasdoc`,
      'c-sru': `${dpath}/othergitas/collection/sruti/chapters/Chapter${cSel1V}/shlokasdoc`,
      'c-udd': `${dpath}/othergitas/collection/uddhava/chapters/Chapter${cSel1V}/shlokasdoc`,
      'c-val': `${dpath}/valmikiramayana/kandas/${ckanV}/sargas/sarga${csarV}/shlokasdoc`,
      's-vib': `${dpath}/othergitas/collection/vibhishana/shlokasdoc`,
      'c-yog': `${dpath}/yogasutra/chapters/Chapter${cSel1V}/shlokas/${SutTypes}/shlokasdoc`,
    };
    setPath(paths[dbC] || '');
  }, [SutTypes, dbC, dpath, cSel1V, cSel2V, ckanV, csarV, path]);

  useEffect(() => {
    const fields = {
      'c-ash': `Shloka${cSel2V}`,
      'c-ava': `Shloka${cSel2V}`,
      'c-kap': `Shloka${cSel2V}`,
      's-sri': `Shloka${cSel1V}`,
      'c-sru': `Shloka${cSel2V}`,
      'c-udd': `Shloka${cSel2V}`,
      's-vib': `Shloka${cSel1V}`,
      'c-sri': `shloka${cSel2V}`,
    };
    setField1(fields[dbC]);
  }, [cSel1V, cSel2V, dbC]);

  useEffect(() => {
    if (cSel3V > 0) {
      const fields = {
        'c-bra': `Sutra${cSel3V}`,
        'c-val': `Shloka${cSel3V}`,
        'c-yog': `${SutTypes}${cSel3V}`,
      };
      setField2(fields[dbC] || '');
      setData('');
    }
  }, [SutTypes, cSel3V, dbC, field2]);

  return {
    cSel1V,
    chV,
    ckanV,
    csarV,
    cSel3V,
    SutTypes,
    cSel2V,
    dbC,
    data,
    disappear,
    _fetch,
    fetchDisable,
    mode,
    setData,
    setMode,
    shlokasLen,

    handleDbChange,
    handleMode,
    handleChange1,
    handleChange1a,
    handleChange2b,
    handleChange2a,
    handleChange2c,
    handleChange3a,
  };
};
export default WorkStationFun;
