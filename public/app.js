var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';
  makeRequest(url, requestComplete);


}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  console.log("success");
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var jsonParsed = JSON.parse(jsonString);
  var albums = jsonParsed.albums.items;
  populateList(albums);
}

var populateList = function(albums) {
  var ul = document.getElementById('album-list');
  console.log(albums);
  for(var album of albums){
    var li = document.createElement('li');
    li.innerText = album.name;
    ul.appendChild(li)
}
}
  
window.onload = app;