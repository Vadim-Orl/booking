import PinForMap from './PinForMap.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYXBGaWx0cmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaW5Gb3JNYXAgZnJvbSAnLi9QaW5Gb3JNYXAuanMnO1xuXG5jb25zdCBmb3JtTWFwRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXBfX2ZpbHRlcnMtY29udGFpbmVyJyk7XG5cbmNvbnN0IGZpbHRlck9iaiA9IHt9O1xuXG5jb25zdCBESUNUSU9OQVJZX0ZJTFRFUiA9IHtcbiAgJ2hvdXNpbmctdHlwZSc6ICd0eXBlJyxcbiAgJ2hvdXNpbmctcm9vbXMnOiAncm9vbXMnLFxuICAnaG91c2luZy1ndWVzdHMnOiAnZ3Vlc3RzJyxcbiAgZmVhdHVyZXM6ICdmZWF0dXJlcycsXG4gICdob3VzaW5nLXByaWNlJzogJ3ByaWNlJyxcbiAgbWlkZGxlOiB7IG1pbjogMTAwMDAsIG1heDogNTAwMDAgfSxcbiAgbG93OiB7IG1pbjogMCwgbWF4OiAxMDAwMCB9LFxuICBoaWdoOiB7IG1pbjogNTAwMDAsIG1heDogSW5maW5pdHkgfSxcbn1cblxuZnVuY3Rpb24gY2hhbmdlRmlsdGVyT2JqKG5hbWUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gJ2FueScpIHtcbiAgICBmaWx0ZXJPYmpbRElDVElPTkFSWV9GSUxURVJbbmFtZV1dID0gRElDVElPTkFSWV9GSUxURVJbdmFsdWVdID8gRElDVElPTkFSWV9GSUxURVJbdmFsdWVdIDogdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGZpbHRlck9ialtESUNUSU9OQVJZX0ZJTFRFUltuYW1lXV07XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlRmVhdHVyZXMoZXZ0KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldnQ7XG5cbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZmlsdGVyT2JqLCAnZmVhdHVyZXMnKSkgZmlsdGVyT2JqLmZlYXR1cmVzID0gbmV3IFNldCgpO1xuXG4gIGlmICh0YXJnZXQuY2hlY2tlZCkge1xuICAgIGZpbHRlck9iai5mZWF0dXJlcy5hZGQodGFyZ2V0LnZhbHVlKVxuICB9IGVsc2Uge1xuICAgIGZpbHRlck9iai5mZWF0dXJlcy5kZWxldGUodGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGlmICghZmlsdGVyT2JqLmZlYXR1cmVzLnNpemUpIGRlbGV0ZSBmaWx0ZXJPYmouZmVhdHVyZXM7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUZpbHRlcnNNYXAoZXZ0KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldnQ7XG4gIGlmICh0YXJnZXQudHlwZSAhPT0gJ2NoZWNrYm94Jykge1xuICAgIGNoYW5nZUZpbHRlck9iaih0YXJnZXQubmFtZSwgKHBhcnNlSW50KHRhcmdldC52YWx1ZSwgMTApIHx8IHRhcmdldC52YWx1ZSkpXG4gIH0gZWxzZSB7XG4gICAgY2hhbmdlRmVhdHVyZXMoZXZ0KVxuICB9XG5cbiAgd2luZG93Lm15TWFwLmNsZWFyTWFwKClcbiAgd2luZG93Lm15TWFwLmluaXRQaW5Gb3JNYXAod2luZG93Lm15TWFwLmZpbHRlclBpbnNCRChmaWx0ZXJPYmopLCBQaW5Gb3JNYXApXG59XG5cbmZvcm1NYXBGaWx0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUZpbHRlcnNNYXApO1xuIl0sImZpbGUiOiJtYXBGaWx0cmVzLmpzIn0=