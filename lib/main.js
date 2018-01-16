import DOMNodeCollection from './dom_node_collection.js';

window.$l = arg => {
  switch(typeof(arg)){
    // The core function only accepts one argument, but that argument
    // can be a function, string or object. Regardless of whether it is
    // a string or object (HTMLElement), a DOMNodeCollection object is
    // returned, which gives the desired document elements the
    // convenient and familiar jQuery methods we all know and love.
    case "function":
      return registerDocReadyCallback(arg);
    case "string":
      return nodesFromDOM(arg);
    case "object":
      if(arg instanceof HTMLElement){
        return new DOMNodeCollection([arg]);
      }
  }
};

// When the core function receives a string as an argument it is
// expected to be a CSS selector that can be used to grab nodes from the
// DOM. The vanilla JavaScript querySelectorAll method uses a
// depth-first pre-order traversal of the document's nodes to return a
// list of elements within the document that match the specified group
// of selectors
const nodesFromDOM = selector => {
  const nodes = document.querySelectorAll(selector);
  const nodesArr = Array.from(nodes);
  return new DOMNodeCollection(nodesArr);
};
