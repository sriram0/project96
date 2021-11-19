var pass;

var login = function(){
    localStorage.setItem("userN", $("#userI").val());
    location = "room.html";
}, signup = function(){
    pass = $("#passI").val();
    user = $("#userI").val();
    $("#round").html("<b>Confirm Password:</b><br><input class='form-control' id='cPassI' type='password' placeholder='Confirm Password here...'><br><button class='btn btn-primary' onclick='newA()'>Create Account &amp Login");
}, newA = function() {
    if(pass === $("#cPassI").val()){
        localStorage.setItem("userN", user);
        location = "room.html";
    }else{
        location.reload();
    }
}