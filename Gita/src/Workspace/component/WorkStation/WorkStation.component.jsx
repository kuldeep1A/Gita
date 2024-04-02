import WorkStationFun from './WorkStation.fun';

const WorkStationComponent = () => {
  const {dbC, setDbc} = WorkStationFun();
  console.log(dbC);
  return (
    <div className='workstation'>
      <div className='dbAc'>
        <div className='sel-db'>
          <label htmlFor=''>Database Collection</label>
          <select
            name='db-col'
            id='db-col'
            onChange={_ => {
              setDbc(_.target.value);
            }}
            defaultChecked>
            <option value='n-non'>NnN</option>
            <option value='c-bra'>Brahmasutra</option>
            <option value='c-ash'>Ashtavakra</option>
            <option value='c-kap'>Kapila</option>
            <option value='c-sri-a'>Sriam</option>
            <option value='c-sru'>Sruti</option>
            <option value='c-udd'>Uddhava</option>
            <option value='c-vib'>Vibhishana</option>
            <option value='c-sri-b'>Srimad</option>
            <option value='c-val'>Valmikiramayana</option>
            <option value='c-yog'>Yogasutra</option>
          </select>
        </div>
        <div className='sel-db'>
          <label htmlFor=''>Database Collection</label>
          <select
            name='db-col'
            id='db-col'
            onChange={_ => {
              setDbc(_.target.value);
            }}
            defaultChecked>
            <option value='n-non'>NnN</option>
            <option value='c-bra'>Brahmasutra</option>
            <option value='c-ash'>Ashtavakra</option>
            <option value='c-kap'>Kapila</option>
            <option value='c-sri-a'>Sriam</option>
            <option value='c-sru'>Sruti</option>
            <option value='c-udd'>Uddhava</option>
            <option value='c-vib'>Vibhishana</option>
            <option value='c-sri-b'>Srimad</option>
            <option value='c-val'>Valmikiramayana</option>
            <option value='c-yog'>Yogasutra</option>
          </select>
        </div>
        <div className='sel-db'>
          <label htmlFor=''>Database Collection</label>
          <select
            name='db-col'
            id='db-col'
            onChange={_ => {
              setDbc(_.target.value);
            }}
            defaultChecked>
            <option value='n-non'>NnN</option>
            <option value='c-bra'>Brahmasutra</option>
            <option value='c-ash'>Ashtavakra</option>
            <option value='c-kap'>Kapila</option>
            <option value='c-sri-a'>Sriam</option>
            <option value='c-sru'>Sruti</option>
            <option value='c-udd'>Uddhava</option>
            <option value='c-vib'>Vibhishana</option>
            <option value='c-sri-b'>Srimad</option>
            <option value='c-val'>Valmikiramayana</option>
            <option value='c-yog'>Yogasutra</option>
          </select>
        </div>
        <div className='sel-db'>
          <label htmlFor=''>Database Collection</label>
          <select
            name='db-col'
            id='db-col'
            onChange={_ => {
              setDbc(_.target.value);
            }}
            defaultChecked>
            <option value='n-non'>NnN</option>
            <option value='c-bra'>Brahmasutra</option>
            <option value='c-ash'>Ashtavakra</option>
            <option value='c-kap'>Kapila</option>
            <option value='c-sri-a'>Sriam</option>
            <option value='c-sru'>Sruti</option>
            <option value='c-udd'>Uddhava</option>
            <option value='c-vib'>Vibhishana</option>
            <option value='c-sri-b'>Srimad</option>
            <option value='c-val'>Valmikiramayana</option>
            <option value='c-yog'>Yogasutra</option>
          </select>
        </div>
      </div>
      <div className="editor">
        
      </div>
    </div>
  );
};
export default WorkStationComponent;
