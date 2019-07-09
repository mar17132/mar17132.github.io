function songsObj()
{
    this.songArray = [];
    this.totalNumSongs = 200;
    this.totalPageNum = 2;
    this.responsObj = null;
    this.apikey = "c51c885aa28518b28abb7fd7b889fd13";
    this.apiUrl = "https://api.musixmatch.com/ws/1.1/";
    this.trackEndpoint = "chart.tracks.get";
    this.albumEndpoint = "album.get";
    this.lyricEndpoint = "track.lyrics.get";
}


songsObj.prototype.getSongsLoop = function(){
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

    xhttp.open("GET",jsonURL,true);
    xhttp.send();
    console.log(this.songArray);

};


songsObj.prototype.setResponsObj = function(respons){
    respons = respons.replace("callback(","");
    respons = respons.replace(");","");
    this.responsObj = JSON.parse(respons).message.body.track_list;
};

/*
{"track_id":167685162,
"track_name":"Old Town Road (Remix)",
"track_name_translation_list":[],
"track_rating":99,
"commontrack_id":94198354,
"instrumental":0,
"explicit":0,
"has_lyrics":1,
"has_subtitles":1,
"has_richsync":1,
"num_favourite":1751,
"album_id":31936342,
"album_name":"Old Town Road (Remix)",
"artist_id":38099281,
"artist_name":"Lil Nas X feat. Billy Ray Cyrus",
"restricted":0,
"updated_time":"2019-04-05T12:54:48Z"
*/
songsObj.prototype.setSongsArray = function(song){
    var newSong = new songObj();
    newSong.setAlbum(song.track.album_name);
    newSong.setAlbumId(song.track.album_id);
    newSong.setSong(song.track.track_name);
    newSong.setSongId(song.track.track_id);
    newSong.setArtist(song.track.artist_name);
    newSong.setArtistId(song.track.artist_id);
    this.songArray.push(newSong);
    this.setAlbYearArt();
    //this.setSongLyrics();
};

songsObj.prototype.setAlbYearArt = function(){
    currentObj = this;
    currentSongObj = currentObj.songArray[currentObj.songArray.length - 1];
    xhttp = new XMLHttpRequest();
    jsonURL = currentObj.apiUrl + currentObj.albumEndpoint + "?apikey=" + 
              currentObj.apikey +
              "&format=jsonp&callback=callback&album_id=" + 
              currentSongObj.getAlbumId();
    xhttp.onreadystatechange = function(){
        console.log("this is respons " + this.responseText);
       if(this.readyState == 4 && this.status == 200)
        {
            var respons = this.responseText;
            respons = respons.replace("callback(","");
            respons = respons.replace(");","");
            var albumRespons = JSON.parse(respons);
            currentSongObj.setYear(albumRespons.message.body.album.album_release_date);
            currentSongObj.setCdArt(albumRespons.message.body.album.album_coverart_100x100);
        }
    };

    xhttp.open("GET",jsonURL,false);
    xhttp.send();
};

songsObj.prototype.setSongLyrics = function(){
    currentObj = this;
    currentSongObj = currentObj.songArray[currentObj.songArray.length - 1];
    xhttp = new XMLHttpRequest();
    jsonURL = currentObj.apiUrl + currentObj.trackEndpoint + "?apikey=" + 
              currentObj.apikey +
              "&format=jsonp&callback=callback&track_id=" + 
              currentSongObj.getSongId();
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200)
        {
            var lyricRespons = JSON.parse(this.responseText);
            currentSongObj.setSongLyrics(lyricRespons.message.body.lyrics.lyrics_body);
        }
    };

    xhttp.open("GET",jsonURL,true);
    xhttp.send();
};

songsObj.prototype.apiReturn = function(){
    //filter by track.explicit

    //for(i = 0; i < this.responsObj.length; i++)
    {
        this.setSongsArray(this.responsObj[0]);
    }
    console.log(this.songArray);
};

songsObj.prototype.getRandomNum = function(limit = 1){

    return Math.floor(Math.random() * limit);
};



//var test = new songsObj();

//test.getSongsLoop();


