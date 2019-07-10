onmessage = function(event){
    xhttp = new XMLHttpRequest();
    jsonURL = event.data;
    xhttp.onreadystatechange = function(){
       if(this.readyState == 4 && this.status == 200)
        {
            var respons = this.responseText;
            respons = respons.replace("callback(","");
            respons = respons.replace(");","");
            var albumRespons = JSON.parse(respons);
            postMessage({"year":albumRespons.message.body.album.album_release_date,
                        "art":albumRespons.message.body.album.album_coverart_100x100});
        }
    };

    xhttp.open("GET",jsonURL,false);
    xhttp.send();
};
