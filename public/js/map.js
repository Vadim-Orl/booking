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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwTGlzdFJlbnRhIHtcbiAgY29uc3RydWN0b3IoW2NvbnRhaW5lck1hcE5vZGUsIGNvbnRhaW5lclBpbnNOb2RlLCBjb250YWluZXJNYXBGaWx0cmVzXSwgW3BpblRlbXBsYXRlLCBwb3B1cFRlbXBsYXRlXSkge1xuICAgIHRoaXMuY29udGFpbmVyZXMgPSB7IGNvbnRhaW5lck1hcE5vZGUsIGNvbnRhaW5lclBpbnNOb2RlLCBjb250YWluZXJNYXBGaWx0cmVzIH07XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHsgcGluVGVtcGxhdGUsIHBvcHVwVGVtcGxhdGUgfTtcbiAgICB0aGlzLnNpemUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5jb250YWluZXJlcy5jb250YWluZXJNYXBOb2RlLmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbnRhaW5lcmVzLmNvbnRhaW5lck1hcE5vZGUuY2xpZW50SGVpZ2h0LFxuICAgIH07XG4gICAgdGhpcy5jdXJyZW50SWRQaW4gPSBudWxsO1xuICAgIHRoaXMubGlzdEFkc1JlbnRhID0gbnVsbDtcbiAgICB0aGlzLmxpc3RBZHNSZW50YUNvcHkgPSBudWxsO1xuICAgIHRoaXMuaXNNYXBPcGVuID0gZmFsc2U7XG5cbiAgICB0aGlzLmZpbHRlclBpbnNCRCA9IHRoaXMuZmlsdGVyUGluc0JELmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGVhck1hcCA9IHRoaXMuY2xlYXJNYXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluaXRQaW5Gb3JNYXAgPSB0aGlzLmluaXRQaW5Gb3JNYXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5NYXAgPSB0aGlzLm9wZW5NYXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZVBpbiA9IHRoaXMuZGVsZXRlUGluLmJpbmQodGhpcyk7XG4gIH1cblxuICBpbml0UGluRm9yTWFwKGRhdGUsIFBpbkZvck1hcCkge1xuICAgIHRoaXMubGlzdEFkc1JlbnRhID0gbmV3IE1hcCgpO1xuXG4gICAgZGF0ZS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubGlzdEFkc1JlbnRhLnNldChpbmRleCwgbmV3IFBpbkZvck1hcChlbCwgaW5kZXgsIHRoaXMuY29udGFpbmVyZXMsIHRoaXMudGVtcGxhdGUpKTtcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLmxpc3RBZHNSZW50YUNvcHkpIHRoaXMubGlzdEFkc1JlbnRhQ29weSA9IG5ldyBNYXAodGhpcy5saXN0QWRzUmVudGEpO1xuICB9XG5cbiAgb3Blbk1hcCgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGljZV9fZm9ybSAnKTtcbiAgICB0aGlzLmNvbnRhaW5lcmVzLmNvbnRhaW5lck1hcE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFwLS1mYWRlZCcpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbm90aWNlX19mb3JtLS1kaXNhYmxlZCcpO1xuICAgIGFjdGl2YXRlRmlsdGVyKCk7XG4gICAgdGhpcy5pc01hcE9wZW4gPSB0cnVlO1xuICB9XG5cbiAgY2xlYXJNYXAoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudElkUGluICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmxpc3RBZHNSZW50YS5nZXQodGhpcy5jdXJyZW50SWRQaW4pLmNsb3NlUG9wdXAoKVxuICAgICAgdGhpcy5jdXJyZW50SWRQaW4gPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmxpc3RBZHNSZW50YS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xlYXJJdGVtKCk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVQaW4oaW5kZXgpIHtcbiAgICB0aGlzLmxpc3RBZHNSZW50YS5zZXQoaW5kZXgpLmNsZWFySXRlbSgpO1xuICAgIHRoaXMubGlzdEFkc1JlbnRhLmRlbGV0ZShpbmRleCk7XG4gIH1cblxuICBmaWx0ZXJQaW5zQkQob2JqKSB7XG4gICAgY29uc3QgbmV3QmQgPSBbXTtcbiAgICB0aGlzLmxpc3RBZHNSZW50YSA9IGZpbHRlcih0aGlzLmxpc3RBZHNSZW50YUNvcHksIG9iaik7XG5cbiAgICB0aGlzLmxpc3RBZHNSZW50YS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICBjb25zdCB0bXAgPSB7fTtcbiAgICAgIHRtcC5hdXRob3IgPSB2LmF1dGhvcjtcbiAgICAgIHRtcC5vZmZlciA9IHYub2ZmZXI7XG4gICAgICB0bXAubG9jYXRpb24gPSB2LmxvY2F0aW9uO1xuICAgICAgbmV3QmQucHVzaCh0bXApXG4gICAgfSlcbiAgICByZXR1cm4gbmV3QmRcbiAgfVxufVxuXG4vLyBoZWxwZXJlc1xuZnVuY3Rpb24gYWN0aXZhdGVGaWx0ZXIoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9fZWxlbWVudCcpO1xuICBlbGVtZW50LmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3MnKS5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihtYXBMaXN0UGlucywgb2JqRmlsdGVyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAobWFwTGlzdFBpbnMpO1xuICBpZiAocmVzdWx0KSB7XG4gICAgcmVzdWx0LmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgIGlmICh2LmNvbXBhcmlzb25XaXRGaWx0ZXJPYmoob2JqRmlsdGVyKSkgcmVzdWx0LmRlbGV0ZShrKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwiZmlsZSI6Im1hcC5qcyJ9