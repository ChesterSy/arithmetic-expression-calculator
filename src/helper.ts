import { OPERATOR_PRECEDENCE } from './constants';

export const infixToPostfix = (expr: string): string => {
  let postFix = '';
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    if (!!Number(expr[i])) {
      //if operand
      postFix += expr[i];
    } else {
      switch (expr[i]) {
        case '(':
          stack.push(expr[i]);
          break;
        case ')':
          while (stack[stack.length - 1] !== '(') {
            postFix += stack.pop();
          }
          stack.pop();
          break;
        default:
          while (
            OPERATOR_PRECEDENCE[stack[stack.length - 1]] >=
            OPERATOR_PRECEDENCE[expr[i]]
          ) {
            postFix += stack.pop();
          }
          stack.push(expr[i]);
      }
    }
  }

  while (stack.length !== 0) {
    postFix += stack.pop();
  }

  return postFix;
};

export const evaluatePostfix = (postfix: string): number => {
  let stack = [];

  for (let i = 0; i < postfix.length; i++) {
    if (!!Number(postfix[i])) {
      //if operand
      stack.push(postfix[i]);
    } else {
      const opr2 = stack.pop();
      const opr1 = stack.pop();
      const answer = eval(`${opr1} ${postfix[i]} ${opr2}`);
      stack.push(answer);
    }
  }

  return stack.pop();
};
