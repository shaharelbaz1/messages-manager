async function isPalindrome(message){
    return await isPalindromeRecursive(message, 0, message.length - 1);
}

async function isPalindromeRecursive(message, i, j){
    if (i >= j) return true;
    else{
        if (message[i] == message[j]){
            i ++;
            j --;
            return await isPalindromeRecursive(message, i, j);
        }
        else return false;
    }
}

module.exports = isPalindrome;