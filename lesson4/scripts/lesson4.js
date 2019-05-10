
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
    xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200)
            {
                jsonObj = JSON.parse(this.responseText);

                for(i = 0; i < jsonObj.result.length; i++)
                {
                    for(j = (i + 1); j < (jsonObj.result.length - i - 1); j++)
                    {
                        if(jsonObj.result[i].episode_id >
                           jsonObj.result[j].episode_id)
                        {

                        }
                    }
                }
            }
    };
    xhttp.open("GET",jsonFile,true);
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
    divSelect.appendChild(newOption);
}

selectJson.onchange = function(){
    getJson();
};

window.onload = function(){
    selectJson.selectedIndex = 0;
};
