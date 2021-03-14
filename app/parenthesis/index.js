/**
 * @param {string} s
 * @return {boolean}
 */
exports.isValidParenthesis = function(s) {
    if(s == "")
        return false;
    var stack = [], stackPointer = -1;
    var parenthesesMap = new Map([
        ['(', {action: 0, opposite: ')'}],
        [')', {action: 1, opposite: '('}],
        ['[', {action: 0, opposite: ']'}],
        [']', {action: 1, opposite: '['}],
        ['{', {action: 0, opposite: '}'}],
        ['}', {action: 1, opposite: '{'}]
    ]);
    for(var i in s){
        if(!parenthesesMap.has(s[i]))
            return false
        let parenthese = parenthesesMap.get(s[i]);
        if(parenthese.action == 0){
            stack.push(s[i]);
            stackPointer++
        }else if(parenthese.action == 1 && parenthese.opposite == stack[stackPointer]){
            stack.splice(stackPointer, 1);
            stackPointer--;
        } else {
            return false
        }
    }
    return stackPointer == -1;
};
