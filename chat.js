var messages = [];

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


$("#roomD").html(`#${localStorage.getItem("roomN")}`);

var logout= function(){
    localStorage.removeItem("userN");
    localStorage.removeItem("roomN");
    location = "index.html"
}, back= function(){
    localStorage.removeItem("roomN");
    location = "room.html"
}, display = function(){
    var displayE = $("#messages");
    displayE.empty();
    for(var i=0;i<messages.length;i++){
        displayE.append(`<b>${messages[i].user}</b> <br> <label class="text-secondary">${messages[i].text}</label><button style="margin-left:5px;margin-bottom:5px;" class="btn btn-primary text-white"><i class="far fa-thumbs-up"></i> Likes: ${messages[i].likes}</button><hr>`);
    }
}, send = function(e){
    e.preventDefault();
    var inp = $(this).find("[name=messagesI]");
    firebase.database().ref("rooms/"+localStorage.getItem("roomN")).push({
        user: localStorage.getItem("userN"),
        text: inp.val(),
        likes: 1
    });
    messages.push({
        user: localStorage.getItem("userN"),
        text: inp.val(),
        likes: 1
    });
    display();
    inp.val("");
    console.log(messages);
}

$("form").on("submit", send);

