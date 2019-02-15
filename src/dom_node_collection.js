class DomNodeCollection {
    constructor (array) {
        this.array = array;
    }

    html (string){
        if (string){
            this.array.forEach(element => {
                element.innerHTML = string;
            });
        } else {
            return this.array[0].innerHTML
        }
    }

    empty (){
        this.array.forEach(element => {
            element.innerHTML = "";
        });
    }

    append (argument){
        if (argument instanceof DomNodeCollection){
            argument.forEach( node => {
                let outer = node.outerHTML;
                this.array.forEach( element => {
                    element.innerHTML += outer;
                })
            });
        } else if (argument instanceof HTMLElement){
            let outer = argument.outerHTML;
            this.array.forEach( element => {
                element.innerHTML += outer;
                // argument inner + element's outer
                console.log("HTML")
            });
        } else if (typeof(argument) === "string"){
            this.array.forEach( element => {
                element.innerHTML += argument;
                console.log("string")
            });
        } else {
            console.log("none")
        }
    }

    attr(key, value) {
        if (key === "id" && value){
            this.array.forEach(element => {
                element.attributes.id.value = value;
        })
        } else if (key === "class" && value){
            this.array.forEach(element => {
                element.attributes.class.value = value;
        }) 
        } else if(key && value){
            this.array.forEach(element => {
                element.attributes[`${key}`] = value;
        })
        } else if (key === "id") {
                return this.array[0].attributes.id.value;
        } else if (key === "class") {
            return this.array[0].attributes.class.value;
        } else if(key){
            return this.array[0].attributes[`${key}`];  
        }
    }

    addClass(input) {
        this.array.forEach(element => {
            element.attributes.class.value += ` ${input}`;
        })
    }

    removeClass(input){
        if (input){
            this.array.forEach( element => {
                let memo = element.attributes.class.value.slice();
                if (memo.includes(input)){
                    memo = memo.split(" ");
                    for (let i = 0; i < memo.length; i++){
                        if (input === memo[i]){
                            memo[i] = "";
                        };
                    };
                    element.attributes.class.value = memo.join(" ");
                };
            });
        } else {
            this.attr("class", " ");
        }
    };

    allchildren (){
        let childrenArr = [];
        if (!this.children){
            return [];
        } else {
            this.children.forEach( child => {
                childrenArr = childrenArr.push(child.allChildren())
            })
        }
        return childrenArr;
    }

    parseChildren(array) {
        for (let i = 0; i < array.length; i++){
            if (typeof array[i] === "object"){
                let keys = Object.keys(array[i]);
            }
        }
    }

    children(){
        let childrenArr = this.allchildren()
        if (childrenArr.length){
            return new DomNodeCollection(childrenArr);
        }
    }
}

module.exports = DomNodeCollection;