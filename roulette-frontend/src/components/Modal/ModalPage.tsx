import React from 'react'
import './ModalPage.scss'

const ModalPage = ({prizeId, imageDemo, imageText, titleBg, discount, itemName, titleColor, prizeText, closeModal}: any) => {
  return (
    <main>
      <div className="modal">
          <div className="img-container">            
            <img src={imageDemo} alt={imageText} />  
          </div>
        <div className="text-container">
          <div style={{backgroundColor: titleBg}} className="title-container">
            <h3 style={{ color: titleColor }}>{`${ discount}% Discount`}</h3>            
          </div>
            <div className="text-content">
                {prizeText}
            </div>
            <button className="btn" onClick={closeModal}>Continue</button>
          </div>
      </div> 
    </main>
    )
}
export default ModalPage
