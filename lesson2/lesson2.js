


function getSelectedDiv()
{
    if(divSelect.value != 'null')
    {
        return document.getElementById(divSelect.value);
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

}

function loadInputs()
{

}

function removeClassList(elem,removeClass)
{
    elem.classList.remove(removeClass);
}

function addClassList(elem,newClass)
{
    elem.classList.add(newClass);
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

divSelect.onchange = function(){
    if(this.value == 'div1')
    {
        getDivColor('.div1-class');
    }
    else if(this.value == 'div2')
    {
        getDivColor('.div2-class');
    }
};




window.onload = function(){
    clearInput();
    loadInputs();
};
