/*let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza","running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: "went to work",
    "touched tree": "Touched a tree"
};*/

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);