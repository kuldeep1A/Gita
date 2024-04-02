import {useState} from 'react';

const WorkStationFun = () => {
  const [dbC, setDbc] = useState('');

  return {
    dbC,
    setDbc,
  };
};
export default WorkStationFun;
