document.write("Hi");
function computerchoice()
{
    let a=Math.random();
    if (a<0.33)
    {return rocks;}
    if (a<0.66)
    {return papers;}
    else
    {return scissors;}
}
function humanchoice()
{let b= prompt("rocks,papers or scissors");
    c=b.toLowerCase(); 
return c;
}

let human=humanchoice();
let computer=computerchoice();
let humanpoints=0;
let computerpoints=0;
let rounds=0;

while (rounds<11)
{

if (computer==rocks)
{switch(human)
 {case rocks:
 alert("It is a tie");
 humanpoints++;
 computerpoints++;
 break;
 case papers:
 alert("You win;")
 humnapoints++;
 humanpoints++;
 break;
 case scissors:
 alert ("You lose")
 computerpoints++;
 computerpoints++;
break;
}
else if(computer==papers)
{
    switch(human)
    {
        case rocks:
            alert("You lose");
            computerpoints++;
            computerpoints++;
            break;
            case papers:
                alert("It is a tie");
                computerpoints++;
                humnapoints++;
                break;
                case scissors:
                    alert("You won.");
                    humanpoints++;
                    humnapoints++;
                    break;
    }
}
else if (computer==scissors)
{
    switch(human){
        case rocks:
            alert("You won");
            humanpoints++;
            humnapoints++;
            break;
            case papers:
                alert("You lost");
                computerpoints++;
                computerpoints++;
                break;
                case scissors:
                    alert("It is a tie");
                    humanpoints++;
                    computerpoints++;
                    break;

    }
}
else
alert("Wrong input";)

}
rounds=humanpoints+computerpoints;
console.log("Computer:"computerpoints
"you:" humanpoints;)
}