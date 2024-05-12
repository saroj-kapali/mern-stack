const product =[
    {name: "product one", price : 1200, discount :10},
    {name: "product two", price : 1200, discount :20},{name: "product three", price : 1200, discount :30}
]
product[5]={name: "product 5", price : 1200, discount :20},{name: "product three", price : 1200, discount :30}


for(let i in product){
    {
        console.log("this is for the total price for ",product[i].name)
        console.log("product name", product[i].name)
        console.log("product price", product[i].price)
        console.log("product discount", product[i].discount)
        var total_price =product[i].price -product[i].price *product[i].discount/100
        console.log("total price after discount ",total_price)
        console.log()
}
}

console.log("donda")
for(let elem of product){
    if(elem)
    {
        console.log("this is for the total price for ",elem.name)
        console.log("product name", elem.name)
        console.log("product price", elem.price)
        console.log("product discount", elem.discount)
        var total_price =elem.price -elem.price *elem.discount/100
        console.log("total price after discount ",total_price)
        console.log()
}
}




//create an array of students having name, email, marks as an object data
//store atleast 10 students data on that array
//consider 500 total score 
//print each student's percentage and division
//>=80 =distinction, >=60 first ,>=45 second, >=35 third ,else fail


const student =[
    {name:"bikah", email:"bikas@gam.com", marks:480},
    {name:"cikah", email:"cikafds@gam.com", marks:380},
    {name:"rikah", email:"bikdfas@gam.com", marks:490},
    {name:"kikah", email:"bikadfs@gam.com", marks:280},
    {name:"iikah", email:"bikas@gam.com", marks:430},
    {name:"kikah", email:"bikdfas@gam.com", marks:380},
    {name:"idkah", email:"bikadfs@gam.com", marks:399},
    {name:"bifdkah", email:"bidfkas@gam.com", marks:420},
    {name:"bidfdkah", email:"bidfkas@gam.com", marks:10},
]

for(i of student){
    console.log("this for the percentage and division ",i.name)
    var percentage = i.marks/500*100
    console.log("percentage =",percentage)
    if(percentage>=80){
        console.log("distinction")
    }
    else if(percentage>=60){
        console.log("second")
    }
    else if(percentage>=45){
        console.log("third")
    }
    else
        console.log("better luck next time")
    console.log()
}