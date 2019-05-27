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


animeBtn.onclick = function(){
    if(this.value == "Start Animation")
    {
        this.value = "Stop Animation";
        removeClassList(div1,"stop-Animation");
        removeClassList(div2,"stop-Animation");
    }
    else
    {
        this.value = "Start Animation";
       // div1.style.top = div1.offsetTop + "px";
        addClassList(div1,"stop-Animation");
       // div2.style.left = div2.offsetLeft + "px";
        addClassList(div2,"stop-Animation");
    }
};

transBtn.onclick = function(){
    if(this.value == "Start Transitions")
    {
        this.value = "Reset Transitions";
        addClassList(div1,"growW");
        addClassList(div2,"growH");
    }
    else
    {
        this.value = "Start Transitions";
        removeClassList(div1,"growW");
        removeClassList(div2,"growH");
    }
};

window.onload = function(){
    clearInput();
    loadInputs();

    obj1 = new moveDivObj(div1,1);
    obj2 = new moveDivObj(div2,5);

};

