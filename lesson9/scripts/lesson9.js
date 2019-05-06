

//variables

//bounderies
var topBound = 0;
var leftBound = 0;
var bottomBound = 548; //border width
var rightBound = 998;

//changing DIV
div1 = document.getElementById('div1');
div2 = document.getElementById('div2');

//input
borderColorTxt = document.getElementById('bcolor');
backgrandColorTxt = document.getElementById('backcolor');

//span display
highTxt = document.getElementById('highSpan');
widthTxt = document.getElementById('widthSpan');

//select
divSelect = document.getElementById('select-div');

//buttons
downBtn = document.getElementById('downBtn');
upBtn = document.getElementById('upBtn');
leftBtn = document.getElementById('leftBtn');
rightBtn = document.getElementById('rightBtn');
changeClassBtn = document.getElementById('changeClassBtn');
changeDivBtn = document.getElementById('changeDivBtn');
radioSizeBtn = document.getElementsByName('divSize');

function getHigh(elem)
{
    if(elem instanceof Element)
    {
        return elem.clientHeight;
    }
    else
    {
        return document.getElementById(elem).clientHeight;
    }
}

function getWide(elem)
{
    if(elem instanceof Element)
    {
        return elem.clientWidth;
    }
    else
    {
        return document.getElementById(elem).clientWidth;
    }
}


function setWide(elem,newWidth)
{
    if(elem instanceof Element)
    {
        elem.style.width = newWidth + 'px';
    }
    else
    {
        document.getElementById(elem).style.width = newWidth + 'px';
    }
}

function setHigh(elem,newHigh)
{
    if(elem instanceof Element)
    {
        elem.style.height = newHigh + 'px';
    }
    else
    {
        document.getElementById(elem).style.height = newHigh + 'px';
    }
}

function moveUp(elem,moveAmmount)
{
    if(elem != null)
    {
        var thisElem;
        var thisTopOff = 0;

        if(elem instanceof Element)
        {
            thisElem = elem;
        }
        else
        {
            thisElem = document.getElementById(elem);
        }

        thisTopOff = thisElem.offsetTop;

        thisElem.style.top = (thisTopOff - moveAmmount) + "px";

        if(!isBound(thisElem))
        {
            thisElem.style.top = thisTopOff + "px";
        }
    }

}

function moveDown(elem,moveAmmount)
{
    if(elem != null)
    {
        var thisElem;
        var thisBottomOff = 0;

        if(elem instanceof Element)
        {
            thisElem = elem;
        }
        else
        {
            thisElem = document.getElementById(elem);
        }

        thisBottomOff = thisElem.offsetTop;

        thisElem.style.top = (thisBottomOff + moveAmmount) + "px";

        if(!isBound(thisElem))
        {
            thisElem.style.top = thisBottomOff + "px";
        }
    }

}

function moveLeft(elem,moveAmmount)
{
    if(elem != null)
    {
        var thisElem;
        var thisLeftOff = 0;

        if(elem instanceof Element)
        {
            thisElem = elem;
        }
        else
        {
            thisElem = document.getElementById(elem);
        }

        thisLeftOff = thisElem.offsetLeft;

        thisElem.style.left = (thisLeftOff - moveAmmount) + "px";

        if(!isBound(thisElem))
        {
            thisElem.style.left = thisLeftOff + "px";
        }
    }

}

function moveRight(elem,moveAmmount)
{
    if(elem != null)
    {
        var thisElem;
        var thisRightOff = 0;

        if(elem instanceof Element)
        {
            thisElem = elem;
        }
        else
        {
            thisElem = document.getElementById(elem);
        }

        thisRightOff = thisElem.offsetLeft;

        thisElem.style.left = (thisRightOff + moveAmmount) + "px";

        if(!isBound(thisElem))
        {
            thisElem.style.left = thisRightOff + "px";
        }
    }

}

function isBound(elem)
{
    var thisElem;
    var thisTop = 0;
    var thisBottom = 0;
    var thisLeft = 0;
    var thisRight = 0;
    var thisWidth = 0;
    var thisHeight = 0;
    var isTop = false;
    var isLeft = false;
    var isRight = false;
    var isBottom = false;
    var bound = false;

    if(elem instanceof Element)
    {
        thisElem = elem;
    }
    else
    {
        thisElem = document.getElementById(elem);
    }

    //width and height can be offsets need to test the
    //bound setting as with the padding

    thisTop = thisElem.offsetTop;
    thisLeft = thisElem.offsetLeft;
    thisWidth = thisElem.clientWidth;
    thisHeight = thisElem.clientHeight;
    thisRight = thisLeft + thisWidth;
    thisBottom = thisTop + thisHeight;

    //compare top
    isTop = (topBound <= thisTop) ? true : false;

    //compare left
    isLeft = (leftBound <= thisLeft) ? true : false;

    //compare right
    isRight = (rightBound >= thisRight) ? true : false;

    //compare bottom
    isBottom = (bottomBound >= thisBottom) ? true : false;

    if(isTop && isLeft && isRight && isBottom)
    {
        bound = true;
    }

    return bound;
}

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
    backgrandColorTxt.value = "";
    borderColorTxt.value = "";
    divSelect.selectedIndex = 0;
}

function loadInputs()
{
    var myclassList = div2.classList;
    var myclassname = "";
    for(i = 0; i < myclassList.length; i++)
    {
        if(myclassList[i].includes('size') || myclassList[i].includes('bigger'))
        {
            myclassname = myclassList[i];
        }
    }
    widthTxt.innerHTML = getCSSPropVal("." + myclassname,'width');
    highTxt.innerHTML = getCSSPropVal("." + myclassname,'height');
    divSelect.selectedIndex = 0;
    radioSizeBtn[0].checked = true;
    changeTagClass('default-size');
    addClassList(div1,'div1-class');
    addClassList(div2,'div2-class');
}

function getDivColor(cssSelector)
{
    backgrandColorTxt.value = getCSSPropVal(cssSelector,'background-color');
    borderColorTxt.value = getCSSPropVal(cssSelector,'border-color');
}

function changeTagClass(newClass)
{
    div2.className = newClass;
    div1.className = newClass;
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

changeClassBtn.onclick = function(){

    for(j = 0; j < radioSizeBtn.length; j++)
    {
        if(radioSizeBtn[j].checked)
        {
          changeTagClass(radioSizeBtn[j].value)
        }
    }

    addClassList(div1,'div1-class');
    addClassList(div2,'div2-class');

    var myclassList = div2.classList;
    var myclassname = "";
    for(i = 0; i < myclassList.length; i++)
    {
        if(myclassList[i].includes('size') || myclassList[i].includes('bigger'))
        {
            myclassname = myclassList[i];
        }
    }
    widthTxt.innerHTML = getCSSPropVal("." + myclassname,'width');
    highTxt.innerHTML = getCSSPropVal("." + myclassname,'height');
};

changeDivBtn.onclick = function(){
    var divVal = divSelect.value;
    if(divVal == 'div1')
    {
        setCSSPropVal('.div1-class','border-color',borderColorTxt.value);
        setCSSPropVal('.div1-class','background-color',backgrandColorTxt.value);
    }
    else if(divVal == 'div2')
    {
        setCSSPropVal('.div2-class','border-color',borderColorTxt.value);
        setCSSPropVal('.div2-class','background-color',backgrandColorTxt.value);
    }

    clearInput();
};

window.onload = function(){
    clearInput();
    loadInputs();
};
