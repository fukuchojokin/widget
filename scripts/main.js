function mainUpdate(type) {
  if (type == "music") {
    document.getElementById("title").innerHTML = title;
    document.getElementById("artist").innerHTML = artist;
    var musicTitle = title;
    var musicArtist = artist;
    if (isplaying) {
      document.getElementById("pP").src = "img/pause.png";
      document.getElementById("next").style.visibility= "visible";
      document.getElementById("previous").style.visibility= "visible";
    } else {
      document.getElementById("pP").src = "img/play.png";
      document.getElementById("next").style.visibility= "hidden";
      document.getElementById("previous").style.visibility= "hidden";
    }
    if(musicTitle != "null" || "(null)"){
      document.getElementById("title").innerHTML = musicTitle;
      document.getElementById("artist").innerHTML = musicArtist;
    }else{
      document.getElementById("title").innerHTML = "Not Playing";
      document.getElementById("artist").style.visibility = "hidden";
    }
  }
  if (type == "weather") {
    document.getElementById("city").innerHTML = weather.city;
    document.getElementById("temp").innerHTML = weather.temperature + "&deg;";
  }

  if (type == "battery") {
    document.getElementById("batterylevel").innerHTML = batteryPercent + " %";
    document.getElementById("status").innerHTML = batteryCharging ? "" : "";
  }
}

function previous() {
  window.location = "xeninfo:prevtrack";
}
function pP() {
  window.location = "xeninfo:playpause";
}
function next() {
  window.location = "xeninfo:nexttrack";
}
