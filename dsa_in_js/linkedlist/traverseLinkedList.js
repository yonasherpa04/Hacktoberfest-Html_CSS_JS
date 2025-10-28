// Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List structure
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

// Iterative traversal
function traverseIterative(head) {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

traverseIterative(list.head);
// Output:
// 1
// 2
// 3
