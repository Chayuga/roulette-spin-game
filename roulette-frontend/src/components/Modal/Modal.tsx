import React from 'react'
import './Modal.css'

import { RiCloseLine } from "react-icons/ri";

const Modal = ({setIsOpen: boolean}) => {
    return (
      <>
      <div className="darkBG" onClick={() => setIsOpen(false)}/>
          <div className='centered'>
              <div className="modal">
                  <div className='modalHeader'>
                    <h5 className='heading'>You've won a Prize</h5>
                    </div>
                    <button className='closeBtn' onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{marginBottom: "-3px"}} />
                    </button>
                    <div className='modalContent'>
                        you are a winner, your Prize Number is: <span className=''>1234</span>
                    </div>
                    <div className='confirmBtn' onClick={() => setIsOpen(false)}>
                        Confirm
                    </div>
              </div>
          </div>
      </>
  )
}

export default Modal