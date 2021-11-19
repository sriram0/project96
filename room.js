var firebaseConfig = {
    apiKey: "AIzaSyBT4v6WghfSJzEak0vvKKGGp5Wg5N2FAf8",
    authDomain: "masterchat-34b0b.firebaseapp.com",
    databaseURL: "https://masterchat-34b0b-default-rtdb.firebaseio.com",
    projectId: "masterchat-34b0b",
    storageBucket: "masterchat-34b0b.appspot.com",
    messagingSenderId: "1024815105487",
    appId: "1:1024815105487:web:74cad229fc5f4f1cce7eba"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


$("#nameD").html(`Welcome, ${localStorage.getItem("userN")}`);

var logout= function(){
    localStorage.removeItem("userN");
    localStorage.removeItem("roomN");
    location = "index.html"
}, add = function(){
    localStorage.setItem("roomN", $("#roomI").val());
    firebase.database().ref("/rooms").child($("#roomI").val()).update({
        reason: "upload data"
    });
    location = "chat.html";
}, visit = function(room){
    localStorage.setItem("roomN", room);
    location = "chat.html";
}, getData = function() {
    firebase.database().ref("/rooms").on('value', function(snapshot) {
        $("#allR").html("")
        snapshot.forEach(function(childSnapshot) {
            currentRoomName = childSnapshot.key;
            //Start code
            var needToAdd = `<label id="${currentRoomName}" onclick="visit(this.id)">#${currentRoomName}</label><hr>`;
            document.getElementById("allR").innerHTML += needToAdd;
            //End code
        });
    });
}
getData();

