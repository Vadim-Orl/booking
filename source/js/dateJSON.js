(function () {
  window.load = function (url, collbackOnSuccess, collbackOnError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        collbackOnSuccess(xhr.response);
      } else {
        collbackOnError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.addEventListener('error', () => {
      collbackOnError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', () => {
      collbackOnError(`Запрос не успел выполниться за ${xhr.timeout}мс`);
    });

    xhr.timeout = 10000;

    xhr.open('GET', url, true);
    xhr.send();
  }
}());

const URL = 'http://localhost:3001/server';

function onError(message) {
  console.error(message);
}

function onSuccess(date) {
  window.dateBd = date;
}

window.load(URL, onSuccess, onError);
