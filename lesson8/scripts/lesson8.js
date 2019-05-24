



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

//Buttons
upBtn.onclick = function(){

    if(getSelectedDiv() == 'div1')
    {
        obj1.moveUp();
    }
    else if(getSelectedDiv() == 'div2')
    {
        obj2.moveUp();
    }
};

downBtn.onclick = function(){

    if(getSelectedDiv() == 'div1')
    {
        obj1.moveDown();
    }
    else if(getSelectedDiv() == 'div2')
    {
        obj2.moveDown();
    }
};

leftBtn.onclick = function(){

    if(getSelectedDiv() == 'div1')
    {
        obj1.moveLeft();
    }
    else if(getSelectedDiv() == 'div2')
    {
        obj2.moveLeft();
    }
};

rightBtn.onclick = function(){

    if(getSelectedDiv() == 'div1')
    {
        obj1.moveRight();
    }
    else if(getSelectedDiv() == 'div2')
    {
        obj2.moveRight();
    }
};

divSelect.onchange = function(){
	addClassList(div1,"test");
};


window.onload = function(){
    clearInput();
    loadInputs();

    obj1 = new moveDivObj(div1,1);
    obj2 = new moveDivObj(div2,5);

};

