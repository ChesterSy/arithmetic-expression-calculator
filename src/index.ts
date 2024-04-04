import { evaluatePostfix, infixToPostfix } from './helper';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let expression = '';

rl.question('Input arithmetic expression: ', (string) => {
  expression = string;

  try {
    const convertedToPostFix = infixToPostfix(expression);
    console.log(evaluatePostfix(convertedToPostFix));
  } catch {
    console.log('Invalid arithmetic expression');
  }

  rl.close();
});
