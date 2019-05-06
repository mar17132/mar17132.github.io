var selectJson = document.getElementById('jsonSelect');
var displayDivContent = document.getElementById('displayDivContent');
var displayDivMess = document.getElementById('displayDivMessage');

function getJson()
{
    var jsonFile = selectJson.value;

    if(jsonFile == "json1.json" || jsonFile == "json2.json"
       || jsonFile == "json3.json")
    {
        xhttp = new XMLHttpRequest();
        jsonObj = "";
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200)
            {
                displayDivContent.innerHTML = this.responseText;
                jsonObj = JSON.parse(this.responseText);
                displayDivMess.innerHTML = jsonObj.message;
            }
        };
        xhttp.open("GET",jsonFile,true);
        xhttp.send();
    }

}

selectJson.onchange = function(){
    getJson();
};

window.onload = function(){
    selectJson.selectedIndex = 0;
};
