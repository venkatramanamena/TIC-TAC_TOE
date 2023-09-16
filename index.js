var symbol = "X";
function clickBox(id){
    if(document.getElementById(id).innerText=="")
    {
        document.getElementById(id).innerText=symbol;
        calcres(symbol);
        if(symbol=="X")
        {
            document.getElementById("players").innerText="Player2 Turn"
            symbol = "O";
        }
        else{
            document.getElementById("players").innerText="Player1 Turn"
            symbol="X";
        }
    }
}

function calcres(sign)
{
    console.log("called this function");
    if((document.getElementById("box1").innerText==sign && document.getElementById("box2").innerText==sign &&document.getElementById("box3").innerText==sign) ||
   (document.getElementById("box4").innerText==sign && document.getElementById("box5").innerText==sign &&document.getElementById("box6").innerText==sign )||
   (document.getElementById("box7").innerText==sign && document.getElementById("box8").innerText==sign &&document.getElementById("box8").innerText==sign)
    || (document.getElementById("box1").innerText==sign && document.getElementById("box4").innerText==sign &&document.getElementById("box9").innerText==sign)
    ||(document.getElementById("box3").innerText==sign && document.getElementById("box5").innerText==sign &&document.getElementById("box7").innerText==sign)
    ||(document.getElementById("box1").innerText==sign && document.getElementById("box4").innerText==sign &&document.getElementById("box7").innerText==sign)
    ||(document.getElementById("box2").innerText==sign && document.getElementById("box5").innerText==sign &&document.getElementById("box8").innerText==sign)
    ||(document.getElementById("box3").innerText==sign && document.getElementById("box6").innerText==sign &&document.getElementById("box9").innerText==sign))
    {
        
        if(sign=="X")
        {
            document.getElementById("res").innerHTML="Player1 is won";
            setTimeout(function(){
                location.reload();
            },5000)
        }
        else{
            document.getElementById("res").innerHTML="Player2 is won";
            setTimeout(function(){
                location.reload();
            },5000)
        }
        
    }
    var count=0;
    var a = false;
        for(var i = 1;i<=9;i=i+3)
        {
            for(var j = i;j< i+3;j++)
            {
                if(document.getElementById(`box${i}`).innerText== document.getElementById(`box${j}`).innerText)
                {
                    count++;
                }
            }
            if(count==3)
            {
                a=true;
            }
        }


}