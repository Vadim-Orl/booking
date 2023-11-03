import MapListRenta from './map.js';
import PinForMap from './pinForMap.js';

const MapClassName = document.querySelector('.map')
const MapPointsClassName = document.querySelector('.map__pins');
const PinTemplateNode = document.querySelector('#template').content.querySelector('.map__pin');

const MapFiltersClassName = document.querySelector('.map__filters-container')
const PopupTemplateNode = document.querySelector('#template').content.querySelector('.map__card');

window.myMap = new MapListRenta([MapClassName, MapPointsClassName, MapFiltersClassName], [PinTemplateNode, PopupTemplateNode]);
// --------- открытие сайта---------------

const openSitePage = function () {
  window.myMap.openMap();
  window.myMap.initPinForMap(window.dataTest, PinForMap);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFwTGlzdFJlbnRhIGZyb20gJy4vbWFwLmpzJztcbmltcG9ydCBQaW5Gb3JNYXAgZnJvbSAnLi9waW5Gb3JNYXAuanMnO1xuXG5jb25zdCBNYXBDbGFzc05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwJylcbmNvbnN0IE1hcFBvaW50c0NsYXNzTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXBfX3BpbnMnKTtcbmNvbnN0IFBpblRlbXBsYXRlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wbGF0ZScpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLm1hcF9fcGluJyk7XG5cbmNvbnN0IE1hcEZpbHRlcnNDbGFzc05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwX19maWx0ZXJzLWNvbnRhaW5lcicpXG5jb25zdCBQb3B1cFRlbXBsYXRlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wbGF0ZScpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLm1hcF9fY2FyZCcpO1xuXG53aW5kb3cubXlNYXAgPSBuZXcgTWFwTGlzdFJlbnRhKFtNYXBDbGFzc05hbWUsIE1hcFBvaW50c0NsYXNzTmFtZSwgTWFwRmlsdGVyc0NsYXNzTmFtZV0sIFtQaW5UZW1wbGF0ZU5vZGUsIFBvcHVwVGVtcGxhdGVOb2RlXSk7XG4vLyAtLS0tLS0tLS0g0L7RgtC60YDRi9GC0LjQtSDRgdCw0LnRgtCwLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IG9wZW5TaXRlUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93Lm15TWFwLm9wZW5NYXAoKTtcbiAgd2luZG93Lm15TWFwLmluaXRQaW5Gb3JNYXAod2luZG93LmRhdGFUZXN0LCBQaW5Gb3JNYXApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwX19waW4tLW1haW4nKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb3BlblNpdGVQYWdlKTtcbiAgTWFwQ2xhc3NOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblBvcHVwKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g0L/QvtC/0LDQvy0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gb3BlblBvcHVwKGV2dCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZ0O1xuICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5tYXBfX2ZpbHRlcnMtY29udGFpbmVyJykpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5tYXBfX3BpbicpICYmICF0YXJnZXQuY2xvc2VzdCgnLm1hcF9fcGluLS1tYWluJykpIHtcbiAgICBpZiAod2luZG93Lm15TWFwLmN1cnJlbnRJZFBpbiA9PT0gMCB8fCB3aW5kb3cubXlNYXAuY3VycmVudElkUGluKSB3aW5kb3cubXlNYXAubGlzdEFkc1JlbnRhLmdldCh3aW5kb3cubXlNYXAuY3VycmVudElkUGluKS5jbG9zZVBvcHVwKCk7XG5cbiAgICBjb25zdCBudW1FbENsaWNrID0gcGFyc2VJbnQodGFyZ2V0LmNsb3Nlc3QoJy5tYXBfX3BpbicpLmRhdGFzZXQuaWQsIDEwKTtcbiAgICB3aW5kb3cubXlNYXAuY3VycmVudElkUGluID0gbnVtRWxDbGljaztcblxuICAgIHdpbmRvdy5teU1hcC5saXN0QWRzUmVudGEuZ2V0KG51bUVsQ2xpY2spLm9wZW5Qb3B1cCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wdXApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlUG9wdXAoZXZ0KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldnQ7XG5cbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZScpKSB7XG4gICAgd2luZG93Lm15TWFwLmxpc3RBZHNSZW50YS5nZXQod2luZG93Lm15TWFwLmN1cnJlbnRJZFBpbikuY2xvc2VQb3B1cCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3B1cClcbiAgICB3aW5kb3cubXlNYXAuY3VycmVudElkUGluID0gbnVsbDtcbiAgfVxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwX19waW4tLW1haW4nKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb3BlblNpdGVQYWdlKVxuIl0sImZpbGUiOiJpbmRleC5qcyJ9