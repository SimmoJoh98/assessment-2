///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((x,y) => x + y.price, 0)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return(
        (cartTotal * tax + cartTotal) - couponValue
    )
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    As for my answers below, I honestly believe the data types, to me at least, are self explanatory. Information contained in strings can be filtered out later from the rest of the string to pull out the numerical value more easily for things such as a unit number, or a street number, while maintaining the rest of the information like the names of streets. For the payment information, to just make it easier on myself, I had the card number be a string, so I could just split the information recieved in the form with          .split(' ').  Which I can just take numbers out of.
    a customer will have the following properties:
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    - First name - String
    - Last name (I'm skipping the middle name if applicable) - String
    - Address - String
    - Card Number - String
    - CCV - Number
    - Items In Cart - Number
    - Total due (after tax) - Number
    - Total due (before tax) - Number
    - State - String
    - Tax - number
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    "firstName": 'Foo',
    "lastName": 'Bar',
    "Address": '123 Foo Lane',
    "cardNumber": '1234 5678 9101 1121',
    "CCV": 564,
    "cartItems": 5, 
    "totalAfterTax": 107, 
    "totalBeforeTax": 100,
    "State": 'UT',
    "Tax": .07
}