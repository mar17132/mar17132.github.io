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
        addClassList(div1,"stop-Animation");
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

div1.ontouchstart = function(event){
    numColor = Math.floor((Math.random() * (touchColors.length - 1)) + 1);
    this.style.backgroundColor = touchColors[numColor];
    totalTouches++;
    touchStat.innerHTML = "Touch Started<br/>Total Touches = " + totalTouches;
};

div1.ontouchend = function(event){
    touchStat.innerHTML = "Touch Ended<br/>Total Touches = " + totalTouches;
};

div2.onanimationstart = function(event){
    animStat.innerHTML = totalAnime;
    tranStat.innerHTML = totalTran;
};

div2.onanimationiteration = function(event){
    totalAnime++;
    animStat.innerHTML = totalAnime;
};

div2.ontransitionend = function(event){
    totalTran++;
    tranStat.innerHTML = totalTran;
};

document.body.onkeydown = function(event){

    switch(event.keyCode)
    {
        case 87:
            //w was pressed down
            obj3.moveUp(5);
            break;
        case 65:
            //a was pressed down
            obj3.moveLeft(5);
            break;
        case 68:
            //d was pressed down
            obj3.moveRight(5);
            break;
        case 83:
            //s wass pressed down
            obj3.moveDown(5);
            break;
    }

};

window.onload = function(){
    clearInput();
    loadInputs();

    obj1 = new moveDivObj(div1,1);
    obj2 = new moveDivObj(div2,5);
    obj3 = new moveDivObj(div3,5);

};

