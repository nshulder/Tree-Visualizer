export function getDfsAnimations(tree) {
	const animations = [];
	dfsHelper(tree, animations, 0);
	return animations;
}

function dfsHelper(tree, animations, index) {
	if(index >= 0 && tree[index] != null) {
		dfsHelper(tree, animations, getLeftChild(tree, index));
		animations.push(index);
		dfsHelper(tree, animations, getRightChild(tree, index));
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


export function getBfsAnimations(tree) {
	const animations = [];
	for(let i = 0; i < tree.length; i++) {
		animations.push(i);
	}
	return animations;
}