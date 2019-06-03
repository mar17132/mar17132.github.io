
function getSelectedDiv()
{
    if(divSelect.value != 'null')
    {
        return divSelect.value;
    }

    return null;
}

function getCSSPropVal(cssSelector,cssProp)
{
    var cssArrayObj = document.styleSheets;
    var returnValue = false;

    for(i = 0; i < cssArrayObj.length; i++)
    {
        var rulesArray = cssArrayObj[i].cssRules;

        for(j = 0; j < rulesArray.length; j++)
        {
            var noSpaceSelector = rulesArray[j].selectorText.replace(' ','');

            if(noSpaceSelector == cssSelector)
            {
                returnValue = rulesArray[j].style[cssProp];
            }
        }
    }

    return returnValue;
}

function setCSSPropVal(cssSelector,cssProp,cssVal)
{
    var cssArrayObj = document.styleSheets;
    var returnValue = false;

    for(i = 0; i < cssArrayObj.length; i++)
    {
        var rulesArray = cssArrayObj[i].cssRules;

        for(j = 0; j < rulesArray.length; j++)
        {
            var noSpaceSelector = rulesArray[j].selectorText.replace(' ','');

            if(noSpaceSelector == cssSelector)
            {
                rulesArray[j].style.setProperty(cssProp,cssVal);
            }
        }
    }

    return returnValue;
}

function clearInput()
{
    divSelect.selectedIndex = 0;
    disButton(removeBtn);
    disButton(rightBtn);
    disButton(downBtn);
    disButton(upBtn);
    disButton(leftBtn);
}

function loadInputs()
{
    divSelect.selectedIndex = 0;
    disButton(removeBtn);
    disButton(rightBtn);
    disButton(downBtn);
    disButton(upBtn);
    disButton(leftBtn);
}

function removeClassList(elem,removeClass)
{
    elem.classList.remove(removeClass);
}

function addClassList(elem,newClass)
{
    elem.classList.add(newClass);
}

function createOptions(optElem,optText,optVal)
{
    var newOption = document.createElement('option');
    newOption.value = optVal;
    newOption.innerHTML = optText;
    optElem.appendChild(newOption);
}

function disButton(elem)
{
    elem.disabled = true;
}

function enableButton(elem)
{
    elem.disabled = false;
}

function toggleDisButton(elem)
{
    if(elem.disabled)
    {
        enableButton(elem);
    }
    else
    {
        disButton(elem);
    }
}

function createNewDiv()
{
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', "div" + (divArray.length + 1));
    addClassList(newDiv,'div-class');
    newDiv.style.height = '100px';
    newDiv.style.width = '200px';
    newDiv.style.borderColor = "black";

    divCanvase.appendChild(newDiv);

    return newDiv;
}

//Buttons
upBtn.onclick = function(){
    divArray[divSelect.value].moveUp();
};

downBtn.onclick = function(){
    divArray[divSelect.value].moveDown();
};

leftBtn.onclick = function(){
    divArray[divSelect.value].moveLeft();
};

rightBtn.onclick = function(){
    divArray[divSelect.value].moveRight();
};

addBtn.onclick = function(){
    divArray.push(new moveDivObj(createNewDiv(),5));
    createOptions(divSelect,"DIV" + divArray.length, (divArray.length - 1));
    clearInput();
};

removeBtn.onclick = function(){
    selectedDiv = divSelect.value;
    divCanvase.removeChild(divArray[selectedDiv].getElem());
    divArray[selectedDiv] = null;

    divSelectChild = divSelect.children;

    for(j = 0; j < divSelectChild.length; j++)
    {
        if(divSelectChild[j].value == selectedDiv)
        {
            divSelect.removeChild(divSelectChild[j]);
        }
    }

    disButton(removeBtn);
    disButton(rightBtn);
    disButton(downBtn);
    disButton(upBtn);
    disButton(leftBtn);
    divSelect.selectedIndex = 0;

};

divSelect.onchange = function(){
    if(this.value != 'null')
    {
        enableButton(removeBtn);
        enableButton(rightBtn);
        enableButton(downBtn);
        enableButton(upBtn);
        enableButton(leftBtn);
    }
    else
    {
        disButton(removeBtn);
        disButton(rightBtn);
        disButton(downBtn);
        disButton(upBtn);
        disButton(leftBtn);
    }
};

removeLocalStorage.onclick = function(){
    localStorage.removeItem("divCount");
};

addLocalStorage.onclick = function(){
    localStorage.removeItem("divCount");
    localStorage.setItem("divCount",divArray.length);
};

window.onload = function(){
    clearInput();
    loadInputs();

    if(localStorage.getItem("divCount") > 0)
    {
        for(l = 0; l < localStorage.getItem("divCount"); l++)
        {
            divArray.push(new moveDivObj(createNewDiv(),5));
            createOptions(divSelect,"DIV" + divArray.length,
                          (divArray.length - 1));
        }
    }
};

