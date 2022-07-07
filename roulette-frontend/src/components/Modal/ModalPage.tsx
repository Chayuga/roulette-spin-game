import React from 'react';
import './ModalPage.scss';

export interface ModalProps {
  name: string;
  description: string;
  additionalInformation: string;
  images: string;
  bgColour: string;
  textColour: string;
  closeModal: () => void;
}

function ModalPage({ name, description, additionalInformation, images, bgColour, textColour, closeModal }: ModalProps) {
  return (
    <div className="__mobiz-games-roulette__u-overlay">
      <div className="__mobiz-games-roulette__modal-page ">
        <div className="modal-page__header">
          <img src={images} alt="" className="modal-page__header__img" />
        </div>
        <h3 className="modal-page__text-large">{`Won! ${description}`}</h3>
        <div className="modal-page__body">
          <div style={{ backgroundColor: bgColour }} className="modal-page__title">
            <h3 style={{ color: textColour }} className="modal-page__text-large">{`${name}% Discount`}</h3>
          </div>
          <p className="modal-page__content">
            {additionalInformation}
          </p>
          <button type="button" className="modal-page__btn--ok" onClick={closeModal}>Continue</button>
        </div>
      </div>
    </div>
  );
}
export default ModalPage;
