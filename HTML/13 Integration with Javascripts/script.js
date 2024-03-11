// DOM Manipulation
document.getElementById("changeMessageBtn").addEventListener("click", function() {
    var messageDiv = document.getElementById("messageDiv");
    messageDiv.textContent = "Message changed!";
});

// Event Handling
document.getElementById("clickMeBtn").addEventListener("click", function() {
    alert("Button clicked!");
});

// Asynchronous JavaScript (AJAX)
document.getElementById("fetchDataBtn").addEventListener("click", function() {
    var dataList = document.getElementById("dataList");
    dataList.innerHTML = ""; // Clear previous data

    // Simulating fetching data asynchronously (replace with actual AJAX call)
    setTimeout(function() {
        var data = ["Data 1", "Data 2", "Data 3"];
        data.forEach(function(item) {
            var li = document.createElement("li");
            li.textContent = item;
            dataList.appendChild(li);
        });
    }, 1000);
});
