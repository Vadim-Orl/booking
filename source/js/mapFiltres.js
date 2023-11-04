import PinForMap from './pinFormap.js';

const formMapFilters = document.querySelector('.map__filters-container');

const filterObj = {};

const DICTIONARY_FILTER = {
  'housing-type': 'type',
  'housing-rooms': 'rooms',
  'housing-guests': 'guests',
  features: 'features',
  'housing-price': 'price',
  middle: { min: 10000, max: 50000 },
  low: { min: 0, max: 10000 },
  high: { min: 50000, max: Infinity },
}

function changeFilterObj(name, value) {
  if (value !== 'any') {
    filterObj[DICTIONARY_FILTER[name]] = DICTIONARY_FILTER[value] ? DICTIONARY_FILTER[value] : value;
  } else {
    delete filterObj[DICTIONARY_FILTER[name]];
  }
}

function changeFeatures(evt) {
  const { target } = evt;

  if (!Object.prototype.hasOwnProperty.call(filterObj, 'features')) filterObj.features = new Set();

  if (target.checked) {
    filterObj.features.add(target.value)
  } else {
    filterObj.features.delete(target.value);
  }

  if (!filterObj.features.size) delete filterObj.features;
}

function changeFiltersMap(evt) {
  console.log('11')
  const { target } = evt;
  if (target.type !== 'checkbox') {
    changeFilterObj(target.name, (parseInt(target.value, 10) || target.value))
  } else {
    changeFeatures(evt)
  }

  window.myMap.clearMap()
  window.myMap.initPinForMap(window.myMap.filterPinsBD(filterObj), PinForMap)
}

formMapFilters.addEventListener('change', changeFiltersMap);
