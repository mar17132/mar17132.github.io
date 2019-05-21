
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
    beforeSelect.selectedIndex = 0;
    disButton(removeBtn);
    disButton(rightBtn);
    disButton(downBtn);
    disButton(upBtn);
    disButton(leftBtn);
    heightTxt.value = "";
    widthTxt.value = "";
    borderCTxt.value = "";
    backgroundCTxt.value = "";
}

function loadInputs()
{
    divSelect.selectedIndex = 0;
    beforeSelect.selectedIndex = 0;
    disButton(removeBtn);
    disButton(rightBtn);
    disButton(downBtn);
    disButton(upBtn);
    disButton(leftBtn);
    heightTxt.value = "";
    widthTxt.value = "";
    borderCTxt.value = "";
    backgroundCTxt.value = "";
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

function createNewDiv(nHeight = '100', nWidth = '200', borderC = 'black',
                       backC = 'transparent', elemBefore = null)
{
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', "div" + (divArray.length + 1));
    addClassList(newDiv,'div-class');
    newDiv.style.height = nHeight + 'px';
    newDiv.style.width = nWidth + 'px';
    newDiv.style.borderColor = borderC;
    newDiv.style.backgroundColor = backC;

    if(elemBefore != 'null')
    {
        divCanvase.insertBefore(newDiv, divArray[elemBefore].getElem());
    }
    else
    {
       divCanvase.appendChild(newDiv);
    }

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
    divArray.push(new moveDivObj(createNewDiv(heightTxt.value,widthTxt.value,borderCTxt.value,
                  backgroundCTxt.value,beforeSelect.value),5));
    createOptions(beforeSelect,"DIV" + divArray.length, (divArray.length - 1));
    createOptions(divSelect,"DIV" + divArray.length, (divArray.length - 1));
    clearInput();
    enableButton(beforeSelect);
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

    divBeforChild = beforeSelect.children;

    for(l = 0; l < divBeforChild.length; l++)
    {
        if(divBeforChild[l].value == selectedDiv)
        {
            beforeSelect.removeChild(divBeforChild[l]);
        }
    }

    disButton(removeBtn);
    disButton(rightBtn);
    disButton(downBtn);
    disButton(upBtn);
    disButton(leftBtn);
    divSelect.selectedIndex = 0;
    beforeSelect.selectedIndex = 0;

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

window.onload = function(){
    clearInput();
    loadInputs();
    disButton(beforeSelect); //there are no elements before
};

