'use strict';

// This is my theoretical implementation of a Bidirectional Search. It has not been tested.

//Node would look like this.

// function Node() {
//   this.data = {all the data};
//   this.friends = [array of other Nodes]
//   this.id = someId
// }

// Assumed to have access to some Q class Queue.

function findPath(n1, n2){ //eslint-disable-line
  let q1 = new Queue(); //eslint-disable-line
  let q2 = new Queue(); //eslint-disable-line
  q1.enqueue(n1);
  q2.enqueue(n2);
  let map1 = {};
  let map2 = {};
  map1[n1.id] = {path: null};
  map2[n2.id] = {path: null};
  let found1 = false;
  let found2 = false;
  while(q1.size() && q2.size() && !found1 && !found2){
    found1 = process(q1, map1, map2);
    found2 = process(q2, map2, map1);
  }
  if(found1 || found2){
    return displayPath(n1, map1, map2); //eslint-disable-line
  }
  return null;
}

function process(q, m1, m2){ //eslint-disable-line
  if(!q) return null;
  let node = q.dequeue();
  node.friends.forEach(friend => {
    if(!m1[friend.id]){
      q.enqueue(friend);
      m1[friend.id] = {path: node}
    }
    if(m2[friend.id]){
      return node;
    }
  })
  return null;
}

function displayPath(node, m1, m2){
  let s = new Stack(); //eslint-disable-line
  let result = [];
  let current = node;
  while(m1[current.id].path){
    s.push(m1[current.id].path);
    current = m1[current.id].path;
  }
  while(!s.isEmpty()){
    result.push(s.pop);
  }
  current = node;
  while(m2[current.id].path){
    result.push(m2[current.id].path);
    current = m2[current.id].path;
  }
  return result;
}
