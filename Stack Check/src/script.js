function check(){
    var text=document.getElementById('msg');
    console.log(isBalanced(text.value))
    document.getElementById("result").innerHTML  = "<div>Result: "+isBalanced(text.value)+"</div>"
}

function peek(stack) {
    return stack[stack.length - 1]
}

function isBalanced(str) {
    let stack = []
    let OPENING = '([{'
    let CLOSEING = ')]}'

    for (let i = 0; i < str.length; i++) {
        // 當遍歷到的元素有在OPENING的字串內，代表是開口的括號，推入堆疊
        if (OPENING.includes(str[i])) {
        stack.push(str[i])
        } else if (CLOSEING.includes(str[i])) {
        // 如果是閉合的符號的話，判斷堆疊最上面元素在OPENING的位置是否和閉合符號在CLOSEING的位置一樣
        let temp = peek(stack);
        if (OPENING.indexOf(temp) === CLOSEING.indexOf(str[i])) {
            stack.pop();
        } else {
            return false;
        }
        }
    }
    // 當字串長度等於0的情況
    return stack.length === 0
}