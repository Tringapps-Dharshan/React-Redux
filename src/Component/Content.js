import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateName } from './Counter'

export default function Content() {
  const dispatch = useDispatch()
  const [sendData, setSendData] = useState('');

  function handleSubmit() {
    if (sendData !== '') {
      dispatch(updateName(sendData))
      setSendData('');
    }

  }
  function onChangetext(event) {
    setSendData(event.target.value);
  }
  return (
    <div className='main-content'>
      <div className='display-details'>
        <input placeholder='Username' value={sendData} onChange={onChangetext} type="text" className='input-text'/>
        <button onClick={handleSubmit} className='input-button'>submit</button>
      </div>
    </div>
  )
}