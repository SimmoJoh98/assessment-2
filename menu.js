///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
const pizza = {
    "name": 'bruh',
    "price": 15,
    "category": 'wack',
    "popularity": 3,
    "rating": 2,
    "tags": ['cool', 'fire']
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza
console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let { category } = pizza 
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr = [
    {
        "name": 'bruh',
        "price": 15,
        "category": 'wack',
        "popularity": 3,
        "rating": 2,
        "tags": ['cool', 'fire']
    },
    {
        "name": 'bruh2',
        "price": 20,
        "category": 'wack2',
        "popularity": 4,
        "rating": 3,
        "tags": ['cool']
    },
    {
        "name": 'bruh3',
        "price": 25,
        "category": 'wack3',
        "popularity": 5,
        "rating": 4,
        "tags": ['cool', 'fire']
    },
    {
        "name": 'bruh4',
        "price": 30,
        "category": 'wack4',
        "popularity": 6,
        "rating": 5,
        "tags": ['cool']
    },
    {
        "name": 'bruh5',
        "price": 35,
        "category": 'wack5',
        "popularity": 7,
        "rating": 6,
        "tags": ['cool', 'fire']
    }
]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(obj => obj.tags.includes('fire'))



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/
//STUDENT NOTE: This is written in a pretty confusing fashion, in my opinion. Or, I'm just the most dumb person on earth. I honestly don't know after this lol. I'm just gonna leave this here, I guess. 

//CODE HERE
// function filterByProperty(obj,prop, num, type){
//     let filtered = []
//     switch(prop !== null){
//         case prop === 'rating':{
//             if(type === 'above' && obj.prop > num){
//                 filtered.push(obj)
//             }
//             else if(type === 'below' && obj.prop < num){
//                 filtered.push(obj)
//             }
//             break;
//         }
//         case prop === 'price':{
//             if(type === 'above' && obj.price > num){
//                 filtered.push(obj)
//             }
//             else if(type === 'below' && obj.price < num){
//                 filtered.push(obj)
//             }
//             break;
//         }
//     } 
//     return filtered
// }

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
// console.log(foodArr.filter(obj, filterByProperty('rating', 4, 'above')))

// Look, I know how to use callbacks, and the filter method. But I would've had an easier time, solving the da vinci code, than getting what was asked for in this question. How do we access from the filter method, the object getting passed in when the paramaters only take in prop, num, type? Down below I can access object properties with the dot notation just fine, however, when all we have is the callback FN in there, I can't access the properties, or at least don't know how. I've ran this in repl for like an hour and stared at documentation for just as long. That's all I've got.
foodArr.filter(obj => obj.price > 3)
foodArr.filter(obj => obj.rating < 4)
foodArr.filter(obj => obj.popularity === 2)
// foodArr.filter(obj => {
//     if(obj.price > 25 && obj.rating <= 4){
//         return obj
//     }
// })