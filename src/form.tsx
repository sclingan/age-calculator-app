import { useState } from 'react'
import ageCalculator from './age-calculator'

function Form() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
  return (
    <main>
      <h1 className='sr-only'>Age Calculator App</h1>
        <form>
          <div>
          <label htmlFor='day'>Day</label>
          <input id='day' value={day} onChange={e => setDay(e.target.value)} placeholder='DD'></input>
          </div>
          <div>
          <label htmlFor='month'>Month</label>
          <input id='month' value={month} onChange={e => setMonth(e.target.value)} placeholder='MM'></input>
          </div>
          <div>
          <label htmlFor='year'>Year</label>
          <input id='year' value={year} onChange={e => setYear(e.target.value)} placeholder='YYYY'></input>
          </div>
          <button onClick={ageCalculator}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44"><g fill="none" stroke="#fff" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </button>
        </form>
    </main>
  )
}

export default Form
