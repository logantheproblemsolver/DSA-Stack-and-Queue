class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  peek() {
    if (this.top === null) {
      return console.log('The stack is empty.');
    }
    return console.log(this.top.data);
  }

  display() {
    if (this.top === null) {
      return console.log('The stack is empty.');
    }
    let node = this.top;
    while (node.next !== null) {
      console.log(node.data);
      node = node.next;
    }
    console.log(node.data);
  }

  remove(data) {
    if (this.top === null) {
      return console.log('The stack is empty.');
    }
    while (this.top.data !== data) {
      this.pop();
    }
    this.pop();
    this.display();
  }
}

function createStack() {
  starTrek = new Stack()

  starTrek.push('Kirk');
  startrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  starTrek.display();
  starTrek.remove('McCoy')

}

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();

  for (let i=0; i<s.length; i++) {
      stack.push(s.charAt(i));
  }

  for (let i=0; i<s.length/2; i++) {
      if (stack.pop() !== s.charAt(i)) {
          return false;
      }
  }

  return true;
}

console.log(isPalindrome("dad"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("1001"));



function parenthesesMatch1(s) {
  const stack = new Stack();

  for (let i=0; i<s.length; i++) {
      const char = s.charAt(i);
      if (char === '(') {
          stack.push(char);
      }
      else if (char === ')') {
          const candidate = peek(stack);
          if (!candidate) {
              return false;
          }
          stack.pop();
      }
  }

  if (peek(stack)) {
      return false;
  }
  return true;
}



function parenthesesMatch2(s) {
  const stack = new Stack(); 

  const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  const openBrackets = Object.keys(brackets);
  const closeBrackets = Object.values(brackets);

  for (let i=0; i<s.length; i++) {
      const char = s.charAt(i);
      if (openBrackets.includes(char)) {
          stack.push(char);
      }
      else if (closeBrackets.includes(char)) {
          const candidate = peek(stack);
          if (brackets[candidate] !== char) {
              return false;
          }
          stack.pop();
      }
  }

  if (peek(stack)) {
      return false;
  }
  return true;
}

function parenthesesMatch3(s) {
  const stack = new Stack();

  const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  const openBrackets = Object.keys(brackets);
  const closeBrackets = Object.values(brackets);

  const quotes = ['"', "'"];

  let inQuotes = false;

  for (let i=0; i<s.length; i++) {
      const char = s.charAt(i);

      if (quotes.includes(char)) {
          if (inQuotes) {
              const candidate = peek(stack);
              if (candidate === char) {
                  stack.pop();
                  inQuotes = false;
              }
          }
          else {
              stack.push(char);
              inQuotes = true;
          }
      }
      else if (openBrackets.includes(char) && !inQuotes) {
          stack.push(char);
      }
      else if (closeBrackets.includes(char) && !inQuotes) {
          const candidate = peek(stack);
          if (brackets[candidate] !== char) {
              return false;
          }
          stack.pop();
      }
  }

  if (peek(stack)) {
      return false;
  }
  return true;
}

console.log(parenthesesMatch1("(1 + 2) + 3"));
console.log(parenthesesMatch1("(1 + 2) + 3)"));
console.log(parenthesesMatch2(")1 + 2) + 3"));
console.log(parenthesesMatch2("(1 + 2 + (3)"));
console.log(parenthesesMatch3("([({})])"));
console.log(parenthesesMatch3("([({)}])"));
console.log(parenthesesMatch3("'{(\"'"));
console.log(parenthesesMatch3("[{'('}('')]"));
console.log(parenthesesMatch3("[{'(\"}('')]"));


function sortStack(originalStack){
  let newStack = new Stack();
  while(!isEmpty(originalStack)){
      let temp = originalStack.pop();
      while(!isEmpty(newStack) && (peek(newStack) > temp)){
          originalStack.push(newStack.pop());
      }
      newStack.push(temp);
  }
  while(!isEmpty(newStack)){
      originalStack.push(newStack.pop());
  }
}


class _Node {
  constructor(value) {
      this.value=value,
      this.next=null,
      this.prev=null;
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }

  enqueue(data) {
      const node = new _Node(data);


      if (this.first === null) {
          this.first = node;
      }

      if (this.last) {
          node.prev = this.last;
          this.last.next = node;
      }
      this.last = node;
  }
  dequeue() {
      if (this.first === null) {
          return;
      }

      const node = this.first;
      this.first = node.next;
      if (node === this.last) {
          this.last = null;
      }
      return node.value;
  }
}



function squareDance(queue) {
  const spareMen = new Queue();
  const spareWomen = new Queue();

  const pairs = new Queue();

  let personA, personB;
  while (personA = queue.dequeue()) {
      if (personA.gender === 'male') {
          if (personB = spareWomen.dequeue()) {
              pairs.enqueue([personA, personB]);
          }
          else {
              spareMen.enqueue(personA);
          }
      }

      else if (personA.gender === 'female') {
          if (personB = spareMen.dequeue()) {
              pairs.enqueue([personA, personB]);
          }
          else {
              spareWomen.enqueue(personA);
          }
      }
  }
  return pairs;
}

const queue = new Queue();
queue.enqueue({
  name: 'Gwendolyn Wilderman',
  gender: 'female'
});
queue.enqueue({
  name: 'Wilbur Brakus',
  gender: 'male'
});
queue.enqueue({
  name: 'Vallie Howell',
  gender: 'female'
});
queue.enqueue({
  name: 'Nova Doyle',
  gender: 'female'
});
queue.enqueue({
  name: 'Monica Turcotte',
  gender: 'female'
});
queue.enqueue({
  name: 'Corine Smith',
  gender: 'female'
});
queue.enqueue({
  name: 'Jamir Sporer',
  gender: 'male'
});

squareDance(queue).display();


function ophidianBank() {
  const queue = new Queue();

  for (var i=0; i<100; i++) {
      console.log('Person joined line');
      queue.enqueue({
          angriness: 0 
      });

      const person = queue.dequeue();
      if (Math.random() < 0.25) {
          console.log(`Person with angriness ${person.angriness} sent to the back`);
          person.angriness++;
          queue.enqueue(person);
      }
      else {
          console.log(`Person with angriness ${person.angriness} processed`);
      }
  }
}

ophidianBank();
  

class Queue {
  constructor() {
      this.oldStack = new Stack();
      this.newStack = new Stack();
  }
  eneque(item) {
      this.oldStack.push(item);
  }
 
  dequeue() {
      this._reverseElement();
      return this.newStack.pop();
  }
  peek() {
      this._reverseElement();
      return this.newStack.peek();
  };
  _reverseElement(){
      if(isEmpty(this.newStack)){
          while(!isEmpty(this.oldStack)){
              this.newStack.push(this.oldStack.pop());
          }
      }
  }
}