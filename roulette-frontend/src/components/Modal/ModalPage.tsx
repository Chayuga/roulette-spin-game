import React from 'react'
import './ModalPage.scss'

const ModalPage = ({prizeId, imageDemo, imageText, titleBg, discount, itemName, titleColor, prizeText, closeModal}: any) => {
  return (
      <div className="__mobiz-games-roulette__u-overlay">
          <div className="__mobiz-games-roulette__modal-page ">
              <div className="modal-page__header">
                <img src={imageDemo} alt={imageText} className="modal-page__header__img" />
              </div>
            <div className="modal-page__body">
              <div style={{backgroundColor: titleBg}} className="modal-page__title">
                <h3 style={{ color: titleColor }} className="modal-page__text-large">{`${ discount}% Discount`}</h3>
              </div>
                <p className="modal-page__content">
                    {prizeText}
                </p>
                <button className="modal-page__btn--ok" onClick={closeModal}>Continue</button>
              </div>
          </div>
      </div>
    )
}
export default ModalPage
