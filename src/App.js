import React, { useState } from 'react';
import './App.css';

function App() {

const[value, setValue] = useState(1);
  


  var randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber)

  function handleSubmit(e) {
      
      e.preventDefault();
      let userNumer = document.getElementById('no').value;
      //console.log(userNumer);
      if(randomNumber==userNumer){
        setValue(0);
        alert("Huraayyyyyyyyy!!!!!!! You got it right")

      }
      else if(randomNumber>userNumer){
        alert("You got it high")
      }
      else{
        alert("You got it low")
      }
  }

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className='my-60 mx-96 text-center py-16 px-20 bg-pink-50 rounded-3xl'>
      
      <div className='text-center text-blue-600 font-semibold text-2xl blur-[.5px]'>
        Guess the Number
      </div>
      <div className='mt-3'>
      
        <form onSubmit={handleSubmit} onClick={() => setValue(value)}>
        <span className={value?'hidden':'block'}>You win</span>
        <input type="text" name='no' id='no' className='border w-full placeholder-opacity-10 p-3 placeholder-shown:italic placeholder-shown:text-blue-50 rounded-lg hover:border hover:border-blue-500 active:outline-none focus:outline-none' placeholder='Write Your Number Here....'/>
        <button type="submit" name="submit" id="submit" className={value ? "mt-3 px-5 py-2 rounded-xl bg-red-600 text-white" : "hidden mt-3 px-5 py-2 rounded-xl bg-red-600 text-white"}>Check</button>
        
        </form>
        <button type="submit" name="submit" id="submit" onClick={refreshPage} className={value ? "hidden ml-1 mt-3 px-5 py-2 rounded-xl bg-red-600 text-white" : "ml-1 mt-3 px-5 py-2 rounded-xl bg-red-600 text-white"}>Restart Game</button>
      </div>
    </div>
  ); 
}

export default App;
