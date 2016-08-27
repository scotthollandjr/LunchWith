export default opts => {
  var params = opts.values;
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", opts.url+"?firstName=ipsum&lastName=binny");
        debugger;
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
    });
}
