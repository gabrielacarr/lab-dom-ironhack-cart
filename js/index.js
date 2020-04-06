// ITERATION 1

function updateSubtotal(product) { 
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(" td.price > span").innerHTML;
  let quantity = product.querySelector(" td.quantity > input[type=number]").value;
  let value = price * quantity;
  let subtotal = product.querySelector(" td.subtotal > span").innerHTML = value;
  //return product.querySelector("#cart > tbody > tr > td.subtotal > span").innerHTML = value;
  return subtotal

  //... your code goes here


}



function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & 3
  //... your code goes here
  const multipleProduct = document.getElementsByClassName('product');
   let total = 0;

  for(i=0; i < multipleProduct.length; i++){
   let subtotal = updateSubtotal(multipleProduct[i])
    total += subtotal;
  }


  // ITERATION 3
  //... your code goes herec
  
  document.querySelector("#total-value > span").innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here



  if(event.target.className == 'btn btn-remove') {
    console.log("this deleteinefvnoed")


  }
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const Table = document.getElementsByTagName('table')[0];
});
