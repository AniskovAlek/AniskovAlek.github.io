var Width = 10, Height = 10, i_u,j_u,bj,win=false;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function create_table(){
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
            if ((i == 0) || (i == Height-1) || (j == 0) || (j == Width-1)) {
                arr[i][j].className = 'wall';
            } else {
                arr[i][j].className = 'null';
            }
            arr[i][j].i=i;
            arr[i][j].j=j;
            arr[i][j].id="c"+i+""+j;
            tab.appendChild(arr[i][j]);
        }
    }
    create_maze(Width,Height);
}

function create_maze(width,height){
    let j=getRandomInt(width-2)+1;
    bj=j;
    let i=0,t=true;
    let b=document.getElementById("c"+i+""+j);
    b.className="fin";
    i++;
    b=document.getElementById("c"+i+""+j);
    b.className="res";
    while(t){
        let f=0;
        let s=getRandomInt(4);
        switch (s) {
            case 0:
                i--;
                b=document.getElementById("c"+i+""+j);
                if((b.className=="null")||(b.className=="res")){
                    b.className="res";
                    break;
                }
                else {
                    i++;
                    break;
                }
            case 1:
                i++;
                b=document.getElementById("c"+i+""+j);
                if(b.className=="wall") {
                    f=1;
                    i--;
                    break;
                }
                if((b.className=="null")||(b.className=="res")){
                    b.className="res";
                    break;
                }
                else {
                    i--;
                    break;
                }
            case 2:
                j--;
                b=document.getElementById("c"+i+""+j);
                if((b.className=="null")||(b.className=="res")){
                    b.className="res";
                    break;
                }
                else {
                    j++;
                    break;
                }
            case 3:
                j++;
                b=document.getElementById("c"+i+""+j);
                if((b.className=="null")||(b.className=="res")){
                    b.className="res";
                    break;
                }
                else {
                    j--;
                    break;
                }
            default: break;

        }
        if(f) {
            if (check(width, height)) {
                break;
            }
            else {
                clear(width, height);
                j=bj;
                i=1;
            }
        }
        //alert(j);
        //alert(i);
        //alert(b.className);
        //tt=1;
    }
    //alert("!");
    b=document.getElementById("c"+i+""+j);
    b.className="you";
    i_u=i;
    j_u=j;
    fill(width,height);
}

function check(width,height){
    let k=(width*height/5);
    let b;
    let s=0;
    for(let i=1;i<width-1;i++){
        for(let j=1;j<height-1;j++){
            b=document.getElementById("c"+i+""+j);
            if(b.className=="res") s++;
        }
    }
    return s>=k;
}

function clear(width,height) {
    let b;
    for(let i=1;i<width-1;i++){
        for(let j=1;j<height-1;j++){
            b=document.getElementById("c"+i+""+j);
            b.className="null";
        }
    }
}
function check_f(width,height){
    let b;
    let s=0;
    for(let i=1;i<width-1;i++){
        for(let j=1;j<height-1;j++){
            b=document.getElementById("c"+i+""+j);
            if(b.className=="res") s++;
        }
    }
    //b=document.getElementById("c"+5+""+5);
    return s;
}
function fill(width,height) {
    let b;
    for(let i=1;i<width-1;i++){
        for(let j=1;j<height-1;j++){
            b=document.getElementById("c"+i+""+j);
            if(b.className=="null") b.className="wall";
        }
    }}

window.onload = function () {
    //create_table();
    addEventListener("keydown", move);

    function move(e) {
        if (win) return;
        let b=document.getElementById("c"+i_u+""+j_u);

        let b_buf;
        switch (e.key) {
            case "w":
            case "ц":
                b_buf=document.getElementById("c"+(i_u-1)+""+j_u);
                if (b_buf.className != "wall") {

                    b_buf.className = "you";
                    b.className = "res";
                    b=b_buf;
                    i_u--;
                }
                break;
            case "a":
            case "ф":
                b_buf=document.getElementById("c"+i_u+""+(j_u-1));
                if (b_buf.className != "wall") {
                    b_buf.className = "you";
                    b.className = "res";
                    b=b_buf;
                    j_u--;
                }
                break;
            case "d":
            case "в":
                b_buf=document.getElementById("c"+i_u+""+(j_u+1));
                if (b_buf.className != "wall") {
                    b_buf.className = "you";
                    b.className = "res";
                    b=b_buf;
                    j_u++;
                }
                break;
            case "s":
            case "ы":
                b_buf=document.getElementById("c"+(i_u+1)+""+j_u);
                if (b_buf.className != "wall") {
                    b_buf.className = "you";
                    b.className = "res";
                    b=b_buf;
                    i_u++;
                }
                break;
        }
        b_buf=document.getElementById("c"+0+""+bj);
        if (b.className==b_buf.className) win = true;
        if (win) alert("You win!");
    }
}
