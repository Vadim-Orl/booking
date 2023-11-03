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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkYXRlVGVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYXBDbGFzc05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwJylcclxuXHJcbmNvbnN0IGRhdGUgPSB7XHJcbiAgQ09VTlRfQURTOiAxMSxcclxuICBPRkZFUl9USVRMRTogWyfQkdC+0LvRjNGI0LDRjyDRg9GO0YLQvdCw0Y8g0LrQstCw0YDRgtC40YDQsCcsXHJcbiAgICAn0JzQsNC70LXQvdGM0LrQsNGPINC90LXRg9GO0YLQvdCw0Y8g0LrQstCw0YDRgtC40YDQsCcsXHJcbiAgICAn0J7Qs9GA0L7QvNC90YvQuSDQv9GA0LXQutGA0LDRgdC90YvQuSDQtNCy0L7RgNC10YYnLFxyXG4gICAgJ9Cc0LDQu9C10L3RjNC60LjQuSDRg9C20LDRgdC90YvQuSDQtNCy0L7RgNC10YYnLFxyXG4gICAgJ9Ca0YDQsNGB0LjQstGL0Lkg0LPQvtGB0YLQtdCy0L7QuSDQtNC+0LzQuNC6JyxcclxuICAgICfQndC10LrRgNCw0YHQuNCy0YvQuSDQvdC10LPQvtGB0YLQtdC/0YDQuNC40LzQvdGL0Lkg0LTQvtC80LjQuicsXHJcbiAgICAn0KPRjtGC0L3QvtC1INCx0YPQvdCz0LDQu9C+INC00LDQu9C10LrQviDQvtGCINC80L7RgNGPJyxcclxuICAgICfQndC10YPRjtGC0L3QvtC1INCx0YPQvdCz0LDQu9C+INC/0L4g0LrQvtC70LXQvdC+INCyINCy0L7QtNC1JyxcclxuICBdLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSksXHJcblxyXG4gIE9GRkVSX1RZUEU6IFsncGFsYWNlJywgJ2ZsYXQnLCAnaG91c2UnLCAnYnVuZ2FsbyddLFxyXG4gIE9GRkVSX0NIRUNLSU46IFsnMTI6MDAnLCAnMTM6MDAnLCAnMTQ6MDAnXSxcclxuICBPRkZFUl9DSEVDT1VUOiBbJzEyOjAwJywgJzEzOjAwJywgJzE0OjAwJ10sXHJcbiAgT0ZGRVJfRkVBVFVSRVM6IFsnd2lmaScsICdkaXNod2FzaGVyJywgJ3BhcmtpbmcnLCAnd2FzaGVyJywgJ2VsZXZhdG9yJywgJ2NvbmRpdGlvbmVyJ10sXHJcbiAgT0ZGRVJfUEhPVE9TOiBbJ2h0dHA6Ly9vMC5naXRodWIuaW8vYXNzZXRzL2ltYWdlcy90b2t5by9ob3RlbDEuanBnJyxcclxuICAgICdodHRwOi8vbzAuZ2l0aHViLmlvL2Fzc2V0cy9pbWFnZXMvdG9reW8vaG90ZWwyLmpwZycsXHJcbiAgICAnaHR0cDovL28wLmdpdGh1Yi5pby9hc3NldHMvaW1hZ2VzL3Rva3lvL2hvdGVsMy5qcGcnXSxcclxuICBNT0NfQkQ6IFtdLFxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmQoKSB7XHJcbiAgY29uc3QgbmV3QmQgPSBbXVxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRlLkNPVU5UX0FEUzsgaW5kZXgrKykge1xyXG4gICAgbmV3QmRbaW5kZXhdID0ge1xyXG4gICAgICBhdXRob3I6IHtcclxuICAgICAgICBhdmF0YXI6IGluZGV4IDwgMTAgPyBgaW1nL3VzZXIwJHtpbmRleH0ucG5nYCA6IGBpbWcvdXNlciR7aW5kZXh9LnBuZ2AsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9mZmVyOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGUuT0ZGRVJfVElUTEVbaW5kZXhdLFxyXG4gICAgICAgIGFkZHJlc3M6ICdDaGl5b2RhLWt1LCBUxY1recWNLXRvIDEwMi0wMDkxJyxcclxuICAgICAgICBwcmljZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKSArIDEwMDAsXHJcbiAgICAgICAgdHlwZTogZGF0ZS5PRkZFUl9UWVBFW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXSxcclxuICAgICAgICByb29tczogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxLFxyXG4gICAgICAgIGd1ZXN0czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxLFxyXG4gICAgICAgIGNoZWNraW46IGRhdGUuT0ZGRVJfQ0hFQ0tJTltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV0sXHJcbiAgICAgICAgY2hlY2tvdXQ6IGRhdGUuT0ZGRVJfQ0hFQ0tJTltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV0sXHJcbiAgICAgICAgZmVhdHVyZXM6IGRvUmFuZG9tRmVhdHVyZXMoKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ca0L7QvNC90LDRgtCwINCyINGC0YDRkdGF0LrQvtC80L3QsNGC0L3QvtC5INC60LLQsNGA0YLQuNGA0LUsINC/0L7QtNC+0LnQtNGR0YIg0LzQvtC70L7QtNGL0Lwg0L/Rg9GC0LXRiNC10YHRgtCy0LXQvdC90LjQutCw0LwuJyxcclxuICAgICAgICBwaG90b3M6IGRhdGUuT0ZGRVJfUEhPVE9TLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSksXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgbGF0OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTWFwQ2xhc3NOYW1lLmNsaWVudFdpZHRoIC0gMTAwKSkgKyAxMDAsXHJcbiAgICAgICAgbG5nOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTWFwQ2xhc3NOYW1lLmNsaWVudEhlaWdodCAtIDE1MCkpICsgMTUwLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3QmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvUmFuZG9tRmVhdHVyZXMoKSB7XHJcbiAgY29uc3QgY291bnQgPSAoTWF0aC5yYW5kb20oKSAqIGRhdGUuT0ZGRVJfRkVBVFVSRVMubGVuZ3RoKSArIDE7XHJcbiAgbGV0IG5ld0FyckZlYXR1cmVzID0gZGF0ZS5PRkZFUl9GRUFUVVJFUy5zbGljZSgwKTtcclxuICBuZXdBcnJGZWF0dXJlcy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gIG5ld0FyckZlYXR1cmVzID0gbmV3QXJyRmVhdHVyZXMuc2xpY2UoY291bnQpO1xyXG4gIHJldHVybiBuZXdBcnJGZWF0dXJlcztcclxufVxyXG5cclxud2luZG93LmRhdGVUZXN0ID0gY3JlYXRlQmQoKTtcclxuIl0sImZpbGUiOiJkYXRlVGVzdC5qcyJ9