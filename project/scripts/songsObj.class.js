function songsObj()
{
    this.songArray = [];
    this.totalNumSongs = 200;
    this.totalPageNum = 2;
    this.responsObj;
    this.apikey = "c51c885aa28518b28abb7fd7b889fd13";
    this.apiUrl = "https://api.musixmatch.com/ws/1.1/";
    this.trackEndpoint = "chart.tracks.get";
    this.albumEndpoint = "album.get";
    this.lyricEndpoint = "track.lyrics.get";
}


songsObj.prototype.getSongsLoop = function(){
    //https://api.musixmatch.com/ws/1.1/chart.tracks.get?
    //apikey=c51c885aa28518b28abb7fd7b889fd13&country=usa&
    //page=1&page_size=100&f_has_lyrics=1

    test = this;
    xhttp = new XMLHttpRequest();
    jsonURL = this.apiUrl + this.trackEndpoint + "?apikey=" + this.apikey +
              "&country=usa&page=1&page_size=100&f_has_lyrics=1";
    xhttp.onreadystatechange = function(){

        console.log(this.readyState);
        console.log(this.status);
        if(this.readyState == 4 && this.status == 200)
        {
            console.log("this worked");
            test.apiReturn(xhttp);
        }
    };
    xhttp.open("GET",jsonURL,true);
    xhttp.send();

};


songsObj.prototype.apiReturn = function(xhttpObj){

    if(xhttpObj != null)
        console.log('the call');
};


songsObj.prototype.getRandomNum = function(limit = 1){

    return Math.floor(Math.random() * limit);
};



var test = new songsObj();

//test.getSongsLoop();

