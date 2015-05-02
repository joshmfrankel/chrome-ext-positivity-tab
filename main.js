
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('quote').innerHTML = '"' + localStorage.quote + '"';

    randomPositiveMessage();
});

function randomPositiveMessage()
{
    var affirmationArray = localStorage.affirmations.split(',');
    var positive = affirmationArray[Math.floor(Math.random()*affirmationArray.length)];

    document.getElementById('affirmations').innerHTML = positive;

    setTimeout(randomPositiveMessage, 10000);
}
