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

        console.log(this.readyState);
        console.log(this.status);
        if(this.readyState == 4 && this.status == 200)
        {
            currentObj.setResponsObj(this.responseText);
            currentObj.apiReturn();
        }
    };

    xhttp.open("GET",jsonURL,true);
    xhttp.send();

};


songsObj.prototype.setResponsObj = function(respons){
    respons = respons.replace("callback(","");
    respons = respons.replace(");","");
    console.log(respons);
    this.responsObj = JSON.parse(respons).message.body.track_list;
};


songsObj.prototype.setSongsArray(){

};

songsObj.prototype.apiReturn = function(){

    for(i = 0; i < this.responsObj; i++)
    {

    }
};


songsObj.prototype.getRandomNum = function(limit = 1){

    return Math.floor(Math.random() * limit);
};



var test = new songsObj();

test.getSongsLoop();

