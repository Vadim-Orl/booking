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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkYXRhVGVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYXBDbGFzc05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwJylcblxuY29uc3QgZGF0ZSA9IHtcbiAgQ09VTlRfQURTOiA4LFxuICBPRkZFUl9USVRMRTogWyfQkdC+0LvRjNGI0LDRjyDRg9GO0YLQvdCw0Y8g0LrQstCw0YDRgtC40YDQsCcsXG4gICAgJ9Cc0LDQu9C10L3RjNC60LDRjyDQvdC10YPRjtGC0L3QsNGPINC60LLQsNGA0YLQuNGA0LAnLFxuICAgICfQntCz0YDQvtC80L3Ri9C5INC/0YDQtdC60YDQsNGB0L3Ri9C5INC00LLQvtGA0LXRhicsXG4gICAgJ9Cc0LDQu9C10L3RjNC60LjQuSDRg9C20LDRgdC90YvQuSDQtNCy0L7RgNC10YYnLFxuICAgICfQmtGA0LDRgdC40LLRi9C5INCz0L7RgdGC0LXQstC+0Lkg0LTQvtC80LjQuicsXG4gICAgJ9Cd0LXQutGA0LDRgdC40LLRi9C5INC90LXQs9C+0YHRgtC10L/RgNC40LjQvNC90YvQuSDQtNC+0LzQuNC6JyxcbiAgICAn0KPRjtGC0L3QvtC1INCx0YPQvdCz0LDQu9C+INC00LDQu9C10LrQviDQvtGCINC80L7RgNGPJyxcbiAgICAn0J3QtdGD0Y7RgtC90L7QtSDQsdGD0L3Qs9Cw0LvQviDQv9C+INC60L7Qu9C10L3QviDQsiDQstC+0LTQtScsXG4gIF0uc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KSxcblxuICBPRkZFUl9UWVBFOiBbJ3BhbGFjZScsICdmbGF0JywgJ2hvdXNlJywgJ2J1bmdhbG8nXSxcbiAgT0ZGRVJfQ0hFQ0tJTjogWycxMjowMCcsICcxMzowMCcsICcxNDowMCddLFxuICBPRkZFUl9DSEVDT1VUOiBbJzEyOjAwJywgJzEzOjAwJywgJzE0OjAwJ10sXG4gIE9GRkVSX0ZFQVRVUkVTOiBbJ3dpZmknLCAnZGlzaHdhc2hlcicsICdwYXJraW5nJywgJ3dhc2hlcicsICdlbGV2YXRvcicsICdjb25kaXRpb25lciddLFxuICBPRkZFUl9QSE9UT1M6IFsnaHR0cDovL28wLmdpdGh1Yi5pby9hc3NldHMvaW1hZ2VzL3Rva3lvL2hvdGVsMS5qcGcnLFxuICAgICdodHRwOi8vbzAuZ2l0aHViLmlvL2Fzc2V0cy9pbWFnZXMvdG9reW8vaG90ZWwyLmpwZycsXG4gICAgJ2h0dHA6Ly9vMC5naXRodWIuaW8vYXNzZXRzL2ltYWdlcy90b2t5by9ob3RlbDMuanBnJ10sXG4gIE1PQ19CRDogW10sXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQmQoKSB7XG4gIGNvbnN0IG5ld0JkID0gW11cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGUuQ09VTlRfQURTOyBpbmRleCsrKSB7XG4gICAgbmV3QmRbaW5kZXhdID0ge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIGF2YXRhcjogaW5kZXggPCAxMCA/IGBpbWcvdXNlcjAke2luZGV4fS5wbmdgIDogYGltZy91c2VyJHtpbmRleH0ucG5nYCxcbiAgICAgIH0sXG4gICAgICBvZmZlcjoge1xuICAgICAgICB0aXRsZTogZGF0ZS5PRkZFUl9USVRMRVtpbmRleF0sXG4gICAgICAgIGFkZHJlc3M6ICdDaGl5b2RhLWt1LCBUxY1recWNLXRvIDEwMi0wMDkxJyxcbiAgICAgICAgcHJpY2U6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkgKyAxMDAwLFxuICAgICAgICB0eXBlOiBkYXRlLk9GRkVSX1RZUEVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldLFxuICAgICAgICByb29tczogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxLFxuICAgICAgICBndWVzdHM6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMSxcbiAgICAgICAgY2hlY2tpbjogZGF0ZS5PRkZFUl9DSEVDS0lOW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXSxcbiAgICAgICAgY2hlY2tvdXQ6IGRhdGUuT0ZGRVJfQ0hFQ0tJTltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV0sXG4gICAgICAgIGZlYXR1cmVzOiBkb1JhbmRvbUZlYXR1cmVzKCksXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0JrQvtC80L3QsNGC0LAg0LIg0YLRgNGR0YXQutC+0LzQvdCw0YLQvdC+0Lkg0LrQstCw0YDRgtC40YDQtSwg0L/QvtC00L7QudC00ZHRgiDQvNC+0LvQvtC00YvQvCDQv9GD0YLQtdGI0LXRgdGC0LLQtdC90L3QuNC60LDQvC4nLFxuICAgICAgICBwaG90b3M6IGRhdGUuT0ZGRVJfUEhPVE9TLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSksXG4gICAgICB9LFxuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgbGF0OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTWFwQ2xhc3NOYW1lLmNsaWVudFdpZHRoIC0gMTAwKSkgKyAxMDAsXG4gICAgICAgIGxuZzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1hcENsYXNzTmFtZS5jbGllbnRIZWlnaHQgLSAxNTApKSArIDE1MCxcbiAgICAgIH0sXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdCZDtcbn1cblxuZnVuY3Rpb24gZG9SYW5kb21GZWF0dXJlcygpIHtcbiAgY29uc3QgY291bnQgPSAoTWF0aC5yYW5kb20oKSAqIGRhdGUuT0ZGRVJfRkVBVFVSRVMubGVuZ3RoKSArIDE7XG4gIGxldCBuZXdBcnJGZWF0dXJlcyA9IGRhdGUuT0ZGRVJfRkVBVFVSRVMuc2xpY2UoMCk7XG4gIG5ld0FyckZlYXR1cmVzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gIG5ld0FyckZlYXR1cmVzID0gbmV3QXJyRmVhdHVyZXMuc2xpY2UoY291bnQpO1xuICByZXR1cm4gbmV3QXJyRmVhdHVyZXM7XG59XG5cbndpbmRvdy5kYXRhVGVzdCA9IGNyZWF0ZUJkKCk7XG4iXSwiZmlsZSI6ImRhdGFUZXN0LmpzIn0=