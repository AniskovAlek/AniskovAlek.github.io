var turn=0;
var wi=false;
var Width = 7, Height = 7;

function Create_table() {
    wi=false;
    Width=document.getElementById('v1').value;
    Height=document.getElementById('v2').value;
    let arr = [Height];
    var tab=document.getElementById('t1');
    tab.innerHTML = "";
    var line;
    for(var i=0;i<Height;i++){
        arr[i]= [Width];
        line=document.createElement('tr');
        tab.appendChild(line);
        for(var j=0;j<Width;j++){
            arr[i][j]=document.createElement('td');
            arr[i][j].pos='null';
            arr[i][j].i=i;
            arr[i][j].j=j;
            arr[i][j].id="c"+i+""+j;
            var img= document.createElement('img');
            arr[i][j].onclick=step;
            tab.appendChild(arr[i][j]);
            arr[i][j].appendChild(img);
        }
    }
}

function step(){
  if(!wi)
  if(this.firstChild.src==''){
    if(turn==0){
      this.firstChild.src='zero.png';
      this.pos='zero';
      turn=1;
    }
    else {
      this.firstChild.src='cross.png';
      this.pos='cross';
      turn=0;
    }

  wi=check(this);
  if(wi){
    if(turn==1) {alert("Нули победили!");}
    else {alert("Крестики победили!");}
  }
}

}

function check(c){

  var i=c.i,j=c.j;

  var b=c.pos;
  var f=0,k;
  var s=1;
  for(k=1;k<5;k++){
    if(i+s>=Height){
      s-=5;
      f++;
    }
    var h=document.getElementById("c"+(i+s)+""+j);
    if(b==h.pos){
      s++;
   }
    else {
      if(f) break;
      s-=5;
      f++;
      if(i+s<0) break;
      h=document.getElementById("c"+(i+s)+""+j);
      if(b==h.pos){
      s++;
    }
    else break;
  }
}
if (k==5) {
  return true;
}
s=1;
f=0;
for(k=1;k<5;k++){
  if(j+s>=Width){
    s-=5;
    f++;
  }
  var h=document.getElementById("c"+i+""+(j+s));
  if(b==h.pos){
    s++;
 }
  else {
    if(f) break;
    s-=5;
    f++;
    if(j+s<0) break;
    h=document.getElementById("c"+i+""+(j+s));
    if(b==h.pos){
    s++;
  }
  else break;
}
}
if (k==5) {
  return true;
}
s=1;
f=0;
for(k=1;k<5;k++){
  if((i+s>=Height)||(j+s>=Width)){
    s-=5;
    f++;

  }
  if((i+s>=0)&&(j+s>=0)){
  var h=document.getElementById("c"+(i+s)+""+(j+s));
}
  if(b==h.pos){
    s++;
 }
  else {
    if(f) break;

    s-=5;
    f++;
    if((i+s<0)||(j+s<0)) break;
    h=document.getElementById("c"+(i+s)+""+(j+s));
    if(b==h.pos){
    s++;
  }
  else break;
}
}
if (k==5) {
alert("!");
return true;
}
s=1;
f=0;
for(k=1;k<5;k++){
if((j-s<0)||(i+s>=Height)){
  s-=5;
  f++;
}
if((i+s>=0)&&(j-s>=0)){
var h=document.getElementById("c"+(i+s)+""+(j-s));
}
if(b==h.pos){
  s++;
}
else {
  if(f) break;
  s-=5;
  f++;
  if((j-s>=Width)||(i+s<0)) break;
  if((i+s>=0)&&(j-s>=0)){
  h=document.getElementById("c"+(i+s)+""+(j-s));
}
  if(b==h.pos){
  s++;
}
else break;
}
}
if (k==5) {
return true;
}

}
