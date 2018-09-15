/*export default url => {
    return new Promise((success, fail) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
  
      request.addEventListener('load', () => {
        request.status >= 200 && request.status < 400
          ? success(request.responseText)
          : fail(new Error(`Request Failed: ${request.statusText}`));
      });
  
      request.addEventListener('error', () => {
        fail(new Error('Network Error'));
      });
  
      request.send();
    });
};*/

export default function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}