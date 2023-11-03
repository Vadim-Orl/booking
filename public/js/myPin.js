// перетаскивание и отображение координат главного Pin
const MapClassName = document.querySelector('.map')
const MyPinClassName = document.querySelector('.map__pin--main')
const addresInput = document.querySelector('#address');

const MAP_SIZE = {
  width: MapClassName.clientWidth,
  height: MapClassName.clientHeight,
}

class Pin {
  constructor(location) {
    this.location = {
      lat: location.lat,
      lng: location.lng,
    }
  }

  toString() {
    return `${this.location.lat}, ${this.location.lng}`
  }
}

const myPin = new Pin({
  lat: MyPinClassName.offsetLeft,
  lng: (MAP_SIZE.height - MyPinClassName.offsetTop),
});

// перетаскивание главного Pin
MyPinClassName.addEventListener('mousedown', (evt) => {
  evt.preventDefault();
  let startCoords = {
    x: evt.clientX,
    y: evt.clientY,
  };

  function onMouseMove(moveEvt) {
    moveEvt.preventDefault();
    const shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY,
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY,
    };

    MyPinClassName.style.top = `${MyPinClassName.offsetTop - shift.y}px`;
    MyPinClassName.style.left = `${MyPinClassName.offsetLeft - shift.x}px`;
  }

  function onMouseUp(upEvt) {
    upEvt.preventDefault();

    MapClassName.removeEventListener('mousemove', onMouseMove);
    MapClassName.removeEventListener('mouseup', onMouseUp);

    getNewCoordsAddresInput();
  }

  MapClassName.addEventListener('mousemove', onMouseMove);
  MapClassName.addEventListener('mouseup', onMouseUp);
});

// отображение координат Pin в Input
function getNewCoordsAddresInput() {
  myPin.location = {
    lat: MyPinClassName.offsetLeft,
    lng: (MAP_SIZE.height - MyPinClassName.offsetTop),
  }
  addresInput.value = `${myPin.toString()}`;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJteVBpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQv9C10YDQtdGC0LDRgdC60LjQstCw0L3QuNC1INC4INC+0YLQvtCx0YDQsNC20LXQvdC40LUg0LrQvtC+0YDQtNC40L3QsNGCINCz0LvQsNCy0L3QvtCz0L4gUGluXG5jb25zdCBNYXBDbGFzc05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwJylcbmNvbnN0IE15UGluQ2xhc3NOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcF9fcGluLS1tYWluJylcbmNvbnN0IGFkZHJlc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3MnKTtcblxuY29uc3QgTUFQX1NJWkUgPSB7XG4gIHdpZHRoOiBNYXBDbGFzc05hbWUuY2xpZW50V2lkdGgsXG4gIGhlaWdodDogTWFwQ2xhc3NOYW1lLmNsaWVudEhlaWdodCxcbn1cblxuY2xhc3MgUGluIHtcbiAgY29uc3RydWN0b3IobG9jYXRpb24pIHtcbiAgICB0aGlzLmxvY2F0aW9uID0ge1xuICAgICAgbGF0OiBsb2NhdGlvbi5sYXQsXG4gICAgICBsbmc6IGxvY2F0aW9uLmxuZyxcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5sb2NhdGlvbi5sYXR9LCAke3RoaXMubG9jYXRpb24ubG5nfWBcbiAgfVxufVxuXG5jb25zdCBteVBpbiA9IG5ldyBQaW4oe1xuICBsYXQ6IE15UGluQ2xhc3NOYW1lLm9mZnNldExlZnQsXG4gIGxuZzogKE1BUF9TSVpFLmhlaWdodCAtIE15UGluQ2xhc3NOYW1lLm9mZnNldFRvcCksXG59KTtcblxuLy8g0L/QtdGA0LXRgtCw0YHQutC40LLQsNC90LjQtSDQs9C70LDQstC90L7Qs9C+IFBpblxuTXlQaW5DbGFzc05hbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHN0YXJ0Q29vcmRzID0ge1xuICAgIHg6IGV2dC5jbGllbnRYLFxuICAgIHk6IGV2dC5jbGllbnRZLFxuICB9O1xuXG4gIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKG1vdmVFdnQpIHtcbiAgICBtb3ZlRXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2hpZnQgPSB7XG4gICAgICB4OiBzdGFydENvb3Jkcy54IC0gbW92ZUV2dC5jbGllbnRYLFxuICAgICAgeTogc3RhcnRDb29yZHMueSAtIG1vdmVFdnQuY2xpZW50WSxcbiAgICB9O1xuXG4gICAgc3RhcnRDb29yZHMgPSB7XG4gICAgICB4OiBtb3ZlRXZ0LmNsaWVudFgsXG4gICAgICB5OiBtb3ZlRXZ0LmNsaWVudFksXG4gICAgfTtcblxuICAgIE15UGluQ2xhc3NOYW1lLnN0eWxlLnRvcCA9IGAke015UGluQ2xhc3NOYW1lLm9mZnNldFRvcCAtIHNoaWZ0Lnl9cHhgO1xuICAgIE15UGluQ2xhc3NOYW1lLnN0eWxlLmxlZnQgPSBgJHtNeVBpbkNsYXNzTmFtZS5vZmZzZXRMZWZ0IC0gc2hpZnQueH1weGA7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlVXAodXBFdnQpIHtcbiAgICB1cEV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgTWFwQ2xhc3NOYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICBNYXBDbGFzc05hbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cbiAgICBnZXROZXdDb29yZHNBZGRyZXNJbnB1dCgpO1xuICB9XG5cbiAgTWFwQ2xhc3NOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgTWFwQ2xhc3NOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xufSk7XG5cbi8vINC+0YLQvtCx0YDQsNC20LXQvdC40LUg0LrQvtC+0YDQtNC40L3QsNGCIFBpbiDQsiBJbnB1dFxuZnVuY3Rpb24gZ2V0TmV3Q29vcmRzQWRkcmVzSW5wdXQoKSB7XG4gIG15UGluLmxvY2F0aW9uID0ge1xuICAgIGxhdDogTXlQaW5DbGFzc05hbWUub2Zmc2V0TGVmdCxcbiAgICBsbmc6IChNQVBfU0laRS5oZWlnaHQgLSBNeVBpbkNsYXNzTmFtZS5vZmZzZXRUb3ApLFxuICB9XG4gIGFkZHJlc0lucHV0LnZhbHVlID0gYCR7bXlQaW4udG9TdHJpbmcoKX1gO1xufVxuIl0sImZpbGUiOiJteVBpbi5qcyJ9