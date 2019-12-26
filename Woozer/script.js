function menu(){
  if(d1.getAttribute('show')=='false')
  d1.setAttribute('show','true');
  else
  d1.setAttribute('show','false');
}

function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    blogs(this);
    }
  };
  xhttp.open("GET", "file.xml", true);
  xhttp.send();
}

function blogs(xml){
  var i;
  xmlDoc= xml.responseXML;
  var str;
  x=xmlDoc.getElementByTagName("hgroup");
  for(i=0;i<x.length;i++){
    str+="<hgroup class=&quot;blog&quot;> <span>"+
    x[i].getElementsByTagName("span")[0].childNodes[0].nodeValue +
    "</span><header class=&quot;title&quot;>" +
    x[i].getElementsByTagName("header")[0].childNodes[0].nodeValue +
    "</header><article class=&quot;blog_post&quot;>"+
    x[i].getElementsByTagName("article")[0].childNodes[0].nodeValue+
    "</article><a href= "+
    x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue+
    ">Подробнее</a></hgroup>";
  }
  document.getElementById("con").innerHTML = str;
}
