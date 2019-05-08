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
