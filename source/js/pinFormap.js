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
