
function questionObj()
{
    this.questionArray = [];
    this.anwserArray = [];
    this.numberAnwsers = 3;
    this.numberOfQuestion = 5;
    this.songsObj = null;
}

questionObj.prototype.getSongAnwsers = function(){
    for(i = 0; i < this.numberOfQuestion; i++)
    {
        song = this.songsObj.getSongRandom(this.songsObj.getArraySize());

        while(!this.setQuestionAnwser(song))
        {
            song = this.songsObj.getSongRandom(this.songsObj.getArraySize());
        }

        this.questionArray[i].push(song);

        while(this.questionArray.length != this.numberAnwsers)
        {
            artist = this.anwserArray[this.songsObj.getRandomNum(
                                      this.anwserArray.length)];
            toAdd = false;

            for(j = 0; j < this.questionArray.length; j++)
            {
                if(typeof(this.questionArray[j]) == "songObj")
                {
                    if(artist != this.questionArray[j].getArtist())
                    {
                        toAdd = true;
                    }
                    else
                    {
                        toAdd = false;
                        break;
                    }
                }
                else
                {
                    if(artist != this.questionArray[j])
                    {
                        toAdd = true;
                    }
                    else
                    {
                        toAdd = false;
                        break;
                    }
                }
            }

            if(toAdd)
            {
              this.questionArray[i].push(artist);
            }
        }

    }
};

questionObj.prototype.setSongsObj = function(songs){
    this.songsObj = songs;
    this.setAnwserArray();
};

questionObj.prototype.setQuestionAnwser = function(){
    if(song.hasBeenAnwser() == false)
    {
        this.songsObj.getSong(this.numberAnwsers).setAnwser(true);
        return true;
    }
    else
    {
        return false;
    }
};

questionObj.prototype.clear = function(){
    for(i = 0; i < this.numberAnwsers; i++)
    {
        song = this.questionArray.pop();  
        song = null;
    }
};

questionObj.prototype.setNumberQuestion = function(qNum){
    this.numberOfQuestion = qNum;
};

questionObj.prototype.getNumberQuestion = function(){
    return this.numberOfQuestion;
};

questionObj.prototype.setAnwserArray = function(){
    for(i = 0; i < this.songsObj.getArraySize(); i++)
    {
        this.anwserArray[i] = this.songsObj.getSong(i).getArtist();
    }
};

