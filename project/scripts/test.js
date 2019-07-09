function songsObjTest()
{
    this.songArray = [];
    this.totalNumSongs = 200;
    this.totalPageNum = 2;
    this.responsObj = null;
    this.apikey = "c51c885aa28518b28abb7fd7b889fd13";
    this.apiUrl = "https://api.musixmatch.com/ws/1.1/";
    this.trackEndpoint = "chart.tracks.get";
    this.albumEndpoint = "album.get";
    //this.lyricEndpoint = "track.lyrics.get";
    this.lyricEndpoint = "track.snippet.get";
    this.songObj = function() {
        this.artist = "";
    this.artistId = null;
    this.song = "";
    this.songId = null;
    this.cdArt = "";
    this.album = "";
    this.albumId = null;
    this.year = "";
    this.lyrics = "";
    };
}


songsObjTest.prototype.getSongsLoop = function(){
    //https://api.musixmatch.com/ws/1.1/chart.tracks.get?
    //apikey=c51c885aa28518b28abb7fd7b889fd13&country=us&
    //page=1&page_size=100&f_has_lyrics=1

    currentObj = this;
    xhttp = new XMLHttpRequest();
    jsonURL = this.apiUrl + this.trackEndpoint + "?apikey=" + this.apikey +
              "&format=jsonp&callback=callback&country=us&page=1&page_size=100&f_has_lyrics=1";
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200)
        {
            currentObj.setResponsObj(this.responseText);
            currentObj.apiReturn();
        }
    };

    xhttp.open("GET",jsonURL,false);
    xhttp.send();

};


songsObjTest.prototype.setResponsObj = function(respons){
    respons = respons.replace("callback(","");
    respons = respons.replace(");","");
    this.responsObj = JSON.parse(respons).message.body.track_list;
};

songsObjTest.prototype.setSongsArray = function(song){
    var newSong = new this.songObj();
    newSong.album = song.track.album_name;
    newSong.albumId = song.track.album_id;
    newSong.song = song.track.track_name;
    newSong.songId  = song.track.track_id;
    newSong.artist=song.track.artist_name;
    newSong.artistId = song.track.artist_id;
    this.songArray.push(newSong);
    this.setAlbYearArt();
    this.setSongLyrics();
};

songsObjTest.prototype.setAlbYearArt = function(){
    currentObj = this;
    currentSongObj = currentObj.songArray[currentObj.songArray.length - 1];
    xhttp = new XMLHttpRequest();
    jsonURL = currentObj.apiUrl + currentObj.albumEndpoint + "?apikey=" + 
              currentObj.apikey +
              "&format=jsonp&callback=callback&album_id=" + 
              currentSongObj.albumId;
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200)
        {
            var respons = this.responseText;
            respons = respons.replace("callback(","");
            respons = respons.replace(");","");
            var albumRespons = JSON.parse(respons);
            currentSongObj.year = albumRespons.message.body.album.album_release_date;
            currentSongObj.cdArt = albumRespons.message.body.album.album_coverart_100x100;
        }
    };

    xhttp.open("GET",jsonURL,false);
    xhttp.send();
};

songsObjTest.prototype.setSongLyrics = function(){
    currentObj = this;
    currentSongObj = currentObj.songArray[currentObj.songArray.length - 1];
    xhttp = new XMLHttpRequest();
    jsonURL = currentObj.apiUrl + currentObj.trackEndpoint + "?apikey=" + 
              currentObj.apikey +
              "&format=jsonp&callback=callback&track_id=" + 
              currentSongObj.songId;
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200)
        {
                        var respons = this.responseText;
            respons = respons.replace("callback(","");
            respons = respons.replace(");","");
            var lyricRespons = JSON.parse(respons);
            //currentSongObj.lyrics = lyricRespons.message.body.lyrics.lyrics_body;
            console.log(lyricRespons);
        }
    };

    xhttp.open("GET",jsonURL,false);
    xhttp.send();
};

songsObjTest.prototype.apiReturn = function(){
    //filter by track.explicit

    for(i = 0; i < this.responsObj.length; i++)
    {
        this.setSongsArray(this.responsObj[i]);
    }
};

songsObjTest.prototype.getRandomNum = function(limit = 1){

    return Math.floor(Math.random() * limit);
};


onmessage = function(event){
var test = new songsObjTest();

test.getSongsLoop();

this.postMessage(test.songArray);

};
