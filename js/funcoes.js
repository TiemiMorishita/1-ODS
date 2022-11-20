xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("postagem");

function titulo(){
        for(i = 0; i <= 1; i++){
            document.write( x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue);
        }
    }

    function texto(){
        for(i = 0; i < x.length; i++){
            document.write( 
                "<p>" + x[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue + "</p>");
        }
    }
