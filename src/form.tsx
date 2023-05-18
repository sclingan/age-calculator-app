import { useState } from 'react'
import btn from './assets/images/icon-arrow.svg'

function Form() {

  return (
    <main>
        <form>
          <label htmlFor='day'>Day</label>
          <input placeholder='DD'></input>
          <label htmlFor='month'>Month</label>
          <input placeholder='MM'></input>
          <label htmlFor='year'>Year</label>
          <input placeholder='YYYY'></input>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </button>
        </form>
    </main>
  )
}

export default Form
