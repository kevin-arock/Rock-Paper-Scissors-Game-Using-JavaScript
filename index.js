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

  function displayScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${matches.wins}, Loses: ${matches.loses}, Ties: ${matches.tie}`;
  }
  displayScore();
  
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
    displayScore();
    localStorage.removeItem('matches');
  }
  
  function winner(user){
    
    const computerMove = cmove();
    switch(user){
      case 'rock':
        if(computerMove === 'rock'){
            matches.tie += 1;
          
          break;
        }else if(computerMove === 'paper'){
            matches.loses +=1;
            
          break;
        }else{
            matches.wins +=1;
            
          break;
        }
      
      case 'paper':
        if(computerMove === 'rock'){
            matches.wins+=1;
            
          break;
        }else if(computerMove === 'paper'){
            matches.tie+=1;
            
          break;
        }else{
            matches.loses+=1;
            
          break;
        }
        
      case 'scissors':
        if(computerMove === 'rock'){
            matches.loses+=1;
            
          break;
        }else if(computerMove === 'paper'){
            matches.wins+=1;
            
          break;
        }else{
            matches.tie+=1;
            
          break;
        }
    }
    localStorage.setItem('matches',JSON.stringify(matches));
    displayScore();  
  }
  