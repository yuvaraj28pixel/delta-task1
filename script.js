var noOfMoves = 0;
var m=3;
var n=25;

    
   

let gridcolor=['Purple','Magenta','Olive','green','Maroon',"Orange","Blue","Cyan","red","yellow","Silver"];

function arrange(){

    var color=[];
    var minicolor=[];
    var num=[];
    var arrcolor=["black"];
    
    document.getElementById('noOfMoves').textContent = 0;

    //selecting 6 distinct colors from gridcolor
    
    for(let i=0;color.length<6; i++){
        
        let tabcolor=gridcolor[Math.floor(Math.random()*11 )];
        if(color.includes(tabcolor)===false)
        {
            color.push(tabcolor);
            console.log(tabcolor);
        }    
    }
    console.log(color);
    
    

    //random colors for maingrid
   

    if(n==16 && m==2){

        for(let i=0; i<n; i++){
            let tabcolor=color[Math.floor(Math.random()*6 )];
            arrcolor.push(tabcolor);
        }

        document.querySelector('#b01').style.backgroundColor = arrcolor[0];
        document.querySelector('#b02').style.backgroundColor = arrcolor[1];
        document.querySelector('#b03').style.backgroundColor = arrcolor[2];
        document.querySelector('#b04').style.backgroundColor = arrcolor[3];
        document.querySelector('#b11').style.backgroundColor = arrcolor[4];
        document.querySelector('#b12').style.backgroundColor = arrcolor[5];
        document.querySelector('#b13').style.backgroundColor = arrcolor[6];
        document.querySelector('#b14').style.backgroundColor = arrcolor[7];
        document.querySelector('#b21').style.backgroundColor = arrcolor[8];
        document.querySelector('#b22').style.backgroundColor = arrcolor[9];
        document.querySelector('#b23').style.backgroundColor = arrcolor[10];
        document.querySelector('#b24').style.backgroundColor = arrcolor[11];
        document.querySelector('#b31').style.backgroundColor = arrcolor[12];
        document.querySelector('#b32').style.backgroundColor = arrcolor[13];
        document.querySelector('#b33').style.backgroundColor = arrcolor[14];
        document.querySelector('#b34').style.backgroundColor = arrcolor[15];
        
        document.querySelector('#b05').style.visibility = 'hidden';
        document.querySelector('#b06').style.visibility = 'hidden';
        document.querySelector('#b15').style.visibility = 'hidden';
        document.querySelector('#b16').style.visibility = 'hidden';
        document.querySelector('#b25').style.visibility = 'hidden';
        document.querySelector('#b26').style.visibility = 'hidden';
        document.querySelector('#b35').style.visibility = 'hidden';
        document.querySelector('#b36').style.visibility = 'hidden';
        document.querySelector('#b41').style.visibility = 'hidden';
        document.querySelector('#b42').style.visibility = 'hidden';
        document.querySelector('#b43').style.visibility = 'hidden';
        document.querySelector('#b44').style.visibility = 'hidden';
        document.querySelector('#b45').style.visibility = 'hidden';
        document.querySelector('#b46').style.visibility = 'hidden';
        document.querySelector('#b51').style.visibility = 'hidden';
        document.querySelector('#b52').style.visibility = 'hidden';
        document.querySelector('#b53').style.visibility = 'hidden';
        document.querySelector('#b54').style.visibility = 'hidden';
        document.querySelector('#b55').style.visibility = 'hidden';
        document.querySelector('#b56').style.visibility = 'hidden';


       
        
         for(let i=0;num.length<(m**2); i++){
              let random = Math.floor(Math.random()*n);
             if(num.includes(random)===false){
                 num.push(random);
                 let temp=arrcolor[random];
                 minicolor.push(arrcolor[random]);
                }
                
            }
         console.log(minicolor);
       
        document.getElementById('s01').style.backgroundColor=minicolor[0];
        document.getElementById('s02').style.backgroundColor=minicolor[1];
        document.getElementById('s11').style.backgroundColor=minicolor[2];
        document.getElementById('s12').style.backgroundColor=minicolor[3];
    
        document.getElementById('s03').style.visibility='hidden';
        document.getElementById('s04').style.visibility='hidden';
        document.getElementById('s13').style.visibility='hidden';
        document.getElementById('s14').style.visibility='hidden';
        document.getElementById('s21').style.visibility='hidden'; 
        document.getElementById('s22').style.visibility='hidden';
        document.getElementById('s23').style.visibility='hidden';
        document.getElementById('s24').style.visibility='hidden';
        document.getElementById('s31').style.visibility='hidden';
        document.getElementById('s32').style.visibility='hidden';
        document.getElementById('s33').style.visibility='hidden';
        document.getElementById('s34').style.visibility='hidden';
        
     
        
    }
   if(n==25 && m==3){

    for(let i=0; i<n; i++){
        let tabcolor=color[Math.floor(Math.random()*6 )];
        arrcolor.push(tabcolor);
    }

    document.querySelector('#b01').style.backgroundColor = arrcolor[0];
    document.querySelector('#b02').style.backgroundColor = arrcolor[1];
    document.querySelector('#b03').style.backgroundColor = arrcolor[2];
    document.querySelector('#b04').style.backgroundColor = arrcolor[3];
    document.querySelector('#b05').style.backgroundColor = arrcolor[4];
    document.querySelector('#b11').style.backgroundColor = arrcolor[5];
    document.querySelector('#b12').style.backgroundColor = arrcolor[6];
    document.querySelector('#b13').style.backgroundColor = arrcolor[7];
    document.querySelector('#b14').style.backgroundColor = arrcolor[8];
    document.querySelector('#b15').style.backgroundColor = arrcolor[9];
    document.querySelector('#b21').style.backgroundColor = arrcolor[10];
    document.querySelector('#b22').style.backgroundColor = arrcolor[11];
    document.querySelector('#b23').style.backgroundColor = arrcolor[12];
    document.querySelector('#b24').style.backgroundColor = arrcolor[13];
    document.querySelector('#b25').style.backgroundColor = arrcolor[14];
    document.querySelector('#b31').style.backgroundColor = arrcolor[15];
    document.querySelector('#b32').style.backgroundColor = arrcolor[16];
    document.querySelector('#b33').style.backgroundColor = arrcolor[17];
    document.querySelector('#b34').style.backgroundColor = arrcolor[18];
    document.querySelector('#b35').style.backgroundColor = arrcolor[19];
    document.querySelector('#b41').style.backgroundColor = arrcolor[20];
    document.querySelector('#b42').style.backgroundColor = arrcolor[21];
    document.querySelector('#b43').style.backgroundColor = arrcolor[22];
    document.querySelector('#b44').style.backgroundColor = arrcolor[23];
    document.querySelector('#b45').style.backgroundColor = arrcolor[24];

    
    document.querySelector('#b06').style.visibility = 'hidden';
    document.querySelector('#b16').style.visibility = 'hidden';
    document.querySelector('#b26').style.visibility = 'hidden';
    document.querySelector('#b36').style.visibility = 'hidden';
    document.querySelector('#b46').style.visibility = 'hidden';
    document.querySelector('#b51').style.visibility = 'hidden';
    document.querySelector('#b52').style.visibility = 'hidden';
    document.querySelector('#b53').style.visibility = 'hidden';
    document.querySelector('#b54').style.visibility = 'hidden';
    document.querySelector('#b55').style.visibility = 'hidden';
     document.querySelector('#b56').style.visibility = 'hidden';

    
        var num=[];
        for(let i=0;num.length<(m**2); i++){
            let random = Math.floor(Math.random()*n);
            if(num.includes(random)===false){
                num.push(random);
                console.log(random);
                minicolor.push(arrcolor[random]);
            }
            
        }
        console.log(minicolor);

        document.getElementById('s01').style.backgroundColor=minicolor[0];
        document.getElementById('s02').style.backgroundColor=minicolor[1];
        document.getElementById('s03').style.backgroundColor=minicolor[2];
        document.getElementById('s11').style.backgroundColor=minicolor[3];
        document.getElementById('s12').style.backgroundColor=minicolor[4];
        document.getElementById('s13').style.backgroundColor=minicolor[5];
        document.getElementById('s21').style.backgroundColor=minicolor[6];
        document.getElementById('s22').style.backgroundColor=minicolor[7];
        document.getElementById('s23').style.backgroundColor=minicolor[8];

        document.getElementById('s04').style.visibility = 'hidden';
        document.getElementById('s14').style.visibility = 'hidden';
        document.getElementById('s24').style.visibility = 'hidden';
        document.getElementById('s31').style.visibility = 'hidden';
        document.getElementById('s32').style.visibility = 'hidden';
        document.getElementById('s33').style.visibility = 'hidden';
        document.getElementById('s34').style.visibility = 'hidden';

    
   }
   if(n==36 && m==4){

    for(let i=0; i<n; i++){
        let tabcolor=color[Math.floor(Math.random()*6 )];
        arrcolor.push(tabcolor);
    }

    document.querySelector('#b01').style.backgroundColor = arrcolor[0];
    document.querySelector('#b02').style.backgroundColor = arrcolor[1];
    document.querySelector('#b03').style.backgroundColor = arrcolor[2];
    document.querySelector('#b04').style.backgroundColor = arrcolor[3];
    document.querySelector('#b05').style.backgroundColor = arrcolor[4];
    document.querySelector('#b06').style.backgroundColor = arrcolor[5];
    document.querySelector('#b11').style.backgroundColor = arrcolor[6];
    document.querySelector('#b12').style.backgroundColor = arrcolor[7];
    document.querySelector('#b13').style.backgroundColor = arrcolor[8];
    document.querySelector('#b14').style.backgroundColor = arrcolor[9];
    document.querySelector('#b15').style.backgroundColor = arrcolor[10];
    document.querySelector('#b16').style.backgroundColor = arrcolor[11];
    document.querySelector('#b21').style.backgroundColor = arrcolor[12];
    document.querySelector('#b22').style.backgroundColor = arrcolor[13];
    document.querySelector('#b23').style.backgroundColor = arrcolor[14];
    document.querySelector('#b24').style.backgroundColor = arrcolor[15];
    document.querySelector('#b25').style.backgroundColor = arrcolor[16];
    document.querySelector('#b26').style.backgroundColor = arrcolor[17];
    document.querySelector('#b31').style.backgroundColor = arrcolor[18];
    document.querySelector('#b32').style.backgroundColor = arrcolor[19];
    document.querySelector('#b33').style.backgroundColor = arrcolor[20];
    document.querySelector('#b34').style.backgroundColor = arrcolor[21];
    document.querySelector('#b35').style.backgroundColor = arrcolor[22];
    document.querySelector('#b36').style.backgroundColor = arrcolor[23];
    document.querySelector('#b41').style.backgroundColor = arrcolor[24];
    document.querySelector('#b42').style.backgroundColor = arrcolor[25];
    document.querySelector('#b43').style.backgroundColor = arrcolor[26];
    document.querySelector('#b44').style.backgroundColor = arrcolor[27];
    document.querySelector('#b45').style.backgroundColor = arrcolor[28];
    document.querySelector('#b46').style.backgroundColor = arrcolor[29];
    document.querySelector('#b51').style.backgroundColor = arrcolor[30];
    document.querySelector('#b52').style.backgroundColor = arrcolor[31];
    document.querySelector('#b53').style.backgroundColor = arrcolor[32];
    document.querySelector('#b54').style.backgroundColor = arrcolor[33];
    document.querySelector('#b55').style.backgroundColor = arrcolor[34];
    document.querySelector('#b56').style.backgroundColor = arrcolor[35];

   

        for(let i=0;num.length<(m**2); i++){
            let random = Math.floor(Math.random()*n);
            if(num.includes(random)===false){
                num.push(random);
                minicolor.push(arrcolor[random]);
            }
            console.log(minicolor);
        }

        document.getElementById('s01').style.backgroundColor=minicolor[0];
        document.getElementById('s02').style.backgroundColor=minicolor[1];
        document.getElementById('s03').style.backgroundColor=minicolor[2];
        document.getElementById('s04').style.backgroundColor=minicolor[3];
        document.getElementById('s11').style.backgroundColor=minicolor[4];
        document.getElementById('s12').style.backgroundColor=minicolor[5];
        document.getElementById('s13').style.backgroundColor=minicolor[6];
        document.getElementById('s14').style.backgroundColor=minicolor[7];
        document.getElementById('s21').style.backgroundColor=minicolor[8];
        document.getElementById('s22').style.backgroundColor=minicolor[9];
        document.getElementById('s23').style.backgroundColor=minicolor[10];
        document.getElementById('s24').style.backgroundColor=minicolor[11];
        document.getElementById('s31').style.backgroundColor=minicolor[12];
        document.getElementById('s32').style.backgroundColor=minicolor[13];
        document.getElementById('s33').style.backgroundColor=minicolor[14];
        document.getElementById('s34').style.backgroundColor=minicolor[15];
        
    
   }

}


function visible(){

    document.querySelector('#b01').style.visibility = "visible";
    document.querySelector('#b02').style.visibility = "visible";
    document.querySelector('#b03').style.visibility = "visible";
    document.querySelector('#b04').style.visibility = "visible";
    document.querySelector('#b05').style.visibility = "visible";
    document.querySelector('#b06').style.visibility = "visible";
    document.querySelector('#b11').style.visibility = "visible";
    document.querySelector('#b12').style.visibility = "visible";
    document.querySelector('#b13').style.visibility = "visible";
    document.querySelector('#b14').style.visibility = "visible";
    document.querySelector('#b15').style.visibility = "visible";
    document.querySelector('#b16').style.visibility = "visible";
    document.querySelector('#b21').style.visibility = "visible";
    document.querySelector('#b22').style.visibility = "visible";
    document.querySelector('#b23').style.visibility = "visible";
    document.querySelector('#b24').style.visibility = "visible";
    document.querySelector('#b25').style.visibility = "visible";
    document.querySelector('#b26').style.visibility = "visible";
    document.querySelector('#b31').style.visibility = "visible";
    document.querySelector('#b32').style.visibility = "visible";
    document.querySelector('#b33').style.visibility = "visible";
    document.querySelector('#b34').style.visibility = "visible";
    document.querySelector('#b35').style.visibility = "visible";
    document.querySelector('#b36').style.visibility = "visible";
    document.querySelector('#b41').style.visibility = "visible";
    document.querySelector('#b42').style.visibility = "visible";
    document.querySelector('#b43').style.visibility = "visible";
    document.querySelector('#b44').style.visibility = "visible";
    document.querySelector('#b45').style.visibility = "visible";
    document.querySelector('#b46').style.visibility = "visible";
    document.querySelector('#b51').style.visibility = "visible";
    document.querySelector('#b52').style.visibility = "visible";
    document.querySelector('#b53').style.visibility = "visible";
    document.querySelector('#b54').style.visibility = "visible";
    document.querySelector('#b55').style.visibility = "visible";
    document.querySelector('#b56').style.visibility = "visible";

    document.getElementById('s01').style.visibility = "visible";
        document.getElementById('s02').style.visibility = "visible";
        document.getElementById('s03').style.visibility = "visible";
        document.getElementById('s04').style.visibility = "visible";
        document.getElementById('s11').style.visibility = "visible";
        document.getElementById('s12').style.visibility = "visible";
        document.getElementById('s13').style.visibility = "visible";
        document.getElementById('s14').style.visibility = "visible";
        document.getElementById('s21').style.visibility = "visible";
        document.getElementById('s22').style.visibility = "visible";
        document.getElementById('s23').style.visibility = "visible";
        document.getElementById('s24').style.visibility = "visible";
        document.getElementById('s31').style.visibility = "visible";
        document.getElementById('s32').style.visibility = "visible";
        document.getElementById('s33').style.visibility = "visible";
        document.getElementById('s34').style.visibility = "visible";
}
//define variables for stopwatch()

let seconds=0;
let minutes=0;
let hours=0;

let sec = 0;
let min = 0;
let hr = 0;

let interval = null;

//function for stopwatch

function stopwatch(){
   
    seconds++;
    if(seconds/60 ===1){
        seconds=0;
        minutes++;

        if(minutes/60 ===60){
            minutes = 0;
            hours++;

        }
    }
    sec= seconds<10 ? '0'+seconds :seconds;
    min = minutes<10 ? '0'+minutes : minutes;
    hr = hours<10 ? '0'+hours : hours;
    document.getElementById('timer').innerText = `${hr}:${min}:${sec}`;

   
}


document.getElementById('body').addEventListener('onload', function(){
    n=25;
    m=3;
    visible();
    arrange();
});
var play = document.getElementById('playnow');
let thumbtag = document.getElementById('overlap');

//eventlistener for playnow
play.addEventListener("click", function(){

    if(normal.style.backgroundColor == "goldenrod"){
        thumbtag.style.width='153px';
        thumbtag.style.height = '153px';
        thumbtag.style.fontSize = '50px';
    
        }
        thumbtag.style.visibility = 'hidden';
        document.getElementById('mediastart').style.visibility='hidden';

        clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById('timer').innerText = "00:00:00"; clearInterval(interval);
   
    document.getElementById('playaudio').play();
    visible();
    arrange();
    play.style.visibility="hidden";
    document.getElementById('start').style.visibility='visible';
    document.getElementById('reset').style.visibility='visible';
    document.getElementById('mode').style.visibility='visible';
    document.getElementById('easy').style.visibility='hidden';
    document.getElementById('normal').style.visibility='hidden';
    document.getElementById('difficult').style.visibility='hidden';
    document.getElementById('score').style.visibility = 'hidden';

    if(mode.style.backgroundColor = "cyan"){
        mode.style.backgroundColor = "blue";
    }
    easy.style.visibility = "hidden";
    normal.style.visibility = "hidden";
    difficult.style.visibility = "hidden";

    

    if(play.textContent === 'play again'){

       
        document.getElementById('start').style.visibility='visible';
        document.getElementById('reset').style.visibility='visible';
    
    }

    document.getElementById('highscore').style.visibility ='hidden';



});

//eventlistener for start

document.getElementById('start').addEventListener('click',function(){

    document.getElementById('startaudio').play();
    
    
    interval = window.setInterval(stopwatch,1000);

    
    document.getElementById('start').style.visibility='hidden';
    document.getElementById('start').textContent = "START";
    if(mode.style.backgroundColor = "cyan"){
        mode.style.backgroundColor = "blue";
    }
    easy.style.visibility = "hidden";
    normal.style.visibility = "hidden";
    difficult.style.visibility = "hidden";

    document.getElementById('highscore').style.visibility ='hidden';

});

//eventlistener for reset

document.getElementById('reset').addEventListener("click", function(){

    document.getElementById('resetaudio').play();
    visible();
    arrange();
    
    
    arrangetext();

    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";

    noOfMoves=0;
    

    document.getElementById('start').style.visibility='visible';
    document.getElementById('mode').style.visibility='visible';
    document.getElementById('start').textContent = "start";
    if(mode.style.backgroundColor = "cyan"){
        mode.style.backgroundColor = "blue";
    }
    easy.style.visibility = "hidden";
    normal.style.visibility = "hidden";
    difficult.style.visibility = "hidden";

    document.getElementById('highscore').style.visibility ='hidden';

});
//mode
let mode=document.getElementById('mode');
let easy = document.getElementById('easy');
let normal = document.getElementById('normal');
let difficult = document.getElementById('difficult');

mode.addEventListener('click',function(){

    document.getElementById('clickaudio').play();
    if(document.getElementById('start').textContent==='start' ){
    mode.style.backgroundColor = "cyan";
    easy.style.visibility = "visible";
    normal.style.visibility = "visible";
    difficult.style.visibility = "visible";
    
    document.getElementById('highscore').style.visibility ='hidden';
   
    }
   
    
});

easy.addEventListener('click',function(){

    document.getElementById('clickaudio').play();
    m=2;
    n=16;
    visible();
    arrange();
    
    mode.style.backgroundColor = "blue";
    easy.style.backgroundColor = "goldenrod"; 
    normal.style.backgroundColor = "white"; 
    difficult.style.backgroundColor = "white";
    easy.style.visibility = "hidden";
    normal.style.visibility = "hidden";
    difficult.style.visibility = "hidden";
    if(easy.style.backgroundColor == "goldenrod"){
        thumbtag.style.width='90px';
        thumbtag.style.height = '90px';
        thumbtag.style.fontSize = (thumbtag.innerText=='start game')? '40px': '20px';
    
        }
    
   
});
normal.addEventListener('click',function(){
    document.getElementById('clickaudio').play();
    m=3;
    n=25;
    visible();
    arrange();
    mode.style.backgroundColor = "blue";
    normal.style.backgroundColor = "goldenrod";  
    easy.style.backgroundColor = "white"; 
    difficult.style.backgroundColor = "white";
    easy.style.visibility = "hidden";
    normal.style.visibility = "hidden";
    difficult.style.visibility = "hidden";
    if(normal.style.backgroundColor == "goldenrod"){
        thumbtag.style.width='153px';
        thumbtag.style.height = '153px';
        thumbtag.style.fontSize =(thumbtag.innerText === 'start game')? '50px' : '30px';
    }
        
    

   

});
difficult.addEventListener('click',function(){
    document.getElementById('clickaudio').play();
    m=4;
    n=36;
    visible();
    arrange();
    mode.style.backgroundColor = "blue";
    difficult.style.backgroundColor = "goldenrod";  
    easy.style.backgroundColor = "white"; 
    normal.style.backgroundColor = "white";   
    easy.style.visibility = "hidden";
    normal.style.visibility = "hidden";
    difficult.style.visibility = "hidden";

    if(difficult.style.backgroundColor == "goldenrod"){
        thumbtag.style.width='216px';
        thumbtag.style.height = '216px';
        thumbtag.style.fontSize = (thumbtag.innerText==='start game')?'70px': '40px';
    
        }

});





//rearrangind textcontent of tiles after reset

function arrangetext(){
    if(n==16 && m==2){
        document.getElementById('b01').textContent = '01';
        document.getElementById('b02').textContent = '02';
        document.getElementById('b03').textContent = '03';
        document.getElementById('b04').textContent = '04';
        document.getElementById('b11').textContent = '11';
        document.getElementById('b12').textContent = '12';
        document.getElementById('b13').textContent = '13';
        document.getElementById('b14').textContent = '14';
        document.getElementById('b21').textContent = '21';
        document.getElementById('b22').textContent = '22';
        document.getElementById('b23').textContent = '23';
        document.getElementById('b24').textContent = '24';
        document.getElementById('b31').textContent = '31';
        document.getElementById('b32').textContent = '32';
        document.getElementById('b33').textContent = '33';
        document.getElementById('b34').textContent = '34';


    }
    if(n==25 && m==3){
        document.getElementById('b01').textContent = '01';
    document.getElementById('b02').textContent = '02';
    document.getElementById('b03').textContent = '03';
    document.getElementById('b04').textContent = '04';
    document.getElementById('b05').textContent = '05';
    document.getElementById('b11').textContent = '11';
    document.getElementById('b12').textContent = '12';
    document.getElementById('b13').textContent = '13';
    document.getElementById('b14').textContent = '14';
    document.getElementById('b15').textContent = '15';
    document.getElementById('b21').textContent = '21';
    document.getElementById('b22').textContent = '22';
    document.getElementById('b23').textContent = '23';
    document.getElementById('b24').textContent = '24';
    document.getElementById('b25').textContent = '25';
    document.getElementById('b31').textContent = '31';
    document.getElementById('b32').textContent = '32';
    document.getElementById('b33').textContent = '33';
    document.getElementById('b34').textContent = '34';
    document.getElementById('b35').textContent = '35';
    document.getElementById('b41').textContent = '41';
    document.getElementById('b42').textContent = '42';
    document.getElementById('b43').textContent = '43';
    document.getElementById('b44').textContent = '44';
    document.getElementById('b45').textContent = '45';

    }
    if(n==36 && m==4){
    document.getElementById('b01').textContent = '01';
    document.getElementById('b02').textContent = '02';
    document.getElementById('b03').textContent = '03';
    document.getElementById('b04').textContent = '04';
    document.getElementById('b05').textContent = '05';
    document.getElementById('b06').textContent = '06';
    document.getElementById('b11').textContent = '11';
    document.getElementById('b12').textContent = '12';
    document.getElementById('b13').textContent = '13';
    document.getElementById('b14').textContent = '14';
    document.getElementById('b15').textContent = '15';
    document.getElementById('b16').textContent = '16';
    document.getElementById('b21').textContent = '21';
    document.getElementById('b22').textContent = '22';
    document.getElementById('b23').textContent = '23';
    document.getElementById('b24').textContent = '24';
    document.getElementById('b25').textContent = '25';
    document.getElementById('b26').textContent = '26';
    document.getElementById('b31').textContent = '31';
    document.getElementById('b32').textContent = '32';
    document.getElementById('b33').textContent = '33';
    document.getElementById('b34').textContent = '34';
    document.getElementById('b35').textContent = '35';
    document.getElementById('b36').textContent = '36';
    document.getElementById('b41').textContent = '41';
    document.getElementById('b42').textContent = '42';
    document.getElementById('b43').textContent = '43';
    document.getElementById('b44').textContent = '44';
    document.getElementById('b45').textContent = '45';
    document.getElementById('b46').textContent = '46';
    document.getElementById('b51').textContent = '51';
    document.getElementById('b52').textContent = '52';
    document.getElementById('b53').textContent = '53';
    document.getElementById('b54').textContent = '54';
    document.getElementById('b55').textContent = '55';
    document.getElementById('b46').textContent = '56';
    }
}

//moving tiles

function moving(tile){

   if(document.getElementById('start').textContent === "START"){
    document.getElementById('clickaudio').play();
    if(document.getElementById(tile).textContent != '01'){
        switch(tile){

            case 'b01':
                if(document.getElementById('b02').textContent=='01'){
                    let temp_value = document.getElementById('b02').textContent;
                    document.getElementById('b02').textContent = document.getElementById('b01').textContent ;
                    document.getElementById('b01').textContent = temp_value;
                    

                    let tempcolor = document.getElementById('b02').style.backgroundColor;
                    document.getElementById('b02').style.backgroundColor = document.getElementById('b01').style.backgroundColor;
                    document.getElementById('b01').style.backgroundColor =  tempcolor;
                   
                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b11').textContent=='01'){
                    let temp_value = document.getElementById('b11').textContent;
                    document.getElementById('b11').textContent = document.getElementById('b01').textContent ;
                    document.getElementById('b01').textContent = temp_value;

                    let temp_color = document.getElementById('b11').style.backgroundColor;
                    document.getElementById('b11').style.backgroundColor = document.getElementById('b01').style.backgroundColor;
                    document.getElementById('b01').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b02':
                if(document.getElementById('b01').textContent=='01'){
                    let temp_value = document.getElementById('b01').textContent;
                    document.getElementById('b01').textContent = document.getElementById('b02').textContent ;
                    document.getElementById('b02').textContent = temp_value;

                    let temp_color = document.getElementById('b01').style.backgroundColor;
                    document.getElementById('b01').style.backgroundColor = document.getElementById('b02').style.backgroundColor;
                    document.getElementById('b02').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b12').textContent=='01'){
                    let temp_value = document.getElementById('b12').textContent;
                    document.getElementById('b12').textContent = document.getElementById('b02').textContent ;
                    document.getElementById('b02').textContent = temp_value;

                    let temp_color = document.getElementById('b12').style.backgroundColor;
                    document.getElementById('b12').style.backgroundColor = document.getElementById('b02').style.backgroundColor;
                    document.getElementById('b02').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b03').textContent=='01'){
                    let temp_value = document.getElementById('b03').textContent;
                    document.getElementById('b03').textContent = document.getElementById('b02').textContent ;
                    document.getElementById('b02').textContent = temp_value;

                    let temp_color = document.getElementById('b03').style.backgroundColor;
                    document.getElementById('b03').style.backgroundColor = document.getElementById('b02').style.backgroundColor;
                    document.getElementById('b02').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;
            
            case 'b03':
                if(document.getElementById('b02').textContent=='01'){
                    let temp_value = document.getElementById('b02').textContent;
                    document.getElementById('b02').textContent = document.getElementById('b03').textContent ;
                    document.getElementById('b03').textContent = temp_value;

                    let temp_color = document.getElementById('b02').style.backgroundColor;
                    document.getElementById('b02').style.backgroundColor = document.getElementById('b03').style.backgroundColor;
                    document.getElementById('b03').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b13').textContent=='01'){
                    let temp_value = document.getElementById('b13').textContent;
                    document.getElementById('b13').textContent = document.getElementById('b03').textContent ;
                    document.getElementById('b03').textContent = temp_value;

                    let temp_color = document.getElementById('b13').style.backgroundColor;
                    document.getElementById('b13').style.backgroundColor = document.getElementById('b03').style.backgroundColor;
                    document.getElementById('b03').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b04').textContent=='01'){
                    let temp_value = document.getElementById('b04').textContent;
                    document.getElementById('b04').textContent = document.getElementById('b03').textContent ;
                    document.getElementById('b03').textContent = temp_value;

                    let temp_color = document.getElementById('b04').style.backgroundColor;
                    document.getElementById('b04').style.backgroundColor = document.getElementById('b03').style.backgroundColor;
                    document.getElementById('b03').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b04':
                if(document.getElementById('b03').textContent=='01'){
                    let temp_value = document.getElementById('b03').textContent;
                    document.getElementById('b03').textContent = document.getElementById('b04').textContent ;
                    document.getElementById('b04').textContent = temp_value;

                    let temp_color = document.getElementById('b03').style.backgroundColor;
                    document.getElementById('b03').style.backgroundColor = document.getElementById('b04').style.backgroundColor;
                    document.getElementById('b04').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b14').textContent=='01'){
                    let temp_value = document.getElementById('b14').textContent;
                    document.getElementById('b14').textContent = document.getElementById('b04').textContent ;
                    document.getElementById('b04').textContent = temp_value;

                    let temp_color = document.getElementById('b14').style.backgroundColor;
                    document.getElementById('b14').style.backgroundColor = document.getElementById('b04').style.backgroundColor;
                    document.getElementById('b04').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b05').textContent=='01'){
                    let temp_value = document.getElementById('b05').textContent;
                    document.getElementById('b05').textContent = document.getElementById('b04').textContent ;
                    document.getElementById('b04').textContent = temp_value;

                    let temp_color = document.getElementById('b05').style.backgroundColor;
                    document.getElementById('b05').style.backgroundColor = document.getElementById('b04').style.backgroundColor;
                    document.getElementById('b04').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;
                
            case 'b05':
                if(document.getElementById('b04').textContent=='01'){
                    let temp_value = document.getElementById('b04').textContent;
                    document.getElementById('b04').textContent = document.getElementById('b05').textContent ;
                    document.getElementById('b05').textContent = temp_value;

                    let temp_color = document.getElementById('b04').style.backgroundColor;
                    document.getElementById('b04').style.backgroundColor = document.getElementById('b05').style.backgroundColor;
                    document.getElementById('b05').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b15').textContent=='01'){
                    let temp_value = document.getElementById('b15').textContent;
                    document.getElementById('b15').textContent = document.getElementById('b05').textContent ;
                    document.getElementById('b05').textContent = temp_value;

                    let temp_color = document.getElementById('b15').style.backgroundColor;
                    document.getElementById('b15').style.backgroundColor = document.getElementById('b05').style.backgroundColor;
                    document.getElementById('b05').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b06').textContent=='11'){
                    let temp_value = document.getElementById('b06').textContent;
                    document.getElementById('b06').textContent = document.getElementById('b05').textContent ;
                    document.getElementById('b05').textContent = temp_value;

                    let temp_color = document.getElementById('b06').style.backgroundColor;
                    document.getElementById('b06').style.backgroundColor = document.getElementById('b05').style.backgroundColor;
                    document.getElementById('b05').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;   
                
            case 'b06':
                if(document.getElementById('b05').textContent=='01'){
                    let temp_value = document.getElementById('b05').textContent;
                    document.getElementById('b05').textContent = document.getElementById('b06').textContent ;
                    document.getElementById('b06').textContent = temp_value;

                    let temp_color = document.getElementById('b05').style.backgroundColor;
                    document.getElementById('b05').style.backgroundColor = document.getElementById('b06').style.backgroundColor;
                    document.getElementById('b06').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b16').textContent=='01'){
                    let temp_value = document.getElementById('b16').textContent;
                    document.getElementById('b16').textContent = document.getElementById('b06').textContent ;
                    document.getElementById('b06').textContent = temp_value;

                    let temp_color = document.getElementById('b16').style.backgroundColor;
                    document.getElementById('b16').style.backgroundColor = document.getElementById('b06').style.backgroundColor;
                    document.getElementById('b06').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

                

            
            case 'b11':

                if(document.getElementById('b01').textContent=='01'){
                    let temp_value = document.getElementById('b01').textContent;
                    document.getElementById('b01').textContent = document.getElementById('b11').textContent ;
                    document.getElementById('b11').textContent = temp_value;
                    

                    let tempcolor = document.getElementById('b01').style.backgroundColor;
                    console.log(tempcolor);
                    //let tempcolor2 = document.getElementById('b11').style.backgroundColor;
                    //console.log(tempcolor2);
                    document.getElementById('b01').style.backgroundColor = document.getElementById('b11').style.backgroundColor;
                    document.getElementById('b11').style.backgroundColor =  tempcolor;
                    //console.log(document.getElementById('b11').style.backgroundColor);
                    //console.log(document.getElementById('b').style.backgroundColor);

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b12').textContent=='01'){
                    let temp_value = document.getElementById('b12').textContent;
                    document.getElementById('b12').textContent = document.getElementById('b11').textContent ;
                    document.getElementById('b11').textContent = temp_value;
                    

                    let tempcolor = document.getElementById('b12').style.backgroundColor;
                    console.log(tempcolor);
                    //let tempcolor2 = document.getElementById('b11').style.backgroundColor;
                    //console.log(tempcolor2);
                    document.getElementById('b12').style.backgroundColor = document.getElementById('b11').style.backgroundColor;
                    document.getElementById('b11').style.backgroundColor =  tempcolor;
                    //console.log(document.getElementById('b11').style.backgroundColor);
                    console.log(document.getElementById('b12').style.backgroundColor);

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b21').textContent=='01'){
                    let temp_value = document.getElementById('b21').textContent;
                    document.getElementById('b21').textContent = document.getElementById('b11').textContent ;
                    document.getElementById('b11').textContent = temp_value;

                    let temp_color = document.getElementById('b21').style.backgroundColor;
                    document.getElementById('b21').style.backgroundColor = document.getElementById('b11').style.backgroundColor;
                    document.getElementById('b11').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b12':

                if(document.getElementById('b02').textContent=='01'){
                    let temp_value = document.getElementById('b02').textContent;
                    document.getElementById('b02').textContent = document.getElementById('b12').textContent ;
                    document.getElementById('b12').textContent = temp_value;

                    let temp_color = document.getElementById('b02').style.backgroundColor;
                    document.getElementById('b02').style.backgroundColor = document.getElementById('b12').style.backgroundColor;
                    document.getElementById('b12').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b11').textContent=='01'){
                    let temp_value = document.getElementById('b11').textContent;
                    document.getElementById('b11').textContent = document.getElementById('b12').textContent ;
                    document.getElementById('b12').textContent = temp_value;

                    let temp_color = document.getElementById('b11').style.backgroundColor;
                    document.getElementById('b11').style.backgroundColor = document.getElementById('b12').style.backgroundColor;
                    document.getElementById('b12').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b22').textContent=='01'){
                    let temp_value = document.getElementById('b22').textContent;
                    document.getElementById('b22').textContent = document.getElementById('b12').textContent ;
                    document.getElementById('b12').textContent = temp_value;

                    let temp_color = document.getElementById('b22').style.backgroundColor;
                    document.getElementById('b22').style.backgroundColor = document.getElementById('b12').style.backgroundColor;
                    document.getElementById('b12').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b13').textContent=='01'){
                    let temp_value = document.getElementById('b13').textContent;
                    document.getElementById('b13').textContent = document.getElementById('b12').textContent ;
                    document.getElementById('b12').textContent = temp_value;

                    let temp_color = document.getElementById('b13').style.backgroundColor;
                    document.getElementById('b13').style.backgroundColor = document.getElementById('b12').style.backgroundColor;
                    document.getElementById('b12').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b13':

                if(document.getElementById('b03').textContent=='01'){
                    let temp_value = document.getElementById('b03').textContent;
                    document.getElementById('b03').textContent = document.getElementById('b13').textContent ;
                    document.getElementById('b13').textContent = temp_value;

                    let temp_color = document.getElementById('b03').style.backgroundColor;
                    document.getElementById('b03').style.backgroundColor = document.getElementById('b13').style.backgroundColor;
                    document.getElementById('b13').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }

                if(document.getElementById('b12').textContent=='01'){
                    let temp_value = document.getElementById('b12').textContent;
                    document.getElementById('b12').textContent = document.getElementById('b13').textContent ;
                    document.getElementById('b13').textContent = temp_value;

                    let temp_color = document.getElementById('b12').style.backgroundColor;
                    document.getElementById('b12').style.backgroundColor = document.getElementById('b13').style.backgroundColor;
                    document.getElementById('b13').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b23').textContent=='01'){
                    let temp_value = document.getElementById('b23').textContent;
                    document.getElementById('b23').textContent = document.getElementById('b13').textContent ;
                    document.getElementById('b13').textContent = temp_value;

                    let temp_color = document.getElementById('b23').style.backgroundColor;
                    document.getElementById('b23').style.backgroundColor = document.getElementById('b13').style.backgroundColor;
                    document.getElementById('b13').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b14').textContent=='01'){
                    let temp_value = document.getElementById('b14').textContent;
                    document.getElementById('b14').textContent = document.getElementById('b13').textContent ;
                    document.getElementById('b13').textContent = temp_value;

                    let temp_color = document.getElementById('b14').style.backgroundColor;
                    document.getElementById('b14').style.backgroundColor = document.getElementById('b13').style.backgroundColor;
                    document.getElementById('b13').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b14':

                if(document.getElementById('b04').textContent=='01'){
                    let temp_value = document.getElementById('b04').textContent;
                    document.getElementById('b04').textContent = document.getElementById('b14').textContent ;
                    document.getElementById('b14').textContent = temp_value;

                    let temp_color = document.getElementById('b04').style.backgroundColor;
                    document.getElementById('b04').style.backgroundColor = document.getElementById('b14').style.backgroundColor;
                    document.getElementById('b14').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }

                if(document.getElementById('b13').textContent=='01'){
                    let temp_value = document.getElementById('b13').textContent;
                    document.getElementById('b13').textContent = document.getElementById('b14').textContent ;
                    document.getElementById('b14').textContent = temp_value;

                    let temp_color = document.getElementById('b13').style.backgroundColor;
                    document.getElementById('b13').style.backgroundColor = document.getElementById('b14').style.backgroundColor;
                    document.getElementById('b14').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b24').textContent=='01'){
                    let temp_value = document.getElementById('b24').textContent;
                    document.getElementById('b24').textContent = document.getElementById('b14').textContent ;
                    document.getElementById('b14').textContent = temp_value;

                    let temp_color = document.getElementById('b24').style.backgroundColor;
                    document.getElementById('b24').style.backgroundColor = document.getElementById('b14').style.backgroundColor;
                    document.getElementById('b14').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b15').textContent=='01'){
                    let temp_value = document.getElementById('b15').textContent;
                    document.getElementById('b15').textContent = document.getElementById('b14').textContent ;
                    document.getElementById('b14').textContent = temp_value;

                    let temp_color = document.getElementById('b15').style.backgroundColor;
                    document.getElementById('b15').style.backgroundColor = document.getElementById('b14').style.backgroundColor;
                    document.getElementById('b14').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;
        
            case 'b15':

                if(document.getElementById('b05').textContent=='01'){
                    let temp_value = document.getElementById('b05').textContent;
                    document.getElementById('b05').textContent = document.getElementById('b15').textContent ;
                    document.getElementById('b15').textContent = temp_value;

                    let temp_color = document.getElementById('b05').style.backgroundColor;
                    document.getElementById('b05').style.backgroundColor = document.getElementById('b15').style.backgroundColor;
                    document.getElementById('b15').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }

                if(document.getElementById('b14').textContent=='01'){
                    let temp_value = document.getElementById('b14').textContent;
                    document.getElementById('b14').textContent = document.getElementById('b15').textContent ;
                    document.getElementById('b15').textContent = temp_value;

                    let temp_color = document.getElementById('b14').style.backgroundColor;
                    document.getElementById('b14').style.backgroundColor = document.getElementById('b15').style.backgroundColor;
                    document.getElementById('b15').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b25').textContent=='01'){
                    let temp_value = document.getElementById('b25').textContent;
                    document.getElementById('b25').textContent = document.getElementById('b15').textContent ;
                    document.getElementById('b15').textContent = temp_value;

                    let temp_color = document.getElementById('b25').style.backgroundColor;
                    document.getElementById('b25').style.backgroundColor = document.getElementById('b15').style.backgroundColor;
                    document.getElementById('b15').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b16').textContent=='01'){
                    let temp_value = document.getElementById('b16').textContent;
                    document.getElementById('b16').textContent = document.getElementById('b15').textContent ;
                    document.getElementById('b15').textContent = temp_value;

                    let temp_color = document.getElementById('b16').style.backgroundColor;
                    document.getElementById('b16').style.backgroundColor = document.getElementById('b15').style.backgroundColor;
                    document.getElementById('b15').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
               
                break;

            case 'b16':
                
                if(document.getElementById('b06').textContent=='01'){
                    let temp_value = document.getElementById('b06').textContent;
                    document.getElementById('b06').textContent = document.getElementById('b16').textContent ;
                    document.getElementById('b16').textContent = temp_value;

                    let temp_color = document.getElementById('b06').style.backgroundColor;
                    document.getElementById('b06').style.backgroundColor = document.getElementById('b16').style.backgroundColor;
                    document.getElementById('b16').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b15').textContent=='01'){
                    let temp_value = document.getElementById('b15').textContent;
                    document.getElementById('b15').textContent = document.getElementById('b16').textContent ;
                    document.getElementById('b16').textContent = temp_value;

                    let temp_color = document.getElementById('b15').style.backgroundColor;
                    document.getElementById('b15').style.backgroundColor = document.getElementById('b16').style.backgroundColor;
                    document.getElementById('b16').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b26').textContent=='01'){
                    let temp_value = document.getElementById('b26').textContent;
                    document.getElementById('b26').textContent = document.getElementById('b16').textContent ;
                    document.getElementById('b16').textContent = temp_value;

                    let temp_color = document.getElementById('b26').style.backgroundColor;
                    document.getElementById('b26').style.backgroundColor = document.getElementById('b16').style.backgroundColor;
                    document.getElementById('b16').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;
        
            case 'b21':

                if(document.getElementById('b11').textContent=='01'){
                    let temp_value = document.getElementById('b11').textContent;
                    document.getElementById('b11').textContent = document.getElementById('b21').textContent ;
                    document.getElementById('b21').textContent = temp_value;

                    let temp_color = document.getElementById('b11').style.backgroundColor;
                    document.getElementById('b11').style.backgroundColor = document.getElementById('b21').style.backgroundColor;
                    document.getElementById('b21').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b22').textContent=='01'){
                    let temp_value = document.getElementById('b22').textContent;
                    document.getElementById('b22').textContent = document.getElementById('b21').textContent ;
                    document.getElementById('b21').textContent = temp_value;

                    let temp_color = document.getElementById('b22').style.backgroundColor;
                    document.getElementById('b22').style.backgroundColor = document.getElementById('b21').style.backgroundColor;
                    document.getElementById('b21').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b31').textContent=='01'){
                    let temp_value = document.getElementById('b31').textContent;
                    document.getElementById('b31').textContent = document.getElementById('b21').textContent ;
                    document.getElementById('b21').textContent = temp_value;

                    let temp_color = document.getElementById('b31').style.backgroundColor;
                    document.getElementById('b31').style.backgroundColor = document.getElementById('b21').style.backgroundColor;
                    document.getElementById('b21').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                 break;

            case 'b22':

                if(document.getElementById('b12').textContent=='01'){
                    let temp_value = document.getElementById('b12').textContent;
                    document.getElementById('b12').textContent = document.getElementById('b22').textContent ;
                    document.getElementById('b22').textContent = temp_value;

                    let temp_color = document.getElementById('b12').style.backgroundColor;
                    document.getElementById('b12').style.backgroundColor = document.getElementById('b22').style.backgroundColor;
                    document.getElementById('b22').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }if(document.getElementById('b21').textContent=='01'){
                    let temp_value = document.getElementById('b21').textContent;
                    document.getElementById('b21').textContent = document.getElementById('b22').textContent ;
                    document.getElementById('b22').textContent = temp_value;

                    let temp_color = document.getElementById('b21').style.backgroundColor;
                    document.getElementById('b21').style.backgroundColor = document.getElementById('b22').style.backgroundColor;
                    document.getElementById('b22').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }if(document.getElementById('b32').textContent=='01'){
                    let temp_value = document.getElementById('b32').textContent;
                    document.getElementById('b32').textContent = document.getElementById('b22').textContent ;
                    document.getElementById('b22').textContent = temp_value;

                    let temp_color = document.getElementById('b32').style.backgroundColor;
                    document.getElementById('b32').style.backgroundColor = document.getElementById('b22').style.backgroundColor;
                    document.getElementById('b22').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }if(document.getElementById('b23').textContent=='01'){
                    let temp_value = document.getElementById('b23').textContent;
                    document.getElementById('b23').textContent = document.getElementById('b22').textContent ;
                    document.getElementById('b22').textContent = temp_value;

                    let temp_color = document.getElementById('b23').style.backgroundColor;
                    document.getElementById('b23').style.backgroundColor = document.getElementById('b22').style.backgroundColor;
                    document.getElementById('b22').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b23':

                if(document.getElementById('b13').textContent=='01'){
                    let temp_value = document.getElementById('b13').textContent;
                    document.getElementById('b13').textContent = document.getElementById('b23').textContent ;
                    document.getElementById('b23').textContent = temp_value;

                    let temp_color = document.getElementById('b13').style.backgroundColor;
                    document.getElementById('b13').style.backgroundColor = document.getElementById('b23').style.backgroundColor;
                    document.getElementById('b23').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b22').textContent=='01'){
                    let temp_value = document.getElementById('b22').textContent;
                    document.getElementById('b22').textContent = document.getElementById('b23').textContent ;
                    document.getElementById('b23').textContent = temp_value;

                    let temp_color = document.getElementById('b22').style.backgroundColor;
                    document.getElementById('b22').style.backgroundColor = document.getElementById('b23').style.backgroundColor;
                    document.getElementById('b23').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b33').textContent=='01'){
                    let temp_value = document.getElementById('b33').textContent;
                    document.getElementById('b33').textContent = document.getElementById('b23').textContent ;
                    document.getElementById('b23').textContent = temp_value;

                    let temp_color = document.getElementById('b33').style.backgroundColor;
                    document.getElementById('b33').style.backgroundColor = document.getElementById('b23').style.backgroundColor;
                    document.getElementById('b23').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b24').textContent=='01'){
                    let temp_value = document.getElementById('b24').textContent;
                    document.getElementById('b24').textContent = document.getElementById('b23').textContent ;
                    document.getElementById('b23').textContent = temp_value;

                    let temp_color = document.getElementById('b24').style.backgroundColor;
                    document.getElementById('b24').style.backgroundColor = document.getElementById('b23').style.backgroundColor;
                    document.getElementById('b23').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b24':

                if(document.getElementById('b14').textContent=='01'){
                    let temp_value = document.getElementById('b14').textContent;
                    document.getElementById('b14').textContent = document.getElementById('b24').textContent ;
                    document.getElementById('b24').textContent = temp_value;

                    let temp_color = document.getElementById('b14').style.backgroundColor;
                    document.getElementById('b14').style.backgroundColor = document.getElementById('b24').style.backgroundColor;
                    document.getElementById('b24').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b23').textContent=='01'){
                    let temp_value = document.getElementById('b23').textContent;
                    document.getElementById('b23').textContent = document.getElementById('b24').textContent ;
                    document.getElementById('b24').textContent = temp_value;

                    let temp_color = document.getElementById('b23').style.backgroundColor;
                    document.getElementById('b23').style.backgroundColor = document.getElementById('b24').style.backgroundColor;
                    document.getElementById('b24').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b34').textContent=='01'){
                    let temp_value = document.getElementById('b34').textContent;
                    document.getElementById('b34').textContent = document.getElementById('b24').textContent ;
                    document.getElementById('b24').textContent = temp_value;

                    let temp_color = document.getElementById('b34').style.backgroundColor;
                    document.getElementById('b34').style.backgroundColor = document.getElementById('b24').style.backgroundColor;
                    document.getElementById('b24').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b25').textContent=='01'){
                    let temp_value = document.getElementById('b25').textContent;
                    document.getElementById('b25').textContent = document.getElementById('b24').textContent ;
                    document.getElementById('b24').textContent = temp_value;

                    let temp_color = document.getElementById('b25').style.backgroundColor;
                    document.getElementById('b25').style.backgroundColor = document.getElementById('b24').style.backgroundColor;
                    document.getElementById('b24').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b25':

                if(document.getElementById('b15').textContent=='01'){
                    let temp_value = document.getElementById('b15').textContent;
                    document.getElementById('b15').textContent = document.getElementById('b25').textContent ;
                    document.getElementById('b25').textContent = temp_value;

                    let temp_color = document.getElementById('b15').style.backgroundColor;
                    document.getElementById('b15').style.backgroundColor = document.getElementById('b25').style.backgroundColor;
                    document.getElementById('b25').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b24').textContent=='01'){
                    let temp_value = document.getElementById('b24').textContent;
                    document.getElementById('b24').textContent = document.getElementById('b25').textContent ;
                    document.getElementById('b25').textContent = temp_value;

                    let temp_color = document.getElementById('b24').style.backgroundColor;
                    document.getElementById('b24').style.backgroundColor = document.getElementById('b25').style.backgroundColor;
                    document.getElementById('b25').style.backgroundColor =  temp_color;
                    console.log(document.getElementById('b24').style.backgroundColor);
                    console.log(document.getElementById('b25').style.backgroundColor);

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b35').textContent=='01'){
                    let temp_value = document.getElementById('b35').textContent;
                    document.getElementById('b35').textContent = document.getElementById('b25').textContent ;
                    document.getElementById('b25').textContent = temp_value;

                    let temp_color = document.getElementById('b35').style.backgroundColor;
                    document.getElementById('b35').style.backgroundColor = document.getElementById('b25').style.backgroundColor;
                    document.getElementById('b25').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b26').textContent=='01'){
                    let temp_value = document.getElementById('b26').textContent;
                    document.getElementById('b26').textContent = document.getElementById('b25').textContent ;
                    document.getElementById('b25').textContent = temp_value;

                    let temp_color = document.getElementById('b26').style.backgroundColor;
                    document.getElementById('b26').style.backgroundColor = document.getElementById('b25').style.backgroundColor;
                    document.getElementById('b25').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b26':
                if(document.getElementById('b16').textContent=='01'){
                    let temp_value = document.getElementById('b16').textContent;
                    document.getElementById('b16').textContent = document.getElementById('b26').textContent ;
                    document.getElementById('b26').textContent = temp_value;

                    let temp_color = document.getElementById('b16').style.backgroundColor;
                    document.getElementById('b16').style.backgroundColor = document.getElementById('b26').style.backgroundColor;
                    document.getElementById('b26').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b25').textContent=='01'){
                    let temp_value = document.getElementById('b25').textContent;
                    document.getElementById('b25').textContent = document.getElementById('b26').textContent ;
                    document.getElementById('b26').textContent = temp_value;

                    let temp_color = document.getElementById('b25').style.backgroundColor;
                    document.getElementById('b25').style.backgroundColor = document.getElementById('b26').style.backgroundColor;
                    document.getElementById('b26').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b36').textContent=='01'){
                    let temp_value = document.getElementById('b36').textContent;
                    document.getElementById('b36').textContent = document.getElementById('b26').textContent ;
                    document.getElementById('b26').textContent = temp_value;

                    let temp_color = document.getElementById('b36').style.backgroundColor;
                    document.getElementById('b36').style.backgroundColor = document.getElementById('b26').style.backgroundColor;
                    document.getElementById('b26').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;
            


            case 'b31':

                if(document.getElementById('b21').textContent=='01'){
                    let temp_value = document.getElementById('b21').textContent;
                    document.getElementById('b21').textContent = document.getElementById('b31').textContent ;
                    document.getElementById('b31').textContent = temp_value;

                    let temp_color = document.getElementById('b21').style.backgroundColor;
                    document.getElementById('b21').style.backgroundColor = document.getElementById('b31').style.backgroundColor;
                    document.getElementById('b31').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b41').textContent=='01'){
                    let temp_value = document.getElementById('b41').textContent;
                    document.getElementById('b41').textContent = document.getElementById('b31').textContent ;
                    document.getElementById('b31').textContent = temp_value;

                    let temp_color = document.getElementById('b41').style.backgroundColor;
                    document.getElementById('b41').style.backgroundColor = document.getElementById('b31').style.backgroundColor;
                    document.getElementById('b31').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b32').textContent=='01'){
                    let temp_value = document.getElementById('b32').textContent;
                    document.getElementById('b32').textContent = document.getElementById('b31').textContent ;
                    document.getElementById('b31').textContent = temp_value;

                    let temp_color = document.getElementById('b32').style.backgroundColor;
                    document.getElementById('b32').style.backgroundColor = document.getElementById('b31').style.backgroundColor;
                    document.getElementById('b31').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b32':

                if(document.getElementById('b22').textContent=='01'){
                    let temp_value = document.getElementById('b22').textContent;
                    document.getElementById('b22').textContent = document.getElementById('b32').textContent ;
                    document.getElementById('b32').textContent = temp_value;

                    let temp_color = document.getElementById('b22').style.backgroundColor;
                    document.getElementById('b22').style.backgroundColor = document.getElementById('b32').style.backgroundColor;
                    document.getElementById('b32').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b31').textContent=='01'){
                    let temp_value = document.getElementById('b31').textContent;
                    document.getElementById('b31').textContent = document.getElementById('b32').textContent ;
                    document.getElementById('b32').textContent = temp_value;

                    let temp_color = document.getElementById('b31').style.backgroundColor;
                    document.getElementById('b31').style.backgroundColor = document.getElementById('b32').style.backgroundColor;
                    document.getElementById('b32').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b42').textContent=='01'){
                    let temp_value = document.getElementById('b42').textContent;
                    document.getElementById('b42').textContent = document.getElementById('b32').textContent ;
                    document.getElementById('b32').textContent = temp_value;

                    let temp_color = document.getElementById('b42').style.backgroundColor;
                    document.getElementById('b42').style.backgroundColor = document.getElementById('b32').style.backgroundColor;
                    document.getElementById('b32').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b33').textContent=='01'){
                    let temp_value = document.getElementById('b33').textContent;
                    document.getElementById('b33').textContent = document.getElementById('b32').textContent ;
                    document.getElementById('b32').textContent = temp_value;

                    let temp_color = document.getElementById('b33').style.backgroundColor;
                    document.getElementById('b33').style.backgroundColor = document.getElementById('b32').style.backgroundColor;
                    document.getElementById('b32').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b33':

                if(document.getElementById('b23').textContent=='01'){
                    let temp_value = document.getElementById('b23').textContent;
                    document.getElementById('b23').textContent = document.getElementById('b33').textContent ;
                    document.getElementById('b33').textContent = temp_value;

                    let temp_color = document.getElementById('b23').style.backgroundColor;
                    document.getElementById('b23').style.backgroundColor = document.getElementById('b33').style.backgroundColor;
                    document.getElementById('b33').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b32').textContent=='01'){
                    let temp_value = document.getElementById('b32').textContent;
                    document.getElementById('b32').textContent = document.getElementById('b33').textContent ;
                    document.getElementById('b33').textContent = temp_value;

                    let temp_color = document.getElementById('b32').style.backgroundColor;
                    document.getElementById('b32').style.backgroundColor = document.getElementById('b33').style.backgroundColor;
                    document.getElementById('b33').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b43').textContent=='01'){
                    let temp_value = document.getElementById('b43').textContent;
                    document.getElementById('b43').textContent = document.getElementById('b33').textContent ;
                    document.getElementById('b33').textContent = temp_value;

                    let temp_color = document.getElementById('b43').style.backgroundColor;
                    document.getElementById('b43').style.backgroundColor = document.getElementById('b33').style.backgroundColor;
                    document.getElementById('b33').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b34').textContent=='01'){
                    let temp_value = document.getElementById('b34').textContent;
                    document.getElementById('b34').textContent = document.getElementById('b33').textContent ;
                    document.getElementById('b33').textContent = temp_value;

                    let temp_color = document.getElementById('b34').style.backgroundColor;
                    document.getElementById('b34').style.backgroundColor = document.getElementById('b33').style.backgroundColor;
                    document.getElementById('b33').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }

                break;

            case 'b34':

                if(document.getElementById('b24').textContent=='01'){
                    let temp_value = document.getElementById('b24').textContent;
                    document.getElementById('b24').textContent = document.getElementById('b34').textContent ;
                    document.getElementById('b34').textContent = temp_value;

                    let temp_color = document.getElementById('b24').style.backgroundColor;
                    document.getElementById('b24').style.backgroundColor = document.getElementById('b34').style.backgroundColor;
                    document.getElementById('b34').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b33').textContent=='01'){
                    let temp_value = document.getElementById('b33').textContent;
                    document.getElementById('b33').textContent = document.getElementById('b34').textContent ;
                    document.getElementById('b34').textContent = temp_value;

                    let temp_color = document.getElementById('b33').style.backgroundColor;
                    document.getElementById('b33').style.backgroundColor = document.getElementById('b34').style.backgroundColor;
                    document.getElementById('b34').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b44').textContent=='01'){
                    let temp_value = document.getElementById('b44').textContent;
                    document.getElementById('b44').textContent = document.getElementById('b34').textContent ;
                    document.getElementById('b34').textContent = temp_value;

                    let temp_color = document.getElementById('b44').style.backgroundColor;
                    document.getElementById('b44').style.backgroundColor = document.getElementById('b34').style.backgroundColor;
                    document.getElementById('b34').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b35').textContent=='01'){
                    let temp_value = document.getElementById('b35').textContent;
                    document.getElementById('b35').textContent = document.getElementById('b34').textContent ;
                    document.getElementById('b34').textContent = temp_value;

                    let temp_color = document.getElementById('b35').style.backgroundColor;
                    document.getElementById('b35').style.backgroundColor = document.getElementById('b34').style.backgroundColor;
                    document.getElementById('b34').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }

                break;

            case 'b35':

                if(document.getElementById('b25').textContent=='01'){
                    let temp_value = document.getElementById('b25').textContent;
                    document.getElementById('b25').textContent = document.getElementById('b35').textContent ;
                    document.getElementById('b35').textContent = temp_value;

                    let temp_color = document.getElementById('b25').style.backgroundColor;
                    document.getElementById('b25').style.backgroundColor = document.getElementById('b35').style.backgroundColor;
                    document.getElementById('b35').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b34').textContent=='01'){
                    let temp_value = document.getElementById('b34').textContent;
                    document.getElementById('b34').textContent = document.getElementById('b35').textContent ;
                    document.getElementById('b35').textContent = temp_value;

                    let temp_color = document.getElementById('b34').style.backgroundColor;
                    document.getElementById('b34').style.backgroundColor = document.getElementById('b35').style.backgroundColor;
                    document.getElementById('b35').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b45').textContent=='01'){
                    let temp_value = document.getElementById('b45').textContent;
                    document.getElementById('b45').textContent = document.getElementById('b35').textContent ;
                    document.getElementById('b35').textContent = temp_value;

                    let temp_color = document.getElementById('b45').style.backgroundColor;
                    document.getElementById('b45').style.backgroundColor = document.getElementById('b35').style.backgroundColor;
                    document.getElementById('b35').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b36').textContent=='01'){
                    let temp_value = document.getElementById('b36').textContent;
                    document.getElementById('b36').textContent = document.getElementById('b35').textContent ;
                    document.getElementById('b35').textContent = temp_value;

                    let temp_color = document.getElementById('b36').style.backgroundColor;
                    document.getElementById('b36').style.backgroundColor = document.getElementById('b35').style.backgroundColor;
                    document.getElementById('b35').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b36':
                if(document.getElementById('b26').textContent=='01'){
                    let temp_value = document.getElementById('b26').textContent;
                    document.getElementById('b26').textContent = document.getElementById('b36').textContent ;
                    document.getElementById('b36').textContent = temp_value;

                    let temp_color = document.getElementById('b26').style.backgroundColor;
                    document.getElementById('b26').style.backgroundColor = document.getElementById('b36').style.backgroundColor;
                    document.getElementById('b36').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }    
                if(document.getElementById('b35').textContent=='01'){
                    let temp_value = document.getElementById('b35').textContent;
                    document.getElementById('b35').textContent = document.getElementById('b36').textContent ;
                    document.getElementById('b36').textContent = temp_value;

                    let temp_color = document.getElementById('b35').style.backgroundColor;
                    document.getElementById('b35').style.backgroundColor = document.getElementById('b36').style.backgroundColor;
                    document.getElementById('b36').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }   
                if(document.getElementById('b46').textContent=='01'){
                    let temp_value = document.getElementById('b46').textContent;
                    document.getElementById('b46').textContent = document.getElementById('b36').textContent ;
                    document.getElementById('b36').textContent = temp_value;

                    let temp_color = document.getElementById('b46').style.backgroundColor;
                    document.getElementById('b46').style.backgroundColor = document.getElementById('b36').style.backgroundColor;
                    document.getElementById('b36').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }  
                break;   

            case 'b41':

                if(document.getElementById('b31').textContent=='01'){
                    let temp_value = document.getElementById('b31').textContent;
                    document.getElementById('b31').textContent = document.getElementById('b41').textContent ;
                    document.getElementById('b41').textContent = temp_value;

                    let temp_color = document.getElementById('b31').style.backgroundColor;
                    document.getElementById('b31').style.backgroundColor = document.getElementById('b41').style.backgroundColor;
                    document.getElementById('b41').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b51').textContent=='01'){
                    let temp_value = document.getElementById('b51').textContent;
                    document.getElementById('b51').textContent = document.getElementById('b41').textContent ;
                    document.getElementById('b41').textContent = temp_value;

                    let temp_color = document.getElementById('b51').style.backgroundColor;
                    document.getElementById('b51').style.backgroundColor = document.getElementById('b41').style.backgroundColor;
                    document.getElementById('b41').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b42').textContent=='01'){
                    let temp_value = document.getElementById('b42').textContent;
                    document.getElementById('b42').textContent = document.getElementById('b41').textContent ;
                    document.getElementById('b41').textContent = temp_value;

                    let temp_color = document.getElementById('b42').style.backgroundColor;
                    document.getElementById('b42').style.backgroundColor = document.getElementById('b41').style.backgroundColor;
                    document.getElementById('b41').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b42':

                if(document.getElementById('b32').textContent=='01'){
                    let temp_value = document.getElementById('b32').textContent;
                    document.getElementById('b32').textContent = document.getElementById('b42').textContent ;
                    document.getElementById('b42').textContent = temp_value;

                    let temp_color = document.getElementById('b32').style.backgroundColor;
                    document.getElementById('b32').style.backgroundColor = document.getElementById('b42').style.backgroundColor;
                    document.getElementById('b42').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b41').textContent=='01'){
                    let temp_value = document.getElementById('b41').textContent;
                    document.getElementById('b41').textContent = document.getElementById('b42').textContent ;
                    document.getElementById('b42').textContent = temp_value;

                    let temp_color = document.getElementById('b41').style.backgroundColor;
                    document.getElementById('b41').style.backgroundColor = document.getElementById('b42').style.backgroundColor;
                    document.getElementById('b42').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b52').textContent=='01'){
                    let temp_value = document.getElementById('b52').textContent;
                    document.getElementById('b52').textContent = document.getElementById('b42').textContent ;
                    document.getElementById('b42').textContent = temp_value;

                    let temp_color = document.getElementById('b52').style.backgroundColor;
                    document.getElementById('b52').style.backgroundColor = document.getElementById('b42').style.backgroundColor;
                    document.getElementById('b42').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b43').textContent=='01'){
                    let temp_value = document.getElementById('b43').textContent;
                    document.getElementById('b43').textContent = document.getElementById('b42').textContent ;
                    document.getElementById('b42').textContent = temp_value;

                    let temp_color = document.getElementById('b43').style.backgroundColor;
                    document.getElementById('b43').style.backgroundColor = document.getElementById('b42').style.backgroundColor;
                    document.getElementById('b42').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                
                break;
                
            case 'b43':

                if(document.getElementById('b33').textContent=='01'){
                    let temp_value = document.getElementById('b33').textContent;
                    document.getElementById('b33').textContent = document.getElementById('b43').textContent ;
                    document.getElementById('b43').textContent = temp_value;

                    let temp_color = document.getElementById('b33').style.backgroundColor;
                    document.getElementById('b33').style.backgroundColor = document.getElementById('b43').style.backgroundColor;
                    document.getElementById('b43').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b42').textContent=='01'){
                    let temp_value = document.getElementById('b42').textContent;
                    document.getElementById('b42').textContent = document.getElementById('b43').textContent ;
                    document.getElementById('b43').textContent = temp_value;

                    let temp_color = document.getElementById('b42').style.backgroundColor;
                    document.getElementById('b42').style.backgroundColor = document.getElementById('b43').style.backgroundColor;
                    document.getElementById('b43').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b53').textContent=='01'){
                    let temp_value = document.getElementById('b53').textContent;
                    document.getElementById('b53').textContent = document.getElementById('b43').textContent ;
                    document.getElementById('b43').textContent = temp_value;

                    let temp_color = document.getElementById('b53').style.backgroundColor;
                    document.getElementById('b53').style.backgroundColor = document.getElementById('b43').style.backgroundColor;
                    document.getElementById('b43').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b44').textContent=='01'){
                    let temp_value = document.getElementById('b44').textContent;
                    document.getElementById('b44').textContent = document.getElementById('b43').textContent ;
                    document.getElementById('b43').textContent = temp_value;

                    let temp_color = document.getElementById('b44').style.backgroundColor;
                    document.getElementById('b44').style.backgroundColor = document.getElementById('b43').style.backgroundColor;
                    document.getElementById('b43').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b44':

                if(document.getElementById('b34').textContent=='01'){
                    let temp_value = document.getElementById('b34').textContent;
                    document.getElementById('b34').textContent = document.getElementById('b44').textContent ;
                    document.getElementById('b44').textContent = temp_value;

                    let temp_color = document.getElementById('b34').style.backgroundColor;
                    document.getElementById('b34').style.backgroundColor = document.getElementById('b44').style.backgroundColor;
                    document.getElementById('b44').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b43').textContent=='01'){
                    let temp_value = document.getElementById('b43').textContent;
                    document.getElementById('b43').textContent = document.getElementById('b44').textContent ;
                    document.getElementById('b44').textContent = temp_value;

                    let temp_color = document.getElementById('b43').style.backgroundColor;
                    document.getElementById('b43').style.backgroundColor = document.getElementById('b44').style.backgroundColor;
                    document.getElementById('b44').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b54').textContent=='01'){
                    let temp_value = document.getElementById('b54').textContent;
                    document.getElementById('b54').textContent = document.getElementById('b44').textContent ;
                    document.getElementById('b44').textContent = temp_value;

                    let temp_color = document.getElementById('b54').style.backgroundColor;
                    document.getElementById('b54').style.backgroundColor = document.getElementById('b44').style.backgroundColor;
                    document.getElementById('b44').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b45').textContent=='01'){
                    let temp_value = document.getElementById('b45').textContent;
                    document.getElementById('b45').textContent = document.getElementById('b44').textContent ;
                    document.getElementById('b44').textContent = temp_value;

                    let temp_color = document.getElementById('b45').style.backgroundColor;
                    document.getElementById('b45').style.backgroundColor = document.getElementById('b44').style.backgroundColor;
                    document.getElementById('b44').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b45':

                if(document.getElementById('b35').textContent=='01'){
                    let temp_value = document.getElementById('b35').textContent;
                    document.getElementById('b35').textContent = document.getElementById('b45').textContent ;
                    document.getElementById('b45').textContent = temp_value;

                    let temp_color = document.getElementById('b35').style.backgroundColor;
                    document.getElementById('b35').style.backgroundColor = document.getElementById('b45').style.backgroundColor;
                    document.getElementById('b45').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b44').textContent=='01'){
                    let temp_value = document.getElementById('b44').textContent;
                    document.getElementById('b44').textContent = document.getElementById('b45').textContent ;
                    document.getElementById('b45').textContent = temp_value;

                    let temp_color = document.getElementById('b44').style.backgroundColor;
                    document.getElementById('b44').style.backgroundColor = document.getElementById('b45').style.backgroundColor;
                    document.getElementById('b45').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b55').textContent=='01'){
                    let temp_value = document.getElementById('b55').textContent;
                    document.getElementById('b55').textContent = document.getElementById('b45').textContent ;
                    document.getElementById('b45').textContent = temp_value;

                    let temp_color = document.getElementById('b55').style.backgroundColor;
                    document.getElementById('b55').style.backgroundColor = document.getElementById('b45').style.backgroundColor;
                    document.getElementById('b45').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b46').textContent=='01'){
                    let temp_value = document.getElementById('b46').textContent;
                    document.getElementById('b46').textContent = document.getElementById('b45').textContent ;
                    document.getElementById('b45').textContent = temp_value;

                    let temp_color = document.getElementById('b46').style.backgroundColor;
                    document.getElementById('b46').style.backgroundColor = document.getElementById('b45').style.backgroundColor;
                    document.getElementById('b45').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b46':
                if(document.getElementById('b36').textContent=='01'){
                    let temp_value = document.getElementById('b36').textContent;
                    document.getElementById('b36').textContent = document.getElementById('b46').textContent ;
                    document.getElementById('b46').textContent = temp_value;

                    let temp_color = document.getElementById('b36').style.backgroundColor;
                    document.getElementById('b36').style.backgroundColor = document.getElementById('b46').style.backgroundColor;
                    document.getElementById('b46').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b45').textContent=='01'){
                    let temp_value = document.getElementById('b45').textContent;
                    document.getElementById('b45').textContent = document.getElementById('b46').textContent ;
                    document.getElementById('b46').textContent = temp_value;

                    let temp_color = document.getElementById('b45').style.backgroundColor;
                    document.getElementById('b45').style.backgroundColor = document.getElementById('b46').style.backgroundColor;
                    document.getElementById('b46').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b56').textContent=='01'){
                    let temp_value = document.getElementById('b56').textContent;
                    document.getElementById('b56').textContent = document.getElementById('b46').textContent ;
                    document.getElementById('b46').textContent = temp_value;

                    let temp_color = document.getElementById('b56').style.backgroundColor;
                    document.getElementById('b56').style.backgroundColor = document.getElementById('b46').style.backgroundColor;
                    document.getElementById('b46').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;


            case 'b51':

                if(document.getElementById('b41').textContent=='01'){
                    let temp_value = document.getElementById('b41').textContent;
                    document.getElementById('b41').textContent = document.getElementById('b51').textContent ;
                    document.getElementById('b51').textContent = temp_value;

                    let temp_color = document.getElementById('b41').style.backgroundColor;
                    document.getElementById('b41').style.backgroundColor = document.getElementById('b51').style.backgroundColor;
                    document.getElementById('b51').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b52').textContent=='01'){
                    let temp_value = document.getElementById('b52').textContent;
                    document.getElementById('b52').textContent = document.getElementById('b51').textContent ;
                    document.getElementById('b51').textContent = temp_value;

                    let temp_color = document.getElementById('b52').style.backgroundColor;
                    document.getElementById('b52').style.backgroundColor = document.getElementById('b51').style.backgroundColor;
                    document.getElementById('b51').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b52':

                if(document.getElementById('b42').textContent=='01'){
                    let temp_value = document.getElementById('b42').textContent;
                    document.getElementById('b42').textContent = document.getElementById('b52').textContent ;
                    document.getElementById('b52').textContent = temp_value;

                    let temp_color = document.getElementById('b42').style.backgroundColor;
                    document.getElementById('b42').style.backgroundColor = document.getElementById('b52').style.backgroundColor;
                    document.getElementById('b52').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b51').textContent=='01'){
                    let temp_value = document.getElementById('b51').textContent;
                    document.getElementById('b51').textContent = document.getElementById('b52').textContent ;
                    document.getElementById('b52').textContent = temp_value;

                    let temp_color = document.getElementById('b51').style.backgroundColor;
                    document.getElementById('b51').style.backgroundColor = document.getElementById('b52').style.backgroundColor;
                    document.getElementById('b52').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b53').textContent=='01'){
                    let temp_value = document.getElementById('b53').textContent;
                    document.getElementById('b53').textContent = document.getElementById('b52').textContent ;
                    document.getElementById('b52').textContent = temp_value;

                    let temp_color = document.getElementById('b53').style.backgroundColor;
                    document.getElementById('b53').style.backgroundColor = document.getElementById('b52').style.backgroundColor;
                    document.getElementById('b52').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b53':

                if(document.getElementById('b43').textContent=='01'){
                    let temp_value = document.getElementById('b43').textContent;
                    document.getElementById('b43').textContent = document.getElementById('b53').textContent ;
                    document.getElementById('b53').textContent = temp_value;

                    let temp_color = document.getElementById('b43').style.backgroundColor;
                    document.getElementById('b43').style.backgroundColor = document.getElementById('b53').style.backgroundColor;
                    document.getElementById('b53').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b52').textContent=='01'){
                    let temp_value = document.getElementById('b52').textContent;
                    document.getElementById('b52').textContent = document.getElementById('b53').textContent ;
                    document.getElementById('b53').textContent = temp_value;

                    let temp_color = document.getElementById('b52').style.backgroundColor;
                    document.getElementById('b52').style.backgroundColor = document.getElementById('b53').style.backgroundColor;
                    document.getElementById('b53').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b54').textContent=='01'){
                    let temp_value = document.getElementById('b54').textContent;
                    document.getElementById('b54').textContent = document.getElementById('b53').textContent ;
                    document.getElementById('b53').textContent = temp_value;

                    let temp_color = document.getElementById('b54').style.backgroundColor;
                    document.getElementById('b54').style.backgroundColor = document.getElementById('b53').style.backgroundColor;
                    document.getElementById('b53').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b54':

                if(document.getElementById('b44').textContent=='01'){
                    let temp_value = document.getElementById('b44').textContent;
                    document.getElementById('b44').textContent = document.getElementById('b54').textContent ;
                    document.getElementById('b54').textContent = temp_value;

                    let temp_color = document.getElementById('b44').style.backgroundColor;
                    document.getElementById('b44').style.backgroundColor = document.getElementById('b54').style.backgroundColor;
                    document.getElementById('b54').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b53').textContent=='01'){
                    let temp_value = document.getElementById('b53').textContent;
                    document.getElementById('b53').textContent = document.getElementById('b54').textContent ;
                    document.getElementById('b54').textContent = temp_value;

                    let temp_color = document.getElementById('b53').style.backgroundColor;
                    document.getElementById('b53').style.backgroundColor = document.getElementById('b54').style.backgroundColor;
                    document.getElementById('b54').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b55').textContent=='01'){
                    let temp_value = document.getElementById('b55').textContent;
                    document.getElementById('b55').textContent = document.getElementById('b54').textContent ;
                    document.getElementById('b54').textContent = temp_value;

                    let temp_color = document.getElementById('b55').style.backgroundColor;
                    document.getElementById('b55').style.backgroundColor = document.getElementById('b54').style.backgroundColor;
                    document.getElementById('b54').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b55':

                if(document.getElementById('b45').textContent=='01'){
                    let temp_value = document.getElementById('b45').textContent;
                    document.getElementById('b45').textContent = document.getElementById('b55').textContent ;
                    document.getElementById('b55').textContent = temp_value;

                    let temp_color = document.getElementById('b45').style.backgroundColor;
                    document.getElementById('b45').style.backgroundColor = document.getElementById('b55').style.backgroundColor;
                    document.getElementById('b55').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b54').textContent=='01'){
                    let temp_value = document.getElementById('b54').textContent;
                    document.getElementById('b54').textContent = document.getElementById('b55').textContent ;
                    document.getElementById('b55').textContent = temp_value;

                    let temp_color = document.getElementById('b54').style.backgroundColor;
                    document.getElementById('b54').style.backgroundColor = document.getElementById('b55').style.backgroundColor;
                    document.getElementById('b55').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b56').textContent=='01'){
                    let temp_value = document.getElementById('b56').textContent;
                    document.getElementById('b56').textContent = document.getElementById('b55').textContent ;
                    document.getElementById('b55').textContent = temp_value;

                    let temp_color = document.getElementById('b56').style.backgroundColor;
                    document.getElementById('b56').style.backgroundColor = document.getElementById('b55').style.backgroundColor;
                    document.getElementById('b55').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                break;

            case 'b56':
                if(document.getElementById('b46').textContent=='01'){
                    let temp_value = document.getElementById('b46').textContent;
                    document.getElementById('b46').textContent = document.getElementById('b56').textContent ;
                    document.getElementById('b56').textContent = temp_value;

                    let temp_color = document.getElementById('b46').style.backgroundColor;
                    document.getElementById('b46').style.backgroundColor = document.getElementById('b56').style.backgroundColor;
                    document.getElementById('b56').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }
                if(document.getElementById('b55').textContent=='01'){
                    let temp_value = document.getElementById('b55').textContent;
                    document.getElementById('b55').textContent = document.getElementById('b56').textContent ;
                    document.getElementById('b56').textContent = temp_value;

                    let temp_color = document.getElementById('b55').style.backgroundColor;
                    document.getElementById('b55').style.backgroundColor = document.getElementById('b56').style.backgroundColor;
                    document.getElementById('b56').style.backgroundColor =  temp_color;

                    noOfMoves++;
                    document.getElementById("noOfMoves").textContent = noOfMoves;
                }   
                break; 

        
        
            }
    
        }
        check(noOfMoves);
    }
}

        


//check main with mini

function check(noOfMoves){
    if(n===16 && m===2){
        if(
        document.getElementById('b12').style.backgroundColor ==  document.getElementById('s01').style.backgroundColor  &&
        document.getElementById('b13').style.backgroundColor == document.getElementById('s02').style.backgroundColor &&
        document.getElementById('b22').style.backgroundColor == document.getElementById('s11').style.backgroundColor &&
        document.getElementById('b23').style.backgroundColor == document.getElementById('s12').style.backgroundColor  
        ){
            
            
            document.getElementById('winaudio').play();
            
            document.getElementById('start').style.visibility= 'hidden';
            document.getElementById('reset').style.visibility= 'hidden';
            document.getElementById('start').textContent = "start";

            document.getElementById('overlap').style.visibility = "visible";
            document.getElementById('mediastart').style.visibility = "visible";
            clearInterval(interval);
            let timetaken = document.getElementById('timer').textContent; 
            document.getElementById('overlap').textContent = `you won!`;
            document.getElementById('mediastart').textContent = `you won!`;
            var score= 10000 - noOfMoves;
            document.getElementById('score').innerText = `score : ${score}`;
            document.getElementById('score').style.visibility = 'visible';
            checkscore(score);

           
          

            console.log(localStorage.getItem('highscore'));
            play.style.visibility="visible";
            play.textContent = 'play again';

        }

    }

    if(n===25 && m===3){
        if(
        document.getElementById('b12').style.backgroundColor ==  document.getElementById('s01').style.backgroundColor  &&
        document.getElementById('b13').style.backgroundColor == document.getElementById('s02').style.backgroundColor &&
        document.getElementById('b14').style.backgroundColor == document.getElementById('s03').style.backgroundColor &&
        document.getElementById('b22').style.backgroundColor == document.getElementById('s11').style.backgroundColor &&
        document.getElementById('b23').style.backgroundColor == document.getElementById('s12').style.backgroundColor &&
        document.getElementById('b24').style.backgroundColor == document.getElementById('s13').style.backgroundColor &&
        document.getElementById('b32').style.backgroundColor == document.getElementById('s21').style.backgroundColor &&
        document.getElementById('b33').style.backgroundColor == document.getElementById('s22').style.backgroundColor &&
        document.getElementById('b34').style.backgroundColor == document.getElementById('s23').style.backgroundColor 
        ){
            
            
            document.getElementById('winaudio').play();
            
            document.getElementById('start').style.visibility= 'hidden';
            document.getElementById('reset').style.visibility= 'hidden';
            document.getElementById('start').textContent = "start";

            document.getElementById('overlap').style.visibility = "visible";
            document.getElementById('mediastart').style.visibility = "visible";
            clearInterval(interval);
            let timetaken = document.getElementById('timer').textContent; 
            document.getElementById('overlap').textContent = `you won!` ;
            document.getElementById('mediastart').textContent = `you won!`;
            var score= 10000 - noOfMoves;
            document.getElementById('score').innerText = `score : ${score}`;
            document.getElementById('score').style.visibility = 'visible';
            checkscore(score);

           

            play.style.visibility="visible";
            play.textContent = 'play again';

        }

    }
    if(n===36 && m===4){
        if(
            document.getElementById('b12').style.backgroundColor ==  document.getElementById('s01').style.backgroundColor  &&
            document.getElementById('b13').style.backgroundColor == document.getElementById('s02').style.backgroundColor &&
            document.getElementById('b14').style.backgroundColor == document.getElementById('s03').style.backgroundColor &&
            document.getElementById('b15').style.backgroundColor == document.getElementById('s04').style.backgroundColor &&
            document.getElementById('b22').style.backgroundColor ==  document.getElementById('s11').style.backgroundColor  &&
            document.getElementById('b23').style.backgroundColor == document.getElementById('s12').style.backgroundColor &&
            document.getElementById('b24').style.backgroundColor == document.getElementById('s13').style.backgroundColor &&
            document.getElementById('b25').style.backgroundColor == document.getElementById('s14').style.backgroundColor &&
            document.getElementById('b32').style.backgroundColor == document.getElementById('s21').style.backgroundColor &&
            document.getElementById('b33').style.backgroundColor == document.getElementById('s22').style.backgroundColor &&
            document.getElementById('b34').style.backgroundColor == document.getElementById('s23').style.backgroundColor &&
            document.getElementById('b35').style.backgroundColor == document.getElementById('s24').style.backgroundColor &&
            document.getElementById('b42').style.backgroundColor == document.getElementById('s31').style.backgroundColor &&
            document.getElementById('b43').style.backgroundColor == document.getElementById('s32').style.backgroundColor &&
            document.getElementById('b44').style.backgroundColor == document.getElementById('s33').style.backgroundColor &&
            document.getElementById('b45').style.backgroundColor == document.getElementById('s34').style.backgroundColor  
            ){
            
                
                document.getElementById('winaudio').play();
                
                document.getElementById('start').style.visibility= 'hidden';
                document.getElementById('reset').style.visibility= 'hidden';
                document.getElementById('start').textContent = "start";

                document.getElementById('overlap').style.visibility = "visible";
                document.getElementById('mediastart').style.visibility = "visible";
                clearInterval(interval);
                let timetaken = document.getElementById('timer').textContent; 
                document.getElementById('overlap').textContent = `you won!`;
                document.getElementById('mediastart').textContent = `you won!`;
                var score = 10000 - noOfMoves;
                document.getElementById('score').innerText = `score : ${score}`;
                document.getElementById('score').style.visibility = 'visible';
                checkscore(score);


                
               

                play.style.visibility="visible";
                play.textContent = 'play again';

            }

        
        }
    
    } 
    

    function highscore(){

        document.getElementById('clickaudio').play();
        

        var  othername  = document.getElementById('name').value;
        console.log(othername);
        if(othername=='' || othername==null || othername==' '){
            othername='unknown';
        }
        localStorage.setItem('name',othername);
        var b=localStorage.getItem('highscore');
        document.getElementById('highscore').innerText = `${othername} : ${b}`;
        document.getElementById('name').style.visibility = 'hidden';
        document.getElementById('ok').style.visibility = 'hidden';



    }
    function checkscore(score){
        if(document.getElementById('highscore').innerText==''){
            localStorage.setItem('highscore',0);
        }
        
        var a=localStorage.getItem('highscore');
        if(score > Number(a) || a==null) {
            localStorage.setItem('name','unknown');
            localStorage.setItem('highscore',score);
            document.getElementById('name').style.visibility = 'visible';
            document.getElementById('ok').style.visibility = 'visible';
            
             var c=localStorage.getItem('name');

           document.getElementById('highscore').innerText = `${c} : ${score}`;
        }
        
    }

    document.getElementById('highscoretab').addEventListener('click',function(){

    if(document.getElementById('highscore').style.visibility =='visible'){
        document.getElementById('highscore').style.visibility ='hidden';
    }
    else {
        document.getElementById('highscore').style.visibility ='visible';
    }
   
    
    });


    ///////////////////////////

