export default function wordle(correctWord, guess) {
    let correctLetters = correctWord.split('');
    let guessedLetters = guess.toLowerCase().split('');

    //console.log(correctLetters);
    //console.log(guessedLetters);

    let resultArr = [];
    let correct = [];
    let misplaced = [];
    
    for (let i=0; i<correctLetters.length; i++) {          
        if (correctLetters[i] === guessedLetters[i]) {
            resultArr.push({'letter' : guessedLetters[i], 'result': 'correct' }); 
            correct.push(guessedLetters[i]); 
        } else if (correctLetters.includes(guessedLetters[i])) {
                resultArr.push({'letter' : guessedLetters[i], 'result': 'misplaced' }) 
                misplaced.push(guessedLetters[i]);
        }
        else {
            resultArr.push({'letter' : guessedLetters[i], 'result': 'incorrect' })
        }
    }

    //console.log(correct)
    //console.log(misplaced)
    


    for (let j=0; j<correctLetters.length; j++) {  
       if (correctLetters.includes(guessedLetters[j]) && correct.includes(guessedLetters[j]) && resultArr[j].result === 'misplaced') {        
            resultArr.splice(j, 1, {'letter' : guessedLetters[j], 'result': 'incorrect' }); 
        } 
        
        /*else if (misplaced.includes(guessedLetters[j])){
            
            console.log(misplaced[j])
            misplaced.splice(j,1);
            console.log(misplaced)
            resultArr.splice(j, 1, {'letter' : guessedLetters[j], 'result': 'misplaced' });
        } */
            
        /*
        if (correctLetters[j] !== guessedLetters[j] && misplaced.includes(correctLetters[j]) && correct.includes(guessedLetters[j])) {        
            resultArr.splice(j, 1, {'letter' : guessedLetters[j], 'result': 'incorrect' });
        } else if (correctLetters[j] !== guessedLetters[j] && correct.includes(correctLetters[j])) {
            resultArr.splice(j, 1, {'letter' : guessedLetters[j], 'result': 'incorrect' });
        }
        
        if (resultArr.includes({letter: misplaced[j], result: 'misplaced'}) && correctLetters.includes(misplaced[j]))
        */
        
    }

    for (let n=0; n<correctLetters.length; n++) {
        /*console.log(correctLetters.map( item => {
            
            
             if(item === guessedLetters[n] ) {
              return item }
              else { return ''}
            
        }))*/
    }
      
    console.log(resultArr)

    return resultArr;

}




//wordle('cykla', 'hallå');
wordle('cykla', 'axlar');
// wordle('cakla', 'axlar');

