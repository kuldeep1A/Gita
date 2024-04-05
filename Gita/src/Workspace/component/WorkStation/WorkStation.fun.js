import {useEffect, useState} from 'react';
import {getShloka, getShlokasLen} from './services/workstation.service';

const WorkStationFun = () => {
  const [chV, setChV] = useState(0);
  const [cSel1V, setSel1V] = useState(0);
  const [cSel2V, setSel2V] = useState(0);
  const [cSel3V, setSel3V] = useState(0);
  const [shlokasLen, setShlokasLen] = useState(0);
  const [mode, setMode] = useState(0);
  const [SargaLen, setSargaLen] = useState(0);
  const [dbC, setDbc] = useState('');
  const [KandaTypes, setKandaTypes] = useState('');
  const [SutTypes, setSutTypes] = useState('');
  const [data, setData] = useState('');
  const [cData, setCData] = useState('');
  const [path, setPath] = useState('');
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [data2, setData2] = useState({});
  const [disappear, setDisappear] = useState(true);
  const [fetchDisable, setFetchDisable] = useState(true);
  const [confirm, setConfirm] = useState(false);
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
    } else if (dbC === 'c-val' && cSel3V > 0) {
      getShloka({field: field2, setData: setData2});
      setDisappear(false);
    }
  };

  useEffect(() => {
    const _con = data2['content'];
    _con && setData(_con);
  }, [data2]);

  const handleMode = val => {
    setMode(val);
    setSel1V(0);
    setSel2V(0);
    setSel3V(0);
    setFetchDisable(true);
    setDisappear(true);
    setDbc('');
    setData('');
    setCData('');
    setSutTypes('');
    setKandaTypes('');
    setData2({});
  };

  const handleDbChange = val => {
    setDbc(val);
    setSel1V(0);
    setSel2V(0);
    setSel3V(0);
    setFetchDisable(true);
    setDisappear(true);
    setData('');
    setCData('');
    setSutTypes('');
    setKandaTypes('');
    setData2({});
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
    setCData('');
    setSutTypes('');
    setKandaTypes('');
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
    setCData('');
    setSutTypes('');
    setKandaTypes('');
    const _d = ['s-sri', 's-vib'];
    !_d.includes(dbC) && setShlokasLen(0);
    _d.includes(dbC) && setFetchDisable(false);
    _d.includes(dbC) && setDisappear(true);
  };

  const handleChange1b = val => {
    setKandaTypes(val);
    setSel2V(0);
    setSel3V(0);
    setData('');
    setCData('');
    setData2({});
    setShlokasLen(0);
    setFetchDisable(true);
    setDisappear(true);
  };
  useEffect(() => {
    const _l = {ARANYAKANDA: 75, AYODHYAKANDA: 119, BALAKANDA: 77};
    setSargaLen(_l[KandaTypes]);
  }, [KandaTypes]);

  const handleChange2a = val => {
    setSel2V(val);
    setSel3V(0);
    setData('');
    setCData('');
    setSutTypes('');
    setKandaTypes('');
    setData2({});
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

    'c-val' === dbC && setFetchDisable(true);
    'c-val' === dbC && setDisappear(true);
  };

  useEffect(() => {
    if (['c-bra', 'c-val'].includes(dbC) && cSel2V > 0) {
      getShlokasLen({_path: path, setShlokasLen});
    }
  }, [cSel2V, path, dbC, shlokasLen]);

  const handleChange2b = val => {
    setSutTypes(val); // select 2
    setSel3V(0);
    setData('');
    setCData('');
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

  const handleChange3a = val => {
    setSel3V(val);
    setFetchDisable(false);
    setDisappear(true);
    setData('');
    setCData('');
  };

  const handleChange3b = val => {
    setSel3V(val);
    setData('');
    setCData('');
    !['c-yog', 'c-val'].includes(dbC) && setShlokasLen(0);
    ['c-yog', 'c-val'].includes(dbC) && setFetchDisable(false);
    ['c-yog', 'c-val'].includes(dbC) && setDisappear(true);
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
      'c-val': `${dpath}/valmikiramayana/kandas/${KandaTypes}/sargas/sarga${cSel2V}/shlokasdoc`,
      's-vib': `${dpath}/othergitas/collection/vibhishana/shlokasdoc`,
      'c-yog': `${dpath}/yogasutra/chapters/Chapter${cSel1V}/shlokas/${SutTypes}/shlokasdoc`,
    };
    setPath(paths[dbC] || '');
  }, [SutTypes, dbC, dpath, cSel1V, cSel2V, KandaTypes, path]);

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

  const handleChangeData = _data => {
    setCData(_data);
  };
  useEffect(() => {
    // console.log(cData)
  }, [cData]);
  const handleConfirm = () => {
    setConfirm(!confirm);
  };
  return {
    cData,
    chV,
    confirm,
    cSel1V,
    cSel2V,
    cSel3V,
    data,
    dbC,
    disappear,
    _fetch,
    fetchDisable,
    handleChange1,
    handleChange1a,
    handleChange1b,
    handleChange2b,
    handleChange2a,
    handleChange3b,
    handleChange3a,
    handleChangeData,
    handleConfirm,
    handleDbChange,
    handleMode,
    KandaTypes,
    mode,
    SargaLen,
    shlokasLen,
    SutTypes,
  };
};
export default WorkStationFun;
