
//https://swapi.co/api/films/
//opening_crawl,title, episode_id
//films 1-7

var selectJson = document.getElementById('jsonSelect');
var displayDivContent = document.getElementById('displayDivContent');
var ajaxResults = null;

function getJson()
{
    var jsonFile = selectJson.value;

    xhttp = new XMLHttpRequest();
    jsonObj = "";
    jsonURL = 'https://swapi.co/api/films/';
    xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200)
            {
                jsonObj = JSON.parse(this.responseText);
                ajaxResults = jsonObj.results;
                resultsLength = ajaxResults.length;

                for(i = 0; i < resultsLength; i++)
                {
                    for(j = 0; j < (resultsLength - i) - 1; j++)
                    {
                        if(ajaxResults[j].episode_id >
                           ajaxResults[j + 1].episode_id)
                        {
                            temp = ajaxResults[j];
                            ajaxResults[j] = ajaxResults[j + 1];
                            ajaxResults[j + 1] = temp;
                        }
                    }
                }
                loadOptions();
            }
    };
    xhttp.open("GET",jsonURL,true);
    xhttp.send();


}

function loadOptions()
{
    for(i = 0; i < ajaxResults.length; i++)
    {
        createOptions(ajaxResults[i].title,i);
    }
}

function createOptions(optText,optVal)
{
    var newOption = document.createElement('option');
    newOption.value = optVal;
    newOption.innerHTML = optText;
    selectJson.appendChild(newOption);
}

function replaceAllString(thisString,oldString,newString)
{
    var crawlString = thisString;
    while(crawlString.search(oldString) != -1)
    {
        crawlString = crawlString.replace(oldString,newString);
    }
    
    return crawlString;
}

selectJson.onchange = function(){
    displayDivContent.innerHTML = replaceAllString(ajaxResults[this.value].opening_crawl,'\r\n','<br/>');
};

window.onload = function(){
    selectJson.selectedIndex = 0;
    getJson();
};
