
//Select Country
var populationDisplay = document.getElementById('popBody');
var countriesSelect = document.getElementById("countriesSel");
var popView = document.getElementById("citiesDis");
var usaCountry = document.getElementById("usa");
var mexicoCountry = document.getElementById("mexico");
var canadaCountry = document.getElementById("canada");
var russiacountry = document.getElementById("russia");
var returnCountryBtn = document.getElementById("countryBack");
var countries = {
    usa:"usa.txt",
    russia:"russia.txt",
    mexico:"mexico.txt",
    canada:"canada.txt"
};

function cleanUpArray(removeArray,removeTxt)
{
    returnArray = new Array();

    for(j = 0; j < removeArray.length; j++)
    {
        if(removeArray[j] != removeTxt)
        {
            returnArray.push(removeArray[j]);
        }
    }

    return returnArray;
}

function createPopDis(popCity,popPopulation)
{
    row = document.createElement("tr");
    cityCell = document.createElement("td");
    popCell = document.createElement("td");
    cityTxt = document.createTextNode(popCity);
    popTxt = document.createTextNode(popPopulation);
    cityCell.appendChild(cityTxt);
    popCell.appendChild(popTxt);
    row.appendChild(cityCell);
    row.appendChild(popCell);
    populationDisplay.appendChild(row);
}

function setPopulation(popFile)
{
    xhttp = new XMLHttpRequest();
    popArray = "";
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            popArray = this.responseText.trim().split("\n");
            for(i = 0; i < popArray.length; i++)
            {
                city = cleanUpArray(popArray[i].split("  "),"");
                createPopDis(city[0].trim(),city[1].trim());
            }
        }
    };
    xhttp.open("GET",countries[popFile],true);
    xhttp.send();
}

function removeElems(parentElem)
{
    while(parentElem.hasChildNodes())
    {
        parentElem.removeChild(parentElem.firstChild);
    }
}

usaCountry.onclick = function(){
    setPopulation(this.id);
    countriesSelect.style.display = 'none';
    popView.style.display = 'block';
};

mexicoCountry.onclick = function(){
    setPopulation(this.id);
    countriesSelect.style.display = 'none';
    popView.style.display = 'block';
};

canadaCountry.onclick = function(){
    setPopulation(this.id);
    countriesSelect.style.display = 'none';
    popView.style.display = 'block';
};

russiacountry.onclick = function(){
    setPopulation(this.id);
    countriesSelect.style.display = 'none';
    popView.style.display = 'block';
};

returnCountryBtn.onclick = function(){
    removeElems(populationDisplay);
    countriesSelect.style.display = 'block';
    popView.style.display = 'none';
};



//Select JSON File

var studentDisplayArea = document.getElementById("jsonTableBody");
var jsonInputTxt = document.getElementById("jsontxt");
var jsonInputBtn = document.getElementById("jsonbtn");
var jsonDisDiv = document.getElementById("jsonDis");

function createStudentTable(first,last,major,gpa,city,state,zip)
{
    //create elements
    row = document.createElement("tr");
    firstCell = document.createElement("td");
    lastCell = document.createElement("td");
    majorCell = document.createElement("td");
    gpaCell = document.createElement("td");
    cityCell = document.createElement("td");
    stateCell = document.createElement("td");
    zipCell = document.createElement("td");

    //create text
    firstTxt = document.createTextNode(first);
    lastTxt = document.createTextNode(last);
    majorTxt = document.createTextNode(major);
    gpaTxt = document.createTextNode(gpa);
    cityTxt = document.createTextNode(city);
    stateTxt = document.createTextNode(state);
    zipTxt = document.createTextNode(zip);

    //append text
    firstCell.appendChild(firstTxt);
    lastCell.appendChild(lastTxt);
    majorCell.appendChild(majorTxt);
    gpaCell.appendChild(gpaTxt);
    cityCell.appendChild(cityTxt);
    stateCell.appendChild(stateTxt);
    zipCell.appendChild(zipTxt);

    //append row
    row.appendChild(firstCell);
    row.appendChild(lastCell);
    row.appendChild(majorCell);
    row.appendChild(gpaCell);
    row.appendChild(cityCell);
    row.appendChild(stateCell);
    row.appendChild(zipCell);

    //append table
    studentDisplayArea.appendChild(row);
}

jsonInputBtn.onclick = function(){

    removeElems(studentDisplayArea);
    jsonDisDiv.style.display = 'block';
    jsontxtValue = jsonInputTxt.value;

    if(jsontxtValue == "json1.txt" || jsontxtValue == "json.txt")
    {
        xhttp = new XMLHttpRequest();
        jsonObj = "";
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200)
            {
                jsonObj = JSON.parse(this.responseText);
                console.log(jsonObj);
                for(m = 0; m < jsonObj.students.length; m++)
                {
                    createStudentTable(jsonObj.students[m].first,
                                       jsonObj.students[m].last,
                                       jsonObj.students[m].major,
                                       jsonObj.students[m].gpa,
                                       jsonObj.students[m].address.city,
                                       jsonObj.students[m].address.state,
                                       jsonObj.students[m].address.zip);
                }
            }
        };
        xhttp.open("GET",jsontxtValue,true);
        xhttp.send();
    }
    else
    {
        jsonInputTxt.value = "Invalid JSON file";
        jsonDisDiv.style.display = 'none';
    }
};





