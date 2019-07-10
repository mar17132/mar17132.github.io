function songsObj()
{
    this.songArray = [];
}


songsObj.prototype.getRandomNum = function(limit = 1){

    return Math.floor(Math.random() * limit);
};


songsObj.prototype.getSong = function(id){
    return this.songArray[id];
};


songsObj.prototype.getArraySize = function(){
    return this.songArray.length;
};


songsObj.prototype.getSongRandom = function(){
    return this.songArray[this.getRandomNum()];
};



