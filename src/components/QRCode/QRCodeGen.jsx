import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './style.css';

function QRCodeGen() {
    const [inputValue, setIputValue] = useState('');
    const [QrCode, setQrCode] = useState('');

    function handleGenrateQrCode(){
setQrCode(inputValue);
setIputValue('');
    }
  return (
    <div>
        <div><h1>Generate QR Code</h1></div>
      <div className='qr-code'>
    <input 
    type='text' 
    name='qr-code' 
    value={inputValue}
    placeholder='Type Value to create QR Code' 
    onChange={(e)=> setIputValue(e.target.value)}
    />
    <button 
    onClick={()=>handleGenrateQrCode()}
    disabled = {inputValue && inputValue.trim() !== '' ? false : true }
    >Generate</button>
      </div>
      <div>
        <QRCode id='qr-code-value'  value={QrCode} size={400} bgColor='#fff'/>
      </div>
    </div>
  )
}

export default QRCodeGen
