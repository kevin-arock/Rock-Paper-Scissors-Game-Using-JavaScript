let matches = {};

if (localStorage.getItem('matches')){
    matches = JSON.parse(localStorage.getItem('matches'))
    
}else{
    matches = {
        wins:0,
        loses:0,
        tie:0
    }
}


  
  function cmove(){
    const randomNum = Math.random();
    let computerMove = '';
    if(randomNum >= 0 && randomNum < 1/3){
      computerMove = 'rock';
    }else if(randomNum >= 1/3 && randomNum < 2/3){
      computerMove = 'paper';
    }else if(randomNum >= 2/3 && randomNum < 1){
      computerMove = 'scissors';
    }
    
    return computerMove;
  }

  function reset(){
    matches.wins = 0;
    matches.tie = 0;
    matches.loses = 0;
    localStorage.removeItem('matches');
  }
  
  function winner(user){
    const computerMove = cmove();
    switch(user){
      case 'rock':
        if(computerMove === 'rock'){
            matches.tie += 1;
          alert(`You Picked ${user}. Computer Picked ${computerMove}, so its a Tie
            Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
            `);
          
          break;
        }else if(computerMove === 'paper'){
            matches.loses +=1;
            alert(`You Picked ${user}. Computer Picked ${computerMove}, You Lost
                Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
                `);
          
          break;
        }else{
            matches.wins +=1;
            alert(`You Picked ${user}. Computer Picked ${computerMove}, You Won
                Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
                `);
          
          break;
        }
      
      case 'paper':
        if(computerMove === 'rock'){
            matches.wins+=1;
            alert(`You Picked ${user}. Computer Picked ${computerMove}, You Won
                Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
                `);
            
          break;
        }else if(computerMove === 'paper'){
            matches.tie+=1;
            alert(`You Picked ${user}. Computer Picked ${computerMove}, so its a Tie
                Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
                `);
            
          break;
        }else{
            matches.loses+=1;
            alert(`You Picked ${user}. Computer Picked ${computerMove}, You Lost
                Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
                `);
            
          break;
        }
        
      case 'scissors':
        if(computerMove === 'rock'){
            matches.loses+=1;
            alert(`You Picked ${user}. Computer Picked ${computerMove}, You Lost
                Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
                `);
            
          break;
        }else if(computerMove === 'paper'){
            matches.wins+=1;
            alert(`You Picked ${user}. Computer Picked ${computerMove}, You Won
                Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
                `);
            
          break;
        }else{
            matches.tie+=1;
            alert(`You Picked ${user}. Computer Picked ${computerMove}, so its a Tie
                Your Overall Score is--> Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}
                `);
            
          break;
        }
    }
    localStorage.setItem('matches',JSON.stringify(matches));
  }
  