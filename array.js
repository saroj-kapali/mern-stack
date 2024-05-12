let array_object = [];

let array_object1 = 
    {
    name: "xps",
    price:"1000",
    brand: "dell",
    category: "laptop"
    };
array_object.push(array_object1);

array_object.push(
    {
        name: "watch",
        price: "300",
        brand: "latest",
        category: "accessories"
    },
    {
        name: "camera",
        price: "700",
        brand: "Canon",
        category: "electronics"
    }
);

console.log(array_object);

let data = [1,2,3,'saroj', true , false , {}, ()=>{},null];