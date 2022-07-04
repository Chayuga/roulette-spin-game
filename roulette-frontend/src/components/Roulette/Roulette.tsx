import React, {useState} from 'react';
import './Roulette.scss';
import axios from 'axios';
import { Wheel } from 'react-custom-roulette';
import Modal from 'react-modal';
import ModalPage from '../Modal/ModalPage';
import {name, description, meta?.additionalInformation, meta?.images?.primary, } from './data'

const data = [
  { option: 'WINRAR' },
  { option: 'REACT' },
  { option: 'CUSTOM', style: { textColor: '#f9dd50' }  },
  { option: 'ROULETTE'},
  { option: 'WHEEL' },
  { option: 'REACT' },
  { option: 'CUSTOM' , style: { textColor: '#70bbe0' } },
  { option: 'ROULETTE'},
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

const Roulette = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [prizeList, setPrizeList] = useState([]);

    // Modal content
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function closeModal() {
    setModalIsOpen(false);
  }


    let elem = document.getElementById('root');
    let url = '';
    if (elem !== null) {
        if (elem.getAttribute('proxy_path')) {
            url = `${elem.getAttribute('proxy_path')}`;
        }
    }

    React.useEffect(() => {
        axios.get(`${url}http://172.17.0.1:3030/game/1`)
            .then((res: any) => {
                setPrizeList(res.data.game.prizes);
                console.log(`setting prize list to`, res.data.game.prizes)
            })
            .catch((err: any) => {
                console.error({err})
            })
    }, [])

    const handleSpinClick = () => {
        setMustSpin(true);
        axios.get(`${url}http://172.17.0.1:3030/game/1/prize`)
            .then((res: { data: { id: any; }; }) => {
                // @ts-ignore
                const prize_index = prizeList.findIndex(e => e.id === res.data.id)
                setPrizeNumber(prize_index);
                console.log(`Response logged here======> ${ prize_index }`)
            })
            .catch((err: any) => {
                console.error(err);
            });
    };


    return (
        <div className="__mobiz-games-roulette-spin__body">
            <div className="__mobiz-games-roulette-spin__header-section">
                <div style={{zIndex: 0}}>

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
                <button className={'__mobiz-games-roulette-spin_spin-button'} onClick={handleSpinClick}>
                    SPIN
                </button>

                    {
                        isDone ? (
                            <>
                                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                                <ModalPage images={meta?.images?.primary} text_colour={meta?.colours?.primary} name={name} bg_colour={meta?.colours?.secondary} description={description} additionalInformation={meta?.additionalInformation} closeModal={closeModal}  />
                                </Modal>
                            </>
                        ) : null
                    }
            </div>
        </div>
    );
};

export default Roulette;

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