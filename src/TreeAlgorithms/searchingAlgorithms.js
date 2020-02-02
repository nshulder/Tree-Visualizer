export function getDfsAnimations(tree, goal) {
	const animations = [];
	dfsHelper(goal, tree, animations, 0);
	return animations;
}

function dfsHelper(goal, tree, animations, index) {
	if(index >= 0 && tree[index] != null) {
		dfsHelper(goal, tree, animations, getLeftChild(tree, index));
		animations.push(index);
		if(tree[index] === goal) 
			return;
		dfsHelper(goal, tree, animations, getRightChild(tree, index));
	}
}

function getLeftChild(tree, index) {
	if(tree[index]!=null && (2*index+1) < tree.length) {
        return (2*index)+1;
	}
    // left child doesn't exist
    return -1;
}

function getRightChild(tree, index) {
	if(tree[index]!=null && (2*(index+1)) < tree.length) {
        return (2*(index+1));
	}
    // right child doesn't exist
    return -1;
}


export function getBfsAnimations(tree, goal) {
	const animations = [];
	for(let i = 0; i < tree.length; i++) {
		animations.push(i);
		if(tree[i] === goal) 
			break;
	}
	return animations;
}