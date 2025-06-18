process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}

function Solution() {
  // Stack methods
  this.stack = [];

  this.pushCharacter = function (char) {
    this.stack.push(char);
  };

  this.popCharacter = function () {
    return this.stack.pop();
  };

  // Queue methods
  this.queue = [];

  this.enqueueCharacter = function (char) {
    this.queue.push(char);
  };

  this.dequeueCharacter = function () {
    return this.queue.shift();
  };
}

function main() {
  // read the string s
  var s = readLine();
  var len = s.length;

  // create the Solution class object p
  var obj = new Solution();

  //push/enqueue all the characters of string s to stack
  for (var i = 0; i < len; i++) {
    obj.pushCharacter(s.charAt(i));
    obj.enqueueCharacter(s.charAt(i));
  }

  var isPalindrome = true;
  /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

  for (var i = 0; i < len / 2; i++) {
    if (obj.popCharacter() != obj.dequeueCharacter()) {
      isPalindrome = false;
      break;
    }
  }
  //finally print whether string s is palindrome or not

  if (isPalindrome) console.log("The word, " + s + ", is a palindrome.");
  else console.log("The word, " + s + ", is not a palindrome.");
}
