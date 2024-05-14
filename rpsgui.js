const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const outcomediv=document.querySelector(".outcome");
const score=document.querySelector(".scores");
function computerchoice()
{
    let a=Math.random();
    if (a<0.33)
    {return "rocks";}
    if (a<0.66)
    {return "papers";}
    else
    {return "scissors";}
}
function playround(human,computer)
{ 

if (computer=="rocks")
{
 if (human=="rocks"){
    const a=document.createElement("a");
  a.innerText="It is a tie.\n"
  outcomediv.append(a);
   
   
}
else if(human=="papers")
    {
        const a=document.createElement("a");
        a.innerText="You win\n";
        humanpoints++;
        outcomediv.append(a);
   

    }
    else{
        const a=document.createElement("a");
        a.innerText="You lose\n";
        computerpoints++;
        outcomediv.append(a);
   
    }
}






else if(computer=="papers")
{
    if (human=="rocks"){
        const a=document.createElement("a");
        a.innerText="You lose\n";
        computerpoints++;
        outcomediv.append(a);
    }
    else if(human=="papers")
        {
            const a=document.createElement("a");
            a.innerText="It is a tie.\n"
            outcomediv.append(a);
             }
        else{const a=document.createElement("a");
            a.innerText="You win\n";
        humanpoints++;
        outcomediv.append(a);
   
    
        }
}
else if (computer=="scissors")
{
    if (human=="rocks"){const a =document.createElement("a");
        a.innerText="You win\n";
        humanpoints++;
        outcomediv.append(a);   


            
    }
    else if(human=="papers")
        {const a=document.createElement("a");
            a.innerText="You lose\n";
        computerpoints++;
        outcomediv.append(a);            
            
        }
        else{const a=document.createElement('a');
            a.innerText="It is a tie.\n"
            outcomediv.append(a);
        }

           }

   
}
let computerchoices;
let humanchoices;
let humanpoints=0;
   let computerpoints=0;
const updatescore=(humanpoints,computerpoints)=>
    {score.innerText=`Your points=${humanpoints}                         
Computer points=${computerpoints};`}
        
   paper.addEventListener("click" ,()=>{humanchoices="papers";computerchoices=computerchoice();
        playround(humanchoices,computerchoices);
        updatescore(humanpoints,computerpoints);
   })
       
    rock.addEventListener('click' ,()=>{humanchoices="rocks";computerchoices=computerchoice();
        playround(humanchoices,computerchoices);
        updatescore(humanpoints,computerpoints);})
        
   scissors.addEventListener('click' ,()=>{humanchoices="scissors";computerchoices=computerchoice();
        playround(humanchoices,computerchoices);
        updatescore(humanpoints,computerpoints);})
        
       
    