// //ITERATION ONE W NOTATIONS

// function calPrice() {
 
//   let arrOfProducts = document.querySelectorAll(".product");
//   let total = 0;
//   for (i = 0; i < arrOfProducts.length; i++) {
//     let price = arrOfProducts[i].querySelector(".price span").innerHTML; //get the price of the product
//     let quantity = arrOfProducts[i].querySelector(".quantity input").value; // get the quantity of that product 
//     let subtotal = price * quantity; // set the subtotal of te hproduct to the price * quantity
//     arrOfProducts[i].querySelector(".subtotal span").innerHTML = subtotal;
//     total += subtotal;


//     console.log('subtotal',subtotal);
//   }
//   console.log('total',total);
//   document.querySelector("#total-value span").innerHTML = total;
// }

// document.querySelector("#calculate").onclick = function (e) {
//   console.log("click");

//   calPrice();
// };


// //I2

// let array = [1,2,4,4,,5]

// //sum
// // need a for loop tot add them toget 
// const allProducts = document.document.querySelectorAll('.product') // get a NodeList (ie. array) od all the products
// letTotal = 0

// //we loop through all the products and the subtotal od each product tot he netRoalt 
// for(let subtoal of allProducts){
//     let subtoal = updateSubtotal(singleProduct);
//     nettoal == subtotal
// }
// document.querySelector('#total-value > span').innerHtml = nettoal // set the total cost 


// // 
// removeBottom = [...document.getElementsByClassName("btn btn-remove")];
// removeBottom.forEach((button )=>{
//     button.addEventListener("clinkc", removeProduct);
//     //button.oneclick = remove Product 
//     //wtf is a paretn fucking elementnjo
//     //why si it apleed 
//     //why did he mentioend "load" where is that 

// }
// )


//INTERATION ONE
function updateSubtotal(product) {
    console.log("Calculating subtotal, yey!");

    //... your code goes here
    //get the price of a product
    //.price is greater than span because span is inside of .price class
    let price = Number(product.querySelector(".price > span")).innerText);
    //get the quantity of that product 
    //.quantity is greater than input because input is inside of .quantity class
    let quantity = Number(product.querySelector(".quantity > input").value);
   
    let subtotal = product.querySelector(".subtotal > span");
    //setting the subtotal of the product to price * qauntitu
    subtotal.innerHTML = price * quantity; 
    return price * quantity
}

function calculateAll(){
    //code in the following two lines is added just for testing purposes
    //it runs when only iteration 1 is completed, at late point it can be removed
//we get the NodeList (i.e. array) of all the products 
    const allProduct = document.querySelectorAll(".product");
    console.log(allProduct);
    let nettotal =0;

    //we loop through all the products and add the subotal of each product to the netToal
    for (let singleProduct of allProduct){
        let subtotal = updateSubtotal(singleProduct) 
            nettotal += subtotal;
     
}
// set the total cost 
document.querySelector("#total-value > span").innerHTML = nettotal;
//end of test
}


//ITERATION FOUR
function removeproduct(event) {
    const target = event.currentTarget;
    console.log("The target in remove is:, target");
    //...your code goes here
    target.parentElement.parentElement.remove();
    calculateAll();
}

//ITERATION FIVE

function createProduct(){
    //...your code here
}

window.addEventListener("load, () => {
    const calculatePriceBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);


    //get all the elements that have class of btn-remove
    //////////////////////////////////
    // iterate over the HTML Collection and add an event listener to each of the buttons
  // event listener should triger removeProduct function
  let removeButtons = [...document.getElementsByClassName("btn btn-remove")];

  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
    // button.onclick = removeProduct
  });
