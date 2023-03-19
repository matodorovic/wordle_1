export default function wordle(word) {
    
    let correctWord = "cykla";
    const correctLetters = correctWord.split('');
    
    const guessedLetters = word.split('');
    console.log(correctLetters);
    console.log(guessedLetters);

    //let resultArray = [];
    let resultArray2 = [];
    
    /*guessedLetters.forEach( letter => {
        if (correctLetters.includes(letter)) {
            resultArray.push({'includes': letter})
        }
        else {
            resultArray.push({'incorrect': letter})
        }
    })*/

    //console.log(array)
    

    
    //console.log('-----------------');
    for (let i=0; i<correctLetters.length; i++) {
            if (correctLetters[i] === guessedLetters[i]) {
                resultArray2.push({'letter' : guessedLetters[i], 'result': 'correct' }); 
            } else if (correctLetters.includes(guessedLetters[i])
            ){    
                if (guessedLetters.filter( letter =>  letter === correctLetters[i]).length>1) {
                    resultArray2.push({'letter' : guessedLetters[i], 'result': 'incorrect' })
                } else {
                    resultArray2.push({'letter' : guessedLetters[i], 'result': 'misplaced' })
                }
                
                console.log(correctLetters.filter( letter =>  letter === correctLetters[i]))
                
            } else {
                resultArray2.push({'letter' : guessedLetters[i], 'result': 'incorrect' })
            }
        
    }

    
    console.log(resultArray2);
   console.log('-----------------');
    
   return resultArray2;

}

wordle('cyakl');
wordle('hallå');
wordle('hello');
wordle('axlar');