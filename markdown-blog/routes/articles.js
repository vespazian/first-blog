const express = require('express')
const router = express.Router()

router.get('/test', (req, res) =>{   
    res.send('In articles') //views//index.ejs
})

module.exports = router

/*
console.log('ceva')

let $i=1

while ($i<1000){
    
    
    if(Math.random() * 100==100){
        console.log('am ajuns la 100',$i );
        
    }
    $i++;
    console.log($i);
    
}


const arr = [1, 5, 8]

console.log(arr.indexOf(0), arr.indexOf(1))
const obj = {}
console.log(typeof obj)

const foo = new String('foo'); // Creates a String object
console.log(foo); // Displays: [String: 'foo']
console.log(typeof foo); // Returns 'object'

const $foo = 'foo'; // Creates a String object
console.log($foo); // Displays: [String: 'foo']
console.log(typeof $foo); // Returns 'object'

const foo2 = 'foo'; // Creates a String object
console.log(foo2); // Displays: [String: 'foo']
console.log(typeof foo2); // Returns 'object'

*/
/*

function calc(x){
    ++x; 
    (x = x -3) //&& x++;
    return x--
}

res=calc(2)
console.log(res)

*/

// let x = 2;
// console.log(++x);
// console.log(x++)
// console.log(x)
// console.log( (x = x -3) && x++)
// console.log( (x = x -3), x++)

/*
class Car {
    constructor(color, type, doors) {
       this.color = color;
       this.type = type;
       this.doors = doors
    }
 }
 
 const myCar = new Car('blue', 'sedan', '4');

 console.log(myCar);
 console.log(typeof myCar);

 const myPromise = new Promise(function(resolve, reject) {});
 console.log(myPromise);

 */
/*
 const myPromise = new Promise(function(resolve, reject) {
    resolve(10);
 });
 console.log(myPromise);
 */