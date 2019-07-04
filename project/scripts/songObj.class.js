
function songObj()
{
    this.artist = "";
    this.song = "";
    this.cdArt = "";
    this.album = "";
    this.year = "";

    this.beenUse = false;
    this.anwser = false;
    this.beenAnwser = false;
}

//getts
songObj.prototype.getArtist = function(){
    return this.artist;
};

songObj.prototype.getSong = function(){
    return this.song;
};

songObj.prototype.getCdArt = function(){
    return this.cdArt;
};

songObj.prototype.getAlbum = function(){
    return this.album;
};

songObj.prototype.getYear = function(){
    return this.year;
};

songObj.prototype.hasBeenUsed = function(){
    return this.beenUse;
};

songObj.prototype.isAnwser = function(){
    return this.anwser;
};

songObj.prototype.hasBeenAnwser = function(){
    return this.beenAnwser;
};


//setters
songObj.prototype.setArtist = function(artist){
    this.artist = artist;
};

songObj.prototype.setSong = function(song){
    this.song = song;
};

songObj.prototype.setCdArt = function(cdart){
    this.cdArt = cdart;
};

songObj.prototype.setAlbum = function(album){
    this.album = album;
};

songObj.prototype.setYear = function(year){
    this.year = year;
};

songObj.prototype.setBeenUse = function(beenUsed){
    this.beenUse = beenUsed;
};

songObj.prototype.setAnwser = function(anwser){
    this.anwser = anwser;
};

songObj.prototype.setBeenAnwser = function(beenAnwser){
    this.beenAnwser = beenAnwser;
};

