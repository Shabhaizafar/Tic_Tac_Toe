function clickOn(val){
    var txt = val;
    document.getElementById("demo").className = `${txt}`;
    // console.clear();
    var choice = Math.round(Math.random()*8)+1;
    if(choice===1 || choice===4 || choice===6)
    {
        document.getElementById("demo2").className = "rock";
    }
    else if(choice===2 || choice===9 || choice===7)
    {
        document.getElementById("demo2").className = "paper";
    }
    else if(choice===3 || choice==5 || choice==8)
    {
        document.getElementById("demo2").className = "scissors";
    }
    var v1  = document.getElementById('demo').className;
    var v2  = document.getElementById('demo2').className;
    var computer_score = document.getElementById('cs').innerHTML;
    var your_score = document.getElementById('ys').innerHTML;
    if(v1==='rock'  && v2==='paper')
    {
            computer_score++;
            document.getElementById('cs').innerHTML=computer_score;
            document.getElementById('footer').innerHTML = "You Lose";
            document.getElementById('footer').className = 'loose';
            document.body.style.backgroundColor = "red";
    }
    else if(v1==='paper'  && v2==='scissors')
    {
            computer_score++;
            document.getElementById('cs').innerHTML=computer_score;
            document.getElementById('footer').innerHTML = "You Lose";
            document.getElementById('footer').className = 'loose';
            document.body.style.backgroundColor = "red";
    }
    else if(v1==='scissors'  && v2==='rock')
    {
            computer_score++;
            document.getElementById('cs').innerHTML=computer_score;
            document.getElementById('footer').innerHTML = "You Lose";
            document.getElementById('footer').className = 'loose';
            document.body.style.backgroundColor = "red";
    }
    else if(v1==='rock'  && v2==='scissors')
    {
            your_score++;
            document.getElementById('ys').innerHTML=your_score;
            document.getElementById('footer').innerHTML = "You Win";
            document.getElementById('footer').className = 'win';
            document.body.style.backgroundColor = "lime";
    }
    else if(v1==='paper'  && v2==='rock')
    {
            your_score++;
            document.getElementById('ys').innerHTML=your_score;
            document.getElementById('footer').innerHTML = "You Win";
            document.getElementById('footer').className = 'win';
            document.body.style.backgroundColor = "lime";
    }
    else if(v1==='scissors'  && v2==='paper')
    {
            your_score++;
            document.getElementById('ys').innerHTML=your_score;
            document.getElementById('footer').innerHTML = "You Win";
            document.getElementById('footer').className = 'win';
            document.body.style.backgroundColor = "lime";
    }
    else{
        document.getElementById('footer').innerHTML = "Match is Draw";
        document.getElementById('footer').className = 'draw';
        document.body.style.backgroundColor = "coral";
    }
    
}
// console.log(document.getElementById('ys').innerHTML);
// console.log(document.getElementById('cs').innerHTML);

/* ----------- */


/*


r             s                u win
p             r               u win
s             p               u win

r             r                draw
p             p                 draw
s             s                 draw

 */
