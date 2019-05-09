

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
            thisElem.style.left = (bounderiesArray['bottom'] - getWide(thisElem)) + "px";
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
            thisElem.style.left = (bounderiesArray['right'] - getWide(thisElem)) + "px";
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
    isTop = (bounderiesArray['top'] <= thisTop) ? true : false;

    //compare left
    isLeft = (bounderiesArray['left'] <= thisLeft) ? true : false;

    //compare right
    isRight = (bounderiesArray['right'] >= thisRight) ? true : false;

    //compare bottom
    isBottom = (bounderiesArray['bottom'] >= thisBottom) ? true : false;

    if(isTop && isLeft && isRight && isBottom)
    {
        bound = true;
    }

    return bound;
}
