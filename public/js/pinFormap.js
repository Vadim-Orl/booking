const WORDSROOME = ['комната', 'комнаты', 'комнат'];
const WORDGUEST = ['гостя', 'гостей']
const CURRENCY = 'RUB';


export default class PinForMap {
  constructor(elDateBd, index, { containerMapNode, containerPinsNode, containerMapFiltres }, template) {
    this.element = null;
    this.location = elDateBd.location;
    this.idPin = index;
    this.containeres = { containerMapNode, containerPinsNode, containerMapFiltres }
    this.template = template;
    this.nodaPopup = null;

    this.author = elDateBd.author;
    this.offer = {
      title: elDateBd.offer.title,
      address: elDateBd.offer.address,
      price: elDateBd.offer.price,
      type: elDateBd.offer.type,
      rooms: elDateBd.offer.rooms,
      guests: elDateBd.offer.guests,
      checkin: elDateBd.offer.checkin,
      checkout: elDateBd.offer.checkout,
      features: elDateBd.offer.features ? elDateBd.offer.features : [],
      description: elDateBd.offer.description,
      photos: elDateBd.offer.photos ? elDateBd.offer.photos : [],
    };
    this.manageHtml();
  }

  manageHtml() {
    const el = this.template.pinTemplate.cloneNode(true);
    el.dataset.id = this.idPin;
    el.style.left = `${this.location.lat + el.children[0].width / 2}px`;
    el.style.top = `${this.location.lng - el.children[0].height}px`;
    el.children[0].src = this.author.avatar;
    this.element = el;
    this.containeres.containerPinsNode.appendChild(this.element);
  }

  openPopup() {
    if (!this.el) {
      const el = this.template.popupTemplate.cloneNode(true);

      el.querySelector('.popup__avatar').src = this.author.avatar
      el.querySelector('.popup__title').textContent = this.offer.title;
      el.querySelector('.popup__text--address').textContent = this.offer.address;
      el.querySelector('.popup__text--price').textContent = `${formatNumber(this.offer.price)} /ночь`;
      el.querySelector('.popup__type').textContent = this.offer.type;
      el.querySelector('.popup__text--capacity').textContent = `${this.offer.rooms} ${endingWord(this.offer.rooms, WORDSROOME)}
       для ${this.offer.guests} ${this.offer.guests === 1 ? WORDGUEST[0] : WORDGUEST[1]}.`
      el.querySelector('.popup__text--time').textContent = `Заезд после ${this.offer.checkin}, выезд до ${this.offer.checkout}.`
      el.querySelector('.popup__description').textContent = this.description;
      for (let i = 0; i < this.offer.photos.length; i++) {
        el.querySelector('.popup__photos').insertAdjacentHTML('afterbegin', `<li><img src="${this.offer.photos[i]}" width = "50"></li>`)
      }
      for (let i = 0; i < this.offer.features.length; i++) {
        el.querySelector('.popup__features').insertAdjacentHTML('afterbegin', `
                                                                <li class="feature feature--${this.offer.features[i]}"></li>`)
      }

      this.containeres.containerMapNode.insertBefore(el, this.containeres.mapFiltersContainer);
      this.nodaPopup = el;
    } else {
      this.containeres.containerMapNode.insertBefore(this.nodaPopup, this.containeres.mapFiltersContainer);
    }
  }

  closePopup() {
    this.containeres.containerMapNode.removeChild(this.nodaPopup);
  }

  clearItem() {
    this.containeres.containerPinsNode.removeChild(this.element);
  }

  comparisonWitFilterObj(objFilter) {
    const result = Object.keys(objFilter).some((value) => {
      return !DICTIONARY_FUNCTION_VALUE[value](this, objFilter, value);
    });

    return result;
  }
}

// helperes
function endingWord(value, words) {
  const newValue = Math.abs(value) % 100;
  var num = newValue % 10;
  if (newValue > 10 && newValue < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
}

function formatNumber(num) {
  return Intl.NumberFormat('es', { style: 'currency', currency: CURRENCY }).format(num);
}

const DICTIONARY_FUNCTION_VALUE = {
  type: examination,
  rooms: examination,
  guests: examination,
  features: examinationArr,
  price: examinationPrice,
};

function examinationPrice(pin, feautresObjFilter, value) {
  if ((pin.offer[value] <= feautresObjFilter[value].min) || (pin.offer[value] > feautresObjFilter[value].max)) {
    return false;
  }
  return true;
}

function examinationArr(pin, feautresObjFilter, value) {
  const result = Array.from(feautresObjFilter[value]).every((item) => {
    return pin.offer[value].includes(item);
  });

  return result;
}

function examination(pin, feautresObjFilter, value) {
  if (pin.offer[value] === feautresObjFilter[value]) {
    return true;
  }
  return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwaW5Gb3JNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV09SRFNST09NRSA9IFsn0LrQvtC80L3QsNGC0LAnLCAn0LrQvtC80L3QsNGC0YsnLCAn0LrQvtC80L3QsNGCJ107XG5jb25zdCBXT1JER1VFU1QgPSBbJ9Cz0L7RgdGC0Y8nLCAn0LPQvtGB0YLQtdC5J11cbmNvbnN0IENVUlJFTkNZID0gJ1JVQic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGluRm9yTWFwIHtcbiAgY29uc3RydWN0b3IoZWxEYXRlQmQsIGluZGV4LCB7IGNvbnRhaW5lck1hcE5vZGUsIGNvbnRhaW5lclBpbnNOb2RlLCBjb250YWluZXJNYXBGaWx0cmVzIH0sIHRlbXBsYXRlKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmxvY2F0aW9uID0gZWxEYXRlQmQubG9jYXRpb247XG4gICAgdGhpcy5pZFBpbiA9IGluZGV4O1xuICAgIHRoaXMuY29udGFpbmVyZXMgPSB7IGNvbnRhaW5lck1hcE5vZGUsIGNvbnRhaW5lclBpbnNOb2RlLCBjb250YWluZXJNYXBGaWx0cmVzIH1cbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5ub2RhUG9wdXAgPSBudWxsO1xuXG4gICAgdGhpcy5hdXRob3IgPSBlbERhdGVCZC5hdXRob3I7XG4gICAgdGhpcy5vZmZlciA9IHtcbiAgICAgIHRpdGxlOiBlbERhdGVCZC5vZmZlci50aXRsZSxcbiAgICAgIGFkZHJlc3M6IGVsRGF0ZUJkLm9mZmVyLmFkZHJlc3MsXG4gICAgICBwcmljZTogZWxEYXRlQmQub2ZmZXIucHJpY2UsXG4gICAgICB0eXBlOiBlbERhdGVCZC5vZmZlci50eXBlLFxuICAgICAgcm9vbXM6IGVsRGF0ZUJkLm9mZmVyLnJvb21zLFxuICAgICAgZ3Vlc3RzOiBlbERhdGVCZC5vZmZlci5ndWVzdHMsXG4gICAgICBjaGVja2luOiBlbERhdGVCZC5vZmZlci5jaGVja2luLFxuICAgICAgY2hlY2tvdXQ6IGVsRGF0ZUJkLm9mZmVyLmNoZWNrb3V0LFxuICAgICAgZmVhdHVyZXM6IGVsRGF0ZUJkLm9mZmVyLmZlYXR1cmVzID8gZWxEYXRlQmQub2ZmZXIuZmVhdHVyZXMgOiBbXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBlbERhdGVCZC5vZmZlci5kZXNjcmlwdGlvbixcbiAgICAgIHBob3RvczogZWxEYXRlQmQub2ZmZXIucGhvdG9zID8gZWxEYXRlQmQub2ZmZXIucGhvdG9zIDogW10sXG4gICAgfTtcbiAgICB0aGlzLm1hbmFnZUh0bWwoKTtcbiAgfVxuXG4gIG1hbmFnZUh0bWwoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLnRlbXBsYXRlLnBpblRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICBlbC5kYXRhc2V0LmlkID0gdGhpcy5pZFBpbjtcbiAgICBlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5sb2NhdGlvbi5sYXQgKyBlbC5jaGlsZHJlblswXS53aWR0aCAvIDJ9cHhgO1xuICAgIGVsLnN0eWxlLnRvcCA9IGAke3RoaXMubG9jYXRpb24ubG5nIC0gZWwuY2hpbGRyZW5bMF0uaGVpZ2h0fXB4YDtcbiAgICBlbC5jaGlsZHJlblswXS5zcmMgPSB0aGlzLmF1dGhvci5hdmF0YXI7XG4gICAgdGhpcy5lbGVtZW50ID0gZWw7XG4gICAgdGhpcy5jb250YWluZXJlcy5jb250YWluZXJQaW5zTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgb3BlblBvcHVwKCkge1xuICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLnRlbXBsYXRlLnBvcHVwVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2F2YXRhcicpLnNyYyA9IHRoaXMuYXV0aG9yLmF2YXRhclxuICAgICAgZWwucXVlcnlTZWxlY3RvcignLnBvcHVwX190aXRsZScpLnRleHRDb250ZW50ID0gdGhpcy5vZmZlci50aXRsZTtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGV4dC0tYWRkcmVzcycpLnRleHRDb250ZW50ID0gdGhpcy5vZmZlci5hZGRyZXNzO1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0LS1wcmljZScpLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0TnVtYmVyKHRoaXMub2ZmZXIucHJpY2UpfSAv0L3QvtGH0YxgO1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLnBvcHVwX190eXBlJykudGV4dENvbnRlbnQgPSB0aGlzLm9mZmVyLnR5cGU7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RleHQtLWNhcGFjaXR5JykudGV4dENvbnRlbnQgPSBgJHt0aGlzLm9mZmVyLnJvb21zfSAke2VuZGluZ1dvcmQodGhpcy5vZmZlci5yb29tcywgV09SRFNST09NRSl9XG4gICAgICAg0LTQu9GPICR7dGhpcy5vZmZlci5ndWVzdHN9ICR7dGhpcy5vZmZlci5ndWVzdHMgPT09IDEgPyBXT1JER1VFU1RbMF0gOiBXT1JER1VFU1RbMV19LmBcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGV4dC0tdGltZScpLnRleHRDb250ZW50ID0gYNCX0LDQtdC30LQg0L/QvtGB0LvQtSAke3RoaXMub2ZmZXIuY2hlY2tpbn0sINCy0YvQtdC30LQg0LTQviAke3RoaXMub2ZmZXIuY2hlY2tvdXR9LmBcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2ZmZXIucGhvdG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fcGhvdG9zJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxsaT48aW1nIHNyYz1cIiR7dGhpcy5vZmZlci5waG90b3NbaV19XCIgd2lkdGggPSBcIjUwXCI+PC9saT5gKVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9mZmVyLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZmVhdHVyZXMnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmVhdHVyZSBmZWF0dXJlLS0ke3RoaXMub2ZmZXIuZmVhdHVyZXNbaV19XCI+PC9saT5gKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lcmVzLmNvbnRhaW5lck1hcE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLmNvbnRhaW5lcmVzLm1hcEZpbHRlcnNDb250YWluZXIpO1xuICAgICAgdGhpcy5ub2RhUG9wdXAgPSBlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXJlcy5jb250YWluZXJNYXBOb2RlLmluc2VydEJlZm9yZSh0aGlzLm5vZGFQb3B1cCwgdGhpcy5jb250YWluZXJlcy5tYXBGaWx0ZXJzQ29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMuY29udGFpbmVyZXMuY29udGFpbmVyTWFwTm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGFQb3B1cCk7XG4gIH1cblxuICBjbGVhckl0ZW0oKSB7XG4gICAgdGhpcy5jb250YWluZXJlcy5jb250YWluZXJQaW5zTm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgY29tcGFyaXNvbldpdEZpbHRlck9iaihvYmpGaWx0ZXIpIHtcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3Qua2V5cyhvYmpGaWx0ZXIpLnNvbWUoKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gIURJQ1RJT05BUllfRlVOQ1RJT05fVkFMVUVbdmFsdWVdKHRoaXMsIG9iakZpbHRlciwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vLyBoZWxwZXJlc1xuZnVuY3Rpb24gZW5kaW5nV29yZCh2YWx1ZSwgd29yZHMpIHtcbiAgY29uc3QgbmV3VmFsdWUgPSBNYXRoLmFicyh2YWx1ZSkgJSAxMDA7XG4gIHZhciBudW0gPSBuZXdWYWx1ZSAlIDEwO1xuICBpZiAobmV3VmFsdWUgPiAxMCAmJiBuZXdWYWx1ZSA8IDIwKSByZXR1cm4gd29yZHNbMl07XG4gIGlmIChudW0gPiAxICYmIG51bSA8IDUpIHJldHVybiB3b3Jkc1sxXTtcbiAgaWYgKG51bSA9PT0gMSkgcmV0dXJuIHdvcmRzWzBdO1xuICByZXR1cm4gd29yZHNbMl07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW0pIHtcbiAgcmV0dXJuIEludGwuTnVtYmVyRm9ybWF0KCdlcycsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiBDVVJSRU5DWSB9KS5mb3JtYXQobnVtKTtcbn1cblxuY29uc3QgRElDVElPTkFSWV9GVU5DVElPTl9WQUxVRSA9IHtcbiAgdHlwZTogZXhhbWluYXRpb24sXG4gIHJvb21zOiBleGFtaW5hdGlvbixcbiAgZ3Vlc3RzOiBleGFtaW5hdGlvbixcbiAgZmVhdHVyZXM6IGV4YW1pbmF0aW9uQXJyLFxuICBwcmljZTogZXhhbWluYXRpb25QcmljZSxcbn07XG5cbmZ1bmN0aW9uIGV4YW1pbmF0aW9uUHJpY2UocGluLCBmZWF1dHJlc09iakZpbHRlciwgdmFsdWUpIHtcbiAgaWYgKChwaW4ub2ZmZXJbdmFsdWVdIDw9IGZlYXV0cmVzT2JqRmlsdGVyW3ZhbHVlXS5taW4pIHx8IChwaW4ub2ZmZXJbdmFsdWVdID4gZmVhdXRyZXNPYmpGaWx0ZXJbdmFsdWVdLm1heCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGV4YW1pbmF0aW9uQXJyKHBpbiwgZmVhdXRyZXNPYmpGaWx0ZXIsIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oZmVhdXRyZXNPYmpGaWx0ZXJbdmFsdWVdKS5ldmVyeSgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBwaW4ub2ZmZXJbdmFsdWVdLmluY2x1ZGVzKGl0ZW0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBleGFtaW5hdGlvbihwaW4sIGZlYXV0cmVzT2JqRmlsdGVyLCB2YWx1ZSkge1xuICBpZiAocGluLm9mZmVyW3ZhbHVlXSA9PT0gZmVhdXRyZXNPYmpGaWx0ZXJbdmFsdWVdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl0sImZpbGUiOiJwaW5Gb3JNYXAuanMifQ==