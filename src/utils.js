// children is an array of elements
// returns: a DOM element
// should we use flow?
export const makeElement = (type, props, children) => {
  const el = document.createElement(type);
  Object.keys(props).forEach((prop) => {
    debugger;
    if (prop in el) { // making sure it is a valid DOM attribute
      el[prop] = props[prop];
    }
  });
  children.forEach((child) => {
    // do we need type checking?
    if (typeof child === 'string' || typeof child === 'number') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  });
  return el;
};


export const dog = '10';