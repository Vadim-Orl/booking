export default class MapListRenta {
  constructor([containerMapNode, containerPinsNode, containerMapFiltres], [pinTemplate, popupTemplate]) {
    this.containeres = { containerMapNode, containerPinsNode, containerMapFiltres };
    this.template = { pinTemplate, popupTemplate };
    this.size = {
      width: this.containeres.containerMapNode.clientWidth,
      height: this.containeres.containerMapNode.clientHeight,
    };
    this.currentIdPin = null;
    this.listAdsRenta = null;
    this.listAdsRentaCopy = null;
    this.isMapOpen = false;

    this.filterPinsBD = this.filterPinsBD.bind(this);
    this.clearMap = this.clearMap.bind(this);
    this.initPinForMap = this.initPinForMap.bind(this);
    this.openMap = this.openMap.bind(this);
    this.deletePin = this.deletePin.bind(this);
  }

  initPinForMap(date, PinForMap) {
    this.listAdsRenta = new Map();

    date.forEach((el, index) => {
      this.listAdsRenta.set(index, new PinForMap(el, index, this.containeres, this.template));
    })

    if (!this.listAdsRentaCopy) this.listAdsRentaCopy = new Map(this.listAdsRenta);
  }

  openMap() {
    const form = document.querySelector('.notice__form ');
    this.containeres.containerMapNode.classList.remove('map--faded');
    form.classList.remove('notice__form--disabled');
    activateFilter();
    this.isMapOpen = true;
  }

  clearMap() {
    if (this.currentIdPin !== null) {
      this.listAdsRenta.get(this.currentIdPin).closePopup()
      this.currentIdPin = null;
    }
    this.listAdsRenta.forEach((el) => {
      el.clearItem();
    });
  }

  deletePin(index) {
    this.listAdsRenta.set(index).clearItem();
    this.listAdsRenta.delete(index);
  }

  filterPinsBD(obj) {
    const newBd = [];
    this.listAdsRenta = filter(this.listAdsRentaCopy, obj);

    this.listAdsRenta.forEach((v) => {
      const tmp = {};
      tmp.author = v.author;
      tmp.offer = v.offer;
      tmp.location = v.location;
      newBd.push(tmp)
    })
    return newBd
  }
}

// helperes
function activateFilter() {
  const element = document.querySelectorAll('.form__element');
  element.forEach((el) => {
    el.disabled = false;
  });

  document.querySelector('#address').disabled = true;
}

function filter(mapListPins, objFilter) {
  const result = new Map(mapListPins);
  if (result) {
    result.forEach((v, k) => {
      if (v.comparisonWitFilterObj(objFilter)) result.delete(k);
    });
  }

  return result;
}
