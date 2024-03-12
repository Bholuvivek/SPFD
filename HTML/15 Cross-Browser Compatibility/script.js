// Polyfill for fetch API
if (!window.fetch) {
    console.log('fetch() not supported, using polyfill...');
    window.fetch = function(url, options) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function() {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.open(options.method || 'GET', url);
            xhr.send(options.body);
        });
    };
}

// Example using fetch API
document.getElementById("fetchDataBtn").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById("data").innerText = JSON.stringify(data);
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
});
