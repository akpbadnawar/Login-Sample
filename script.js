var database=[
    {
        username: 'aditya',
        password: 'test'
    },
    {
        username: 'hari',
        password: '123'
    },
    {
        username: 'aman',
        password: 'test2'
    }
];

var newsFeed = [
    {
        username: 'Bobby',
        timeline: 'So tired from all that learing!'
    },
    {
        username: 'Sally',
        timeline: 'Javascript is sooo cool!'
    }
];

var userNamePrompt = prompt("What's your username? ");
var passwordPrompt = prompt("What's your Password? ");


function isUserValid(user,pass){
    for (var i=0; i < database.length ; i++) {
        if(database[i].username === user && database[i].password === pass){
            return true;
        }
    }
    return false;
}
function signIn(user,pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed)
    }
    else {
        alert('Sorry wrong password or username!!!!');
    }

    }
 
signIn(userNamePrompt, passwordPrompt);