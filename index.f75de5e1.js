"use strict";
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const tree = document.querySelector("#tree");
function createTree(element, data) {
    const ul = document.createElement("ul");
    for(const key in data){
        const li = document.createElement("li");
        li.textContent = key;
        if (Object.keys(data[key]).length > 0) createTree(li, data[key]);
        ul.append(li);
    }
    element.append(ul);
}
createTree(tree, food);

//# sourceMappingURL=index.f75de5e1.js.map