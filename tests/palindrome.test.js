const isPalindrome = require('../middleware/palindrome');
 
test('a word, verse, or sentence shuold return true if reads the same backward or forward. else return false', async () => {
    var palindrome1 = await isPalindrome('12321')
    expect(palindrome1).toBe(true);
    
    var palindrome2 = await isPalindrome('hello everyone enoyreve olleh')
    expect(palindrome2).toBe(true);
    
    var palindrome3 = await isPalindrome('123321')
    expect(palindrome3).toBe(true);
    
    var palindrome4 = await isPalindrome('hello everyone 4 enoyreve olleh')
    expect(palindrome4).toBe(true);

    var palindrome5 = await isPalindrome('11122234222111')
    expect(palindrome5).toBe(false);
    
    var palindrome6 = await isPalindrome('test  test')
    expect(palindrome6).toBe(false);
    
    var palindrome7 = await isPalindrome('111 222  111')
    expect(palindrome7).toBe(false);
    
    var palindrome8 = await isPalindrome('test qlik kilq  tset')
    expect(palindrome8).toBe(false);
  });