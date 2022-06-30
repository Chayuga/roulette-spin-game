import React from 'react'
import './App.scss'
import Roulette from './Roulette/Roulette'


function App() {
    /**
     * todo: add get data method here
     * eg: await Api.getPrizeList();
     *
     * Api {
     *
     *      getLocalData() {
     *             return [ // <Prize>[]
     *                 {
     *                     id: 'abcd-defg-basd-cvzx',
     *                     name: 'prize 1',
     *                     description: 'prize 1 description',
     *                     meta?: {
     *                         images?: {
     *                             primary?: 'https://via.placeholder.com/300x300',
     *                         },
     *                         colours?: {
     *                             primary?: '#000000',
     *                             secondary?: '#000000',
     *                             tertiary?: '#000000',
     *                         },
     *                         additionalInformation?: 'lorem ipsum dolor sit amet',
     *                     },
     *                 }
     *             ];
     *
     *      }
     *
     *     getPrizeList() {
     *       if (process.env.NODE_ENV === 'development') {
     *             return {
     *                 data: this.getLocalData()
     *             };
     *       } else {
     *             return axios.get(`${process.env.REACT_APP_API_URL}/prizes`) // eg
     *       }
     *     }
     * }
     */

  return (
    <div className="App">
      <Roulette/>
    </div>
  )
}

export default App
