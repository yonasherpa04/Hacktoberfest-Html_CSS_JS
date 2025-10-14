/**
 * Definition for a binary tree node.
 */
export class TreeNode {
	/**
	 * @param {number} value 
	 * @description : Initializes a binary tree node with a value, and left and right children set to null.
	 */
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

/**
 * 
 * @param {TreeNode} root : The root of the binary tree (and it's subtrees in recursive calls)
 * @returns {void} : Prints the value of each node in inorder sequence
 * @description : In inorder traversal, we visit the left subtree first, then the root node, and finally the right subtree.
 */
export function inorderTraversal(root) {
	if (!root) return;
	inorderTraversal(root.left);
	console.log(root.value);
	inorderTraversal(root.right);
}

// tiny self-checks in console
(function selfTest() {
	const root = new TreeNode(1);
	root.left = new TreeNode(5);
	root.right = new TreeNode(2);
	root.right.left = new TreeNode(3);
	root.left.left = new TreeNode(4);
	console.log("Inorder Traversal of the tree:");
	inorderTraversal(root);
})();