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
