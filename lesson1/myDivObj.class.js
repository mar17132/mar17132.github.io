
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
