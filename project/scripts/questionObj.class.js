
function questionObj()
{
    this.questionArray = [];
    this.numberAnwsers = 3;
    this.songsObj = null;
}

questionObj.prototype.getSongAnwsers = function(){
    for(i = 0; i < this.numberAnwsers; i++)
    {
        song = this.songsObj.getSongRandom(this.songsObj.getArraySize());                 
        song.setBeenUse(true);
        this.questionArray.push(song);
    }
};

questionObj.prototype.setSongsObj = function(songs){
    this.songsObj = songs;
};

questionObj.prototype.setQuestionAnwser = function(){
           // if(song.hasBeenAnwser() == false)
    this.songsObj.getSong(this.numberAnwsers).setAnwser(true);
};

questionObj.prototype.clear = function(){
    for(i = 0; i < this.numberAnwsers; i++)
    {
        song = this.questionArray.pop();  
        song = null;
    }
};

