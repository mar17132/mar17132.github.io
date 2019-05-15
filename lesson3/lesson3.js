//https://swapi.co/api/films/
//opening_crawl,title, episode_id
//films 1-7

var disJsonStringDiv = document.getElementById('jsonString');
var disJsonObjDiv = document.getElementById('jsonObject');
var ajaxResults = null;
var disJsonObjBtn = document.getElementById('displayObj');
var disJsonStringBtn = document.getElementById('displayString');

function getJson()
{

    xhttp = new XMLHttpRequest();
    jsonObj = "";
    jsonURL = 'https://swapi.co/api/films/';
    xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200)
            {
                jsonObj = JSON.parse(this.responseText);
                ajaxResults = jsonObj;
                resultsLength = ajaxResults.length;

            }
    };
    xhttp.open("GET",jsonURL,true);
    xhttp.send();
}

disJsonObjBtn.onclick = function(){
    disJsonObjDiv.innerHTML = ajaxResults;
    console.log(ajaxResults);
};

disJsonStringBtn.onclick = function(){
    disJsonStringDiv.innerHTML = JSON.stringify(ajaxResults);
};

window.onload = function(){
    getJson();
};
