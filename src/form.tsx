import { useState } from 'react'
import formValidate from './form-validate';

function Form() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [ansDay, setansDay] = useState('--');
    const [ansMonth, setansMonth] = useState('--');
    const [ansYear, setansYear] = useState('--');
  


  /*  
  TODO:
       fix day/month calculations, no negative numbers on return
       test results on days and months
  */
  function getAge(e: any) {
    e.preventDefault();  //fix type on this
    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    let numDay = parseInt(day);
    let numMonth = parseInt(month);
    let numYear = parseInt(year);
    let answerDay = 0;
    if(numDay >= currentDay) {
      answerDay = numDay - currentDay;
    } else {
      answerDay = currentDay - numDay;
    }
    let ansDay = answerDay.toString();
    setansDay(ansDay);
    let answerMonth = 0;
    if(numMonth >= currentMonth) {
      answerMonth = numMonth - currentMonth;
    } else {
      answerMonth = currentMonth - numMonth;
    }
    let ansMonth = answerMonth.toString();
    setansMonth(ansMonth);
    let answerYear = currentYear - numYear;
    let ansYear = answerYear.toString();
    setansYear(ansYear);
    formValidate();
    return ansDay;
  }



  return (
    <main>
      <h1 className='sr-only'>Age Calculator App</h1>
        <form>
          <div className='div-input'>
          <label htmlFor='day'>Day</label>
          <input id='day' value={day} onChange={e => setDay(e.target.value)} placeholder='DD'></input>
          <p className='sr-only' id='valid-day'>Must be a valid date</p>
          <p className='sr-only' id='empty-day'>This field is required</p>
          </div>
          <div className='div-input'>
          <label htmlFor='month'>Month</label>
          <input id='month' value={month} onChange={e => setMonth(e.target.value)} placeholder='MM'></input>
          <p className='sr-only' id='valid-month'>Must be a valid month</p>
          <p className='sr-only' id='empty-month'>This field is required</p>
          </div>
          <div className='div-input'>
          <label htmlFor='year'>Year</label>
          <input id='year' value={year} onChange={e => setYear(e.target.value)} placeholder='YYYY'></input>
          <p className='sr-only' id='valid-year'>Must be in the past</p>
          <p className='sr-only' id='empty-year'>This field is required</p>
          </div>
        </form>
          <div>
          <button onClick={getAge} id='button' className='button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44"><g fill="none" stroke="#fff" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </button>
          </div>
          <ul>
            <li><span className='answer'>{ansYear}</span> years</li>
            <li><span className='answer'>{ansMonth}</span> months</li>
            <li><span className='answer'>{ansDay}</span> days</li>
          </ul>
    </main>
  )
}

export default Form
