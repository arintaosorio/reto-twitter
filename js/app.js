var btnSend = document.getElementById('new-tweet'); //.lastElementChild;

var historial = document.getElementsByClassName('cuadro-3')[0];


btnSend.onsubmit = function(event){
  event.preventDefault();
  var tweetText = event.target.getElementsByTagName('textarea')[0].value;
  newHist(tweetText);
}

var newHist = function(tweetText) {
  var newTweet = document.createElement('p');
  newTweet.textContent = tweetText;
  historial.appendChild(newTweet);
}
