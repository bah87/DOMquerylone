window.$l = arg => {
  switch(typeof(arg)){
    case "function":
      return registerDocReadyCallback(arg);
    case "string":
      return nodesFromDOM(arg);
    case "object":
      if(arg instanceof HTMLElement){
        return new DomNodeCollection([arg]);
      }
  }
};

// When the core function receives a string as an argument it is expected
// to be a CSS selector that can be used to grab nodes from the DOM
// The vanilla JavaScript querySelectorAll method uses a depth-first
// pre-order traversal of the document's nodes to return a list of elements
// within the document that match the specified group of selectors
const nodesFromDOM = selector => {
  const nodes = document.querySelectorAll(selector);
  const nodesArr = Array.from(nodes);
  return new DomNodeCollection(nodesArr);
};
