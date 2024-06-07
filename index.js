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

  function displayResult(res){
    document.querySelector('.js-result').innerHTML = res;
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
    displayScore();
    document.querySelector('.js-moves').innerHTML = "";
    document.querySelector('.js-result').innerHTML = "";
    localStorage.removeItem('matches');
  }
  
  function winner(user){
    const computerMove = cmove();
    document.querySelector('.js-moves').innerHTML = `Your Move ${user}. Computer Move ${computerMove}`;
    switch(user){
      case 'rock':
        if(computerMove === 'rock'){
            matches.tie += 1;
            displayResult('Tie.');
          break;
        }else if(computerMove === 'paper'){
            matches.loses +=1;
            displayResult('You Lose.');
          break;
        }else{
            matches.wins +=1;
            displayResult('You Win.');
          break;
        }
      
      case 'paper':
        if(computerMove === 'rock'){
            matches.wins+=1;
            displayResult('You Win.');
          break;
        }else if(computerMove === 'paper'){
            matches.tie+=1;
            displayResult('Tie.');
          break;
        }else{
            matches.loses+=1;
            displayResult('You Lose.');
          break;
        }
        
      case 'scissors':
        if(computerMove === 'rock'){
            matches.loses+=1;
            displayResult('You Lose.');
          break;
        }else if(computerMove === 'paper'){
            matches.wins+=1;
            displayResult('You Win.');
          break;
        }else{
            matches.tie+=1;
            displayResult('Tie.');
          break;
        }
    }
    localStorage.setItem('matches',JSON.stringify(matches));
    displayScore();  
  }
  