import MapListRenta from './map.js';
import PinForMap from './PinForMap.js';

const MapClassName = document.querySelector('.map')
const MapPointsClassName = document.querySelector('.map__pins');
const PinTemplateNode = document.querySelector('#template').content.querySelector('.map__pin');

const MapFiltersClassName = document.querySelector('.map__filters-container')
const PopupTemplateNode = document.querySelector('#template').content.querySelector('.map__card');

window.myMap = new MapListRenta([MapClassName, MapPointsClassName, MapFiltersClassName], [PinTemplateNode, PopupTemplateNode]);
// --------- открытие сайта---------------

const openSitePage = function () {
  window.myMap.openMap();
  window.myMap.initPinForMap(window.dateTest, PinForMap);
  document.querySelector('.map__pin--main').removeEventListener('mouseup', openSitePage);
  MapClassName.addEventListener('click', openPopup);
}

// ----------------------- попап----------------

function openPopup(evt) {
  const { target } = evt;
  if (target.closest('.map__filters-container')) {
    evt.stopPropagation()
  }
  if (target.closest('.map__pin') && !target.closest('.map__pin--main')) {
    if (window.myMap.currentIdPin === 0 || window.myMap.currentIdPin) window.myMap.listAdsRenta.get(window.myMap.currentIdPin).closePopup();

    const numElClick = parseInt(target.closest('.map__pin').dataset.id, 10);
    window.myMap.currentIdPin = numElClick;

    window.myMap.listAdsRenta.get(numElClick).openPopup();
    document.querySelector('.popup__close').addEventListener('click', closePopup);
  }
}

function closePopup(evt) {
  const { target } = evt;

  if (target.classList.contains('popup__close')) {
    window.myMap.listAdsRenta.get(window.myMap.currentIdPin).closePopup();
    document.removeEventListener('click', closePopup)
    window.myMap.currentIdPin = null;
  }
}

document.querySelector('.map__pin--main').addEventListener('mouseup', openSitePage)
