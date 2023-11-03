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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwaW5Gb3JNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV09SRFNST09NRSA9IFsn0LrQvtC80L3QsNGC0LAnLCAn0LrQvtC80L3QsNGC0YsnLCAn0LrQvtC80L3QsNGCJ107XG5jb25zdCBXT1JER1VFU1QgPSBbJ9Cz0L7RgdGC0Y8nLCAn0LPQvtGB0YLQtdC5J11cbmNvbnN0IENVUlJFTkNZID0gJ1JVQic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbkZvck1hcCB7XG4gIGNvbnN0cnVjdG9yKGVsRGF0ZUJkLCBpbmRleCwgeyBjb250YWluZXJNYXBOb2RlLCBjb250YWluZXJQaW5zTm9kZSwgY29udGFpbmVyTWFwRmlsdHJlcyB9LCB0ZW1wbGF0ZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGVsRGF0ZUJkLmxvY2F0aW9uO1xuICAgIHRoaXMuaWRQaW4gPSBpbmRleDtcbiAgICB0aGlzLmNvbnRhaW5lcmVzID0geyBjb250YWluZXJNYXBOb2RlLCBjb250YWluZXJQaW5zTm9kZSwgY29udGFpbmVyTWFwRmlsdHJlcyB9XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMubm9kYVBvcHVwID0gbnVsbDtcblxuICAgIHRoaXMuYXV0aG9yID0gZWxEYXRlQmQuYXV0aG9yO1xuICAgIHRoaXMub2ZmZXIgPSB7XG4gICAgICB0aXRsZTogZWxEYXRlQmQub2ZmZXIudGl0bGUsXG4gICAgICBhZGRyZXNzOiBlbERhdGVCZC5vZmZlci5hZGRyZXNzLFxuICAgICAgcHJpY2U6IGVsRGF0ZUJkLm9mZmVyLnByaWNlLFxuICAgICAgdHlwZTogZWxEYXRlQmQub2ZmZXIudHlwZSxcbiAgICAgIHJvb21zOiBlbERhdGVCZC5vZmZlci5yb29tcyxcbiAgICAgIGd1ZXN0czogZWxEYXRlQmQub2ZmZXIuZ3Vlc3RzLFxuICAgICAgY2hlY2tpbjogZWxEYXRlQmQub2ZmZXIuY2hlY2tpbixcbiAgICAgIGNoZWNrb3V0OiBlbERhdGVCZC5vZmZlci5jaGVja291dCxcbiAgICAgIGZlYXR1cmVzOiBlbERhdGVCZC5vZmZlci5mZWF0dXJlcyA/IGVsRGF0ZUJkLm9mZmVyLmZlYXR1cmVzIDogW10sXG4gICAgICBkZXNjcmlwdGlvbjogZWxEYXRlQmQub2ZmZXIuZGVzY3JpcHRpb24sXG4gICAgICBwaG90b3M6IGVsRGF0ZUJkLm9mZmVyLnBob3RvcyA/IGVsRGF0ZUJkLm9mZmVyLnBob3RvcyA6IFtdLFxuICAgIH07XG4gICAgdGhpcy5tYW5hZ2VIdG1sKCk7XG4gIH1cblxuICBtYW5hZ2VIdG1sKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy50ZW1wbGF0ZS5waW5UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZWwuZGF0YXNldC5pZCA9IHRoaXMuaWRQaW47XG4gICAgZWwuc3R5bGUubGVmdCA9IGAke3RoaXMubG9jYXRpb24ubGF0ICsgZWwuY2hpbGRyZW5bMF0ud2lkdGggLyAyfXB4YDtcbiAgICBlbC5zdHlsZS50b3AgPSBgJHt0aGlzLmxvY2F0aW9uLmxuZyAtIGVsLmNoaWxkcmVuWzBdLmhlaWdodH1weGA7XG4gICAgZWwuY2hpbGRyZW5bMF0uc3JjID0gdGhpcy5hdXRob3IuYXZhdGFyO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsO1xuICAgIHRoaXMuY29udGFpbmVyZXMuY29udGFpbmVyUGluc05vZGUuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIG9wZW5Qb3B1cCgpIHtcbiAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy50ZW1wbGF0ZS5wb3B1cFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgZWwucXVlcnlTZWxlY3RvcignLnBvcHVwX19hdmF0YXInKS5zcmMgPSB0aGlzLmF1dGhvci5hdmF0YXJcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGl0bGUnKS50ZXh0Q29udGVudCA9IHRoaXMub2ZmZXIudGl0bGU7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RleHQtLWFkZHJlc3MnKS50ZXh0Q29udGVudCA9IHRoaXMub2ZmZXIuYWRkcmVzcztcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGV4dC0tcHJpY2UnKS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdE51bWJlcih0aGlzLm9mZmVyLnByaWNlKX0gL9C90L7Rh9GMYDtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdHlwZScpLnRleHRDb250ZW50ID0gdGhpcy5vZmZlci50eXBlO1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0LS1jYXBhY2l0eScpLnRleHRDb250ZW50ID0gYCR7dGhpcy5vZmZlci5yb29tc30gJHtlbmRpbmdXb3JkKHRoaXMub2ZmZXIucm9vbXMsIFdPUkRTUk9PTUUpfVxuICAgICAgINC00LvRjyAke3RoaXMub2ZmZXIuZ3Vlc3RzfSAke3RoaXMub2ZmZXIuZ3Vlc3RzID09PSAxID8gV09SREdVRVNUWzBdIDogV09SREdVRVNUWzFdfS5gXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RleHQtLXRpbWUnKS50ZXh0Q29udGVudCA9IGDQl9Cw0LXQt9C0INC/0L7RgdC70LUgJHt0aGlzLm9mZmVyLmNoZWNraW59LCDQstGL0LXQt9C0INC00L4gJHt0aGlzLm9mZmVyLmNoZWNrb3V0fS5gXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Rlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9mZmVyLnBob3Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Bob3RvcycpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8bGk+PGltZyBzcmM9XCIke3RoaXMub2ZmZXIucGhvdG9zW2ldfVwiIHdpZHRoID0gXCI1MFwiPjwvbGk+YClcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vZmZlci5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ZlYXR1cmVzJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImZlYXR1cmUgZmVhdHVyZS0tJHt0aGlzLm9mZmVyLmZlYXR1cmVzW2ldfVwiPjwvbGk+YClcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXJlcy5jb250YWluZXJNYXBOb2RlLmluc2VydEJlZm9yZShlbCwgdGhpcy5jb250YWluZXJlcy5tYXBGaWx0ZXJzQ29udGFpbmVyKTtcbiAgICAgIHRoaXMubm9kYVBvcHVwID0gZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyZXMuY29udGFpbmVyTWFwTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5ub2RhUG9wdXAsIHRoaXMuY29udGFpbmVyZXMubWFwRmlsdGVyc0NvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lcmVzLmNvbnRhaW5lck1hcE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RhUG9wdXApO1xuICB9XG5cbiAgY2xlYXJJdGVtKCkge1xuICAgIHRoaXMuY29udGFpbmVyZXMuY29udGFpbmVyUGluc05vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGNvbXBhcmlzb25XaXRGaWx0ZXJPYmoob2JqRmlsdGVyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmtleXMob2JqRmlsdGVyKS5zb21lKCh2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuICFESUNUSU9OQVJZX0ZVTkNUSU9OX1ZBTFVFW3ZhbHVlXSh0aGlzLCBvYmpGaWx0ZXIsIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLy8gaGVscGVyZXNcbmZ1bmN0aW9uIGVuZGluZ1dvcmQodmFsdWUsIHdvcmRzKSB7XG4gIGNvbnN0IG5ld1ZhbHVlID0gTWF0aC5hYnModmFsdWUpICUgMTAwO1xuICB2YXIgbnVtID0gbmV3VmFsdWUgJSAxMDtcbiAgaWYgKG5ld1ZhbHVlID4gMTAgJiYgbmV3VmFsdWUgPCAyMCkgcmV0dXJuIHdvcmRzWzJdO1xuICBpZiAobnVtID4gMSAmJiBudW0gPCA1KSByZXR1cm4gd29yZHNbMV07XG4gIGlmIChudW0gPT09IDEpIHJldHVybiB3b3Jkc1swXTtcbiAgcmV0dXJuIHdvcmRzWzJdO1xufVxuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtKSB7XG4gIHJldHVybiBJbnRsLk51bWJlckZvcm1hdCgnZXMnLCB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogQ1VSUkVOQ1kgfSkuZm9ybWF0KG51bSk7XG59XG5cbmNvbnN0IERJQ1RJT05BUllfRlVOQ1RJT05fVkFMVUUgPSB7XG4gIHR5cGU6IGV4YW1pbmF0aW9uLFxuICByb29tczogZXhhbWluYXRpb24sXG4gIGd1ZXN0czogZXhhbWluYXRpb24sXG4gIGZlYXR1cmVzOiBleGFtaW5hdGlvbkFycixcbiAgcHJpY2U6IGV4YW1pbmF0aW9uUHJpY2UsXG59O1xuXG5mdW5jdGlvbiBleGFtaW5hdGlvblByaWNlKHBpbiwgZmVhdXRyZXNPYmpGaWx0ZXIsIHZhbHVlKSB7XG4gIGlmICgocGluLm9mZmVyW3ZhbHVlXSA8PSBmZWF1dHJlc09iakZpbHRlclt2YWx1ZV0ubWluKSB8fCAocGluLm9mZmVyW3ZhbHVlXSA+IGZlYXV0cmVzT2JqRmlsdGVyW3ZhbHVlXS5tYXgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBleGFtaW5hdGlvbkFycihwaW4sIGZlYXV0cmVzT2JqRmlsdGVyLCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKGZlYXV0cmVzT2JqRmlsdGVyW3ZhbHVlXSkuZXZlcnkoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gcGluLm9mZmVyW3ZhbHVlXS5pbmNsdWRlcyhpdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZXhhbWluYXRpb24ocGluLCBmZWF1dHJlc09iakZpbHRlciwgdmFsdWUpIHtcbiAgaWYgKHBpbi5vZmZlclt2YWx1ZV0gPT09IGZlYXV0cmVzT2JqRmlsdGVyW3ZhbHVlXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiJdLCJmaWxlIjoicGluRm9yTWFwLmpzIn0=