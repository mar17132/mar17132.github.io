var myCanvas = document.getElementById('canvasTag');
var canvasContent = myCanvas.getContext("2d");
var textHeight = 150;
var myTimer;
var printArray = ["It is a period of civil war.",
                  "Rebel spaceships, striking",
                  "from a hidden base, have won",
                  "their first victory against",
                  "the evil Galactic Empire.","",
                  "During the battle, Rebel",
                  "spies managed to steal secret",
                  "plans to the Empire's",
                  "ultimate weapon, the DEATH",
                  "STAR, an armored space",
                  "station with enough power",
                  "to destroy an entire planet.","",
                  "Pursued by the Empire's",
                  "sinister agents, Princess",
                  "Leia races home aboard her",
                  "starship, custodian of the",
                  "stolen plans that can save her",
                  "people and restore",
                  "freedom to the galaxy...."];


function startCanvasText()
{
    canvasContent.font = "20px Arial";
    canvasContent.fillStyle = "gold";

    for(i = 0; i < printArray.length; i++)
    {
        canvasContent.fillText(printArray[i],20,textHeight + (20 * i));
        canvasContent.fillText("\r\n",20,textHeight + (20 * i));
    }
}

function startTextTimer()
{
    myTimer = setInterval(function(){
                canvasContent.clearRect(0,0,640,480);
                textHeight -= 20;
                for(i = 0; i < printArray.length; i++)
                {
                    canvasContent.fillText(printArray[i],20,textHeight +
                                           (20 * i));
                    canvasContent.fillText("\r\n",20,textHeight+ (20 * i));
                }
            },1500);
}


function stopTextTimer()
{
    clearInterval(myTimer);
}

resetBtn.onclick = function(){
    startCanvasText();
    startTextTimer();
};

window.onload = function(){
    startCanvasText();
    startTextTimer();
};
