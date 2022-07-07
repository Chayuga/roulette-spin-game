/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import './Roulette.scss';
import axios from 'axios';
import { Wheel } from 'react-custom-roulette';
import Modal from 'react-modal';
// eslint-disable-next-line import/no-unresolved
import ModalPage from '../Modal/ModalPage';
import { images, textColour, name, bgColour, description, additionalInformation, getPrizeList } from '../../services/prizeService';

const data = [
  { option: 'WINRAR' },
  { option: 'REACT' },
  { option: 'CUSTOM', style: { textColor: '#f9dd50' } },
  { option: 'ROULETTE' },
  { option: 'WHEEL' },
  { option: 'REACT' },
  { option: 'CUSTOM', style: { textColor: '#70bbe0' } },
  { option: 'ROULETTE' },
  { option: 'WHEEL' },
];

const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 8;
const fontSize = 17;
const textDistance = 60;
const spinDuration = 1.0;

const customStyles = {
  content: {
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0,0,0,0.5)',
  },
};

function Roulette() {
  const [mustSpin, setMustSpin] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prizeList, setPrizeList] = useState([]);

  // Modal content
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  const elem = document.getElementById('root');
  let url = '';
  if (elem !== null) {
    if (elem.getAttribute('proxy_path')) {
      url = `${elem.getAttribute('proxy_path')}`;
    }
  }

  // useEffect(() => {
  //   axios.get(`${url}http://172.17.0.1:3030/game/1`)
  //     .then((res: any) => {
  //       setPrizeList(res.data.game.prizes);
  //     })
  //     .catch((err: any) => {
  //       console.error({ err });
  //     });
  // }, []);

  useEffect(() => {
    (async () => {
      const fetchedData = await getPrizeList();
      setPrizeList(fetchedData);
    })();
  }, []);

  const handleSpinClick = () => {
    setMustSpin(true);
    axios.get(`${url}http://172.17.0.1:3030/game/1/prize`)
      .then((res: { data: { id: any; }; }) => {
        // @ts-ignore
        const prizeIndex = prizeList.findIndex((e) => e.id === res.data.id);
        setPrizeNumber(prizeIndex);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <div className="__mobiz-games-roulette-spin__body">
      <div className="__mobiz-games-roulette-spin__header-section">
        <div style={{ zIndex: 0 }}>

          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontSize={fontSize}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            spinDuration={spinDuration}
                    // perpendicularText
            textDistance={textDistance}
            onStopSpinning={() => {
              setMustSpin(false);
              setIsDone(true);
              setModalIsOpen(true);
            }}
          />
        </div>
        <button type="button" className="__mobiz-games-roulette-spin_spin-button" onClick={handleSpinClick}>
          SPIN
        </button>

        {
          isDone ? (
            // eslint-disable-next-line react/jsx-no-bind
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
              <ModalPage images={images} textColour={textColour} name={name} bgColour={bgColour} description={description} additionalInformation={additionalInformation} closeModal={closeModal} />
            </Modal>
          ) : null
        }
      </div>
    </div>
  );
}

export default Roulette;

