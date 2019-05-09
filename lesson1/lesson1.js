


function getSelectedDiv()
{
    var returnVal;
    var mySelectItem = divSelect.selectedIndex;

    switch(mySelectItem)
    {
        case 0:
            returnVal = null;
            break;
        default:
            returnVal = elemArray[mySelectItem - 1];
    } 

    return returnVal;
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
    borderColorTxt.value = "";
    backColorTxt.value = "";
}

function loadInputs()
{
    divSelect.selectedIndex = 0;
}

function removeClassList(elem,removeClass)
{
    elem.classList.remove(removeClass);
}

function addClassList(elem,newClass)
{
    elem.classList.add(newClass);
}

function addBackColor(colorArray)
{
    if(Array.isArray(colorArray))
    {
        for(j = 0; j < colorArray.length; j++)
        {
            elemArray[j].style.backgroundColor = colorArray[j];
        }
    }
    else
    {
        elemArray[0].style.backgroundColor = colorArray;
    }
}

function addBorderColor(colorArray)
{
    if(Array.isArray(colorArray))
    {
        var l = 0;
        
        while(colorArray[l])
        {
            elemArray[l].style.borderColor = colorArray[l];
            l++;
        }
    }
    else
    {
        elemArray[0].style.borderColor = colorArray;
    }
}

//Buttons
upBtn.onclick = function(){
    moveUp(getSelectedDiv(),1);
};

downBtn.onclick = function(){
    moveDown(getSelectedDiv(),1);
};

leftBtn.onclick = function(){
    moveLeft(getSelectedDiv(),1);
};

rightBtn.onclick = function(){
    moveRight(getSelectedDiv(),1);
};

changeColorBtn.onclick = function(){
    var borderColorVal = borderColorTxt.value;
    var backColorVal = backColorTxt.value;
    
    if(borderColorVal != '')
    {
        if(borderColorVal.includes(','))
        {
            addBorderColor(borderColorVal.split(','));
        }
        else
        {
            addBorderColor(borderColorVal);
        }
    }
    
    if(backColorVal != '')
    {
        if(backColorVal.includes(','))
        {
            addBackColor(backColorVal.split(','));
        }
        else
        {
            addBackColor(backColorVal);
        }
    }
    
    clearInput();
};


window.onload = function(){
    clearInput();
    loadInputs();

    elemArray.push(div1);
    elemArray.push(div2);
    elemArray.push(div3);
    elemArray.push(div4);
    
};
