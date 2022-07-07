// eslint-disable-next-line import/no-unresolved
import { Prize } from '../models/prize';

// ==================================================================================
export const name = '20';
export const description = 'Leather Shoes';
export const additionalInformation = `order our ${description} with ${name}% discount and indulge in some well deserved self-care while at home!`;
export const images = 'https://media.istockphoto.com/photos/brown-leather-shoe-picture-id187310279?k=20&m=187310279&s=612x612&w=0&h=WDavpCxsLbj_PRpoY-3PsS2zvuP0Vk0Ci22sRLO9DzE=';
export const bgColour = '#149416';
export const textColour = '#ffffff';
// ==================================================================================

function getLocalData(): Prize[] {
  return [
    {
      id: 'abcd-defg-basd-cvzx',
      name: 'prize 1',
      description: 'prize 1 description',
      meta: {
        images: {
          primary: 'https://thumbs.dreamstime.com/z/yellow-labrador-retriever-smiling-cute-dog-isolated-white-background-34822870.jpg',
        },
        colours: {
          primary: '#ffffff',
          secondary: '#149416',
          tertiary: '#000000',
        },
        additionalInformation: 'order with us, with discount and indulge in some well deserved self-care while at home!',
      },
    },
  ];
}

export function getPrizeList(): Promise<{data: Prize[]}> {
  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve, reject) => {
      const localData = getLocalData();
      if (localData) {
        resolve({ data: localData });
      } else {
        reject(new Error('No local data'));
      }
    });
  }
  return fetch(`${process.env.REACT_APP_API_URL}/prizes`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then((data) => data as {data: Prize[]});
  });
}
