//variables

//bounderies
var bounderiesObj = {
    top:0,
    left:0,
    bottom:548,
    right:998
};

//changing DIV
div1 = document.getElementById('div1');
div2 = document.getElementById('div2');

//select
divSelect = document.getElementById('select-div');

//buttons
downBtn = document.getElementById('downBtn');
upBtn = document.getElementById('upBtn');
leftBtn = document.getElementById('leftBtn');
rightBtn = document.getElementById('rightBtn');
radioSizeBtn = document.getElementsByName('divSize');

function myDivObj(elemObj)
{
    this.elem = (elemObj instanceof Element) ? elemObj : null;

    if(this.elem == null)
    {
        console.log("Error: Inncorrect input value when saving element");
    }

}

myDivObj.prototype.getHigh = function(){
    return (this.elem != null) ? this.elem.clientHeight : null;
};

myDivObj.prototype.getWide = function(){
    return (this.elem != null) ? this.elem.clientWidth : null;    
};

myDivObj.prototype.setWide = function(newWidth){        
    this.elem.style.width = newWidth + 'px';
};

myDivObj.prototype.setHigh = function(newHigh){
    this.elem.style.height = newHigh + 'px';
};

function moveDivObj(elemObj)
{
    myDivObj.call(elemObj);
}

moveDivObj.prototype = Object.create(myDivObj.prototype);



moveDivObj.prototype.moveUp = function(moveAmmount){

    if(this.elem != null)
    {
        var thisTopOff = 0;

        thisTopOff = this.elem.offsetTop;

        this.elem.style.top = (thisTopOff - moveAmmount) + "px";

        if(!isBound())
        {
            this.elem.style.top = thisTopOff + "px";
        }
    }

};

moveDivObj.prototype.moveDown = function moveDown(moveAmmount){
    if(this.elem != null)
    {
        var thisBottomOff = 0;

        thisBottomOff = this.elem.offsetTop;

        this.elem.style.top = (thisBottomOff + moveAmmount) + "px";

        if(!isBound())
        {
            this.elem.style.top = thisBottomOff + "px";
        }
    }

};

moveDivObj.prototype.moveLeft = function(moveAmmount){

    if(this.elem != null)
    {
        var thisLeftOff = 0;

        thisLeftOff = this.elem.offsetLeft;

        this.elem.style.left = (thisLeftOff - moveAmmount) + "px";

        if(!isBound())
        {
            this.elem.style.left = thisLeftOff + "px";
        }
    }

};

moveDivObj.prototype.moveRight = function(moveAmmount){

    if(this.elem != null)
    {
        var thisRightOff = 0;

        thisRightOff = this.elem.offsetLeft;

        this.elem.style.left = (thisRightOff + moveAmmount) + "px";

        if(!isBound())
        {
            this.elem.style.left = thisRightOff + "px";
        }
    }

};


moveDivObj.prototype.isBound = function(){

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

    //width and height can be offsets need to test the
    //bound setting as with the padding

    thisTop = this.elem.offsetTop;
    thisLeft = this.elem.offsetLeft;
    thisWidth = this.elem.clientWidth;
    thisHeight = this.elem.clientHeight;
    thisRight = thisLeft + thisWidth;
    thisBottom = thisTop + thisHeight;

    //compare top
    isTop = (bounderiesObj.top <= thisTop) ? true : false;

    //compare left
    isLeft = (bounderiesObj.left <= thisLeft) ? true : false;

    //compare right
    isRight = (bounderiesObj.right >= thisRight) ? true : false;

    //compare bottom
    isBottom = (bounderiesObj.bottom >= thisBottom) ? true : false;

    if(isTop && isLeft && isRight && isBottom)
    {
        bound = true;
    }

    return bound;
};

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
