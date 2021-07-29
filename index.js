// cart quantity and total

// initial variables
let itemOneQuantity = 0;
let itemTwoQuantity = 0;
let shippingFee = 19;
let bagPrice = 54.99;
let shoePrice = 74.99;

// set amount and buttons
const amount = document.querySelectorAll('.amount');
const buttons = document.querySelectorAll('.quantity-icon');
const shipping = document.querySelector('.shipping-cost');
const total = document.querySelector('.total-cost');

buttons.forEach((btn)=> {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    // Add/Subtract quantity
    if(styles.contains('decrease-item-1')) {
      itemOneQuantity--;
    }
    else if(styles.contains('decrease-item-2')) {
      itemTwoQuantity--;
    }
    else if(styles.contains('increase-item-1')) {
      itemOneQuantity++;
    }
    else if(styles.contains('increase-item-2')) {
      itemTwoQuantity++;
    }
    // No quantity less than 0
    if(itemOneQuantity < 0) {
      itemOneQuantity = 0;
    }
    if(itemTwoQuantity < 0) {
      itemTwoQuantity = 0;
    } 
    // Display quantities
    amount.forEach((item)=> {
      if(item.classList.contains('backbag')) {
        item.textContent = itemOneQuantity;
      }
      if(item.classList.contains('shoes')) {
        item.textContent = itemTwoQuantity;
      }
    // Display shipping
    if(itemOneQuantity || itemTwoQuantity) {
      shipping.textContent = shippingFee;
    }
    else if (!itemOneQuantity && !itemTwoQuantity) {
      shipping.textContent = 0;
    }
    // Display total 
    if(itemOneQuantity > 0 || itemTwoQuantity > 0) {
      total.textContent = parseFloat((bagPrice * itemOneQuantity) + (shoePrice * itemTwoQuantity) + shippingFee).toFixed(2);
    }
    else if(itemOneQuantity === 0 && itemTwoQuantity === 0) {
      total.textContent = 0;
    }

    })
  })
})

// submit form

// set button and find input values
const submit = document.querySelector('.submit-btn');
const input = document.querySelectorAll('.input');

submit.addEventListener('click', () => {
  const form = Array.from(input)
    .map((item) => {
      return item.value;
    })
    .every((item)=>item);
  
  if(form) {
    window.alert("Success")
  }
  else {
    window.alert("Please complete the form")
  }
})
