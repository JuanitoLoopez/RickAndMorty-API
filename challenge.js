let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

funtion fetchData(url_api, callback){
    let xhttp = new XMLHttprequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(shttp.responseText))
            } else {
                const error = new Error('Error' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}