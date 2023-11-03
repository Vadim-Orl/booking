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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkYXRhSlNPTi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICB3aW5kb3cubG9hZCA9IGZ1bmN0aW9uICh1cmwsIGNvbGxiYWNrT25TdWNjZXNzLCBjb2xsYmFja09uRXJyb3IpIHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICBcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29sbGJhY2tPblN1Y2Nlc3MoeGhyLnJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxiYWNrT25FcnJvcihg0KHRgtCw0YLRg9GBINC+0YLQstC10YLQsDogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgY29sbGJhY2tPbkVycm9yKCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINGB0L7QtdC00LjQvdC10L3QuNGPJyk7XG4gICAgfSk7XG5cbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigndGltZW91dCcsICgpID0+IHtcbiAgICAgIGNvbGxiYWNrT25FcnJvcihg0JfQsNC/0YDQvtGBINC90LUg0YPRgdC/0LXQuyDQstGL0L/QvtC70L3QuNGC0YzRgdGPINC30LAgJHt4aHIudGltZW91dH3QvNGBYCk7XG4gICAgfSk7XG5cbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xuXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfVxufSgpKTtcblxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXJ2ZXInO1xuXG5mdW5jdGlvbiBvbkVycm9yKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gb25TdWNjZXNzKGRhdGUpIHtcbiAgd2luZG93LmRhdGVCZCA9IGRhdGU7XG59XG5cbndpbmRvdy5sb2FkKFVSTCwgb25TdWNjZXNzLCBvbkVycm9yKTtcbiJdLCJmaWxlIjoiZGF0YUpTT04uanMifQ==