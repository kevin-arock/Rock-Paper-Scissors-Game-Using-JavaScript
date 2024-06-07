const matches = {
    wins:0,
    loses:0,
    tie:0
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
  
  function winner(user){
    const computerMove = cmove();
    switch(user){
      case 'rock':
        if(computerMove === 'rock'){
          alert('Tie');
          matches.tie += 1;
          break;
        }else if(computerMove === 'paper'){
          alert('User Losses.');
          matches.loses +=1;
          break;
        }else{
          alert('User Wins');
          matches.wins +=1;
          break;
        }
      
      case 'paper':
        if(computerMove === 'rock'){
          alert('User Wins.');
          break;
        }else if(computerMove === 'paper'){
          alert('Tie.');
          break;
        }else{
          alert('User Losses');
          break;
        }
        
      case 'scissors':
        if(computerMove === 'rock'){
          alert('User Losses');
          break;
        }else if(computerMove === 'paper'){
          alert('User Wins.');
          break;
        }else{
          alert('User Tie');
          break;
        }
    }
  }
  