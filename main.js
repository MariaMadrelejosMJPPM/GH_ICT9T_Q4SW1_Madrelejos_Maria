// login authentication
function password() {
    let pass = document.getElementById('password').value;
    let user = document.getElementById('username').value;

    if (user == 'skibiditoilet69' && pass == 'password10987654321') {
        window.alert('access granted! welcome back, skibiditoilet69'); } 
    else {
        window.alert('wrong username/password'); }
}

// instructions
function instructions() {
    document.getElementById('show').innerHTML = 'stay logged in on this device'
}