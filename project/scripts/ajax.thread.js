function secondThread()
{
    var w;
    if(typeof(Worker) !== "undefined")
    {
        if(typeof(w) == "undefined")
        {
            w = new Worker("scripts/apiObj.class.js");
            w.postMessage(true);
            w.onmessage = function(event){

                if(event.data.status == "done")
                {
                    songs = new songsObj();
                    songs.createSongsArray(event.data.data);
                    myQuestions = new questionObj();
                    myQuestions.setSongsObj(songs);
                    hasLoaded = true;
                    updateStartButton();
                    w.terminate();
                }
                else if(event.data.status == "percent")
                {
                    precentLoaded = event.data.data;
                    console.log(precentLoaded + "%");
                }
                else
                {
                    console.log(event.data.data);
                    w.terminate();
                }
            };
        }
    }
}


function updateStartButton() {
    try {
        document.getElementById('startButton').innerHTML = 'START GAME'
        document.getElementById('startButton').setAttribute('class', '')
    }
    catch(err) {
        // intentionally left empty
    }
}
