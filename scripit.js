window.onload = function () {
    var searchInput = document.getElementById("search");
    document.addEventListener("keypress", function (event) {
        searchInput.focus();
    });

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && searchInput.value != "") {
            event.preventDefault();
            var text = searchInput.value;
            var cleanQuery = text.replace(" ", "+", searchInput.value);
            var cleanQuery = text.replace("#", "%23", cleanQuery.value);

            if (cleanQuery === "g" || cleanQuery === "gi" || cleanQuery === "git") {
                window.location.href = "https://github.com";
            } else if (cleanQuery === "m" || cleanQuery === "ma" || cleanQuery === "mai" || cleanQuery === "mail") {
                window.location.href = "https://mail.google.com";
            } else if (cleanQuery === "c" || cleanQuery === "ch" || cleanQuery === "cha" || cleanQuery === "chat") {
                window.location.href = "https://chat.openai.com";
            } else if (cleanQuery === "y" || cleanQuery === "yt" || cleanQuery === "yo" || cleanQuery === "you" || cleanQuery === "yout") {
                window.location.href = "https://youtube.com";
            } else if (cleanQuery === "i" || cleanQuery === "in" || cleanQuery === "ins" || cleanQuery === "inst" || cleanQuery === "insta") {
                window.location.href = "https://instagram.com";
            } else if (cleanQuery === "p" || cleanQuery === "pr" || cleanQuery === "pri" || cleanQuery === "prin" || cleanQuery === "princ" || cleanQuery === "prince") {
                window.location.href = "https://heyprincesingh.github.io/";
            } else {
                var url = 'http://www.google.com/search?q=' + cleanQuery;
                window.location.href = url;
            }


            document.getElementById("search").value = "";
        }
    });
};

function getQuote(){
    fetch("https://api.quotable.io/quotes/random?maxLength=140")
    .then(response => response.json())
    .then(data => {
        const quoteContainer = document.getElementById('quoteContainer');
        quoteContainer.innerHTML = data[0].content;
    })
    .catch(error => {
        console.log("Error fetching quote:", error);
    });
}

getQuote();

function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? '‎ PM' : '‎ AM';
    var day = currentTime.getDay() == 1 ? "MONDAY" : currentTime.getDay() == 2 ? "TUESDAY" : currentTime.getDay() == 3 ? "WEDNESDAY" : currentTime.getDay() == 4 ? "THRUSDAY" : currentTime.getDay() == 5 ? "FRIDAY" : currentTime.getDay() == 6 ? "SATURDAY" : "SUNDAY"; 

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros if necessary
    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    // Update the clock time
    document.getElementById("clockTime").innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("AmPm").innerText = ampm;
    document.getElementById("day").innerText = day;
}

function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

// Update the time every second
setInterval(updateTime, 1000);