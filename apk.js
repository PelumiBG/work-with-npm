
export let list = [30,40,4,67];
// const total = list.reduce((acc,cur) => acc + cur)
list.forEach((item,index,arr) => {arr[index] = item*2})
// console.log(total)
console.log(list);

export let students = {
    name: "John",
    age: 20,
    introduce: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};