class ListNode { // list node for all the problems
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Helper function to print the linked list values
function printList(head) {
    let current = head;
    const result = [];

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result);
}

// Question 1
// Merge the two sorted linked lists linked_list1 and linked_list2 into a single sorted list. 
// Create the merged list by splicing together the nodes of the first two lists. 
// Return the head of the resulting merged linked list.  

// The input will be linked_list1 = [1,2,4] and linked_list2 = [1,3,4], and the expected output is [1,1,2,3,4,4].
// Definition for singly-linked list.


// Merge two sorted linked lists
function mergeTwoLists(list1, list2) {
    // Base cases: if one of the lists is empty, return the other list
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    // Compare the values of the current nodes in both lists
    if (list1.val < list2.val) {
        // If the value in list1 is smaller, merge the rest of list1 with list2
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        // If the value in list2 is smaller or equal, merge the rest of list2 with list1
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}
//define the two lists to merge
const linked_list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const linked_list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(linked_list1, linked_list2);
console.log("Merged Linked List:");
printList(mergedList);

// Question 2
// Reverse the given singly linked list by manipulating its head and return the reversed list. 
// The input is head = [1,2,3,4,5] and the expected output is [5,4,3,2,1]. 
// Reverse a singly linked list using recursion

function reverseLinkedList(head) {
    // Base case: an empty list or a single node list is already reversed
    if (!head || !head.next) {
        return head;
    }

    // Recursively reverse the rest of the list
    const reversedRest = reverseLinkedList(head.next);

    // Adjust the next pointer of the current node
    head.next.next = head;  // Update the next pointer of the new head
    head.next = null;

    // Return the new head of the reversed list
    return reversedRest;
}
//define the list to reverse
const linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

const reversedList = reverseLinkedList(linkedList);
console.log("Reversed Linked List:");
printList(reversedList);
// Question 3
// How can we remove nodes with a specific value from a linked list, 
// and what should be returned as the new head of the modified list? 
// The given linked list has a head node [1,2,6,3,4,5,6] and the specified value is 6. T
// he expected output is a modified list with nodes [1,2,3,4,5]. 

// Remove nodes with a specific value from a linked list using recursion
function removeNodesWithValue(head, targetValue) {
    // Base case: an empty list
    if (!head) {
        return null;
    }

    // Recursively remove nodes with the target value from the rest of the list
    head.next = removeNodesWithValue(head.next, targetValue);

    // Check if the current node has the target value
    return head.val === targetValue ? head.next : head;
}
//define the list to remove the value
const linkedListVal = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
const targetValue = 6;

const modifiedList = removeNodesWithValue(linkedListVal, targetValue);
console.log("Modified Linked List:");
printList(modifiedList);

// Question 4
// Solve the problem without changing the values in the nodes.
//  Note that only the positions of the nodes can be changed, for example, 
//  if the input linked list is [1, 2, 3, 4], the output should be [2, 1, 4, 3].   

// Swap nodes in pairs without changing node values using recursion
function swapPairs(head) {
    // Base case: an empty list or a single node list is already swapped
    if (!head || !head.next) {
        return head;
    }

    // Save the next node to be processed after swapping
    const nextNode = head.next.next;

    // Swap the current pair of nodes
    const newHead = head.next;
    head.next.next = head;  // Update the next pointer of the new head
    head.next = swapPairs(nextNode);

    return newHead;
}

// define the list to swap the pairs
const linkedListToSwap = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

const swappedList = swapPairs(linkedListToSwap);
console.log("Swapped Linked List:");
printList(swappedList);