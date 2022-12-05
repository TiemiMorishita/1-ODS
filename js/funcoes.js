xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

y = xmlDoc.getElementsByTagName("texto1");
x = xmlDoc.getElementsByTagName("postagem");

function texto(){
        for(i = 0; i <= 1; i++){
            document.write( 
                "<h1 class='display-3 titulo1'>" + y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
                "<div class='texto'>");
                for(i = 0; i < y.length; i++){
                    document.write( 
                        "<p>" + y[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue + "</p>");
                }
                document.write( 
                "</div>"
                );
        }
    }

    function n(){
        i= x.length-1
            document.write(
                "<div class='col-md-7'>" +
                "<img src='img/" + x[i].getElementsByTagName("capa")[0].childNodes[0].nodeValue + "' class='card-img p3'>" +
                "</div>" +
                "<div class='col-md-5'>" +
                  "<div class='card-body'>" +
                    "<h1 class='card-title text-white titulo1'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
                    "<p class='card-text text-white texto'>" + x[i].getElementsByTagName("subtitulo")[0].childNodes[0].nodeValue.substr(0,325) + "...</p>" +
                    "<p class='card-text text-muted texto'>" +  x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</p>" +
                      "<p><a href='postagem.html?codigo_postagem=" + i + "' class='btn text-white b'>Saiba Mais!</a></p>" +
                      "</div>" +
                "</div>");
        
        }
        
        function n2(){
            for(i= x.length-2;i>=0;i--){
                document.write(
                    "<div class='col-sm-4 p-3 text-white'>" +
                      "<div class='card n1'>" +
                      "<div class='card-body'>" +
                        "<h2 class='card-title titulo1'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h2>" +
                        "<p class='card-text texto2'>" + x[i].getElementsByTagName("subtitulo")[0].childNodes[0].nodeValue.substr(0,85) + "...</p>" +
                        "<p class='card-text text-muted texto2'>" +  x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</p>" +
                        "<p><a href='postagem.html?codigo_postagem=" + i + "' class='btn text-white b'>Saiba Mais!</a></p>" +
                      "</div>" +
                      "</div>" +
                    "</div>"
                );
              }
            }

    function f1(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_postagem");

      document.write(
        "<div class='capa'  style='position: relative; background: url(img/" +  x[i].getElementsByTagName("capa")[0].childNodes[0].nodeValue + ") center; background-repeat: no-repeat; background-size: cover; height: 800px;'>"
      );
    }

    function f2(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_postagem");

      document.write(
        "<h3><div class='badge c5'>Notícias</div></h3>"+
              "<h1 class='display-2'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>"+

              "<div class='container-fluid'>"+
                "<div class='row justify-content-start'>"+
                  "<div class='col-sm-2'>"+
                  "<img src='img/c.png' style='height: min(50px, 11vw);' id='img-c'>"+
                  "</div>"+
                  "<div class='col-sm-1'>"+
                    "<p class='texto'>" + x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</p>"+
                  "</div>"+
                "</div>"+
              "</div>"

      );
    }

    function f3(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_postagem");

      document.write(
        "<div class='col'>"+
        "<p class='text-white texto2'  style='margin-left: 5%;'>" + x[i].getElementsByTagName("subtitulo")[0].childNodes[0].nodeValue + "</p>" +
      "</div>"
      );
    }

    function f4(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_postagem");

      document.write(
        "<div class='col-lg-7 p-3 text-white'>"+
          "<div class='texto2'>"+
            "<p>" + x[i].getElementsByTagName("p1")[0].childNodes[0].nodeValue + "</p>"+
          "</div>"+
        "</div>"+
        "<div class='col-lg-5 p-3'><img src='img/" + x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "' id='p2'></div>"
      );
    }

    function f5(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_postagem");

        document.write( 
            "<p>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</p>"+
            "<img src='img/" +  x[i].getElementsByTagName("imagem2")[0].childNodes[0].nodeValue + "' id='p4'>"+
            "<p>Fonte: </p>"+
            "<p><a href='" +  x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue + "'class='btn b text-white'>Notícia Original</a></p>"
      );
    }

    function f6(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_postagem");

    for(a = x.length-1; a >= 0; a--){

      if(a != i){
          
      document.write( 
        "<div class='col-sm-4 p-3 text-white'>" +
        "<div class='card n1'>" +
        "<div class='card-body'>" +
          "<h2 class='card-title titulo1'>" + x[a].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h2>" +
          "<p class='card-text texto2'>" + x[a].getElementsByTagName("subtitulo")[0].childNodes[0].nodeValue.substr(0,85) + "...</p>" +
          "<p class='card-text text-muted texto2'>" +  x[a].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</p>" +
          "<p><a href='postagem.html?codigo_postagem=" + a + "' class='btn text-white b'>Saiba Mais!</a></p>" +
        "</div>" +
        "</div>" +
      "</div>"
        );
      }
    }
  }


