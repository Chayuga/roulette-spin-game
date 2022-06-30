import React, {useState} from 'react';
import './Roulette.scss';
import axios from 'axios';
import { Wheel } from 'react-custom-roulette';
import Modal from 'react-modal';
import ModalPage from '../Modal/ModalPage';



// ==================================== API Structure ====================================
const imageDemo = "https://media.istockphoto.com/photos/brown-leather-shoe-picture-id187310279?k=20&m=187310279&s=612x612&w=0&h=WDavpCxsLbj_PRpoY-3PsS2zvuP0Vk0Ci22sRLO9DzE="

const imageText = "Image Text"

const discount = 20

const titleBg = '#149416';

const titleColor = '#ffffff'

const itemName = "Leather Shoes"

const prizeText = `order our ${itemName} with ${discount} discount and indulge in some well deserved self-care while at home!`

// ================================== End API Structure ==================================

const data = [
  { option: 'WINRAR' },
  { option: 'REACT' },
  { option: 'CUSTOM' },
  { option: 'ROULETTE', style: { textColor: '#f9dd50' } },
  { option: 'WHEEL' },
  { option: 'REACT' },
  { option: 'CUSTOM' },
  { option: 'ROULETTE', style: { textColor: '#70bbe0' } },
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

// const YouWon = ({ prizeName }: { prizeName: { option: string } }) => {
//     return (
//         <div style={{
//             position: "fixed",
//             top: "50%",
//             left: "50%",
//             transform: "translateX(-50%) translateY(-50%)",
//             zIndex: 999,
//             backgroundColor: "red",
//         }}>
//             You have won {prizeName.option}
//         </div>
//     );
// }

// const Modal = ({setIsOpen}:{ setIsOpen:any}) => {
//     return (
//       <>
//       <div className="darkBG" onClick={() => setIsOpen(false)}/>
//           <div className='centered'>
//               <div className="modal">
//                   <div className='modalHeader'>
//                     <h5 className='heading'>You've won a Prize</h5>
//                     </div>
//                     <button className='closeBtn' onClick={() => setIsOpen(false)}>
//                         <RiCloseLine style={{marginBottom: "-3px"}} />
//                     </button>
//                     <div className='modalContent'>
//                         you are a winner, your Prize Number is: <span className=''>Yeey you've won</span>
//                     </div>
//                     <div className='confirmBtn' onClick={() => setIsOpen(false)}>
//                         Confirm
//                     </div>
//               </div>
//           </div>
//       </>
//   )
// }

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
        <div className="Main">
            <header className="Main-header">
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
                <button className={'spin-button'} onClick={handleSpinClick}>
                    SPIN
                </button>

                    {
                        isDone ? (
                            <>
                            {/* <YouWon prizeName={prizeList[prizeNumber]} /> */}
    
                                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                                <ModalPage imageDemo={imageDemo} imageText={imageText} titleBg={titleBg} discount={discount} itemName={itemName} titleColor={titleColor} prizeText={prizeText} closeModal={closeModal}  />
                                </Modal>
                            </>
                        ) : null
                    }
            </header>
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