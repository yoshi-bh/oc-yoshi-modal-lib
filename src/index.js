import React from 'react'
import './styles.css'

/* Simple React Element to display a modal
 * @params:
 *    - text: the text you want to display
 *    - onClickHandler: the function you want to
 *      execute once the close button is clicked
 * returns:
 *    the JSX element to be displayed
 */

export const SimpleModal = ({ text, onClickHandler }) => {
  return (
    <div className='background' onClick={onClickHandler}>
      <div className='modal'>
        <button onClick={onClickHandler}>✖</button>
        <h1>{text}</h1>
      </div>
    </div>
  )
}
