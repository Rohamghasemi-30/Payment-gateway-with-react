import { useEffect, useRef, useState } from 'react'
import './App.css'
import Background from './components/Background/Background';
import CardBank from './components/CardBank/CardBank';
import { FaCashRegister } from "react-icons/fa";

function App() {
  const userName = useRef(null);


  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() =>{
    userName.current.focus()
  },[])

  return (
<div className='main'>
  <CardBank name={name} accountNumber={accountNumber} expirationDate={expirationDate} cvv={cvv} />
   <div className="container">
    <h1><FaCashRegister /> درگاه پرداخت</h1>
      <input ref={userName}  onChange={(e) => setName(e.target.value)} type="text" placeholder='نام و نام خانوادگی' /><br />
      <input  onChange={(e) => setAccountNumber(e.target.value)} type="number" placeholder='لطفا شماره حساب مورد نظر را وارد کنید' />
      <input  onChange={(e) => setExpirationDate(e.target.value)} className='date' type="date" />
      <input onChange={(e) => setCvv(e.target.value)} className='cvv' type="text" placeholder='cvv خود را وارد کنید'/>
    </div>
</div>
  
  )
}

export default App;
