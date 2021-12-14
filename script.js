const firebaseConfig = {
    apiKey: "AIzaSyB8lTLxpMssHPBogei0q5bn8ZE7PAqL3jo",
    authDomain: "pick-up-ffe64.firebaseapp.com",
    databaseURL: "https://pick-up-ffe64-default-rtdb.firebaseio.com",
    projectId: "pick-up-ffe64",
    storageBucket: "pick-up-ffe64.appspot.com",
    messagingSenderId: "613177248799",
    appId: "1:613177248799:web:d3cac871578e8b8729992a",
    measurementId: "G-ZMB625T4Q8"
};

firebase.initializeApp(firebaseConfig);

var requestCount = 1

firebase.database().ref("Requests").on("child_added", function (snapshot) {
    var html = "";
    // give each message a unique ID
    // show delete button if message is sent by me
    html += "<div id='hole-Request-Container'>";
    html += "<div id='request-Count'>";
    html += requestCount;
    html += "</div>";
    html += "<div id='request-Street'>";
    html += snapshot.val().Street;
    html += "</div>";
    html += '<div id="request-Postcode">';
    html += snapshot.val().Postcode;
    html += "</div>"
    html += "<div id='request-Date'>";
    html += snapshot.val().Date;
    html += "</div>";
    html += "</div>";
    document.getElementById("pick-Up-Requests").innerHTML += html;
    requestCount++
});