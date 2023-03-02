import { Component, useState } from 'react';
import Otp from './Components/Otp'
import View from './Components/View'
import Login from './Components/Login'
import './App.css';

function App() {
  
  const [txnId, setTxnId] = useState(null)
  const [patient, setPatient] = useState(null) 

  return (
      <div>
        {
          txnId == null && patient == null && 
          <Login
            setTxnId={setTxnId}
          />
        }
        {
          txnId != null &&
          <Otp
            txnId={txnId}
            setTxnId={setTxnId}
            setPatient={setPatient}
          />
        }
        {
          patient && 
          <View
            patient={patient} 
          />
        }
      </div>
  )
}

export default App;
