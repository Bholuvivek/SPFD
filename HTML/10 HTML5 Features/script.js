// JavaScript for Geolocation API
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

// JavaScript for Web Storage
function saveData() {
    var data = document.getElementById("inputData").value;
    localStorage.setItem("userData", data);
}

function showData() {
    var data = localStorage.getItem("userData");
    document.getElementById("outputData").innerHTML = "Stored Data: " + data;
}

function clearData() {
    localStorage.removeItem("userData");
    document.getElementById("outputData").innerHTML = "Data cleared.";
}
