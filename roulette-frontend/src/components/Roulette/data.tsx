export const name = 20

export const description = "Leather Shoes"

export const additionalInformation = `order our ${description} with ${name}% discount and indulge in some well deserved self-care while at home!`

// =============================

export const images = "https://media.istockphoto.com/photos/brown-leather-shoe-picture-id187310279?k=20&m=187310279&s=612x612&w=0&h=WDavpCxsLbj_PRpoY-3PsS2zvuP0Vk0Ci22sRLO9DzE="


export const bg_colour = '#149416';

export const text_colour = '#ffffff'



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