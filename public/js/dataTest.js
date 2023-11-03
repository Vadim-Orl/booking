const MapClassName = document.querySelector('.map')

const date = {
  COUNT_ADS: 11,
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

window.dateTest = createBd();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkYXRhVGVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYXBDbGFzc05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwJylcblxuY29uc3QgZGF0ZSA9IHtcbiAgQ09VTlRfQURTOiAxMSxcbiAgT0ZGRVJfVElUTEU6IFsn0JHQvtC70YzRiNCw0Y8g0YPRjtGC0L3QsNGPINC60LLQsNGA0YLQuNGA0LAnLFxuICAgICfQnNCw0LvQtdC90YzQutCw0Y8g0L3QtdGD0Y7RgtC90LDRjyDQutCy0LDRgNGC0LjRgNCwJyxcbiAgICAn0J7Qs9GA0L7QvNC90YvQuSDQv9GA0LXQutGA0LDRgdC90YvQuSDQtNCy0L7RgNC10YYnLFxuICAgICfQnNCw0LvQtdC90YzQutC40Lkg0YPQttCw0YHQvdGL0Lkg0LTQstC+0YDQtdGGJyxcbiAgICAn0JrRgNCw0YHQuNCy0YvQuSDQs9C+0YHRgtC10LLQvtC5INC00L7QvNC40LonLFxuICAgICfQndC10LrRgNCw0YHQuNCy0YvQuSDQvdC10LPQvtGB0YLQtdC/0YDQuNC40LzQvdGL0Lkg0LTQvtC80LjQuicsXG4gICAgJ9Cj0Y7RgtC90L7QtSDQsdGD0L3Qs9Cw0LvQviDQtNCw0LvQtdC60L4g0L7RgiDQvNC+0YDRjycsXG4gICAgJ9Cd0LXRg9GO0YLQvdC+0LUg0LHRg9C90LPQsNC70L4g0L/QviDQutC+0LvQtdC90L4g0LIg0LLQvtC00LUnLFxuICBdLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSksXG5cbiAgT0ZGRVJfVFlQRTogWydwYWxhY2UnLCAnZmxhdCcsICdob3VzZScsICdidW5nYWxvJ10sXG4gIE9GRkVSX0NIRUNLSU46IFsnMTI6MDAnLCAnMTM6MDAnLCAnMTQ6MDAnXSxcbiAgT0ZGRVJfQ0hFQ09VVDogWycxMjowMCcsICcxMzowMCcsICcxNDowMCddLFxuICBPRkZFUl9GRUFUVVJFUzogWyd3aWZpJywgJ2Rpc2h3YXNoZXInLCAncGFya2luZycsICd3YXNoZXInLCAnZWxldmF0b3InLCAnY29uZGl0aW9uZXInXSxcbiAgT0ZGRVJfUEhPVE9TOiBbJ2h0dHA6Ly9vMC5naXRodWIuaW8vYXNzZXRzL2ltYWdlcy90b2t5by9ob3RlbDEuanBnJyxcbiAgICAnaHR0cDovL28wLmdpdGh1Yi5pby9hc3NldHMvaW1hZ2VzL3Rva3lvL2hvdGVsMi5qcGcnLFxuICAgICdodHRwOi8vbzAuZ2l0aHViLmlvL2Fzc2V0cy9pbWFnZXMvdG9reW8vaG90ZWwzLmpwZyddLFxuICBNT0NfQkQ6IFtdLFxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJkKCkge1xuICBjb25zdCBuZXdCZCA9IFtdXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRlLkNPVU5UX0FEUzsgaW5kZXgrKykge1xuICAgIG5ld0JkW2luZGV4XSA9IHtcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBhdmF0YXI6IGluZGV4IDwgMTAgPyBgaW1nL3VzZXIwJHtpbmRleH0ucG5nYCA6IGBpbWcvdXNlciR7aW5kZXh9LnBuZ2AsXG4gICAgICB9LFxuICAgICAgb2ZmZXI6IHtcbiAgICAgICAgdGl0bGU6IGRhdGUuT0ZGRVJfVElUTEVbaW5kZXhdLFxuICAgICAgICBhZGRyZXNzOiAnQ2hpeW9kYS1rdSwgVMWNa3nFjS10byAxMDItMDA5MScsXG4gICAgICAgIHByaWNlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApICsgMTAwMCxcbiAgICAgICAgdHlwZTogZGF0ZS5PRkZFUl9UWVBFW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXSxcbiAgICAgICAgcm9vbXM6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMSxcbiAgICAgICAgZ3Vlc3RzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDEsXG4gICAgICAgIGNoZWNraW46IGRhdGUuT0ZGRVJfQ0hFQ0tJTltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV0sXG4gICAgICAgIGNoZWNrb3V0OiBkYXRlLk9GRkVSX0NIRUNLSU5bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldLFxuICAgICAgICBmZWF0dXJlczogZG9SYW5kb21GZWF0dXJlcygpLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ca0L7QvNC90LDRgtCwINCyINGC0YDRkdGF0LrQvtC80L3QsNGC0L3QvtC5INC60LLQsNGA0YLQuNGA0LUsINC/0L7QtNC+0LnQtNGR0YIg0LzQvtC70L7QtNGL0Lwg0L/Rg9GC0LXRiNC10YHRgtCy0LXQvdC90LjQutCw0LwuJyxcbiAgICAgICAgcGhvdG9zOiBkYXRlLk9GRkVSX1BIT1RPUy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpLFxuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGxhdDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1hcENsYXNzTmFtZS5jbGllbnRXaWR0aCAtIDEwMCkpICsgMTAwLFxuICAgICAgICBsbmc6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNYXBDbGFzc05hbWUuY2xpZW50SGVpZ2h0IC0gMTUwKSkgKyAxNTAsXG4gICAgICB9LFxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3QmQ7XG59XG5cbmZ1bmN0aW9uIGRvUmFuZG9tRmVhdHVyZXMoKSB7XG4gIGNvbnN0IGNvdW50ID0gKE1hdGgucmFuZG9tKCkgKiBkYXRlLk9GRkVSX0ZFQVRVUkVTLmxlbmd0aCkgKyAxO1xuICBsZXQgbmV3QXJyRmVhdHVyZXMgPSBkYXRlLk9GRkVSX0ZFQVRVUkVTLnNsaWNlKDApO1xuICBuZXdBcnJGZWF0dXJlcy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICBuZXdBcnJGZWF0dXJlcyA9IG5ld0FyckZlYXR1cmVzLnNsaWNlKGNvdW50KTtcbiAgcmV0dXJuIG5ld0FyckZlYXR1cmVzO1xufVxuXG53aW5kb3cuZGF0ZVRlc3QgPSBjcmVhdGVCZCgpO1xuIl0sImZpbGUiOiJkYXRhVGVzdC5qcyJ9