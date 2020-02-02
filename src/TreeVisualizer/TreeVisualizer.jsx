import React from 'react';
import './TreeVisualizer.css'
import {getDfsAnimations, getBfsAnimations} from '../TreeAlgorithms/searchingAlgorithms'


export default class TreeVisualizer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tree: [],
		};
	}

	componentDidMount() {
    	this.resetTree();
  	}

  	resetTree() {
    	const tree = [];
    	for (let i = 0; i < 7; i++) {
      		tree.push(randomIntFromInterval(1, 1000));
    	}	
    	this.setState({tree});
  	}

  	dfs() {
  		const animations = getDfsAnimations(this.state.tree);
  		for (let i = 0; i < animations.length; i++) {
  			const treeNodes = document.getElementsByClassName('tree-node');
  			const nodeIdx = animations[i];
  			console.log(nodeIdx);
  			const nodeStyle = treeNodes[nodeIdx].style;
  			setTimeout(() => {
  				nodeStyle.backgroundColor = '#66c2ff';
  			} , 2000);
  		}
  	}

  	bfs() {
  		const animations = getBfsAnimations(this.state.tree);
  		for (let i = 0; i < animations.length; i++) {
  			const treeNodes = document.getElementsByClassName('tree-node');
  			const nodeIdx = animations[i];
  			console.log(nodeIdx);
  			const nodeStyle = treeNodes[nodeIdx].style;
  			setTimeout(() => {
  				nodeStyle.backgroundColor = '#66c2ff';
  			} , 2000);
  		}
  	}

  	render() {
  	    const {tree} = this.state;

  		return (
  			<div className="array-container">
  			{tree.map((value, idx) => (
  				<div
  				className="tree-node"
  				key={idx}
  				>{value}</div>
  				))}
  			<button onClick={() => this.resetTree()}>Generate New Tree</button>
  			<button onClick={() => this.dfs()}>DFS</button>
  			<button onClick={() => this.bfs()}>BFS</button>

  			</div>	
  			);
  	}
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}