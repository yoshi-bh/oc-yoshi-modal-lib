import React, { useState } from 'react'

import { SimpleModal } from 'oc-yoshi-modal-lib'
import 'oc-yoshi-modal-lib/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className='employee-list'>
        <h1>Current Employees</h1>
        <a href='/'>Home</a>
      </div>
      <div className='employee-list'>
        <h1>Current Employees</h1>
        <a href='/'>Home</a>
      </div>
      <div className='employee-list'>
        <h1>Current Employees</h1>
        <a href='/'>Home</a>
      </div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen ? (
        <SimpleModal
          onClickHandler={() => setIsOpen(false)}
          text='Employee Created!'
        />
      ) : null}
    </div>
  )
}

export default App
