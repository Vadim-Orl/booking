const MapClassName = document.querySelector('.map')

const date = {
  COUNT_ADS: 8,
  OFFER_TITLE: ['Большая уютная квартира',
    'Маленькая неуютная квартира',
    'Огромный прекрасный дворец',
    'Маленький ужасный дворец',
    'Красивый гостевой домик',
    'Некрасивый негостеприимный домик',
    'Уютное бунгало далеко от моря',
    'Неуютное бунгало по колено в воде',
  ].sort(() => Math.random() - 0.5),

  OFFER_TYPE: ['palace', 'flat', 'house', 'bungalo'],
  OFFER_CHECKIN: ['12:00', '13:00', '14:00'],
  OFFER_CHECOUT: ['12:00', '13:00', '14:00'],
  OFFER_FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  OFFER_PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
  MOC_BD: [],

}

function createBd() {
  const newBd = []
  for (let index = 0; index < date.COUNT_ADS; index++) {
    newBd[index] = {
      author: {
        avatar: index < 10 ? `img/user0${index}.png` : `img/user${index}.png`,
      },
      offer: {
        title: date.OFFER_TITLE[index],
        address: 'Chiyoda-ku, Tōkyō-to 102-0091',
        price: Math.floor(Math.random() * 100000) + 1000,
        type: date.OFFER_TYPE[Math.floor(Math.random() * 4)],
        rooms: Math.floor(Math.random() * 3) + 1,
        guests: Math.floor(Math.random() * 2) + 1,
        checkin: date.OFFER_CHECKIN[Math.floor(Math.random() * 3)],
        checkout: date.OFFER_CHECKIN[Math.floor(Math.random() * 3)],
        features: doRandomFeatures(),
        description: 'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
        photos: date.OFFER_PHOTOS.sort(() => Math.random() - 0.5),
      },
      location: {
        lat: Math.floor(Math.random() * (MapClassName.clientWidth - 100)) + 100,
        lng: Math.floor(Math.random() * (MapClassName.clientHeight - 150)) + 150,
      },
    }
  }
  return newBd;
}

function doRandomFeatures() {
  const count = (Math.random() * date.OFFER_FEATURES.length) + 1;
  let newArrFeatures = date.OFFER_FEATURES.slice(0);
  newArrFeatures.sort(() => Math.random() - 0.5);
  newArrFeatures = newArrFeatures.slice(count);
  return newArrFeatures;
}

window.dataTest = createBd();
