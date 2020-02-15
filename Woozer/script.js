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
    //  alert(this)
    //var myObj = JSON.parse(this);
    //alert(myObj);
    document.getElementById("con").innerHTML = this.responseText;
    //alert(this);
    //con_to_json(this);
    }
  };
  xhttp.open("GET", "file.php", true);
  xhttp.send();
}

function con_to_json(xml){
  xmlDoc= xml.response;
  document.getElementById("con").innerHTML = xml.responseText;
  alert(xmlDoc);
  x=xmlDoc.getElementsByTagName("hgroup");
  var blogs=[];
  var i;
  for(i=0;i<x.length;i++){
    var blog={
      span: x[i].getElementsByTagName("span")[0].childNodes[0].nodeValue,
      time: x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue,
      header: x[i].getElementsByTagName("header")[0].childNodes[0].nodeValue,
      article: x[i].getElementsByTagName("article")[0].childNodes[0].nodeValue,
      a: x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue
    }
    blogs.push(blog);
  }
  blogs_in(blogs);
}

function blogs_in(json){
  var i;
  var myObj;
  alert(json[0]);
  for(i=0;i<json.length;i++){
    myObj = JSON.parse(json[i]);
    document.getElementById("con").innerHTML = myObj;
  }
}
