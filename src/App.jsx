import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState('');

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearResult = () =>{
    setResult('');
  }

  const calculate = () =>{
    setResult(eval(result).toString());
  }

  return (
    <>
      <div className='calculadora'>

        <input type='text' placeholder='0' id='answer' value={result}/>

        
        <input className='btn especial' type="button" value='AC' onClick={clearResult}/>
        <input className='btn especial' type="button" value='+/-'/>
        <input className='btn especial' type="button" value='%' onClick={clickHandler}/>
        <input className='btn operator' type="button" value='/' onClick={clickHandler}/>

        <input className='btn number' type="button" value='7' onClick={clickHandler}/>
        <input className='btn number' type="button" value='8' onClick={clickHandler}/>
        <input className='btn number' type="button" value='9' onClick={clickHandler}/>
        <input className='btn operator' type="button" value='*' onClick={clickHandler}/>

        <input className='btn number' type="button" value='4' onClick={clickHandler}/>
        <input className='btn number' type="button" value='5' onClick={clickHandler}/>
        <input className='btn number' type="button" value='6' onClick={clickHandler}/>
        <input className='btn operator' type="button" value='-' onClick={clickHandler}/>

        <input className='btn number' type="button" value='1' onClick={clickHandler}/>
        <input className='btn number' type="button" value='2' onClick={clickHandler}/>
        <input className='btn number' type="button" value='3' onClick={clickHandler}/>
        <input className='btn operator' type="button" value='+' onClick={clickHandler}/>

        <input className='btn number' type="button" value='0' id='zero' onClick={clickHandler}/>
        <input className='btn number' type="button" value='.' id='' onClick={clickHandler}/>
        <input className='btn operator' type="button" value='=' onClick={calculate}/>
        
        

        
      </div>
    </>
  )
}

export default App
