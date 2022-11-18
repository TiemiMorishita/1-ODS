//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Seleciona o arquivo XML
xmlhttp.open("GET","xml/texto.xml",false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo enviado é um XML
xmlDoc = xmlhttp.responseXML;

//Armazena as postagens do XML em um array
x = xmlDoc.getElementsByTagName("postagem");

function teste(){
    for(i=x.length-1;i>=0;i--){
        document.write(
            "<div>" +
                "<div>"+ x[i].getAttribute("codigo") +"</td>" +
                "<div><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'></div>" +
                "<div><a href='postagem.html?codigo_postagem=" + i + "'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</a></div>" +
                "<div>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,50) +"...</div>" +
            "</div>");
    }
}

function postagem(){
    //Armazena a URL completa, ex: http://localhost:81/blog/postagem.html?codigo_postagem=2
    url = new URL(window.location.href);
    //Armazena o parâmetro, ex: codigo_postagem=2
    parametro = url.searchParams;
    //Armazena a id, ex: 2
    i = parametro.get("codigo_postagem");

        document.write(
            "<div>" +
                "<div>"+ x[i].getAttribute("codigo") +"</div>" +
                "<div><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'></div>" +
                "<div>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</div>" +
                "<div>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</div>" +
            "</div>");
    
}