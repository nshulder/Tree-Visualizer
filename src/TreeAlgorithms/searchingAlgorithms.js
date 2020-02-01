export function getDfsAnimations(tree) {
	const animations = [];
	dfsHelper(tree, animations);
	return animations;
}

function dfsHelper(tree, animations) {
	/*
		Not totally working yet....
	*/
	let i = 0;
    let leaf = 0;
    while (i < tree.length) {
        if (i < tree.length / 2) { // not leaf node, can be advanced
            i = 2 * i + 1; // try left child
        } else { // leaf node, jump
            let k = 1;
            while (true) {
                i = (i - 1) / 2; // jump to the parent
                const p = k * 2;
                if (leaf % p == k - 1) break; // correct number of jumps found
                k = p;
            }
            // after we jumped to the parent, go to the right child
            i = 2 * i + 2;
            leaf++; // next leaf, please
        }
        console.log(i);
    	animations.push(i);
    }
    return;
}