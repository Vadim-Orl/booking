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
