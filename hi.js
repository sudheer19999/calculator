 
function tokenize(s) {
    // --- Parse a calculation string into an array of numbers and operators
    const r = [];
    let token = '';
    for (const character of s) {
        if ('^*/+-'.indexOf(character) > -1) {
            if (token === '' && character === '-') {
                token = '-';
            } else {
                r.push(parseFloat(token), character);
                token = '';
            }
        } else {
            token += character;
        }
    }
    if (token !== '') {
        r.push(parseFloat(token));
    }
    return r;
}


function calculate(tokens) {
    // --- Perform a calculation expressed as an array of operators and numbers
    const operatorPrecedence = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}];
    let operator;
    for (const operators of operatorPrecedence) {
        const newTokens = [];
        for (const token of tokens) {
            if (token in operators) {
                operator = operators[token];
                console.log(operator)
            } else if (operator) {
                newTokens[newTokens.length - 1] = 
                    operator(newTokens[newTokens.length - 1], token);
                operator = null;
                console.log(newTokens)
            } else {
                newTokens.push(token);
                console.log(newTokens)
            }
        }
        tokens = newTokens;
        console.log(tokens)
    }
    if (tokens.length > 1) {
        console.log('Error: unable to resolve calculation');
        return tokens;
    } else {
        return tokens[0];
    }
}
const calculateButton = document.getElementById('calculate');
const userInput = document.getElementById('userInput');
const result = document.getElementById('result');
calculateButton.addEventListener('click', function() {
    result.innerHTML = "The answer is " + calculate(tokenize(userInput.value));
});