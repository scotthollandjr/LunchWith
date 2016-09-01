function formUrlEncode(obj) {
  var urlData = '';
  for (var x in obj) {
    urlData = urlData + x + '=' + obj[x] + '&';
  }
  urlData = urlData.substr(0, (urlData.length - 1));
  return urlData;
}

module.exports = function(opts) {
  return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", opts.url+'?'+formUrlEncode(opts.values));
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if (opts.headers) {
            Object.keys(opts.headers).forEach(key => {
                xhr.setRequestHeader(key, opts.headers[key]);
            });
        }

        xhr.send();
    })
}
