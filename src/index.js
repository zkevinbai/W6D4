let DomNodeCollection = require('./dom_node_collection')

window.$1 = function(input) {
    let holder;
    if (typeof(input) === "string"){
        holder = document.querySelectorAll(`${input}`)
        holder = Array.from(holder);
        return new DomNodeCollection(holder);
    } else if (input instanceof HTMLElement){
        return new DomNodeCollection([input]);
    }
};