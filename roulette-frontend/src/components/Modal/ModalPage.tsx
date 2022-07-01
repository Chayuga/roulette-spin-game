import React from 'react'
import './ModalPage.scss'

const ModalPage = ({name, description, additionalInformation, images, bg_colour, text_colour, closeModal}: any) => {
  return (
      <div className="__mobiz-games-roulette__u-overlay">
          <div className="__mobiz-games-roulette__modal-page ">
              <div className="modal-page__header">
                <img src={images} alt="" className="modal-page__header__img" />
        </div>
        <h3 className="modal-page__text-large">{`Won! ${description}`}</h3>
            <div className="modal-page__body">
              <div style={{backgroundColor: bg_colour}} className="modal-page__title">
                <h3 style={{ color: text_colour }} className="modal-page__text-large">{`${ name}% Discount`}</h3>
              </div>
                <p className="modal-page__content">
                    {additionalInformation}
                </p>
                <button className="modal-page__btn--ok" onClick={closeModal}>Continue</button>
              </div>
          </div>
      </div>
    )
}
export default ModalPage
